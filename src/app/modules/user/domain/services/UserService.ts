import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { utc } from 'moment';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { User } from 'src/app/modules/user/domain/interfaces/User';

@Injectable()
export class UserService {
  public load(): Observable<User[]> {
    return of(this.generateUsers()).pipe(delay(2000));
  }

  private generateUsers(): User[] {
    return Array(10)
      .fill(undefined)
      .map(
        () =>
          ({
            id: faker.random.uuid(),
            name: `${faker.name.lastName()} ${faker.name.firstName()}`,
            email: faker.internet.email(),
            company: faker.company.companyName(),
            role: ['Manager', 'CEO', 'Developer', 'Engineer', 'Designer'][
              faker.random.number({ min: 0, max: 4 })
            ],
            forecast: 10,
            lastActivityDate: utc(faker.date.past()).fromNow(),
          } as User)
      );
  }
}
