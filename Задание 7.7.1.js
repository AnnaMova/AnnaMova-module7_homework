function printInfo(name, age) {
    console.log(`Name: ${name}, Age: ${age}`);
  }
  
  const person = {
    name: "John",
    age: 30,
  };
  
  printInfo.call(person, person.name, person.age); 