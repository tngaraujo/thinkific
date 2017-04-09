import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { video, question } from '../models';
import { AppServices } from '../services/services';
import {Observable} from 'rxjs/Rx';
import {SimpleTimer} from 'ng2-simple-timer';


@Component({
  selector: 'app-viewvideo',
  templateUrl: './viewvideo.component.html',
  styleUrls: ['./viewvideo.component.css'],
  providers: [AppServices]
})
export class ViewvideoComponent implements OnInit {

  id = '';
  private player;
  private ytEvent;
  private videooverlayOn:boolean;
  private myvid:video;
  private youtubeid:string;
  private videos:video[];
  private timer;
  private questionsAnswered:number[];
  private activeQuestion:number;
  private questionStatus = 0;
  private curquestion = 1;
  constructor(private appServices: AppServices,private activatedRoute: ActivatedRoute, private st: SimpleTimer) {}
  
  
  timerId: string;

  ngOnInit() {
        //console.log("starting");
        var url = window.location.href;
        this.youtubeid = url.split("youtubeid=")[1];
        this.questionsAnswered = new Array();
  }

checkquestions(){
      if (typeof(this.myvid) != "undefined"){ // check if there is video data
      var videotime = this.player.getCurrentTime();
            for (var j=0;j<this.questionsAnswered.length;j++){      // for each question
                if (
                  (this.myvid.questions[j].time > videotime - 1) && // checking in a time window of 1 second before
                  (this.myvid.questions[j].time < videotime + 1) && // 1 second later
                  (this.questionsAnswered[j]==0)                    // question not diplayed yet
                )
                {
                  this.activeQuestion = j;    //set activequestion
                  this.videooverlayOn = true; //show overlay
                  this.player.pauseVideo();   //pause video
                }
            }
      
      
    }
}

answerQuestion(answerText:string){
  console.log(answerText);
  for (var i=0;i<this.myvid.questions[this.activeQuestion].answers.length;i++){
      if (this.myvid.questions[this.activeQuestion].answers[i].text==answerText){ 
                  if (this.myvid.questions[this.activeQuestion].answers[i].correct){
                    //alert("correct answer!");
                    this.questionStatus=1;
                  }
                  else{
                    //alert("wrong answer!");
                    this.questionStatus=2;
                  }
      }
  }
}

continueVideo(){
  this.questionsAnswered[this.activeQuestion] = 1;
  this.player.playVideo();
  this.videooverlayOn = false;
  this.questionStatus=0;
}

showQuestion(j:number){
    var myquestion = new question();
    myquestion = this.myvid.questions[j];
    console.log(myquestion);
}

  onStateChange(event) {
    this.ytEvent = event.data;
  }

  savePlayer(player) {
    this.player = player;
    this.player.loadVideoById( this.youtubeid  );
    this.getVideoDef();
    
  }



  getVideoDef()
    {
    this.appServices.getVideoDef(this.youtubeid)
    .subscribe(data => {

              this.st.newTimer('1sec', 1);
              this.timerId = this.st.subscribe('1sec', e => this.checkquestions());

              this.myvid = JSON.parse(data.videodef);
              //this.videos.push(this.myvid);
              console.log(this.myvid);

              // reset questionsAnswered Array
              for (var i=0;i<this.myvid.questions.length;i++){
                  this.questionsAnswered[i]=0; // not answered yet
              }
              console.log("questionsAnswered array reset");

      }
    ,error => console.log(error));
    }




}
