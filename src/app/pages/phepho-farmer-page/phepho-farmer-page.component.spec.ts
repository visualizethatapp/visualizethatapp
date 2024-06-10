import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhephoFarmerPageComponent } from './phepho-farmer-page.component';

describe('PhephoFarmerPageComponent', () => {
  let component: PhephoFarmerPageComponent;
  let fixture: ComponentFixture<PhephoFarmerPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PhephoFarmerPageComponent]
    });
    fixture = TestBed.createComponent(PhephoFarmerPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
