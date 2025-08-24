import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-csapat',
  imports: [IonIcon],
  templateUrl: './csapat.component.html',
  styleUrl: './csapat.component.css',
})
export class CsapatComponent {
  up = () => {
    const element = document.getElementById('fel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
}
