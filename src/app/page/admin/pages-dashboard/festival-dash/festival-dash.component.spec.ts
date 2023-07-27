import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FestivalDashComponent } from './festival-dash.component';

describe('FestivalDashComponent', () => {
  let component: FestivalDashComponent;
  let fixture: ComponentFixture<FestivalDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FestivalDashComponent]
    });
    fixture = TestBed.createComponent(FestivalDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
