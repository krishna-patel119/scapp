import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  songs = [
    { title: 'Abhi_Na_Jaao_Chhod_Kar.mp3', url: 'assets/songs/Abhi_Na_Jaao_Chhod_Kar.mp3' },
    { title: 'Hoshwalon_Ko_Khabar_Kya.mp3', url: 'assets/songs/Hoshwalon_Ko_Khabar_Kya.mp3' },
    { title: 'Kiska_Rasta_Dekhe.mp3', url: 'assets/songs/Kiska_Rasta_Dekhe.mp3' },
    { title: 'Kora_Kagaz_Tha_Yeh_Man_Mera.mp3', url: 'assets/songs/Kora_Kagaz_Tha_Yeh_Man_Mera.mp3' },
    { title: 'Lag_Ja_Gale.mp3', url: 'assets/songs/Lag_Ja_Gale.mp3' }
  ];

  currentSongIndex = 0;
  currentSong!: HTMLAudioElement;
  showTitle:any;

  constructor() {}

  playSong(songUrl: string, title:any) {
    this.showTitle = title
    
    if (this.currentSong) {
      this.currentSong.pause();
    }
    this.currentSong = new Audio(songUrl);
    // this.currentSong.loop = true
    this.currentSong.play();
    this.currentSong.addEventListener('ended', () => {
      this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
      this.playSong(this.songs[this.currentSongIndex].url, this.songs[this.currentSongIndex].title);
    });

    console.log(this.currentSong);
  }

  togglePlayPause() {
    if (this.currentSong) {
      if (this.currentSong.paused) {
        this.currentSong.play();
      } else {
        this.currentSong.pause();
      }
    }
  }
}
