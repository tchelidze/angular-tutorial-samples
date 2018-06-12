import {
  Input,
  Directive,
  TemplateRef,
  ViewContainerRef,
  OnInit
} from '@angular/core';

@Directive({
  selector: '[appRange]'
})
export class RangeDirective implements OnInit {
  constructor(
    private template: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  public range: number[];

  // tslint:disable-next-line:no-input-rename
  @Input('appRangeName') public name: string;

  @Input('appRange')
  public set rangeInput(value: number[]) {
    const start = value[0];
    const end = value[1] + 1;

    this.range = Array.from({ length: end - start }, (val, key) => key + start);

    this.range.forEach(num => {
      this.viewContainer.createEmbeddedView(this.template, {
        $implicit: num,
        num2: 12
      });
    });
  }

  public ngOnInit(): void {
    console.log(this.name);
  }
}
