import { Component } from '@angular/core';
import { NavItem } from '../nav-item/nav-item';

@Component({
  selector: 'app-navbar',
  imports: [NavItem],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  items = [
    {
      name: "Maquinas",
      path: "/maquinas"
    },
    {
      name: "Ejercicios",
      path: "/ejercicios"
    },
    {
      name: "Rutinas",
      path: "/rutinas"
    },
    {
      name: "Acerca de",
      path:"/acerca"
    }
  ]
};
