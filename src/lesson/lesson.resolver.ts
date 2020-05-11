import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';
import { Lesson } from './lesson.entity';
import { StudentService } from '../student/student.service';

@Resolver(of => LessonType)
export class LessonResolver {

  constructor(private lessonService: LessonService,
              private studentService: StudentService) {
  }

  @Query(returns => LessonType)
  lesson(
    @Args('id') id: string,
  ) {
    return this.lessonService.getLessonById(id);
  }

  @Query(returns => [LessonType])
  lessons() {
    return this.lessonService.getAllLessons();
  }

  @Mutation(returns => LessonType)
  createLesson(@Args('createLessonInput') createLessonInput: CreateLessonInput) {
    return this.lessonService.createLesson(createLessonInput);
  }

  @Mutation(returns => LessonType)
  assingStudentsToLesson(@Args('assingStudentsToLessonInput') assingStudentsToLessonInput: AssignStudentsToLessonInput) {
    const { lessonId, studentsId } = assingStudentsToLessonInput;
    return this.lessonService.assignStudentToLesson(lessonId, studentsId);
  }

  @ResolveField()
  async students(@Parent() lesson: Lesson) {
    return this.studentService.getManyStudents(lesson.students);
  }
}
