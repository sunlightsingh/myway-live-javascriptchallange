function fizzBuzz() {
  // Get phone number input from the user
  const phoneNumber = prompt("Enter your phone number:");

  // Calculate the sum of the digits in the phone number
  const phoneNumberSum = Array.from(phoneNumber.toString()).reduce(
    (sum, digit) => sum + Number(digit),
    0
  );

  
  let output = "";
  for (let i = 1; i <= phoneNumberSum; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      output += "FizzBuzz ";
    } else if (i % 4 === 0) {
      output += "Fizz ";
    } else if (i % 5 === 0) {
      output += "Buzz ";
    } else {
      output += i + " ";
    }
  }

  console.log(output);
}


fizzBuzz();


