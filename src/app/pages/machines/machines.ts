import { Component, OnInit } from '@angular/core';
import { Navbar } from '../../shared/navbar/navbar';
import { Footer } from '../../shared/footer/footer';

@Component({
  selector: 'app-machines',
  standalone: true,
  imports: [Navbar, Footer],
  templateUrl: './machines.html',
  styleUrl: './machines.css'
})
export class Machines {

}
