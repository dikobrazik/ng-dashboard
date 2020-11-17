import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Contact } from '../interfaces/Contact';

@Injectable()
export class ContactService {
  public create(contact: Contact): Observable<Contact> {
    return of(contact).pipe(delay(1000));
  }
}
