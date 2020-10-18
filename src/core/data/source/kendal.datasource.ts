import { ClassKendalDto } from "../../domain/entities/dto/kendal.dto";
import { IKendal } from "../../domain/entities/interfaces/kendal.interfaces";

export abstract class KendalDataSource {
    abstract create(createKendalDto: ClassKendalDto): Promise<IKendal>
    abstract deleteById(id: string): Promise<string>
    abstract update(id: string, updateKendalDto: ClassKendalDto): Promise<string>
    abstract findAll(): Promise<IKendal[]>
  }