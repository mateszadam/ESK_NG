import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import da from './data.json';
@Component({
  selector: 'app-meccsek',
  imports: [],
  templateUrl: './meccsek.component.html',
  styleUrl: './meccsek.component.css',
})
export class MeccsekComponent {
  data = da;
}
