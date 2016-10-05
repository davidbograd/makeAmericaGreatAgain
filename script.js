

function playRandomSound(){
     var sounds = ["audio/givetrumpsomewaterplz.wav",
      "audio/trumpbeingtrump2.wav", 
      "audio/trumpbeingtrump3.wav",
      "audio/trumpbeingtrump4.wav",
      "audio/trumpbeingtrump5.wav",
      "audio/trumpbeingtrump6.wav",
      "audio/trumpbeingtrump7.wav",
      "audio/trumpbeingtrump8.wav",
      "audio/trumpbeingtrump9.wav",
      "audio/trumpbeingtrump10.wav",
      "audio/trumpbeingtrump11.wav",
      "audio/trumpbeingtrump12.wav",
      "audio/trumpbeingtrump13.wav",
      "audio/trumpbeingtrump14.wav",
      "audio/trumpbeingtrump15.wav",
      "audio/trumpbeingtrump16.wav",
      "audio/trumpbeingtrump17.wav",
      "audio/trumpbeingtrump18.wav",
      "audio/trumpbeingtrump19.wav",
      "audio/trumpbeingtrump20.wav",
      "audio/trumpbeingtrump21.wav",
      "audio/trumpbeingtrump22.wav",
      "audio/trumpbeingtrump23.wav",
      "audio/trumpbeingtrump24.wav",
      "audio/trumpbeingtrump25.wav",
      "audio/trumpbeingtrump26.wav"

        ];
      
     var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
     document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

