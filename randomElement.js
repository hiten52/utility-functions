// Function to generate random number

const randomElement = (arr) => (
  arr[Math.floor(Math.random() * arr.length)]
);

export default randomElement;
