import { AfterContentInit } from '@angular/core';
import {
  Component,
  OnInit,
  ViewChild,
  ViewContainerRef,
  TemplateRef
} from '@angular/core';

@Component({
  selector: 'app-ng-templates',
  templateUrl: './ng-templates.component.html',
  styleUrls: ['./ng-templates.component.css']
})
export class NgTemplatesComponent implements AfterContentInit {
  constructor() {}

  @ViewChild('templatehost', { read: ViewContainerRef })
  public templateHost: ViewContainerRef;

  @ViewChild('tmpl') public tmpl: TemplateRef<any>;

  public templateContext: any = {
    surname: 'tchelosian',
    $implicit: 'bitchiko'
  };

  public ngAfterContentInit(): void {
    const ref = this.templateHost.createEmbeddedView(
      this.tmpl,
      this.templateContext
    );
  }
}
