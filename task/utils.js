const isPrime = num => {
    for(let i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
  }

const nthPrime = (quantity) => {
    let iterator = 1;
    
    return [...Array(quantity)].map(() => {
        iterator ++;

        while(!isPrime(iterator)) {
            iterator ++;
        }

        return iterator;
    })
}

module.exports = {
    nthPrime
}