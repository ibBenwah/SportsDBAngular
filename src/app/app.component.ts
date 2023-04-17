import { Component, Injectable, Output } from '@angular/core';
import { League } from './interfaces/league'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
@Injectable()
export class AppComponent {
  currentUserId: String | undefined = ''; 
  userName: string | undefined = '';
  @Output() user: League = {} as League;
  title = 'Sports DB';


 
   
}
