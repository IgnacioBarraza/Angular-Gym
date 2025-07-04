import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ElementsBg } from '../../shared/elements-bg/elements-bg';

@Component({
  selector: 'app-routines',
  imports: [Navbar, Footer, ElementsBg],
  templateUrl: './routines.html',
  styleUrl: './routines.css'
})
export class Routines {

}
