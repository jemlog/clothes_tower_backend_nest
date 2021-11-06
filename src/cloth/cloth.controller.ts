import { UpdateClothDto } from './dto/updateCloth.dto';
import { CreateClothDto } from './dto/createCloth.dto';
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
  Req,
  Res,
  SetMetadata,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ClothService } from './cloth.service';
import { RolesGuard } from 'src/middleware/roles.guard';
import { Roles } from 'src/decorator/roles.decorator';
import { LoggingInterceptor } from 'src/interceptor/logging.interceptor';
import { TransformInterceptor } from 'src/interceptor/transform.interceptor';
import { FileInterceptor } from '@nestjs/platform-express';
import { Cloth } from 'src/cloth/domain/cloth.entity';
import * as multerS3 from 'multer-s3';
import * as AWS from 'aws-sdk';
import { S3 } from 'aws-sdk';
import { request } from 'http';
import * as dotenv from 'dotenv';
import {
  ApiCreatedResponse,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
dotenv.config();

@ApiTags('cloth')
@Controller('cloth')
// @UseGuards(RolesGuard)
@UseInterceptors(LoggingInterceptor)
export class ClothController {
  constructor(private readonly clothService: ClothService) {}

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Clothes are successfully found',
  })
  @UseInterceptors(TransformInterceptor)
  getAllClothes() {
    return this.clothService.getAllClothes();
  }

  @Get(':id')
  @ApiResponse({
    status: 200,
    description: `cloth is successfully found`,
  })
  getClothById(@Param('id') id: string) {
    return this.clothService.getClothById(id);
  }

  @ApiCreatedResponse({ description: 'success' })
  @Post('/search')
  getMatchClothes(@Body() createClothDto: CreateClothDto): Promise<Cloth[]> {
    return this.clothService.getMatchClothes(createClothDto);
  }

  @Post('/upload')
  async uploadFile(@Req() request, @Res() response) {
    try {
      await this.clothService.uploadFile(request, response);
    } catch (error) {
      return response.status(500).json({ message: 'fail' });
    }
  }

  @ApiCreatedResponse({
    description: 'cloth is successfully created',
    type: [Cloth],
  })
  @Post()
  @Roles('admin')
  @UsePipes(ValidationPipe)
  createCloth(@Body() createClothDto: CreateClothDto) {
    return this.clothService.createCloth(createClothDto);
  }

  @Put(':id')
  updateCloth(@Param('id') id: string, @Body() updateClothDto: UpdateClothDto) {
    return this.clothService.updateCloth(id, updateClothDto);
  }

  @Delete(':id')
  deleteCloth(@Param('id') id: string) {
    return this.clothService.deleteCloth(id);
  }
}
