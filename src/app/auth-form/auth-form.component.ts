import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  ContentChild,
  ContentChildren,
  QueryList,
  ViewChild,
  AfterViewInit,
  ViewChildren,
  ElementRef,
  Renderer
} from '@angular/core';
import { IUserModel } from './user.model';
import { AuthRememberComponent } from '../auth-remember/auth-remember.component';
import { AfterContentInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthMessageComponent } from '../auth-message/auth-message.component';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  @Output() public submitted = new EventEmitter<IUserModel>();

  public rememberMe = false;

  public isRememberMeChecked = false;

  public title = '[title here]';

  @ViewChild('emailElement') public emailElement: ElementRef;

  @ContentChild(AuthRememberComponent)
  public authRememberComponent: AuthRememberComponent;

  @ViewChild(AuthMessageComponent)
  public authMessageComponent: AuthMessageComponent;

  @ViewChildren(AuthMessageComponent)
  public authMessageComponents: QueryList<AuthMessageComponent>;

  public constructor(private renderer: Renderer) {}

  public ngAfterContentInit(): void {
    console.log(
      'ngAfterContentInit -> authMessageComponents ',
      this.authMessageComponents
    );
    console.log(
      'ngAfterContentInit -> authMessageComponent ',
      this.authMessageComponent
    );

    if (this.authMessageComponent) {
      this.authMessageComponent.days = 21;
    }
    if (this.authRememberComponent) {
      this.authRememberComponent.rememberMeChanged.subscribe((it: boolean) => {
        this.isRememberMeChecked = it;
      });
    }
  }

  public ngAfterViewInit(): void {
    console.log('ngAfterViewInit : ', this.authMessageComponents);
    this.renderer.setElementAttribute(
      this.emailElement.nativeElement,
      'placeholder',
      'Enter you email please !'
    );
    this.renderer.setElementClass(
      this.emailElement.nativeElement,
      'class22',
      true
    );
    this.renderer.invokeElementMethod(this.emailElement.nativeElement, 'focus');
    /*     this.emailElement.nativeElement.focus();
    this.emailElement.nativeElement.classList.add('class1'); */
  }

  public onSubmit(userModel: IUserModel): void {
    this.submitted.emit(userModel);
  }
}
