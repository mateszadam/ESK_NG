import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import data from '../../../public/data.json';

@Component({
  selector: 'app-index',
  imports: [IonIcon],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
})
export class IndexComponent {
  myIndex: number = 0;

  ngOnInit() {
    // data is an array of match objects
    // Find the next match (date >= today)
    const today = new Date();
    const pad = (n: number) => String(n).padStart(2, '0');
    const yyyy = today.getFullYear();
    const mm = pad(today.getMonth() + 1);
    const dd = pad(today.getDate());
    const ma = new Date(`${yyyy}-${mm}-${dd}`);

    let nextMatch = null;
    for (const match of data) {
      // Parse date from "YYYY. MM. DD.HH:MM"
      const [datePart, timePart] = match.date.split('.');
      const dateStr = match.date
        .replace(/\./g, '-')
        .replace(/(\d{2})-(\d{2})-(\d{2,4})/, '$3-$2-$1');
      // Try to parse as "YYYY. MM. DD.HH:MM"
      const dateMatch = match.date.match(
        /(\d{4})\.\s*(\d{2})\.\s*(\d{2})\.(\d{2}):(\d{2})/
      );
      let matchDate: Date;
      if (dateMatch) {
        matchDate = new Date(
          Number(dateMatch[1]),
          Number(dateMatch[2]) - 1,
          Number(dateMatch[3]),
          Number(dateMatch[4]),
          Number(dateMatch[5])
        );
      } else {
        matchDate = new Date(match.date);
      }
      if (matchDate >= ma) {
        nextMatch = match;
        break;
      }
    }

    if (nextMatch) {
      const demoElem = document.getElementById('demo');
      if (demoElem) {
        demoElem.innerText = `${nextMatch.home_team} - ${nextMatch.away_team}`;
      }
      const demo2Elem = document.getElementById('demo2');
      if (demo2Elem) {
        demo2Elem.innerText = nextMatch.date;
      }
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
