import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { LessonModule } from './lesson/lesson.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Lesson } from './lesson/lesson.entity';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.type';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    LessonModule,
    TypeOrmModule.forRoot({
      type: 'mongodb',
      url: `mongodb+srv://admin:admin@fullstack-n3jls.mongodb.net/test?retryWrites=true&w=majority`,
      synchronize: true,
      useUnifiedTopology: true,
      entities: [Lesson, Student],
    }),
    StudentModule,

  ],
})
export class AppModule {
}
