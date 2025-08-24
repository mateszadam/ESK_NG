import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-index',
  imports: [IonIcon],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  myIndex: number = 0;

  ngOnInit() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();
    const ma = new Date(yyyy + '-' + mm + '-' + dd);

    const dátum = [
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

    const óra = [
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

    const csapatok = [
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

    var i = 0;
    var i = 0;
    for (let x in dátum) {
      var a = new Date(dátum[x]);
      const kép_dátum = Number(a);
      if (kép_dátum >= Number(ma)) {
        const demoElem = document.getElementById('demo');
        if (demoElem) {
          demoElem.innerText = csapatok[i];
        }
        const demo2Elem = document.getElementById('demo2');
        if (demo2Elem) {
          demo2Elem.innerText =
            dátum[i].replace('-', '. ').replace('-', '. ') + '.' + ' ' + óra[i];
        }
        break;
      }
      i++;
    }
    this.carousel();
  }

  carousel(): void {
    let x = document.getElementsByClassName('mySlides');
    for (let i = 0; i < x.length; i++) {
      (x[i] as HTMLElement).style.display = 'none';
    }
    this.myIndex++;
    if (this.myIndex > x.length) {
      this.myIndex = 1;
    }
    (x[this.myIndex - 1] as HTMLElement).style.display = 'block';
    console.log(document.body.offsetWidth);
    setTimeout(() => this.carousel(), 2000); // Change image every 2 seconds
  }
}
