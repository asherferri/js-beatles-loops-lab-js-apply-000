function theBeatlesPlay(instruments, musicians) {
var string = [];
	

for (e=0; e <musicians.length; e++) {
	string[e] = "he";
 		}

 	for (i=0; i<musicians.length; i++) {
 		string[i] += (`musicians[i] + " plays " + instruments[i]`) ;
	}
	
return string;
}
 theBeatlesPlay(["Why", "No"] , ["Guitar", "Hello"]);