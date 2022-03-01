import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { People } from './addressbook/model/people.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent {
  title = 'People Application';
}

