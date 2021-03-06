import { Module } from '@nestjs/common';
import { StudentService } from './student.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentResolver } from './student.resolver';
import { Student } from './student.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Student]),
  ],
  providers: [
    StudentResolver,
    StudentService,
  ],
  exports: [StudentService],
})
export class StudentModule {
}
