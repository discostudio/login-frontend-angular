import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  providers: [
    LoginService
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss'
})
export class UserComponent {

  constructor(private loginService: LoginService) {}

  doLogoff() {
    
    this.loginService.logoff()
    //.subscribe({
    //  next: () => this.toastrService.success("Login realizado com sucesso!"),
    //  error: () => this.toastrService.error("Erro ao relizar o login! Tente novamente mais tarde.")
    //})
    console.log("do logoff")
    //this.onSubmit.emit()
  }
}
