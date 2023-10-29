class Person {
    constructor(firstName, lastName, age, email) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.email = email;
    }
  
    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }
  
    getAge() {
      return this.age;
    }
  
    getEmail() {
      return this.email;
    }
  }
  
  // Example usage:
  const person1 = new Person("SARAVANAN", "K", 27, "gksaravanan008@gmail.com");
  console.log("Full Name: " + person1.getFullName());
  console.log("Age: " + person1.getAge());
  console.log("Email: " + person1.getEmail());