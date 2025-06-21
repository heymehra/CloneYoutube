
const names = ["Aarav", "Mia", "Liam", "Sophia", "Noah", "Emma", "Ethan", "Olivia", "Aria", "Lucas"];

export function getRandomName() {
  const randomIndex = Math.floor(Math.random() * names.length);
  return names[randomIndex];
}

const messages = [
  "Keep pushing forward, you're doing great!",
  "Believe in yourself, you've got this!",
  "Every day is a new opportunity to shine.",
  "Success is the sum of small efforts repeated daily.",
  "Stay positive, work hard, and make it happen!"
];

export function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * messages.length);
  return messages[randomIndex];
}

export const findPrime = num => {
   let i, primes = [2, 3], n = 5;
   const isPrime = n => {
      let i = 1, p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
      while (p <= limit) {
         if (n % p === 0) {
            return false;
         }
         i += 1;
         p = primes[i];
      }
      return true;
   }
   for (i = 2; i <= num; i += 1) {
      while (!isPrime(n)) {
         n += 2;
      }
      primes.push(n);
      n += 2;
   };
   return primes[num - 1];
}

    