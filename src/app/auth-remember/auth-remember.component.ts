import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth-remember',
  templateUrl: './auth-remember.component.html',
  styleUrls: ['./auth-remember.component.css']
})
export class AuthRememberComponent {
  constructor() {}

  @Output() public rememberMeChanged = new EventEmitter<boolean>();

  public onRememberMeChanged(value: boolean): void {
    this.rememberMeChanged.emit(value);
  }
}
