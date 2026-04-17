const users = [
  { id: 1, name: "Siddharth", age: 21, city: "Haridwar", role: "Student" },
  { id: 2, name: "Aditya", age: 23, city: "Rishikesh", role: "Developer" },
  { id: 3, name: "Saksham", age: 20, city: "Dehradun", role: "Designer" },
  { id: 4, name: "Neha", age: 25, city: "Delhi", role: "Manager" },
  { id: 5, name: "Aman", age: 19, city: "Haridwar", role: "Intern" },
  { id: 6, name: "Priya", age: 22, city: "Mumbai", role: "Developer" }
];


const peopleFromHaridwar = users.filter( (ct) => {
  return ct.city === "Haridwar"
}
)
console.log(peopleFromHaridwar)