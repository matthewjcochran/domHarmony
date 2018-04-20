/*Hey Prepsters! Let's help Ronald McDonald find true love by revising his online dating profile!*/

// 1. In the nav element, target the span element with the id of "count" and change the number from 0 to 8.

var countElem = document.getElementById('count');
countElem.innerHTML = '5';

// 2. Target the div with the id of 'age' and change the contents to: "21 year old vibrant stud".

var ageElem = document.getElementById('age');
ageElem.innerHTML = '21 year old vibrant stud';


// 3. Target the span element with the id of "distance" and change the number from 1000 to 168.

var distanceElem = document.getElementById('distance');
distanceElem.innerHTML = '168';

// 4. Create a paragraph element with the id of "pro2". In this paragraph, add the following content: "My main objective is to find a Mrs. McDonald." Append this element inside of the paragraph element with the id of "profile".

var newPar = document.createElement('p');
newPar.setAttribute('ID', 'pro2');
newPar.innerHTML = 'My main objective is to find a Mrs. McDonald.';
console.log(newPar);
profile.appendChild(newPar);

// 5. Create a span element of the id of "mail" and give it a content of 11. Append this element into the "Messages" li element.

var newSpan = document.createElement('span');
newSpan.setAttribute('ID', 'mail');
newSpan.innerHTML = 11;
document.getElementsByClassName('menu')[2].appendChild(newSpan);

//6. Target the div id "first-name1" and replace the text "First Name" to "Wendy".

var divElem1 = document.getElementById('first-name1');
divElem1.innerHTML = 'Wendy';

//7. Target the div id "first-name2" and replace the text "First Name" to "Marie".

var divElem2 = document.getElementById('first-name2');
divElem2.innerHTML = 'Marie';

//8. Target the div id "first-name3" and replace the text "First Name" to "Anna".

var divElem3 = document.getElementById('first-name3');
divElem3.innerHTML = 'Anna';