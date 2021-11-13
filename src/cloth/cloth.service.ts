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

  async getAllClothes(): Promise<Cloth[]> {
    // Find all clothes
    const clothes = await this.clothRepository.find();
    return clothes;
  }

  async getClothById(id: string): Promise<Cloth> {
    // Find clothes by id
    const result = await this.clothRepository.findOne(id);
    if (!result) {
      throw new NotFoundException(`id ${id} not found`);
    }
    return result;
  }

  async createCloth(cloth: CreateClothDto, file) {
    // create new clothes
    const { top_bottom, short_long, color, material } = cloth;
    const { originalname } = file;
    const bucketS3 = process.env.AWS_S3_BUCKET_NAME;

    try {
      const file2: any = await this.uploadS3(
        file.buffer,
        bucketS3,
        originalname,
      );

      const newCloth = this.clothRepository.create({
        top_bottom,
        short_long,
        color,
        material,
        image: file2.Location,
      });
      const cloth = await this.clothRepository.save(newCloth);
      return cloth;
    } catch (err) {
      console.log(err);
    }
  }

  async updateCloth(id: string, user: UpdateClothDto) {
    const result = await this.clothRepository.update(id, user);
    return result;
  }

  async deleteCloth(id: string) {
    const result = await this.clothRepository.delete(id);
    return result;
  }

  async getMatchClothes(cloth: CreateClothDto) {
    // search clothes by condition
    const { top_bottom, short_long, color, material } = cloth;
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
