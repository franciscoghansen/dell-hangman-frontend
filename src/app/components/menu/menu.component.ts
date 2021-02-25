import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {


  constructor(private router: Router) {
  }

  items: MenuItem[] = [
    {
      label: 'Novo Jogo',
      command: (event => {
        this.router.navigate(['login'])
          .then(r => this.router.navigate(['']));
      })
    },
    {
      label: 'Logout',
      command: (event => {
        localStorage.clear();
        this.router.navigate(['login']);
      })
    }
  ];

  ngOnInit(): void {
  }

}
