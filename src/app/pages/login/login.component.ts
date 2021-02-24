import {Component, OnInit} from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../services/player.service';
import {LOCAL_STORAGE_PLAYER} from '../../constants';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private playerService: PlayerService, private router: Router) {
  }

  player: Player = new Player();

  ngOnInit(): void {
    const pStr = localStorage.getItem('player');
    if (pStr !== undefined && pStr != null) {
      this.player = JSON.parse(pStr);
    } else {
      this.playerService.newObject()
        .then(p => {
          console.log(p);
          this.player = {...p};
        })
        .catch(error => console.log(error));
    }
  }

  onClick(event): void {
    this.playerService
      .existsByUid(this.player.uid)
      .then(exists => {
        if (!exists) {
          this.playerService
            .save(this.player)
            .then(p => {
              console.log(p);
              localStorage.setItem(LOCAL_STORAGE_PLAYER, JSON.stringify(p));
              this.router.navigate(['']);
            })
            .catch(error => console.log(error));
        } else {
          this.playerService.findByUid(this.player.uid)
            .then(saved => {
              this.player.id = saved.id;
              this.playerService
                .save(this.player)
                .then(p => {
                  console.log(p);
                  localStorage.setItem(LOCAL_STORAGE_PLAYER, JSON.stringify(p));
                  this.router.navigate(['']);
                })
                .catch(error => console.log(error));
            });
        }
      });


  }

}
