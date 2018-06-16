import { Component } from '@angular/core';
import { PersonModel } from './models/person.model';
import { NgForDataModel } from './models/ngForDataModel';

@Component({
  selector: 'app-basics',
  templateUrl: './basics.app.component.html',
  styleUrls: ['./basics.app.component.scss']
})
export class BasicsAppComponent {
  public name: string;

  // Hah, open closed principle :(
  public showNgForDemo = true;
  public showNgIfDemo = false;
  public showBindingsDemo = false;

  public bindings: any = {
    fieldOne: null,
    bindFromInput: value => {
      this.bindings.fieldOne = value;
    }
  };

  public ngForData: NgForDataModel = {
    personCollection: [
      {
        id: 1,
        name: 'Bitchiko',
        employed: true
      },
      {
        id: 2,
        name: 'Chichiko',
        employed: false
      },
      {
        id: 3,
        name: 'Avtovich',
        employed: true
      }
    ]
  };

  public logTemplateVariableValue(value: string): void {
    console.log(`template variable value : ${value}`);
  }
}
