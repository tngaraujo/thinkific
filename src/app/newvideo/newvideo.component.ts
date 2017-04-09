import { Component, OnInit } from '@angular/core';
import { YoutubePlayerModule } from 'ng2-youtube-player';
import {video, question, answer} from '../models';
import { AppServices } from '../services/services';
import {Router} from '@angular/router';

@Component({
  selector: 'app-newvideo',
  templateUrl: './newvideo.component.html',
  styleUrls: ['./newvideo.component.css']
  ,
  providers: [AppServices]
})





export class NewvideoComponent implements OnInit {
  
  id = '';
  private player;
  private ytEvent;
  private videooverlayOn:boolean;

  private myvid:video;
  private newQuestion:question;
  private newanswer:answer;
 

  constructor(private appServices: AppServices, private router: Router) {
      this.myvid = new video();
      this.myvid.questions = new Array();
      this.myvid.thumbnail="";
      this.newQuestion = new question();
      this.newQuestion.question = "";
      this.newQuestion.answers = new Array();
      this.newQuestion.link="";
      this.newanswer = new answer();
      this.newanswer.text = "";
      this.newanswer.correct =false;
  }

  ngOnInit() {

  }

    onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
     this.videooverlayOn = false;

  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }

  getcurtime(){
    this.myvid.time =  this.player.getCurrentTime();
    alert(this.myvid.time);
  }

  loadvideo(){
    this.player.loadVideoById( this.myvid.url.split("v=")[1]  );
  }

  addAction(){
    this.newQuestion = new question();
    this.newQuestion.question = "";
    this.newQuestion.link="";
    this.newQuestion.answers = new Array();
    this.newanswer = new answer();
    this.newanswer.text = "";
    this.newanswer.correct =false;
    this.newQuestion.time = this.player.getCurrentTime();
    this.myvid.time =  this.player.getCurrentTime();
    this.videooverlayOn = true;
    this.pauseVideo();
  }

  cancelNewQuestion(){
      this.newQuestion = new question();
      this.newQuestion.link="";
      this.videooverlayOn = false;
  }

submitVideo(){
  
  this.appServices.getVideoInfo(this.myvid.url.split("v=")[1])
    .subscribe(data => {

      this.myvid.title=data.items[0].snippet.localized.title;
      this.myvid.description=data.items[0].snippet.localized.description.substring(1, 100).replace("'","");
      this.myvid.thumbnail=data.items[0].snippet.thumbnails.default.url;
      this.myvid.youtubeid=data.items[0].id;

        // send to backend
          this.appServices.saveVideo(JSON.stringify(this.myvid))
            .subscribe(data => {
              console.log(data);   
          },error => console.log(error));

      this.router.navigate(["videos"]);


      }
    ,error => console.log(error));


  console.log(JSON.stringify(this.myvid));
}

  submitNewQuestion(){  
    
    this.myvid.questions.push(this.newQuestion);
    this.videooverlayOn = false;
  }
  
  addAnswer(){

        if (this.newanswer.text !=""){

                if (this.newQuestion.answers.length < 6){
                  this.newQuestion.answers.push(this.newanswer);
                  this.newanswer = new answer();
                } else{
                  alert("max 6 answers, please");
                }
                
              }
              else{
                alert("Add valid answers, please");
              }
        }
}
