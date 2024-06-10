import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidszatravelPageComponent } from './kidszatravel-page.component';

describe('KidszatravelPageComponent', () => {
  let component: KidszatravelPageComponent;
  let fixture: ComponentFixture<KidszatravelPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidszatravelPageComponent]
    });
    fixture = TestBed.createComponent(KidszatravelPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
