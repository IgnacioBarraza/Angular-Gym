import { Component } from '@angular/core';
import { NavItem } from '../nav-item/nav-item';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NavItem, RouterLink],
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
