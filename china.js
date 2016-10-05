

function playRandomSound(){
     var sounds = ["givetrumpsomewaterplz.wav",
      "trumpbeingtrump2.wav", 
      "trumpbeingtrump3.wav",
      "trumpbeingtrump4.wav",
      "trumpbeingtrump5.wav",
      "trumpbeingtrump6.wav",
      "trumpbeingtrump7.wav",
      "trumpbeingtrump8.wav",
      "trumpbeingtrump9.wav",
      "trumpbeingtrump10.wav",
      "trumpbeingtrump11.wav",
      "trumpbeingtrump12.wav",
      "trumpbeingtrump13.wav",
      "trumpbeingtrump14.wav",
      "trumpbeingtrump15.wav",
      "trumpbeingtrump16.wav",
      "trumpbeingtrump17.wav",
      "trumpbeingtrump18.wav",
      "trumpbeingtrump19.wav",
      "trumpbeingtrump20.wav",
      "trumpbeingtrump21.wav",
      "trumpbeingtrump22.wav",
      "trumpbeingtrump23.wav",
      "trumpbeingtrump24.wav",
      "trumpbeingtrump25.wav",
      "trumpbeingtrump26.wav"

        ];
      
     var soundFile = sounds[Math.floor(Math.random()*sounds.length)];
     document.getElementById("player").innerHTML="<embed src=\""+soundFile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

