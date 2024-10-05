import { CommonModule, DatePipe, LowerCasePipe, NgClass, NgStyle, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ReversePipe } from '../custom/reverse.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MatCardModule,
    UpperCasePipe,
    LowerCasePipe,
    DatePipe,
    ReversePipe,
    FormsModule,
    NgClass,
    NgStyle,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  title = 'Angular 18 Tutorial';
  subtitle = "Angular For Beginners";
  todaydate = new Date();
  isDisabled = true;
  _class = 'active';
  _color = 'orange';
  _font = '34';
  isShow = false;
  ticketInfo = [
    { 'id': 1, 'name': 'angular', color: 'green' },
    { 'id': 2, 'name': 'react', color: 'red' },
    { 'id': 3, 'name': 'vuejs', color: 'blue' },
  ]
  _view = ''

  changeTitle() {
    this.title = "Angular 18 Full Tutorial";
  }

  updateTitle(event: any) {
    this.title = event.target.value;
  }
}
