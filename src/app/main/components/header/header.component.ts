import { Component } from '@angular/core';
import { AuthUserService } from 'src/app/core/services/auth-user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public userName: string | null = null;

  constructor(private authUserService: AuthUserService) {
    this.userName = this.authUserService.getUserName();
  }

  logout() {
    this.authUserService.logOut();
  }
}
