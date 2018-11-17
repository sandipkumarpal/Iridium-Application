import { Component, OnInit, ViewChild } from '@angular/core';
declare const $: any;
@Component({
  selector: 'app-sound',
  templateUrl: './sound.component.html',
  styleUrls: ['./sound.component.scss']
})
export class SoundComponent implements OnInit {
  isPlaying = false;
  videoPlayer: HTMLAudioElement;
  constructor() { }

  ngOnInit() {

  }
  @ViewChild('myTune') myTune: any;
  clickPlay() {
    if(this.isPlaying === false) {
      this.isPlaying = true;
      this.myTune.nativeElement.pause();
    } else {
      this.isPlaying = false;
      this.myTune.nativeElement.play();
    }
  }

}
