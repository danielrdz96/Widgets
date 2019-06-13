import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
  componentes: Componente [] = [{
    nombre: 'Alert',
    icono: 'american-football',
    url: '/alert'
  },
  {
    nombre: 'Action Sheet',
    icono: 'appstore',
    url: '/action-sheet'
  }
  ,
  {
    nombre: 'Avatar',
    icono: 'happy',
    url: '/avatar'
  }  ,
  {
    nombre: 'Button',
    icono: 'appstore',
    url: '/button'
  } ,
  {
    nombre: 'Fab',
    icono: 'appstore',
    url: '/fab'
  },
  {
    nombre: 'Check',
    icono: 'checkmark-circle-outline',
    url: '/check'
  },
  {
    nombre: 'Grid',
    icono: 'grid',
    url: '/grid'
  },
  {
    nombre: 'Range',
    icono: 'cube',
    url: '/range'
  },
  {
    nombre: 'Infinite',
    icono: 'infinite',
    url: '/infinite'
  },
];

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  nombre: string;
  icono: string;
  url: string;
}
