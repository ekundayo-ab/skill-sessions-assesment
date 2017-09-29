const isPrime = (inputNumber) => {
  if (typeof (inputNumber) === 'undefined') { return 'Enter a valid input'; }
  if (typeof (inputNumber) !== 'number') { return 'Only Numbers are allowed'; }
  if (!Number.isInteger(inputNumber)) { return 'Only Whole numbers are allowed'; }
  if (inputNumber < 2) { return 'Not Prime'; }
  if (inputNumber === 2) { return 'Prime'; }
  if (inputNumber > 100) { return 'Only numbers between 1 and 100 allowed'; }

  const checkPrime = [0];
  for (let i = 2; i < inputNumber; i += 1) {
    if (inputNumber % i !== 0 && i !== 1) {
      checkPrime.push(0);
    } else {
      checkPrime.push(1);
    }
  }
  const result = checkPrime.reduce((a, b) => a + b);
  return result > 0 ? 'Not Prime' : 'Prime';
};

export default isPrime;

console.log(isPrime(13));
