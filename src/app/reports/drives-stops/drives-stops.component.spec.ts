import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrivesStopsComponent } from './drives-stops.component';

describe('DrivesStopsComponent', () => {
  let component: DrivesStopsComponent;
  let fixture: ComponentFixture<DrivesStopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrivesStopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrivesStopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
