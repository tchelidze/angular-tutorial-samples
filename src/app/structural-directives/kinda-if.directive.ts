import {
  Input,
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appKindaIf]'
})
export class KindaIfDirective implements OnInit {
  public constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}

  @Input('appKindaIf')
  set condition(condition: boolean) {
    if (condition) {
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainerRef.clear();
    }
  }

  public ngOnInit(): void {
    console.log(this.templateRef);
    console.log(this.viewContainerRef);
  }
}
