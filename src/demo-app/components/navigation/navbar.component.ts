import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { navigationLinks } from '../../common/navigation-links';
import { MdcTemporaryDrawerComponent } from '@angular-mdc/web';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  navLinks = navigationLinks;
  @ViewChild('drawer') drawer: MdcTemporaryDrawerComponent;

  constructor(public router: Router) { }

  handleMenuClick() {
    if (!this.drawer.isOpen()) {
      this.drawer.open();
    } else {
      this.drawer.close();
    }
  }
}
