import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/modules/autentication/services/auth.service';

@Component({
  selector: 'app-bootstrap-sidemenu',
  templateUrl: './bootstrap-sidemenu.component.html',
  styleUrls: ['./bootstrap-sidemenu.component.css']
})
export class BootstrapSidemenuComponent implements OnInit {

  constructor(
    private authService:      AuthService,
  ) { }

  ngOnInit(): void {
  }

  logout(){
    this.authService.toLogOut();
  }
}
