import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { utc } from 'moment';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Department } from '../interfaces/Department';

@Injectable()
export class DepartmentsService {
  constructor() {}

  public load(): Observable<Department[]> {
    return of(this.generateDepartments(10, 0)).pipe(delay(2000));
  }

  private generateDepartments(count: number, nesting: number): Department[] {
    return Array(count)
      .fill(undefined)
      .map(() => ({
        id: faker.random.uuid(),
        name: faker.name.jobArea(),
        createdAt: faker.random.boolean()
          ? utc(faker.date.past()).calendar()
          : undefined,
        children:
          nesting < 4
            ? this.generateDepartments(
                faker.random.number({ min: 0, max: 4 }),
                nesting + 1
              )
            : [],
      }));
  }
}
