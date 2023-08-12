import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  /**
   * Open navbar for responsive view.
   */
  public openNavbar(): void {
    document.body.classList.add('pj-focus');
  }

}
