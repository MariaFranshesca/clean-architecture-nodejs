import { ClassKendalDto } from '../../entities/dto/kendal.dto';
import { IKendal } from '../../entities/interfaces/kendal.interfaces';

export abstract class KendalRepository {
  abstract create(createKendalDto: ClassKendalDto): Promise<IKendal>;
  abstract deleteById(id: string): Promise<string>;
  abstract update(id: string, updateKendalDto: ClassKendalDto): Promise<string>;
  abstract findAll(): Promise<IKendal[]>;
}
