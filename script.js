prompt("Please enter a list of comma-separated froyo flavors:");

flavors = ["vanilla", "vanilla", "vanilla", "strawberry", "coffee", "coffee"];

//flavorsUserInput: ["vanilla", "vanilla", "vanilla","strawberry", "coffee", "coffee"];

//getElementById(("flavorsUserInput").value);

const countFlavors = (arr) => {
  const froyoCount = {};
  for (let flavor of arr) {
    // trim whitespace
    flavor = flavor.trim();
    // check if flavor already exists and add to count
    flavor in froyoCount ? (froyoCount[flavor] += 1) : (froyoCount[flavor] = 1);
  }
  return froyoCount;
};

console.table(countFlavors(flavors));
