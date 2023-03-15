import { Component, Injectable, Output } from '@angular/core';
import { User } from './interfaces'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  currentUserId: String | undefined = ''; 
  userName: string | undefined = '';
  @Output() user: User = {} as User;
  title = 'Sports DB';


  constructor(
    private _userService: UserServiceService,
    public auth: AuthService
  ){}
}
