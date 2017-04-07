import { Component, OnInit } from '@angular/core';

import { Compra } from "../compra";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  openRightMenu: boolean = false;

  compra: Compra = new Compra();

  agregando: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  seAgregaProducto(){
    this.agregando = true;
    setTimeout(() => {
      this.agregando = false;
    }, 2000);
  }

  toggleRightMenu(): void{
    this.openRightMenu = !this.openRightMenu;
  }

}
