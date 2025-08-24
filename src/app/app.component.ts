import { Component } from '@angular/core';
import { RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, IonIcon, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ESK_NG';
  constructor() {}
  private today = new Date();
  private dd = String(this.today.getDate()).padStart(2, '0');
  private mm = String(this.today.getMonth() + 1).padStart(2, '0');
  private yyyy = this.today.getFullYear();
  private ma = new Date(this.yyyy + '-' + this.mm + '-' + this.dd);
  private txt = '';

  dátum = [
    '2025-08-09',
    '2025-08-17',
    '2025-08-23',
    '2025-08-31',
    '2025-09-07',
    '2025-09-14',
    '2025-09-20',
    '2025-09-28',
    '2025-10-04',
    '2025-10-12',
    '2025-10-19',
    '2025-10-25',
    '2025-11-02',
    '2025-11-09',
    '2026-03-14',
    '2026-03-22',
    '2026-03-28',
    '2026-04-05',
    '2026-04-11',
    '2026-04-19',
    '2026-04-25',
    '2026-05-03',
    '2026-05-09',
    '2026-05-17',
    '2026-05-24',
    '2026-05-30',
  ];

  óra = [
    '17:00',
    '18:30',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
    '16:00',
    '16:00',
    '16:00',
    '15:00',
    '14:00',
    '17:00',
    '14:00',
    '14:00',
    '15:00',
    '16:00',
    '16:00',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
    '17:00',
  ];

  csapatok = [
    'FERTŐSZENTMIKLÓS SE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - ÜSTÖKÖS FC BÁCSA',
    'CREDOBUS MOSONMAGYARÓVÁR - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - VITNYÉD SE',
    'KORONCÓ KSSZE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - ABDA SC VVFK-BAU',
    'GYŐRÚJFALU SE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - GYŐRÚJBARÁT SE',
    'MEZŐÖRS KSE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - KAPUVÁRI SE',
    'GYIRMÓT FC GYŐR II. - ESK MÉNFŐCSANAK',
    'CSORNAI SE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - WIESBAUER-GÖNYŰ SE',
    'ESK MÉNFŐCSANAK - FERTŐSZENTMIKLÓS SE',
    'ÜSTÖKÖS FC BÁCSA - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - CREDOBUS MOSONMAGYARÓVÁR',
    'VITNYÉD SE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - KORONCÓ KSSZE',
    'ABDA SC VVFK-BAU - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - GYŐRÚJFALU SE',
    'GYŐRÚJBARÁT SE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - MEZŐÖRS KSE',
    'KAPUVÁRI SE - ESK MÉNFŐCSANAK',
    'ESK MÉNFŐCSANAK - GYIRMÓT FC GYŐR II.',
    'ESK MÉNFŐCSANAK - CSORNAI SE',
    'WIESBAUER-GÖNYŰ SE - ESK MÉNFŐCSANAK',
  ];

  hideTopNavIfWideScreen() {
    if (window.innerWidth > 1024) {
      const topnav = document.querySelector('.topnav') as HTMLElement;
      if (topnav) {
        topnav.style.display = 'none';
      }
    } else {
      const topnav = document.querySelector('.topnav') as HTMLElement;
      if (topnav) {
        topnav.style.display = 'block';
      }
    }
  }

  ngOnInit() {
    window.addEventListener('resize', this.hideTopNavIfWideScreen.bind(this));
    this.hideTopNavIfWideScreen();
  }

  // var i = 0;
  // for (let x in dátum) {
  // 	var a = new Date(dátum[x]);
  // 	var kép_dátum = Number(a);
  // 	if (kép_dátum >= Number(ma)) {
  // 		document.getElementById('demo').innerText = csapatok[i];
  // 		document.getElementById('demo2').innerText =
  // 			dátum[i].replace('-', '. ').replace('-', '. ') + '.' + ' ' + óra[i];
  // 		break;
  // 	}
  // 	i++;
  // }
  // function bezár() {
  // 	document.getElementById('külső').style.display = 'none';
  // }
}
