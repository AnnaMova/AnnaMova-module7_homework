function calculate(a, b, operator) {
    switch (operator) {
      case "+":
        return a + b;
      case "-":
        return a - b;
      case "*":
        return a * b;
      case "/":
        return a / b;
      default:
        return "Неверный оператор";
    }
  }
  
  const operation = {
    a: 2,
    b: 3,
    operator: "+",
  };
  
  const result = calculate.apply(operation, [2, 3, "+"]);
  
  console.log(result); 