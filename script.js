const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów", "byłem", "byłem", "wczoraj", "w", "domu", "i", "leżałem", "bardzo", "długo",];

const findPhraseInArray = (array, phrase) => {

  if (!Array.isArray(array)) throw new Error('Podaj tablicę!');
  if (typeof phrase != 'string') throw new Error('Podaj stringa');

  const arrayCopy = [...array];

  for (const index in arrayCopy){
    const id = parseInt(index);
    
    if (arrayCopy[id].includes(phrase)){
      console.log(id)
      console.log(arrayCopy[id]);
    }
  }

  // return
};





// przykładowe działanie:
const result = findPhraseInArray(inputData, "był");
// result === [ [2, 'tutaj'], [5, 'TUTAJ'] ]