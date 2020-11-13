import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListPage } from './user-list.component';

describe('UserListComponent', () => {
  let component: UsersListPage;
  let fixture: ComponentFixture<UsersListPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsersListPage],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
