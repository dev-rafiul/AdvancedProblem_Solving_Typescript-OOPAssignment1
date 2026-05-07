//Filter Even Numbers
const filterEvenNumbers = (numbers: number[]): number[] => {
    return numbers.filter((num) => num % 2 === 0)
}











// Reverse String
const reverseString = (str: string): string => {
    let result = "";
    for(let i = str.length - 1; i >= 0; i--){
        result = result + str[i]
    }
    return result
}












// strong or number
type strORnum = string | number

const checkType = (value: strORnum) => {
    if(typeof value === "string"){
        return "String"
    }
    else if(typeof value === 'number'){
        return "Number"
    }
    else{
        return "Nothing"
    }
}
checkType(42)










const getProperty = (obj: any, key: keyof typeof obj) => {
  return obj[key];
}

const user = { id: 1, name: "John Doe", age: 21 };

console.log(getProperty(user, "name"));











interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book) {
  return {
    title: book.title,
    author: book.author,
    publishedYear: book.publishedYear,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
















class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

console.log(student.getDetails());