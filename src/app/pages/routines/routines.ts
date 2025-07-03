import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-routines',
  imports: [Navbar, Footer],
  templateUrl: './routines.html',
  styleUrl: './routines.css'
})
export class Routines {

}
