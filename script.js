

function playRandomSound(){
     // var sounds = ["givetrumpsomewaterplz.wav",
     //  "trumpbeingtrump2.wav", 
     //  "trumpbeingtrump3.wav",
     //  "trumpbeingtrump4.wav",
     //  "trumpbeingtrump5.wav",
     //  "trumpbeingtrump6.wav",
     //  "trumpbeingtrump7.wav",
     //  "trumpbeingtrump8.wav",
     //  "trumpbeingtrump9.wav",
     //  "trumpbeingtrump10.wav",
     //  "trumpbeingtrump11.wav",
     //  "trumpbeingtrump12.wav",
     //  "trumpbeingtrump13.wav",
     //  "trumpbeingtrump14.wav",
     //  "trumpbeingtrump15.wav",
     //  "trumpbeingtrump16.wav",
     //  "trumpbeingtrump17.wav",
     //  "trumpbeingtrump18.wav",
     //  "trumpbeingtrump19.wav",
     //  "trumpbeingtrump20.wav",
     //  "trumpbeingtrump21.wav",
     //  "trumpbeingtrump22.wav",
     //  "trumpbeingtrump23.wav",
     //  "trumpbeingtrump24.wav",
     //  "trumpbeingtrump25.wav",
     //  "trumpbeingtrump26.wav"

     //    ];

        var sounds = [
        {
          "file": "givetrumpsomewaterplz.wav",
          "text": "...Hello? Can I get some water????..."
        },
        {
          "file": "trumpbeingtrump2.wav",
          "text": "Bing, bing, bing..."
        },
        {
          "file": "trumpbeingtrump3.wav",
          "text": "Bing, bing, bong, bong, bing..."
        },
        {
          "file": "trumpbeingtrump4.wav",
          "text": "We can't sell beef...it's peanuts!"
        },
        {
          "file": "trumpbeingtrump5.wav",
          "text": "I said it's ILLEGAL!"
        },
        {
          "file": "trumpbeingtrump6.wav",
          "text": "You have to get hit with a kumatsu tractor..."
        },
        {
          "file": "trumpbeingtrump7.wav",
          "text": "So what I'm gonna do is SPAN OUT, span out!"
        },
        {
          "file": "trumpbeingtrump8.wav",
          "text": "I would never give up my microphone! I thought that was discusting!"
        },
        {
          "file": "trumpbeingtrump9.wav",
          "text": "Terrible paper...I love it."
        },
        {
          "file": "trumpbeingtrump10.wav",
          "text": "WHO is Uma married to?"
        },
        {
          "file": "trumpbeingtrump11.wav",
          "text": "Because we're going to hell!"
        },
        {
          "file": "trumpbeingtrump12.wav",
          "text": "Uhmm...we'll do something. We'll go to sleep first."
        },
        {
          "file": "trumpbeingtrump13.wav",
          "text": "Our country is going to hell."
        },
        {
          "file": "trumpbeingtrump14.wav",
          "text": "I beat the people from China, I win!"
        },
        {
          "file": "trumpbeingtrump15.wav",
          "text": "We're tired of the nice people!"
        },
        {
          "file": "trumpbeingtrump16.wav",
          "text": "Arab name, arab name, arab name"
        },
        {
          "file": "trumpbeingtrump17.wav",
          "text": "What are you trying to talk to some of us about joining your little home? "
        },
        {
          "file": "trumpbeingtrump18.wav",
          "text": "He's sweating like a pig! I've never saw a guy sweat like this!"
        },
         {
          "file": "trumpbeingtrump19.wav",
          "text": "He wants to play golf! I play golf, i kill him at golf!"
        },
         {
          "file": "trumpbeingtrump20.wav",
          "text": "Bing, bing, bing, right!?"
        },
         {
          "file": "trumpbeingtrump21.wav",
          "text": "Oy, oy, oyee..."
        },
         {
          "file": "trumpbeingtrump22.wav",
          "text": "I will take care of women, I respect women. I will take take of women."
        },
         {
          "file": "trumpbeingtrump23.wav",
          "text": "You know, you could see there where blood coming out of her eyes...uh... blood coming out of her...wherever."
        },
         {
          "file": "trumpbeingtrump24.wav",
          "text": "He put glasses on so people will think he is smart!"
        },
         {
          "file": "trumpbeingtrump25.wav",
          "text": "You know, i have many millions between facebook and twitter, it's great! It's like owning a newspaper but without the losses, it's incredible!"
        },
         {
          "file": "trumpbeingtrump25.wav",
          "text": "Rick Perry should have to have an IQ-test!"
        },

        ];


      
     var soundFile = sounds[Math.floor(Math.random()*sounds.length)];

     var file = document.getElementById("player").innerHTML="<embed src=\""+soundFile.file+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
     var text = document.getElementById("style").innerHTML="<h1>"+soundFile.text+"</h1>";
     
     console.log(yo)
     console.log(style)


}




