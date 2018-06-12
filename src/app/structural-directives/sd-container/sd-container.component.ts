import {
  Component,
  OnInit,
  AfterContentInit,
  ViewChild,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Component({
  selector: 'app-sd-container',
  templateUrl: './sd-container.component.html',
  styleUrls: ['./sd-container.component.css']
})
export class SdContainerComponent {
  constructor() {}
  public dummyCollection = [1, 2, 4, 1, 4];
  public show = true;
}
