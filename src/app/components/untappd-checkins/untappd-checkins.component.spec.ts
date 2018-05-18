import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UntappdCheckinsComponent } from './untappd-checkins.component';

describe('UntappdCheckinsComponent', () => {
  let component: UntappdCheckinsComponent;
  let fixture: ComponentFixture<UntappdCheckinsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UntappdCheckinsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UntappdCheckinsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
