import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AuthFormComponent } from './auth-form/auth-form.component';
import { AuthRememberComponent } from './auth-remember/auth-remember.component';
import { AuthMessageComponent } from './auth-message/auth-message.component';
import { RandomNumberService } from './services/random-number.service';
import { ParentComponent } from './content-projection/parent/parent.component';
import { ChildComponent } from './content-projection/child/child.component';
import { CounterComponent } from './content-projection/counter/counter.component';
import { BlockContainerComponent } from './dynamic-components/block-container/block-container.component';
import { BlockComponent } from './dynamic-components/block/block.component';
import { SdDemoDirective } from './structural-directives/sd-demo.directive';
import { SdContainerComponent } from './structural-directives/sd-container/sd-container.component';
import { KindaIfDirective } from './structural-directives/kinda-if.directive';
import { RangeDirective } from './structural-directives/range.directive';
import { FirstPipePipe } from './pipes/first-pipe.pipe';
import { PipeDemoComponent } from './pipes/pipe-demo/pipe-demo.component';
import { NgTemplatesComponent } from './ng-templates/ng-templates.component';
import { VeParentComponent } from './view-encapsulation/ve-parent.component';
import { VeChildTwoComponent } from './view-encapsulation/two/ve-child-two.component';
import { VeChildThreeComponent } from './view-encapsulation/three/ve-three.component';
import { VeChildOneComponent } from './view-encapsulation/one/ve-child-one.component';
import { CdOneComponent } from './change-detection/one/cd-one.component';
import { CdTwoComponent } from './change-detection/two/two.component';
import { CdAppComponent } from './change-detection/cd-app.component';
import { BasicsAppComponent } from './basics/basics.app.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthFormComponent,
    AuthRememberComponent,
    AuthMessageComponent,
    BlockComponent,
    BlockContainerComponent,
    ParentComponent,
    ChildComponent,
    CounterComponent,
    SdDemoDirective,
    SdContainerComponent,
    KindaIfDirective,
    RangeDirective,
    FirstPipePipe,
    PipeDemoComponent,
    NgTemplatesComponent,
    VeParentComponent,
    VeChildTwoComponent,
    VeChildThreeComponent,
    VeChildOneComponent,
    CdOneComponent,
    CdTwoComponent,
    CdAppComponent,
    BasicsAppComponent
  ],
  imports: [BrowserModule, FormsModule, NgbModule],
  providers: [RandomNumberService],
  bootstrap: [BasicsAppComponent],
  entryComponents: [AuthFormComponent, BlockComponent]
})
export class AppModule {}
