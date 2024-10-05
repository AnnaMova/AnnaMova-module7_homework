function getUniqueSortedNumbers(numbers) {
    const uniqueNumbers = new Set(numbers);
    const uniqueNumbersArray = Array.from(uniqueNumbers);
    uniqueNumbersArray.sort((a, b) => a - b);
    return uniqueNumbersArray;
  }
  
  const numbers = [1, 2, 3, 3, 4, 4, 5, 1];
  const uniqueSortedNumbers = getUniqueSortedNumbers(numbers);
  console.log(uniqueSortedNumbers); 