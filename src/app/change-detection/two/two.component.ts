import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-cd-two',
  changeDetection: ChangeDetectionStrategy.Default,
  templateUrl: './two.component.html'
})
export class CdTwoComponent {
  @Input('user') public user: any;

  public update(): void {
    this.user.name = 'Update from Component two';
  }
}
