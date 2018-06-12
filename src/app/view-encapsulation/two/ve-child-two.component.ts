import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-ve-child-two',
  encapsulation: ViewEncapsulation.Native,
  styles: [
    `
  .example-two {
    background: #9f72e6;
    font-size: 19px;
    color: #fff;
    margin-botton: 10px;
    padding: 5px 7px;
  },
  .example-one {
    border: 3px solid #808080;
    font-size: 14px;
    color: #33FF96;
    padding: 5px 7px
  }
  `
  ],
  template: `
  <div class="example-two">
        Example two
  </div>
  <div class="example-one">
        Example One
  </div>
  `
})
export class VeChildTwoComponent {}
