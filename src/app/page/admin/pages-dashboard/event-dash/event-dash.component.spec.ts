import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventDashComponent } from './event-dash.component';

describe('EventDashComponent', () => {
  let component: EventDashComponent;
  let fixture: ComponentFixture<EventDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EventDashComponent]
    });
    fixture = TestBed.createComponent(EventDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
