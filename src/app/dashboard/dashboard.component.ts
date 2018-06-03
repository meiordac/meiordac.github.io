import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  image = '/assets/person.png';
  cards = [
    {
      title: 'My Story',
      cols: 2,
      rows: 1,
      content: `
      I am currently living in Germany.
      I studied a B.Sc. in Engineering at Pontificia Universidad Católica de Chile
      which was ranked best university in Latin America according to QS Ranking (2014).
      This program is recognized by ABET as being substantially equivalent to Computer Engineering.
      Later I studied a M.Sc. in Engineering where I Graduated with honors from the same university.
      I have experience working in different projects developing new software solutions.
      I work mainly with .NET, JavaScript, SQL, Python, Ruby, etc.
      I spend my free time travelling and studying German.`
    }
  ];
}
