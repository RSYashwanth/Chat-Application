import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatPopupComponent } from './chat-popup.component';

describe('ChatPopupComponent', () => {
  let component: ChatPopupComponent;
  let fixture: ComponentFixture<ChatPopupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatPopupComponent]
    });
    fixture = TestBed.createComponent(ChatPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
