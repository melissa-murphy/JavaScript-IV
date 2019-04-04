// CODE here for your Lambda Classes
class Person {
    constructor(personAttr) {
        this.name = personAttr.name;
        this.age = personAttr.age;
        this.location = personAttr.location;
        this.gender = personAttr.gender;
    }//Methods
    speak() {
        return `Hello, my name is ${name}, and I am from ${location}.`;
    }
}//Person

class Instructor extends Person {
    constructor(instructorAttr) {
        super(instructorAttr);
        this.speciality = instructorAttr.speciality;
        this.favLanguage = instructorAttr.favLanguage;
        this.catchPhrase = instructorAttr.catchPhrase;
    }// Methods
    demo() {
        //rcv string and log out 'Today we are learning about {subject}' 
    }
    grade() {
        //rcv student object, subject string, and logs '{student.name} receives a perfect score on {subject}'
    }
}// Instructor

class Student extends Person {
    constructor(studentAttr) {
        super(studentAttr);
        this.previousBg = studentAttr.previousBg;
        this.className = studentAttr.className;
        this.favSubjects = studentAttr.favSubjects
    }// Methods
    listsSubjects() {
        // console favSubjects
    }
    PRAssignment() {
        // rcv (subject) and log student.name has submitted a PR for {subject}
    }
    sprintChallenge() {
        // rcv (subject) and log student.name has begun sprint challenge on {subject}
    }
}// Student

class ProjectManagers extends Instructor {
    constructor(pmAttr) {
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName;
        this.favInstructor = pmAttr.favInstructor;
    }// Methods
    standUp() {
        // take slack channel and log `{name} announces to {channel}, @channel standy times!​​​​​
    }
    deBugsCode() {
        // takes in student object and log {name} debugs {student.name}'s code on {subject}
    }
}// Project Managers

//Instructor templates
const bob = new Instructor({
    name: 'Bob',
    age: '42',
    location: 'Northern California',
    gender: 'male',
    speciality: 'Ruby',
    favLanguage: 'JS',
    catchPhrase: 'You got this'
})
const mary = new Instructor({
    name: 'Mary',
    age: '34',
    location: 'Western New York',
    gender: 'female',
    speciality: 'Python',
    favLanguage: 'R',
    catchPhrase: 'Get goin!'
})

