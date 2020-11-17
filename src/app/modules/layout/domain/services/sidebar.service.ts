import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidebarService {
  public sub: Subject<boolean>;

  constructor() {
    this.sub = new Subject();
  }

  public open() {
    this.sub.next(true);
  }

  public close() {
    this.sub.next(false);
  }
}
