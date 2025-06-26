function greet(name) {
  let userName = name ?? "Guest";
  console.log("Hello, " + userName);
}

greet();           // Hello, Guest
greet("Rohit");    // Hello, Rohit
