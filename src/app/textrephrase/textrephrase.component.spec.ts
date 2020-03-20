import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextrephraseComponent } from './textrephrase.component';

describe('TextrephraseComponent', () => {
  let component: TextrephraseComponent;
  let fixture: ComponentFixture<TextrephraseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextrephraseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextrephraseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
