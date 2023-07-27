import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactDashComponent } from './contact-dash.component';

describe('ContactDashComponent', () => {
  let component: ContactDashComponent;
  let fixture: ComponentFixture<ContactDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactDashComponent]
    });
    fixture = TestBed.createComponent(ContactDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
