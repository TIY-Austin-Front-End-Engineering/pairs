'use strict';

function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

var students = [
	'Aaron',
	'Gabriel',
	'Michael D.',
	'Whitney',
	'Bob',
	'Troy',
	'Jacob',
	'Mory',
	'Josiah',
	'Gladys',
	'Mike M.',
	'Joseph',
	'Michael A.',
	'James',
	'Noel',
	'Leslie'
];

var pairs = [];

while(students.length > 1) {
	var index1 = getRandomInt(0, students.length-1);
	var student1 = students.splice(index1, 1)[0];
	var index2 = getRandomInt(0, students.length-1);
	var student2 = students.splice(index2, 1)[0];

	pairs.push([student1, student2]);
}

for(var i=0; i < students.length; i++){
	pairs[pairs.length-1].push(students[i]);
}

for(var j=0; j < pairs.length; j++) {
	console.log('GROUP '+j+': '+pairs[j].join(' + '));
}