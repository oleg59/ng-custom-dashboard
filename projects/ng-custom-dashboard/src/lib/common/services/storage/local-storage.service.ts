import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class LocalStorageService extends StorageService {
  getData<T>(key: string): T | null {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  setData<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
