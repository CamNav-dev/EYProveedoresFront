import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';


@NgModule({
  imports: [
    // El AppModule de tu aplicación debe ser importado primero.
    AppModule,
    // Importa ServerModule para soporte de renderizado del lado del servidor.
    ServerModule,
  ],
  // Asegúrate de incluir tu componente principal aquí.
  bootstrap: [AppComponent],
})
export class AppServerModule {}
