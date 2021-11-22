import { UpdateClothDto } from './dto/updateCloth.dto';
import { CreateClothDto } from './dto/createCloth.dto';
import { Cloth } from 'src/cloth/domain/cloth.entity';
import { Connection, Repository } from 'typeorm';
export declare class ClothService {
    private readonly clothRepository;
    private connection;
    constructor(clothRepository: Repository<Cloth>, connection: Connection);
    uploadS3(file: any, bucket: any, name: any): Promise<unknown>;
    getAllClothes(): Promise<Cloth[]>;
    getClothById(id: string): Promise<Cloth>;
    createCloth(cloth: CreateClothDto, file: any): Promise<Cloth>;
    updateCloth(id: string, user: UpdateClothDto): Promise<import("typeorm").UpdateResult>;
    deleteCloth(id: string): Promise<import("typeorm").DeleteResult>;
    getMatchClothes(query: any): Promise<Cloth[]>;
}
