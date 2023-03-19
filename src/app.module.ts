import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrestamoModule } from './modules/prestamo/prestamo.module';
import { SucursalModule } from './modules/sucursal/sucursal.module';

@Module({
  imports: [SucursalModule, PrestamoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
