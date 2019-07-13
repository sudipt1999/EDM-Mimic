$(function(){

    const sounds = "sound/"
    const volume = 0.5
    let currentSound = null
    let id= null
    let isPlayingSomething = false
    let idList = []

    const howlerList = {};

    for (var i = 61; i > 0; i--) 
    {
        howlerList[i] = createSound(i + ".wav");

    }
    function createSound (fileName)  {
        console.log(fileName)
        var sound = new Howl({
            src: [`${sounds+fileName}`],
            autoplay: true,
            loop: false,
            volume: volume,
            onend: function() {
                console.log('Finished!');
            },
            onstop: function() {
                isPlayingSomething = true
                console.log("stop")
            },
          });
       return sound
    }


    $('body').on({
        keydown: function(event){
            key = (Number.parseInt(event.which)%61).toString()
            
                // Object.keys(howlerList).forEach(function(key) {
                //     howlerList[key].stop();
                // });
                howlerList[key].play()
            
           
        },

         keyup: function(event){
            
         },
        
         keypress: function(event){
            
         }
    })


  
 });


 particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 500,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": ["#BD10E0","#B8E986","#50E3C2","#FFD300","#E86363"]
    },
    "shape": {
      "type": ["circle", "triangle", "star"],
      "stroke": {
        "width": 0,
        "color": "#b6b2b2"
      }
    },
    "opacity": {
      "value": 0.5211089197812949,
      "random": false,
      "anim": {
        "enable": true,
        "speed": 1.5,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8.017060304327615,
      "random": true,
      "anim": {
        "enable": true,
        "speed": 12.181158184520175,
        "size_min": 0.1,
        "sync": true
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#c8c8c8",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "bounce",
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
});