import {
  Component,
  OnInit,
  ViewEncapsulation,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-block',
  templateUrl: './block.component.html',
  styleUrls: ['./block.component.css']
})
export class BlockComponent {
  constructor() {}

  public title: string;

  @Output() public click = new EventEmitter<string>();

  public onClick(): void {
    this.click.emit(this.title);
  }
}
