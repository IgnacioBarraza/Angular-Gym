import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ElementsBg } from '../../shared/elements-bg/elements-bg';

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [Navbar, Footer, ElementsBg],
  templateUrl: './machines.html',
  styleUrl: './machines.css'
})
export class Machines {

}
