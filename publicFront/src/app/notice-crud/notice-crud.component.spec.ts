import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticeCrudComponent } from './notice-crud.component';

describe('NoticeCrudComponent', () => {
  let component: NoticeCrudComponent;
  let fixture: ComponentFixture<NoticeCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticeCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticeCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
