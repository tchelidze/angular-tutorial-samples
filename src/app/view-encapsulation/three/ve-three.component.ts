import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-child-three',
  encapsulation: ViewEncapsulation.None,
  template: `
    <div class="example-three">
      Example three
    </div>
    <div class="example-one">
       Example One !
    </div>
  `,
  styles: [
    `
     .example-one {
          border: 4px solid green;
     }
    `
  ]
})
export class VeChildThreeComponent {}
