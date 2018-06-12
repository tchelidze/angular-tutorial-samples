import {
  Component,
  ViewChild,
  ElementRef,
  ViewContainerRef,
  AfterContentInit,
  ComponentFactoryResolver,
  ComponentRef
} from '@angular/core';
import { log } from 'util';
import { AuthFormComponent } from './auth-form/auth-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  public title = 'app';

  public constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  @ViewChild('appAuthFormPlaceholder', { read: ViewContainerRef })
  public authFormPlaceHolder: ViewContainerRef;

  public authFormComponent: ComponentRef<AuthFormComponent>;

  public createUser(userModel): void {
    console.log('create account');
    console.log(userModel);
  }

  public loginUser(userModel): void {
    console.log('login user');
    console.log(userModel);
  }

  public rememberMeChecked(value): void {
    console.log('rememberMeChecked : ', value);
  }

  public destroyAuthFormComponent(): void {
    this.authFormComponent.destroy();
    this.authFormComponent = null;
  }

  public ngAfterContentInit(): void {
    const authFormComponentFactory = this.componentFactoryResolver.resolveComponentFactory(
      AuthFormComponent
    );
    this.authFormPlaceHolder.createComponent(authFormComponentFactory);
    this.authFormComponent = this.authFormPlaceHolder.createComponent(
      authFormComponentFactory,
      0
    );

    this.authFormComponent.instance.title = 'Create account';
    this.authFormComponent.instance.submitted.subscribe(it =>
      console.log('submitted 22')
    );
  }
}
