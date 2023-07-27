import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistesDashComponent } from './artistes-dash.component';

describe('ArtistesDashComponent', () => {
  let component: ArtistesDashComponent;
  let fixture: ComponentFixture<ArtistesDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArtistesDashComponent]
    });
    fixture = TestBed.createComponent(ArtistesDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
