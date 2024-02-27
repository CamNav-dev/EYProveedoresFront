import { enableProdMode } from '@angular/core';
import { environment } from '../environments/environment';
export { AppServerModule as default } from './app/app.server.module';
// En main.server.ts
export function bootstrap() {
    if (environment.production) {
        enableProdMode();
      }
  }

export { AppServerModule } from './app/app.server.module';
export { renderModule } from '@angular/platform-server';
