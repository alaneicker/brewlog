import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreweryLocationMapsComponent } from './brewery-locations-map.component';

describe('BreweryLocationMapsComponent', () => {
  let component: BreweryLocationMapsComponent;
  let fixture: ComponentFixture<BreweryLocationMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreweryLocationMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreweryLocationMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
