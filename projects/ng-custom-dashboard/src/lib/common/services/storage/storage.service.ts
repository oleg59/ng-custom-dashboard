export abstract class StorageService {
  abstract getData<T>(key: string): T | null;
  abstract setData<T>(key: string, value: T): void;
}
