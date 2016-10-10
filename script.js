function playRandomSound() {

    var sounds = [{
            "file": "audio/trumpbeingtrump1.wav",
            "text": "Hello...Hello? Can I get some water????...",
            "length": 5000
        }, {
            "file": "audio/trumpbeingtrump2.wav",
            "text": "Bing, bing, bing...",
            "length": 1000
        }
        , {
            "file": "audio/trumpbeingtrump3.wav",
            "text": "Bing, bing, bong, bong, bing..."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump4.wav",
            "text": "We can't sell beef...it's peanuts!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump5.wav",
            "text": "I said it's ILLEGAL!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump6.wav",
            "text": "You have to get hit with a kumatsu tractor..."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump7.wav",
            "text": "So what I'm gonna do is SPAN OUT, span out!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump8.wav",
            "text": "I would never give up my microphone! I thought that was discusting!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump9.wav",
            "text": "Terrible people...I love it."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump10.wav",
            "text": "WHO is Uma married to?"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump11.wav",
            "text": "Because we're going to hell!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump12.wav",
            "text": "Uhmm...we'll do something. We'll go to sleep first."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump13.wav",
            "text": "Our country is going to hell."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump14.wav",
            "text": "I beat the people from China, I win!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump15.wav",
            "text": "We're tired of the nice people!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump16.wav",
            "text": "Arab name, arab name, arab name"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump17.wav",
            "text": "What are you trying to talk to some of us about joining your little home? "
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump18.wav",
            "text": "He's sweating like a pig! I've never saw a guy sweat like this!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump19.wav",
            "text": "He wants to play golf! I play golf, i kill him at golf!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump20.wav",
            "text": "Bing, bing, bing, right!?"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump21.wav",
            "text": "Oy, oy, oyee..."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump22.wav",
            "text": "I will take care of women, I respect women. I will take take of women."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump23.wav",
            "text": "You know, you could see there where blood coming out of her eyes...uh... blood coming out of her...wherever."
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump24.wav",
            "text": "He put glasses on so people will think he is smart!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump25.wav",
            "text": "You know, i have many millions between facebook and twitter, it's great! It's like owning a newspaper but without the losses, it's incredible!"
            "length": 2000
        }, {
            "file": "audio/trumpbeingtrump26.wav",
            "text": "Rick Perry should have to have an IQ-test!"
            "length": 2000
        },

    ];

    var soundFile = sounds[Math.floor(Math.random() * sounds.length)];
    var file = document.getElementById("player").innerHTML = "<embed src=\"" + soundFile.file + "\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
    var text = document.getElementById("style").innerHTML = "<h1>" + soundFile.text + "</h1>";

    // Animations when clicking
    document.getElementById('img3').className = 'mouthmoving';

    setTimeout(function() {
      $("#img3").removeClass('mouthmoving');
    }, soundFile.length);

    console.log(soundFile.length);


    //  document.getElementById('img3').className =
    //    document.getElementById("img3").className.replace
    //       ( /(?:^|\s)mouthmoving(?!\S)/g , '' )


    // $('.img3').removeClass().addClass('mouthmoving').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
    //         $(this).removeClass();
    //     });
    //
    // $(".mouthmoving").css('animation-duration:', "10s");
    //    document.querySelector('.mouthmoving').style.top = Math.round( screen.height * percent)+'px';

};
