import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFenceComponent } from './geo-fence.component';

describe('GeoFenceComponent', () => {
  let component: GeoFenceComponent;
  let fixture: ComponentFixture<GeoFenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeoFenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
