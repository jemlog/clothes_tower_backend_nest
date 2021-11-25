import { UpdateClothDto } from './dto/updateCloth.dto';
import { CreateClothDto } from './dto/createCloth.dto';
import { ClothService } from './cloth.service';
import { Cloth } from 'src/cloth/domain/cloth.entity';
export declare class ClothController {
    private readonly clothService;
    constructor(clothService: ClothService);
    getAllClothes(): Promise<Cloth[]>;
    getMatchClothes(myQuery: any): Promise<Cloth[]>;
    getClothById(id: string): Promise<Cloth>;
    createCloth(createClothDto: CreateClothDto): Promise<Cloth>;
    updateCloth(id: string, updateClothDto: UpdateClothDto): Promise<import("typeorm").UpdateResult>;
    deleteCloth(id: string): Promise<import("typeorm").DeleteResult>;
}
