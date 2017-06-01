 var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

   var wins = 0;
   var losses = 0;
   var guesses = 0;

   		var randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];
   		console.log(randomLetter)

  document.onkeypress = function(event) {
  	var userGuess = event.key;

  	if(userGuess === randomLetter) {
  		wins++;
  	}
    else {
    	guesses --;
    }

    if(guesses === 0){
    	losses++
    }  
    guessCount += 1;
    
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses Left: " + guesses;
    document.getElementById('count').innerHTML = "You Guesses so far: " + count;
  }
