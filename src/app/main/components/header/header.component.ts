import { Component } from '@angular/core';
import { AuthUserService } from 'src/app/core/services/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authUserService: AuthUserService) {}

  logout() {
    this.authUserService.logOut();
  }
}
