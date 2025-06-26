import { Component, Input} from '@angular/core';

interface NavItemProps{
  name: string,
  path: string,
};

@Component({
  selector: 'app-nav-item',
  imports: [],
  templateUrl: './nav-item.html',
  styleUrl: './nav-item.css'
})
export class NavItem {
  @Input() data!: NavItemProps
}
