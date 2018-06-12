import { Component } from '@angular/core';

@Component({
  selector: 'app-ve-parent',
  template: `
   <app-ve-child-one></app-ve-child-one>
   <hr/>
   <app-ve-child-two></app-ve-child-two>
   <hr/>
   <app-ve-child-three><app-ve-child-three>
   <hr/>
  `
})
export class VeParentComponent {}
