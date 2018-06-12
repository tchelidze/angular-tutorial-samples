import {
  Component,
  OnInit,
  ContentChild,
  TemplateRef,
  AfterContentInit
} from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements AfterContentInit {
  constructor() {}

  public show = true;

  public show2 = true;

  @ContentChild(TemplateRef) public appcounterTemplate: TemplateRef<any>;
  @ContentChild(CounterComponent) public counterComponent: CounterComponent;

  public ngAfterContentInit(): void {
    console.log(this.counterComponent);
  }
}
