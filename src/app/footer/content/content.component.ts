import { Component, OnInit } from '@angular/core';
import { ItunesService } from '../../itunes.service';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html',
    styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  showList = false;
  titleTrack: string = "Madonna";
  toggle = true;
  songs;

    constructor(private service: ItunesService) {}

    ngOnInit(){ }

    onSearch(){
      this.showList = true;
      this.titleTrack
      this.service.search(this.titleTrack).subscribe((res) => {
        this.songs = res.json().results;
      });
    }
    }
