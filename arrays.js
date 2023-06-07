var petNames = ["Bonnie", "Millie", "Archie", "Daisy"];
var dollars = [45, 78, 91, 99]
var rentPaid = [true, true, true, true]

// the pop method removes the last element in an array and will there fore remove 'Daisy' from the array
petNames.pop();
console.log(petNames);


// the shift method removes the first item in an array and therefore will remove 45

dollars.shift();
console.log(dollars);

//the unshift method adds an element to the beggining of an array therefore this will add 'false'

rentPaid.unshift(false);
console.log(rentPaid);
