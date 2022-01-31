// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
}; 

// My code:
const pAequorFactory = (num,array) => {
  return {
    specimenNum: num,
    dna: array,
    mutate() {
      let diceRoll = Math.floor(Math.random()*15)
      let chosenOne = this.dna[diceRoll]
      let newBase = returnRandBase();
      while (chosenOne === newBase) {
        newBase = returnRandBase();
      } 
      if (chosenOne !== newBase) {
        this.dna.splice(diceRoll,1,newBase)
        return this.dna;
      }
    },
    compareDNA(object) {
      let myDNA = this.dna;
      let theirDNA = object.dna;
      let count = 0
      for (let i = 0; i < 15; i++) {
          if(myDNA[i]==theirDNA[i]){
            count++;
          }
        }
      count = (count/15) * 100
      console.log(`Specimen ${this.specimenNum} and Specimen ${object.specimenNum} have ${count}% DNA in common.`);
    },
    willLikelySurvive() {
      let cg = 0
      for(let i = 0; i < 15; i++) {
        if (this.dna[i] === 'C' || this.dna[i] === 'G') {
          cg++;
        }
      }
      if ((cg/15) * 100 >= 60) {
        return true
      } else {
        return false
      }
    }
  }
};

// To build 30 random speciments that can survive:
function releaseTheQuacken() {
  let object;
  for (let i = 0; i <= 30; i++) {
    object = pAequorFactory(i,mockUpStrand());
    if (object.willLikelySurvive()) {
      studyLater.push(object);
    } else {
      i--;
    }
  }
}

// test function:
let studyLater = [];
releaseTheQuacken();


















