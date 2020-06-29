import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../shared/restapi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  message: any;

  constructor(private service: RestapiService, private router: Router) { }

  ngOnInit() {
  }

  doLogin() {
    const resp = this.service.login(this.username, this.password);
    resp.subscribe(data => {
      this.message = data;
      this.router.navigate(['/ajouter']);
    }, error => console.log(error),
    () => console.log('Successful authentication.')
    );
  }
}
