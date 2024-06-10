import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutSnippetComponent } from './about-snippet.component';

describe('AboutSnippetComponent', () => {
  let component: AboutSnippetComponent;
  let fixture: ComponentFixture<AboutSnippetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutSnippetComponent]
    });
    fixture = TestBed.createComponent(AboutSnippetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
