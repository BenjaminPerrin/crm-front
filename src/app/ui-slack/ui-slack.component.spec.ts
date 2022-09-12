import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiSlackComponent } from './ui-slack.component';

describe('UiSlackComponent', () => {
  let component: UiSlackComponent;
  let fixture: ComponentFixture<UiSlackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiSlackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UiSlackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
