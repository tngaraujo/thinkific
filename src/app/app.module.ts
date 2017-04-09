import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {JsonpModule} from '@angular/http';
import { SimpleTimer } from 'ng2-simple-timer';

import { YoutubePlayerModule } from 'ng2-youtube-player';


import { AppComponent } from './app.component';
import { NewvideoComponent } from './newvideo/newvideo.component';
import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';
import { VideooverlayComponent } from './videooverlay/videooverlay.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';


const appRoutes: Routes = [
  /*{ path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },*/
      {
    path: 'videos',
    component: VideosComponent,
    data: { title: 'Videos' }
  },
  {
    path: 'newvideo',
    component: NewvideoComponent,
    data: { title: 'New Video' }
  },
    {
    path: 'viewvideo',
    component: ViewvideoComponent,
    data: { title: 'View Video' }
  },

  { path: '',
    redirectTo: '/videos',
    pathMatch: 'full'
  },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NewvideoComponent,
    VideosComponent,
    VideooverlayComponent,
    ViewvideoComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    YoutubePlayerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [SimpleTimer],
  bootstrap: [AppComponent]
})
export class AppModule { }
