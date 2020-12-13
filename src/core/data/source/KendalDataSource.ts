import { Kendal } from '../../domain/entities/Kendal'
export abstract class KendalDataSource {
  abstract create(kendal: Kendal): Promise<Kendal>
  abstract deleteById(id: string): Promise<string>
  abstract update(kendal: Kendal): Promise<string>
  abstract findAll(): Promise<Kendal[]>
}
