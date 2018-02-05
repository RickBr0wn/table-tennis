// Randomise an array

var arr = ['Mark', 'Elwyn', 'Peter', 'John R', 'Martin', 'Ellie', 'Sue M', 'Hayley A', 'Paul', 'Jon C', 'Tanya', 'Mandy', 'Jamie', 'James J', 'Malcolm', 'Stuart', 'Sam', 'Sophie', 'Matt', 'Philip', 'Andrea', 'Heather', 'Susan', 'David J', 'Irianna', 'Steve', 'Jane', 'Jon R', 'Lynsey', 'Jackie', 'Claire', 'Beki', 'Dawn', 'Kate', 'Michelle', 'Tracey', 'Natasha', 'Moya', 'Rachel', 'Demelza', 'John W', 'Liz', 'Bill D', 'Sarah', 'James H', 'Alex', 'Sue S', 'Lesley', 'Emily', 'Hana'];

let randomArray = ["Mandy", "Liz", "Susan", "Jamie", "Lesley", "Rachel", "James H", "Lynsey", "Tanya", "Ellie", "John W", "Alex", "Beki", "Malcolm", "Matt", "Claire", "Martin", "Peter", "Philip", "Bill D", "Emily", "Steve", "Kate", "David J", "John R", "Elwyn", "Jon C", "James J", "Tracey", "Hana", "Jackie", "Hayley A", "Sarah", "Andrea", "Sophie", "Paul", "Demelza", "Stuart", "Jane", "Mark", "Sue S", "Jon R", "Michelle", "Irianna", "Natasha", "Moya", "Sue M", "Sam", "Dawn", "Heather"]

function shuffleArray(arr) {
	for (var i = 0; i < arr.length; i++) {
  	let shuffled = [];
    let randomIndex = Math.floor(Math.random() *  arr.length);
		// If an item with this index already exists in the shuffled array, generate another index.
    while (shuffled.indexOf(arr[randomIndex]) !== -1) {
    	randomIndex = Math.floor(Math.random() *  arr.length);
    }
    	shuffled.push(arr[randomIndex]);
    }
    return shuffled;
}

console.log(shuffleArray(arr));