import { Component } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-exercises',
  imports: [Navbar, Footer],
  templateUrl: './exercises.html',
  styleUrl: './exercises.css'
})
export class Exercises {

}
