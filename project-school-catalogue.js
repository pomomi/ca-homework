/* 
School Catalogue
Let’s put your knowledge of classes to the test by creating a 
digital school catalog for the New York City Department of 
Education. The Department of Education wants the catalog to hold 
quick reference material for each school in the city.

We need to create classes for primary and high schools. 
*/

class School {
    constructor(name,level,numberOfStudents) {
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    };
    get name() {
        return this._name;
    };
    get level() {
        return this._level;
    };
    get numberOfStudents() {
        return this._numberOfStudents;
    };
    set numberOfStudents(num) {
        if (isNaN(num)) {
            return 'Invalid input: numberOfStudents must be set to a Number.';
          }
          return this._numberOfStudents = num;
    };
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    };
    static pickSubstituteTeacher(array) {
        let random = Math.floor(Math.random()*array.length);
        return array[random];
    };
};

class Primary extends School {
    constructor(name,numberOfStudents,pickUpPolicy) {
        super(name,'primary',numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    };
    get pickUpPolicy() {
        return this._pickUpPolicy;
    }
};

class Middle extends School {
    constructor(name,level,numberOfStudents) {
        super(name,level,numberOfStudents);
    };
};

class High extends School {
    constructor(name,numberOfStudents,sportsTeams) {
        super(name,'high',numberOfStudents);
        this._sportsTeams = sportsTeams;
    };
    get sportsTeams() {
        console.log(this._sportsTeams);
    };
};


// Test Primary School:
const lorraineHansbury = new Primary('Lorraine Hansbury',514,'Students must be picked up by a parent, guardian, or a family member over the age of 13.')
lorraineHansbury.quickFacts();
// Assign Sub. teacher:
console.log(`The assigned substitute for ${lorraineHansbury.name} will be ${School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'])}.`)


// Test High School:
const alSmith = new High('Al E. Smith',415,['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;