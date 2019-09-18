import { Component, OnInit, NgZone } from '@angular/core';
import { PatchesService } from 'app/patches.service';
import { ApiService } from 'app/api.service';
import * as _ from 'lodash';
import { Connection } from 'app/model';
declare const Tone: any;

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.scss'],
  providers:[ApiService]
})
export class HomeComponent implements OnInit {


  ngOnInit() {
  }
  master;

  showPatches: boolean = true;

  modules = [];

  constructor(
    private zone: NgZone,
    private apiService:ApiService,
    private patches: PatchesService
  ) {
    Tone.Transport.start();
    this.master = Tone.Master;
    document.oncontextmenu = () => false;
  }
  clearAll() {
    _.forEach(this.patches.connections, (data) => {

      this.patches.removeAllConnection()
    })
    ; console.log(this.patches.connections)
  }
  add(t) {
    this.showPatches = false;
    this.modules.push(t);
    setTimeout(() => {
      this.zone.run(() => this.showPatches = true);
    }, 10);
  }

  remove(i) {
    this.modules.splice(i, 1);
  }
  submitConnections() {
    this.apiService.DoConnection(this.patches.AllConnections).subscribe(a=>{
      console.log(a)
    });
  }
  Goscada() {
    window.open("", '_blanck')
  }
}
