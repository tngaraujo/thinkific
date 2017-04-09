import { Component, OnInit } from '@angular/core';

import { video } from '../models';
import { AppServices } from '../services/services';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [AppServices]
})
export class VideosComponent implements OnInit {

  videolist:video[];
  private htmlcode:string;

  constructor(private appServices: AppServices) {

    this.videolist = new Array();  

  }

  ngOnInit() {

    this.appServices.getVideoList()
    .subscribe(data => {
      for (var i=0; i < data.videos.length; i++){
        this.videolist.push(JSON.parse(data.videos[i]));
      }

      }
    ,error => console.log(error));


  }

  viewVideo(youtubeid:string){
    var newWindow = window.open('viewvideo?youtubeid=' + youtubeid);
  }

  getHTMLCode(youtubeid:string){

    this.htmlcode = "<iframe src='http://localhost:4200/viewvideo?youtubeid=" + youtubeid + "' width=620 height=530></iframe>";
  }


}
