import { request } from 'http';
import { UpdateClothDto } from './dto/updateCloth.dto';
import { CreateClothDto } from './dto/createCloth.dto';
import { Injectable, NotFoundException, Req, Res } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Cloth } from 'src/cloth/domain/cloth.entity';
import { Connection, Not, Repository } from 'typeorm';
import * as AWS from 'aws-sdk';
import * as multer from 'multer';
import * as multerS3 from 'multer-s3';

// AWS S3 설정
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'ap-northeast-2',
});

@Injectable()
export class ClothService {
  constructor(
    @InjectRepository(Cloth)
    private readonly clothRepository: Repository<Cloth>,
    private connection: Connection,
  ) {}

  // 이미지 파일을 받아오면 S3의 버켓으로 전송하는 로직
  async uploadS3(file, bucket, name) {
    const s3 = new AWS.S3();
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
    };
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  // 옷장 안의 모든 옷 조회
  async getAllClothes(): Promise<Cloth[]> {
    const clothes = await this.clothRepository.find();
    return clothes;
  }

  // 옷 고유 아이디로 조회
  async getClothById(id: string): Promise<Cloth> {
    const result = await this.clothRepository.findOne(id);
    if (!result) {
      throw new NotFoundException(`id ${id} not found`);
    }
    return result;
  }

  // 새로운 옷을 옷장에 추가
  async createCloth(cloth: CreateClothDto, file) {
    const { top_bottom, short_long, color, material } = cloth;
    const { originalname } = file;
    const bucketS3 = process.env.AWS_S3_BUCKET_NAME;

    try {
      // 클라이언트에서 보낸 formdata 내부의 이미지 파일을 가져오는 로직
      const file2: any = await this.uploadS3(
        file.buffer,
        bucketS3,
        originalname,
      );

      // 이미지 파일 외의 key ,value 쌍을 가져오는 로직
      const newCloth = this.clothRepository.create({
        top_bottom,
        short_long,
        color,
        material,
        image: 'default',
      });
      const cloth = await this.clothRepository.save(newCloth);
      return cloth;
    } catch (err) {
      console.log(err);
    }
  }

  // 기존의 옷 정보 수정
  async updateCloth(id: string, user: UpdateClothDto) {
    const result = await this.clothRepository.update(id, user);
    return result;
  }

  // 기존 옷 삭제
  async deleteCloth(id: string) {
    const result = await this.clothRepository.delete(id);
    return result;
  }

  // 원하는 조건을 검색해서 옷 정보를 조회
  async getMatchClothes(query: any) {
    const { top_bottom, short_long, color, material } = query;
    console.log('-----');
    try {
      const selectedClothes = await this.clothRepository.find({
        where: {
          top_bottom: top_bottom ? top_bottom : Not('null'),
          short_long: short_long ? short_long : Not('null'),
          color: color ? color : Not('null'),
          material: material ? material : Not('null'),
        },
        order: {
          id: 'ASC',
        },
      });
      return selectedClothes;
    } catch (error) {
      console.error(error);
      throw new NotFoundException('not found');
    }
  }
}
