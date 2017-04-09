import { Injectable } from '@angular/core';
import { video } from '../models';
import {Jsonp} from '@angular/http';


import { Http, HttpModule, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'

@Injectable()
export class AppServices {

    headers:Headers;
    options:RequestOptions;
    videos:video[];
    
        
    constructor(private _http: Http, private _jsonp: Jsonp) {

    this.headers = new Headers({ 'Content-Type': 'application/json' });
    //this.headers.append('Access-Control-Allow-Origin', '*');
    //this.headers.append('Access-Control-Allow-Methods', "GET, POST, PATCH, PUT, DELETE, OPTIONS")
    //this.headers.append('Access-Control-Allow-Headers', "Origin, Content-Type, X-Auth-Token")
    this.options = new RequestOptions({ headers: this.headers });
    



    }


/*
    fetchVideos(){
            this.getVideoList()
            .subscribe(data => {
                this.videos = data;
                console.log("JSON RECEBIDO -- getVideos");
                console.log(data);
                },error => console.log(error));
    }
*/
    getVideoList():Observable<any>{
            return this._http.get('http://localhost:3000/videos')
            .map(res => res.json());  
    }

    getVideoInfo(videoid:string):Observable<any>{
        return this._http.get('https://www.googleapis.com/youtube/v3/videos?part=id%2C+snippet&id=' + videoid + '&key=AIzaSyBjd1UnY8f6mN8arKQa2E2AuXAOMEXOoQ8', this.options)
        .map(res => res.json());
    }

    saveVideo(jsondata:string):Observable<any>{
        return this._http.post('http://localhost:3000/savevideo',jsondata, this.options)
        .map(res => res.json());
    }

    getVideoDef(youtubeid:string):Observable<any>{
        var postBody = "{\"youtubeid\":\""+ youtubeid +"\"}";
        return this._http.post('http://localhost:3000/getvideodata',postBody, this.options)
        .map(res => res.json());
    }


}