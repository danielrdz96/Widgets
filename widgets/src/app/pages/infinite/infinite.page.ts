import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infinite',
  templateUrl: './infinite.page.html',
  styleUrls: ['./infinite.page.scss'],
})
export class InfinitePage implements OnInit {
  data: any[]= Array(14);

  constructor() { }

  ngOnInit() {
  }

  loadData($event){
    console.log("cargando....");
  }

}
