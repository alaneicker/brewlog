import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedBeersComponent } from './recommended-beers.component';

describe('RecommendedBeersComponent', () => {
  let component: RecommendedBeersComponent;
  let fixture: ComponentFixture<RecommendedBeersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecommendedBeersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecommendedBeersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
