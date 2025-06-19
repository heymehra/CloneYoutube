
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



    