var usedSounds = [];
var sounds = [{
            "file": "audio/trumpbeingtrump1.wav",
            "text": "Hello...Hello? Can I get some water????...",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump2.wav",
            "text": "Bing, bing, bing...",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump3.wav",
            "text": "Bing, bing, bong, bong, bing...",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump4.wav",
            "text": "We can't sell beef...it's peanuts!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump5.wav",
            "text": "I said it's ILLEGAL!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump6.wav",
            "text": "You have to get hit with a kumatsu tractor...",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump8.wav",
            "text": "I would never give up my microphone! I thought that was discusting!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump9.wav",
            "text": "Terrible people...I love it.",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump11.wav",
            "text": "Because we're going to hell!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump12.wav",
            "text": "Uhmm...we'll do something. We'll go to sleep first.",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump13.wav",
            "text": "Our country is going to hell.",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump14.wav",
            "text": "I beat the people from China, I win!",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump15.wav",
            "text": "We're tired of the nice people!",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump16.wav",
            "text": "Arab name, arab name, arab name",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump18.wav",
            "text": "He's sweating like a pig! I've never saw a guy sweat like this!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump19.wav",
            "text": "He wants to play golf! I play golf, i kill him at golf!",
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump20.wav",
            "text": "Bing, bing, bing, right!?",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump21.wav",
            "text": "Oy, oy, oyee...",
            "length": 1000
        }, {
            "file": "audio/trumpbeingtrump22.wav",
            "text": "I will take care of women, I respect women. I will take care of women.",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump23.wav",
            "text": "You know, you could see there where blood coming out of her eyes...uh... blood coming out of her...wherever.",
            "length": 5000
        }, {
            "file": "audio/trumpbeingtrump24.wav",
            "text": "He put glasses on so people will think he is smart!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump26.wav",
            "text": "Rick Perry should have to have an IQ-test!",
            "length": 2500
        }, {
            "file": "audio/trumpbeingtrump27.wav",
            "text": "I've said that if Ivanka weren't my daughter, perhaps I'd be dating her.",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump28.wav",
            "text": "And I watched our police and our firemen, down on 7/11, down at the World Trade Center, right after it came down.",
            "length": 6000
        }, {
            "file": "audio/trumpbeingtrump29.wav",
            "text": "Grab them by the pussy.",
            "length": 1500
        }, {
            "file": "audio/trumpbeingtrump30.wav",
            "text": "I tend to like beautiful women more than unattractive women, I don't know maybe that makes me bad.",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump31.wav",
            "text": "Uaaah, I don't know what I said AAH, I don't remember!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump32.wav",
            "text": "He's going like I don't remember AHH, the old baby! That's what I said!",
            "length": 3000
        }, {
            "file": "audio/trumpbeingtrump33.wav",
            "text": "I'd call president Obama and Hillary Clinton the founders of ISIS, they're the founders.",
            "length": 5000
        }
    ];

function playRandomSound() {

    var randomNumber = getRandomNumber();

    var soundFile = sounds[randomNumber];
    var file = document.getElementById("player").innerHTML = "<embed src=\"" + soundFile.file + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
    var text = document.getElementById("quote").innerHTML = "<h2>" + soundFile.text + "</h2>";

    // Animations when clicking
    document.getElementById('trump-mouth').className = 'mouthmoving';

    setTimeout(function() {
      $("#trump-mouth").removeClass('mouthmoving');
    }, soundFile.length);
};

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
