import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-range',
  templateUrl: './range.page.html',
  styleUrls: ['./range.page.scss'],
})
export class RangePage implements OnInit {
  porcentaje=0.05;

  constructor() { }

  ngOnInit() {
  }
  cambioRango(event){
    console.log(event);

  }

}
