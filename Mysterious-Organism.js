// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

// Factory Function: Returns object with the number of the specimen (ID) + DNA.
const pAequorFactory = (specimenNum, dna) => {
  return {
    specimenNum: specimenNum,
    dna: dna,
    //Mutates one base to another base when it is run.
    mutate() {
      let randomIndex = Math.floor(Math.random() * 15);
      let randomBase = this.dna[randomIndex];
      let dnaBasesA = ['T', 'C', 'G'];
      let dnaBasesT = ['A', 'C', 'G'];
      let dnaBasesC = ['A', 'T', 'G'];
      let dnaBasesG = ['A', 'T', 'C'];
      randomBase === 'A' ? this.dna[randomIndex] = dnaBasesA[Math.floor(Math.random() * 3)] :
      randomBase === 'T' ? this.dna[randomIndex] = dnaBasesT[Math.floor(Math.random() * 3)] :
      randomBase === 'C' ? this.dna[randomIndex] = dnaBasesC[Math.floor(Math.random() * 3)] :
      randomBase === 'G' ? this.dna[randomIndex] = dnaBasesC[Math.floor(Math.random() * 3)] :null;
      return this.dna;
    },
    //Returns the percentages of bases located in the same space when comparing two specimens.
    compareDNA(pAequor) {
      let dnaCounter = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === pAequor.dna[i]) {dnaCounter = dnaCounter + 1};
      }
      dnaCounter = dnaCounter / 15;
      dnaCounter = dnaCounter * 100;
      dnaCounter = dnaCounter.toFixed(2);
      return `Specimen ${this.specimenNum} and Specimen ${pAequor.specimenNum} have ${dnaCounter}% DNA in common.`
    },
    //Whether or not this specimen is likely to survive based on it containing at least 60% C/Gs 
    willLikelySurvive() {
      let dnaCounter = 0;
      for (i = 0; i < 15; i++) {
        if (this.dna[i] === 'C') {dnaCounter = dnaCounter + 1} 
        else if (this.dna[i] === 'G') {dnaCounter = dnaCounter +1};
      }
      dnaCounter = dnaCounter / 15;
      dnaCounter = dnaCounter * 100;
      if (dnaCounter >= 60) {return true} else {return false};
    },
  }
}

//Creating 30 instances of pAequor that can survive.
const thirtySurvivors = () => {
  let survivors = [];
  let i = 0;
  while (survivors.length < 30) {
    i++;
    let tempObj = pAequorFactory(i,mockUpStrand());
    if (tempObj.willLikelySurvive() === true) {survivors.push(tempObj)};
  }
  return survivors;
}


//Running Tests
let test = pAequorFactory(0, mockUpStrand());
console.log(test); 

let test2 = pAequorFactory(1, mockUpStrand());
console.log(test2);
console.log(test2.willLikelySurvive());

let test3 = thirtySurvivors();
console.log(test3);












