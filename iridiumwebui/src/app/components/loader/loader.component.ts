import { Component, OnInit } from '@angular/core';
declare const $: any;
import * as anime from 'animejs';

import { FirebaseService } from '../../common/services/firebase.service';

@Component({
    selector: 'app-loader',
    templateUrl: './loader.component.html',
    styleUrls: ['./loader.component.scss']
})

export class LoaderComponent implements OnInit {
    page: string = 'home';
    logoText: string;
    logoTitle: string;
    myStyle: object = {};
    myParams: object = {};
    width: number = 100;
    height: number = 100;

    constructor(private firebaseService: FirebaseService) { }

    ngOnInit() {
        this.dataGotedFromServer(this.page);
        this.myStyle = {
            'position': 'fixed',
            'width': '100%',
            'height': '100%',
            'z-index': 1,
            'top': 0,
            'left': 0,
            'right': 0,
            'bottom': 0,
        };
 
        this.myParams = {
            "particles": {
                "number": {
                  "value": 200,
                  "density": {
                    "enable": true,
                    "value_area": 631.3181133058181
                  }
                },
                "color": {
                  "value": "#ffffff"
                },
                "shape": {
                  "type": "circle",
                  "stroke": {
                    "width": 0,
                    "color": "#000000"
                  },
                  "polygon": {
                    "nb_sides": 5
                  },
                  "image": {
                    "src": "img/github.svg",
                    "width": 100,
                    "height": 100
                  }
                },
                "opacity": {
                  "value": 0.2,
                  "random": false,
                  "anim": {
                    "enable": false,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                  }
                },
                "size": {
                  "value": 3,
                  "random": true,
                  "anim": {
                    "enable": false,
                    "speed": 40,
                    "size_min": 0.1,
                    "sync": false
                  }
                },
                "line_linked": {
                  "enable": true,
                  "distance": 150,
                  "color": "#ffffff",
                  "opacity": 0.4,
                  "width": 1
                },
                "move": {
                  "enable": true,
                  "speed": 6,
                  "direction": "none",
                  "random": true,
                  "straight": false,
                  "out_mode": "out",
                  "bounce": false,
                  "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                  }
                }
              },
              "interactivity": {
                "detect_on": "canvas",
                "events": {
                  "onhover": {
                    "enable": false,
                    "mode": "repulse"
                  },
                  "onclick": {
                    "enable": true,
                    "mode": "push"
                  },
                  "resize": true
                },
                "modes": {
                  "grab": {
                    "distance": 400,
                    "line_linked": {
                      "opacity": 1
                    }
                  },
                  "bubble": {
                    "distance": 400,
                    "size": 40,
                    "duration": 2,
                    "opacity": 8,
                    "speed": 3
                  },
                  "repulse": {
                    "distance": 200,
                    "duration": 0.4
                  },
                  "push": {
                    "particles_nb": 4
                  },
                  "remove": {
                    "particles_nb": 2
                  }
                }
              },
              "retina_detect": true
        };
        $(function() {
            function loadingCricle() {
                $('.loading__spinner').fadeIn(500);
            }
            function textAnimation() {
                $('.loading').addClass('loading__active');
                $('.loading__content__text .loading__content__letters').each(function(){
                      $(this).html($(this).text().replace(/([^\x00-\x80]|\w|\&|\.)/g, "<span class='loading__content__letter'>$&</span>"));
                });
                anime.timeline({loop: true})
                      .add({
                        targets: '.loading__content__title .loading__content__word',
                        opacity: [0,1],
                        easing: "easeInOutQuad",
                        duration: 2250,
                        delay: function(el, i) {
                          return 150 * (i+1)
                        }
                     }).add({
                        targets: '.loading__content__text .loading__content__letter',
                        translateX: [40,0],
                        translateZ: 0,
                        opacity: [0,1],
                        easing: "easeOutExpo",
                        duration: 1500,
                        delay: function(el, i) {
                          return 700 + 30 * i;
                        }
                    }).add({
                        targets: '.loading__content__text .loading__content__letter',
                        translateX: [0, -30],
                        opacity: [1,0],
                        easing: "easeInExpo",
                        duration: 1500,
                        delay: function(el, i) {
                          return 700 + 30 * i;
                        },
                    }).add({
                        targets: '.loading__content__title',
                        opacity: 0,
                        duration: 1000,
                        easing: "easeOutExpo",
                        delay: 10000
                      });
            }
        
            setTimeout(loadingCricle, 500);
            setTimeout(textAnimation, 1500);
        
            $('.equalizer').addClass('equalizer__active');
            if ($('.equalizer').hasClass('equalizer__active')) {
                $('body').append('<div class="background__sound"><embed src="sound/bensound-straight.mp3" autostart="true" loop="true" hidden="true"></div>');
            }
            $('.equalizer').click(function(event) {
                $(this).toggleClass('equalizer__active');
                if ($('.equalizer').hasClass('equalizer__active')) {
                    $('body').append('<div class="background__sound"><embed src="sound/bensound-straight.mp3" autostart="true" loop="true" hidden="true"></div>');
                } else {
                    $('.background__sound').remove();
                }
            });
            
        });
    }

    dataGotedFromServer(page) {
      try {
          this.firebaseService.getData(page)
              .valueChanges()
              .subscribe(resData => {
                  console.log(resData);
                  this.logoText= resData.sub_text;
                  this.logoTitle= resData.title;
              },
              error => {
                console.log(error, "error");
              })
        } catch (e) {
          console.log(e);
        }
  }
}
