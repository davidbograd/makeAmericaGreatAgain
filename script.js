var usedSounds = [];
var sounds = [{
            "file": "audio/trumpbeingtrump1.mp3",
            "text": "Hello...Hello? Can I get some water????...",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump2.mp3",
            "text": "Bing, bing, bing...",
            "length": 800
        }, {
            "file": "audio/trumpbeingtrump3.mp3",
            "text": "Bing, bing, bong, bong, bing bing...",
            "length": 1700
        }, {
            "file": "audio/trumpbeingtrump4.mp3",
            "text": "We can't sell beef...it's peanuts!",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump5.mp3",
            "text": "I said it's ILLEGAL!",
            "length": 900
        }, {
            "file": "audio/trumpbeingtrump6.mp3",
            "text": "You have to get hit with a Komatsu tractor...",
            "length": 2500
        }, {
            "file": "audio/trumpbeingtrump8.mp3",
            "text": "I would never give up my microphone! I thought that was disgusting!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump9.mp3",
            "text": "Terrible people...I love 'em.",
            "length": 1700
        }, {
            "file": "audio/trumpbeingtrump11.mp3",
            "text": "Because we're going to hell!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump12.mp3",
            "text": "Uhmm...we'll do something. Let me go to sleep first.",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump13.mp3",
            "text": "Our country is going to hell.",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump14.mp3",
            "text": "I beat the people from China, I win!",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump15.mp3",
            "text": "We're tired of the nice people!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump16.mp3",
            "text": "Arab name, arab name",
            "length": 700
        }, {
            "file": "audio/trumpbeingtrump18.mp3",
            "text": "He's sweating like a pig! I've never saw a guy sweat like this!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump19.mp3",
            "text": "He wants to play golf! I play golf, i kill him at golf!",
            "length": 2200
        }, {
            "file": "audio/trumpbeingtrump20.mp3",
            "text": "Bing, bing, bing.",
            "length": 700
        }, {
            "file": "audio/trumpbeingtrump21.mp3",
            "text": "Oy, oy, oyee...",
            "length": 800
        }, {
            "file": "audio/trumpbeingtrump22.mp3",
            "text": "I will take care of women, I respect women. I will take care of women.",
            "length": 3100
        }, {
            "file": "audio/trumpbeingtrump23.mp3",
            "text": "You know, you could see there where blood coming out of her eyes...uh... blood coming out of her...wherever.",
            "length": 4700
        }, {
            "file": "audio/trumpbeingtrump24.mp3",
            "text": "He put glasses on so people will think he is smart!",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump26.mp3",
            "text": "Rick Perry should have to have an IQ-test!",
            "length": 2500
        }, {
            "file": "audio/trumpbeingtrump27.mp3",
            "text": "I've said that if Ivanka weren't my daughter, perhaps I'd be dating her.",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump28.mp3",
            "text": "And I watched our police and our firemen, down on 7/11, down at the World Trade Center, right after it came down.",
            "length": 5500
        }, {
            "file": "audio/trumpbeingtrump29.mp3",
            "text": "Grab them by the pussy.",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump30.mp3",
            "text": "I tend to like beautiful women more than unattractive women, I don't know maybe that makes me bad.",
            "length": 3500
        }, {
            "file": "audio/trumpbeingtrump31.mp3",
            "text": "Uaaah, I don't know what I said AAH, I don't remember!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump32.mp3",
            "text": "He's going like I don't remember AHH, the old baby! That's what I said!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump33.mp3",
            "text": "I'd call president Obama and Hillary Clinton the founders of ISIS, they're the founders.",
            "length": 5000
        }, {
            "file": "audio/trumpbeingtrump34.mp3",
            "text": "I have to have my China <3",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump35.mp3",
            "text": "China?:(",
            "length": 600
        }, {
            "file": "audio/trumpbeingtrump37.mp3",
            "text": "I've been saying, China, China, China, China, China, China!",
            "length": 2500
        }, {
            "file": "audio/trumpbeingtrump38.mp3",
            "text": "China :o",
            "length": 400
        }, {
            "file": "audio/trumpbeingtrump39.mp3",
            "text": "China!",
            "length": 600
        }, {
            "file": "audio/trumpbeingtrump40.mp3",
            "text": "People from China, they love me!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump41.mp3",
            "text": "People think I don't like China, I <3 China!",
            "length": 1500
        }, {
            "file": "audio/trumpbeingtrump42.mp3",
            "text": "Well, Rosie O'Donnel's disgusting, I mean both inside and out.",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump43.mp3",
            "text": "She's a slob...",
            "length": 700
        }, {
            "file": "audio/trumpbeingtrump44.mp3",
            "text": "She talks like a truck driver.",
            "length": 1800
        }, {
            "file": "audio/trumpbeingtrump45.mp3",
            "text": "She's basically a disaster.",
            "length": 1500
        }, {
            "file": "audio/trumpbeingtrump46.mp3",
            "text": "I mean I'd look her right in that ugly face of hers and say, Rosie, you're fired.",
            "length": 4000
        }, {
            "file": "audio/trumpbeingtrump47.mp3",
            "text": "We're all a little chubby, but Rosie is just worse than most of us.",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump48.mp3",
            "text": "I'm worth many billion of dollars $$$",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump49.mp3",
            "text": "Probably I'll sue her, because it would be fun.",
            "length": 2000
        },


    ];

    var audiofiles = [sounds.length];
    function init (){
      for(i=0;i<sounds.length;i++){
        audiofiles[i] = new Audio(sounds[i].file);
      }
    }

  function playRandomSound() {

    var randomNumber = getRandomNumber();

    var soundFile = sounds[randomNumber];

    $(".soundcontainer").attr("src",soundFile.file)
    $(".soundcontainer")[0].oncanplay = function(){

        moveMouth(soundFile.length);
    }
    $(".soundcontainer")[0].play();
    // var file = document.getElementById("player").innerHTML = "<embed src=\"" + soundFile.file + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
    var text = document.getElementById("quote").innerHTML = "<h2>" + soundFile.text + "</h2>";




};

function moveMouth(length){
  // Animations when clicking
  document.getElementById('trump-mouth').className = 'mouthmoving';

  setTimeout(function() {
    $("#trump-mouth").removeClass('mouthmoving');
  }, length);
}

function getRandomNumber() {
    var randomNumber;
    if (usedSounds.length >= sounds.length) {
        // We have used all the numbers
        usedSounds = [];
        console.log("All the sounds have been used, resetting.");
    }

    while(!randomNumber) {
        var random = Math.floor(Math.random() * sounds.length);

        if (!contains(usedSounds, random)) {
            randomNumber = random;
            usedSounds.push(randomNumber);
            console.log("Found a new number!");
        } else {
            console.log("The number " + random + " has already been used.");
        }
    }

    return randomNumber;
}

function contains(a, obj) {
    var i = a.length;
    while (i--) {
       if (a[i] === obj) {
           return true;
       }
    }
    return false;
}
