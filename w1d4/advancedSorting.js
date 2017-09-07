var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

students.sort(function(a, b){
  // sort by name asceding
  if (a.name > b.name) {
    return 1;
  }
  else if (a.name < b.name) {
    return -1;
  }
  else {
    // if names are equal, sort by age descending
    return b.age - a.age;
  }
});

console.log(students);