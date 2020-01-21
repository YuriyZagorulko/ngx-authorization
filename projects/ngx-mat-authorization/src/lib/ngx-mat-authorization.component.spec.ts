import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxMatAuthorizationComponent } from './ngx-mat-authorization.component';

describe('NgxMatAuthorizationComponent', () => {
  let component: NgxMatAuthorizationComponent;
  let fixture: ComponentFixture<NgxMatAuthorizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxMatAuthorizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxMatAuthorizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
