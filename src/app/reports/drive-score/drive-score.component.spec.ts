import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveScoreComponent } from './drive-score.component';

describe('DriveScoreComponent', () => {
  let component: DriveScoreComponent;
  let fixture: ComponentFixture<DriveScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
