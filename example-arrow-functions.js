//  var names = ['Aydar', 'Julie', 'Jen'];

// // names.forEach(function(name) {
// // 	console.log('forEach', name);
// // });

// // names.forEach((name) => {
// // 	console.log('arrowFunc', name);
// // });

// // names.forEach((name) => console.log(name));

// // var returnMe = (name) => name + '!';
// // console.log(returnMe("Aydar"));

// var person = {
// 	name: 'Aydar',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + ' says hello to ' + name);
// 		});
// 	}
// };

// person.greet();

function add(a,b) {
     return a + b; 
};

console.log(add(2, 3));
console.log(add(4, 5));


var addStatement = (a,b) => {
	return a + b;
};

console.log(addStatement(5, 3));
console.log(addStatement(4, 1));


var addExpression = (a,b) => a + b;

console.log(addExpression(5, 11));
console.log(addExpression(24, 1));




