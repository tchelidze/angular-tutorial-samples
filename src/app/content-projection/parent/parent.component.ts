import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  constructor() {}

  public counterIncreased = (counter): void => {
    console.log('counter increased : ', counter);
  }
}
