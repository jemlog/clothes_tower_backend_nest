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

// const s3 = new AWS.S3();
// AWS.config.update({
//   accessKeyId: process.env.AWS_ACCESS_KEY_ID,
//   secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
//   region: 'ap-northeast-2',
// });

@Injectable()
export class ClothService {
  constructor(
    @InjectRepository(Cloth)
    private readonly clothRepository: Repository<Cloth>,
    private connection: Connection,
  ) {}

  // async uploadFile(@Req() req, @Res() res) {
  //   try {
  //     this.upload(req, res, function (error) {
  //       if (error) {
  //         console.log(error);
  //         return res.status(404).json('fail to upload image');
  //       }
  //       return res.status(201).json(req.file.location);
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // upload = multer({
  //   storage: multerS3({
  //     s3: s3,
  //     bucket: process.env.AWS_S3_BUCKET_NAME,
  //     key: function (request, file, cb) {
  //       cb(null, `${Date.now().toString()}-${file.originalname}`);
  //     },
  //   }),
  // }).single('upload');

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

  async createCloth(cloth: CreateClothDto) {
    // create new clothes
    const { top_bottom, short_long, color, material } = cloth;

    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const newCloth = this.clothRepository.create({
        top_bottom,
        short_long,
        color,
        material,
      });
      const cloth = await queryRunner.manager.save(newCloth);
      await queryRunner.commitTransaction();
    } catch (err) {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
      return cloth;
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
