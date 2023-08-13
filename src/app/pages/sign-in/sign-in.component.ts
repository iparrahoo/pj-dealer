import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  public isRegistration: boolean = false;

  /**
   * Change the password visibility on click.
   * @param event Event to obtain the button element.
   */
  public showHidePassword(event: MouseEvent): void {
    const button = event.target as HTMLButtonElement;
    const passwordTextbox = button.previousElementSibling as HTMLInputElement;

    if (button.classList.contains('pj-password-show')) {
      button.classList.remove('pj-password-show');
      passwordTextbox.setAttribute('type', 'password');
      return;
    }

    button.classList.add('pj-password-show');
    passwordTextbox.setAttribute('type', 'text');
  }

  public showHideRegistrationForm(isRegistration: boolean): void {
    this.isRegistration = isRegistration;
    const mainContainer = document.getElementsByClassName('main-container').item(0);
    if (mainContainer) mainContainer.scrollTo(0, 0);

    if (isRegistration) {
      const txtFirstName = document.getElementById('firstName');
      if (isRegistration && txtFirstName) txtFirstName.focus();
    }
    else {
      const txtSignInNid = document.getElementById('siNid');
      if (txtSignInNid) txtSignInNid.focus();
    }
  }

}
