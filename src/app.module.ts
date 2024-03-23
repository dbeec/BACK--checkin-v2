import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DocumentTypesModule } from './document-types/document-types.module';

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
    UsersModule,
    DocumentTypesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
