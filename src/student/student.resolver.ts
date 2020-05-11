import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateStudentInput } from './create-student.input';
import { StudentService } from './student.service';
import { StudentType } from './student.type';

@Resolver(of => StudentType)
export class StudentResolver {

  constructor(private studentService: StudentService) {
  }

  @Mutation(returns => StudentType)
  async createStudent(@Args() createStudentInput: CreateStudentInput) {
    return this.studentService.createStudent(createStudentInput);
  }

  @Query(returns => StudentType)
  student(@Args('id') id: string) {
    return this.studentService.getStudentById(id);
  }

  @Query(returns => [StudentType])
  students() {
    return this.studentService.getAllStudents();
  }
}
