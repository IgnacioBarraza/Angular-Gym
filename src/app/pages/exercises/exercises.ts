import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';
import { ElementsBg } from '../../shared/elements-bg/elements-bg';

@Component({
  selector: 'app-exercises',
  imports: [Navbar, Footer, ElementsBg],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css'
})
export class Exercises {

}
