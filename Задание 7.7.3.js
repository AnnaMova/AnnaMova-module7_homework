const users = [
    { name: 'John', age: 25 },
    { name: 'Jane', age: 16 },
    { name: 'Peter', age: 32 },
    { name: 'Mary', age: 19 },
  ];
  
 
  const adults = users.filter(user => user.age >= 18);
  
  const names = adults.map(adult => adult.name);
  
  console.log(adults); 
  console.log(names); 