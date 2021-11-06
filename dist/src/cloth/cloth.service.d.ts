/// <reference types="qs" />
/// <reference types="express" />
import { UpdateClothDto } from './dto/updateCloth.dto';
import { CreateClothDto } from './dto/createCloth.dto';
import { Cloth } from 'src/cloth/domain/cloth.entity';
import { Connection, Repository } from 'typeorm';
export declare class ClothService {
    private readonly clothRepository;
    private connection;
    constructor(clothRepository: Repository<Cloth>, connection: Connection);
    uploadFile(req: any, res: any): Promise<void>;
    upload: import("express").RequestHandler<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>;
    getAllClothes(): Promise<Cloth[]>;
    getClothById(id: string): Promise<Cloth>;
    createCloth(cloth: CreateClothDto): Promise<CreateClothDto>;
    updateCloth(id: string, user: UpdateClothDto): Promise<import("typeorm").UpdateResult>;
    deleteCloth(id: string): Promise<import("typeorm").DeleteResult>;
    getMatchClothes(cloth: CreateClothDto): Promise<Cloth[]>;
}
