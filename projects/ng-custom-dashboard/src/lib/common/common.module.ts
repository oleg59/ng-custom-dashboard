import { LocalStorageService } from './services/storage/local-storage.service';
import { NgModule } from '@angular/core';
import { StorageService } from './services/storage/storage.service';

@NgModule({
  providers: [{ provide: StorageService, useClass: LocalStorageService }],
})
export class NGCDCommonModule {}
