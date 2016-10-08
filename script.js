function playRandomSound() {
    var sounds = [{
            "file": "audio/trumpbeingtrump1.wav",
            "text": "Hello...Hello? Can I get some water????..."
        }, {
            "file": "audio/trumpbeingtrump2.wav",
            "text": "Bing, bing, bing..."
        }, {
            "file": "audio/trumpbeingtrump3.wav",
            "text": "Bing, bing, bong, bong, bing..."
        }, {
            "file": "audio/trumpbeingtrump4.wav",
            "text": "We can't sell beef...it's peanuts!"
        }, {
            "file": "audio/trumpbeingtrump5.wav",
            "text": "I said it's ILLEGAL!"
        }, {
            "file": "audio/trumpbeingtrump6.wav",
            "text": "You have to get hit with a kumatsu tractor..."
        }, {
            "file": "audio/trumpbeingtrump7.wav",
            "text": "So what I'm gonna do is SPAN OUT, span out!"
        }, {
            "file": "audio/trumpbeingtrump8.wav",
            "text": "I would never give up my microphone! I thought that was discusting!"
        }, {
            "file": "audio/trumpbeingtrump9.wav",
            "text": "Terrible paper...I love it."
        }, {
            "file": "audio/trumpbeingtrump10.wav",
            "text": "WHO is Uma married to?"
        }, {
            "file": "audio/trumpbeingtrump11.wav",
            "text": "Because we're going to hell!"
        }, {
            "file": "audio/trumpbeingtrump12.wav",
            "text": "Uhmm...we'll do something. We'll go to sleep first."
        }, {
            "file": "audio/trumpbeingtrump13.wav",
            "text": "Our country is going to hell."
        }, {
            "file": "audio/trumpbeingtrump14.wav",
            "text": "I beat the people from China, I win!"
        }, {
            "file": "audio/trumpbeingtrump15.wav",
            "text": "We're tired of the nice people!"
        }, {
            "file": "audio/trumpbeingtrump16.wav",
            "text": "Arab name, arab name, arab name"
        }, {
            "file": "audio/trumpbeingtrump17.wav",
            "text": "What are you trying to talk to some of us about joining your little home? "
        }, {
            "file": "audio/trumpbeingtrump18.wav",
            "text": "He's sweating like a pig! I've never saw a guy sweat like this!"
        }, {
            "file": "audio/trumpbeingtrump19.wav",
            "text": "He wants to play golf! I play golf, i kill him at golf!"
        }, {
            "file": "audio/trumpbeingtrump20.wav",
            "text": "Bing, bing, bing, right!?"
        }, {
            "file": "audio/trumpbeingtrump21.wav",
            "text": "Oy, oy, oyee..."
        }, {
            "file": "audio/trumpbeingtrump22.wav",
            "text": "I will take care of women, I respect women. I will take take of women."
        }, {
            "file": "audio/trumpbeingtrump23.wav",
            "text": "You know, you could see there where blood coming out of her eyes...uh... blood coming out of her...wherever."
        }, {
            "file": "audio/trumpbeingtrump24.wav",
            "text": "He put glasses on so people will think he is smart!"
        }, {
            "file": "audio/trumpbeingtrump25.wav",
            "text": "You know, i have many millions between facebook and twitter, it's great! It's like owning a newspaper but without the losses, it's incredible!"
        }, {
            "file": "audio/trumpbeingtrump26.wav",
            "text": "Rick Perry should have to have an IQ-test!"
        },

    ];

    var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
    var file = document.getElementById("player").innerHTML = "<embed src=\"" + soundFile.file + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
    var text = document.getElementById("style").innerHTML = "<h1>" + soundFile.text + "</h1>";

    // Animations when clicking
    document.getElementById('img3').className = 'mouthmoving';
    //  document.getElementById('img3').className =
    //    document.getElementById("img3").className.replace
    //       ( /(?:^|\s)mouthmoving(?!\S)/g , '' )

    console.log(test);


};
