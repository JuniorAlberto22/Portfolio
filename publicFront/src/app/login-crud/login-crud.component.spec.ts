import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCrudComponent } from './login-crud.component';

describe('LoginCrudComponent', () => {
  let component: LoginCrudComponent;
  let fixture: ComponentFixture<LoginCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
