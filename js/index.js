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
            
                Object.keys(howlerList).forEach(function(key) {
                    howlerList[key].stop();
                });
                howlerList[key].play()
            
           
        },

         keyup: function(event){
            
         },
        
         keypress: function(event){
            
         }
    })
    // $('body').keydown(function(event){
    //     const key = event.which+".wav"
    //     createSound(key).play();
    //  })  
    
    //  $('body').keyup(function(event){
    //     const key = event.which+".wav"
    //     createSound(key).stop();
    //  })
    
      $("#1").click(function(){
        //alert("CLICKED")
        createSound("1.wav").play();
      })
     
      $("#2").click(function(){
        //alert("CLICKED")
        createSound("2.wav").play();
      })
      $("#3").click(function(){
        //alert("CLICKED")
        createSound("3.wav").play();
      })
      $("#4").click(function(){
        //alert("CLICKED")
        createSound("4.wav").play();
      })
  
 });

