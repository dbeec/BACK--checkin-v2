import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { DocumentTypesModule } from './document-types/document-types.module';
import { StatusModule } from './status/status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'db_checkin',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    RolesModule,
    AuthModule,
    DocumentTypesModule,
    StatusModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
