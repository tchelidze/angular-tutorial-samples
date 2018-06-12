import { Component, OnInit, Output, EventEmitter } from '@angular/core';

let instances = 0;

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public id: number;
  public counter = 0;

  @Output()
  public counterIncreased: EventEmitter<number> = new EventEmitter<number>();

  constructor() {
    this.id = ++instances;
  }
  public onCounterIncrease = (): void => {
    ++this.counter;
    this.counterIncreased.emit(this.counter);
  }
}
