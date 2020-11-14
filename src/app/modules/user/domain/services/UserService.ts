import { Injectable } from '@angular/core';
import * as faker from 'faker';
import { User } from 'src/app/modules/user/domain/interfaces/User';
import { utc } from 'moment';

@Injectable()
export class UserService {
  public async load(): Promise<User[]> {
    await new Promise((res) => setTimeout(res, 2000));
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
