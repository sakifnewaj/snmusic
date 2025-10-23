new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "NO ERA AMOR",
          artist: "DJ Asul",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/20.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/20.mp3",
          url: "https://youtu.be/-togqJf3NaM?si=bmieM8YkapCiEvay",
          favorited: false,
          verified: false
        },
        {
          name: "GLORY",
          artist: "Ogryzek",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/19.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/19.mp3",
          url: "https://youtu.be/q5ncE4wIvfw?si=q97RGTwr57qPsJ0Z",
          favorited: false,
          verified: true
        },
        {
          name: "FUNK DO BOUNCE (SLOWED)",
          artist: "Ariis",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/18.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/18.mp3",
          url: "https://youtu.be/8uKG7A6U7PY?si=f4zXxQqIjN7W7mB6",
          favorited: false,
          verified: false
        },
        {
          name: "NEON BLADE (Sped Up)",
          artist: "MoonDeity",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/17.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/17.mp3",
          url: "https://youtu.be/YLWbZ7nwooU?si=cw1B_VnvxCKysHwv",
          favorited: false,
          verified: false
        },
        {
          name: "Sahara",
          artist: "Hensonn",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/16.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/16.mp3",
          url: "https://youtu.be/pIZ0QRWK0zg?si=QfWZqBm8TjD2k-5S",
          favorited: false,
          verified: false
        },
        {
          name: "CLIMA LINDO (SLOWED)",
          artist: "GXMZ",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/15.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/15.mp3",
          url: "https://youtu.be/P12jBX75B48?si=YI8YrOSMScJ1nKok",
          favorited: false,
          verified: false
        },
        {
          name: "SLAY!",
          artist: "Eternxlkz",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/14.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/14.mp3",
          url: "https://youtu.be/qlzcHe_gusE?si=wh2ldE91ltXt9b9g",
          favorited: false,
          verified: true
        },
        {
          name: "DIA DELÍCIA",
          artist: "NAKAMA",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/13.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/13.mp3",
          url: "https://youtu.be/2cnloO84LA0?si=b1yyzzpm94U-91y5",
          favorited: false,
          verified: true
        },
        {
          name: "Deus do Olimpo",
          artist: "TRASHXRL",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/12.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/12.mp3",
          url: "https://youtu.be/5j51KNlqtaU?si=vJVD43OQg7MA9YNH",
          favorited: false,
          verified: true
        },
        {
          name: "Montagem Lunar Celestia",
          artist: "TOKYOPHILE",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/11.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/11.mp3",
          url: "https://youtu.be/Am_UfnV-niA?si=UQy48caWGwKFAhGm",
          favorited: false,
          verified: true
        },
        {
          name: "ODNOGO ULTRAFUNK",
          artist: "Sakif Newaj",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/10.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/10.mp3",
          url: "#",
          favorited: false,
          verified: true
        },
        {
          name: "MONTAGEM COMA",
          artist: "Elysian.",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/09.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/09.mp3",
          url: "https://youtu.be/Sfv6OmOB1W4?si=Jr3NfxeJhetQh5Hu",
          favorited: false,
          verified: false
        },
        {
          name: "SI AI AI",
          artist: "BLOODTHXRN",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/08.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/08.mp3",
          url: "https://youtu.be/abyRALqmwRE?si=VQAQulZpjqENO_LS",
          favorited: false,
          verified: false
        },
        {
          name: "EMPIRE",
          artist: "Ogryzek",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/07.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/07.mp3",
          url: "https://youtu.be/L8H7J8VANQo?si=hOtyevlWNmYUTzD3",
          favorited: false,
          verified: true
        },
        {
          name: "SLAVA FUNK!",
          artist: "MVSTERIOUS",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/06.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/06.mp3",
          url: "https://youtu.be/YPmxBTPyWBI?si=0B84IcTDWX0Du49a",
          favorited: false,
          verified: true
        },
        {
          name: "NUNCA MUDA",
          artist: "NXGHT, Scythermane",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/05.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/05.mp3",
          url: "https://youtu.be/ZiDAbh5hY48?si=MSB9pfiwNTxl4Gzu",
          favorited: false,
          verified: false
        },
        {
          name: "MONTAGEM BAILÃO",
          artist: "MXZI, ATLXS",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/04.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/03.mp3",
          url: "https://youtu.be/B9KFb_fmvV8?si=5Z9vbFHxyd_tW9bT",
          favorited: false,
          verified: false
        },
        {
          name: "MONTAGEM SIMPIERO",
          artist: "WHM1E",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/music/files/02.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/mp3/12.mp3",
          url: "https://youtu.be/nIk0mdn4-Bw?si=8Zj_wQ_dDEwO2JnO",
          favorited: false,
          verified: false
        },
        {
          name: "PASSO BEM SOLTO (Slowed)",
          artist: "Sakif Newaj",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/img/23.jpeg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/mp3/11.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false,
          verified: true
        },
        {
          name: "Reactive",
          artist: "Sakif Newaj",
          cover: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/img/22.jpg",
          source: "https://raw.githubusercontent.com/sakifnewaj/snmusic/main/mp3/10.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false,
          verified: true
        },
        {
          name: "Mekan覺n Sahibi",
          artist: "Norm Ender",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/1.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/1.mp3",
          url: "https://www.youtube.com/watch?v=z3wAjJXbYzA",
          favorited: false,
          verified: true
        },
        {
          name: "Everybody Knows",
          artist: "Leonard Cohen",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/2.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/2.mp3",
          url: "https://www.youtube.com/watch?v=Lin-a2lTelg",
          favorited: true,
          verified: true
        },
        {
          name: "Extreme Ways",
          artist: "Moby",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/3.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/3.mp3",
          url: "https://www.youtube.com/watch?v=ICjyAe9S54c",
          favorited: false,
          verified: false
        },
        {
          name: "Butterflies",
          artist: "Sia",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/4.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/4.mp3",
          url: "https://www.youtube.com/watch?v=kYgGwWYOd9Y",
          favorited: false,
          verified: true
        },
        {
          name: "The Final Victory",
          artist: "Haggard",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/5.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/5.mp3",
          url: "https://www.youtube.com/watch?v=0WlpALnQdN8",
          favorited: true,
          verified: false
        },
        {
          name: "Genius ft. Sia, Diplo, Labrinth",
          artist: "LSD",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/6.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/6.mp3",
          url: "https://www.youtube.com/watch?v=HhoATZ1Imtw",
          favorited: false,
          verified: true
        },
        {
          name: "The Comeback Kid",
          artist: "Lindi Ortega",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/7.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/7.mp3",
          url: "https://www.youtube.com/watch?v=me6aoX0wCV8",
          favorited: true,
          verified: false
        },
        {
          name: "Overdose",
          artist: "Grandson",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/8.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/8.mp3",
          url: "https://www.youtube.com/watch?v=00-Rl3Jlx-o",
          favorited: false,
          verified: true
        },
        {
          name: "Rag'n'Bone Man",
          artist: "Human",
          cover: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/img/9.jpg",
          source: "https://raw.githubusercontent.com/muhammederdem/mini-player/master/mp3/9.mp3",
          url: "https://www.youtube.com/watch?v=L3wKzyIN1yk",
          favorited: false,
          verified: true
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if(this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function() {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function() {
      vm.generateTime();
    };
    this.audio.onended = function() {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement('link');
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image"
      document.head.appendChild(link)
    }
  }
});
