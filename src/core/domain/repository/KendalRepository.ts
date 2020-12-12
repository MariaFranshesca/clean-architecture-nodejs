import { Kendal } from '../entities/Kendal'

export abstract class KendalRepository {
  abstract create(kendal: Kendal): Promise<Kendal>
  abstract deleteById(id: string): Promise<string>
  abstract update(kendal: Kendal): Promise<string>
  abstract findAll(): Promise<Kendal[]>
}
