import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoneInOutComponent } from './zone-in-out.component';

describe('ZoneInOutComponent', () => {
  let component: ZoneInOutComponent;
  let fixture: ComponentFixture<ZoneInOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZoneInOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoneInOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
