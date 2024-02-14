import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-pages',
  templateUrl: './main-pages.component.html',
  styleUrls: ['./main-pages.component.scss']
})
export class MainPagesComponent implements OnInit {
  slide: number= 0;

  ngOnInit(): void {
    this.playAudio();
  }

  playAudio(){
    let audio = new Audio();
    audio.src = "assets/lagu.mp3";
    audio.load();
    audio!.play();
  }
    
  onPrev(event: any){
    if(true && this.slide !== 0){
      this.slide = this.slide - 1;
    }
  }
  onNext(event: any){
    if(true && this.slide !== 7){
      this.slide = this.slide + 1;
    }
  }
}
