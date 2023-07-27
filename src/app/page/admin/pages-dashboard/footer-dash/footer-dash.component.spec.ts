import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterDashComponent } from './footer-dash.component';

describe('FooterDashComponent', () => {
  let component: FooterDashComponent;
  let fixture: ComponentFixture<FooterDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooterDashComponent]
    });
    fixture = TestBed.createComponent(FooterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
