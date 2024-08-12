import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OptionsPopupComponent } from './options-popup.component';

describe('OptionsPopupComponent', () => {
  let component: OptionsPopupComponent;
  let fixture: ComponentFixture<OptionsPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OptionsPopupComponent]
    });
    fixture = TestBed.createComponent(OptionsPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
