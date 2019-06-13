import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes:Componente[]=[{
    nombre:'Alert',
    icono:'american-football',
    url:'/alert'
  },
  {
    nombre:'Action Sheet',
    icono:'appstore',
    url:'/action-sheet'
  }
  ,
  {
    nombre:'Avatar',
    icono:'happy',
    url:'/avatar'
  }  ,
  {
    nombre:'Button',
    icono:'play',
    url:'/button'
  } ,
  {
    nombre:'Fab',
    icono:'appstore',
    url:'/fab'
  },
  {
    nombre:'Check',
    icono:'checkmark-circle-outline',
    url:'/check'
  },
  {
    nombre:'Grid',
    icono:'grid',
    url:'/grid'
  },
  {
    nombre:'Range',
    icono:'cube',
    url:'/range'
  },
  {
    nombre:'Loading',
    icono:'refresh',
    url:'/loading'
  },
  {
    nombre:'Infinite',
    icono:'infinite',
    url:'/infinite'
  },
  {
    nombre:'Navegacion',
    icono:'paper',
    url:'/navegacion'
  },
  {
    nombre:'Popover',
    icono:'book',
    url:'/popover'
  },
];



  constructor() { }

  ngOnInit() {
  }

}

interface Componente{
  nombre:string;
  icono:string;
  url:string;
}
