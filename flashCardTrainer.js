// Import the flash cards constructor implementations
var flashCards = require('./flashCards.js');

/* 
*
* Basic Flashcard Tests
*
*/

var first240sx = new flashCards.BasicCard('What year did the nissan 240sx (S13) come out?', '1988');
console.log(first240sx.front);
console.log(first240sx.back); 
console.log('-------------------------------------');

var firstjmotor = new flashCards.BasicCard('what motor came in the first japanese 240sx?', 'ca18det');
console.log(firstjmotor.front);
console.log(firstjmotor.back);
console.log('-------------------------------------');

var firstamotor = new flashCards.BasicCard('What motor came in the first american 240sx?', 'ka24de');
console.log(firstamotor.front);
console.log(firstamotor.back);
console.log('-------------------------------------');

var secondjmotor = new flashCards.BasicCard('What was the second motor to come in the japanse 240sx', 'sr20det');
console.log(secondjmotor.front);
console.log(secondjmotor.back);
console.log('-------------------------------------');

var secondamotor = new flashCards.BasicCard('What was the second motor to come in the american 240sx', 'ka24de');
console.log(secondamotor.front);
console.log(secondamotor.back);
console.log('-------------------------------------');




/* 
*
* Cloze-Deleted Flashcard Tests
*
*/

first240sx = new flashCards.ClozeCard('What year did the nissan 240sx (S13) come out?', '1988');
console.log(first240sx.full);
console.log(first240sx.cloze); 
console.log(first240sx.partial); 
console.log('-------------------------------------');

firstjmotor= new flashCards.ClozeCard('what motor came in the first japanese 240sx?', 'ca18det');
console.log(firstjmotor.full);
console.log(firstjmotor.cloze); 
console.log(firstjmotor.partial); 
console.log('-------------------------------------');

firstamotor = new flashCards.ClozeCard('What motor came in the first american 240sx?', 'ka24de');
console.log(firstamotor.full);
console.log(firstamotor.cloze); 
console.log(firstamotor.partial); 
console.log('-------------------------------------');

var secondjmotor = new flashCards.ClozeCard('What was the second motor to come in the japanse 240sx', 'sr20det');
console.log(secondjmotor.full);
console.log(secondjmotor.cloze); 
console.log(secondjmotor.partial); 
console.log('-------------------------------------');

var secondamotor = new flashCards.ClozeCard('What was the second motor to come in the american 240sx', 'ka24de');
console.log(secondamotor.full);
console.log(secondamotor.cloze); 
console.log(secondamotor.partial); 
console.log('-------------------------------------');

