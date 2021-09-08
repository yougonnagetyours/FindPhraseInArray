//ANSWER TO REVIEW

const inputData = ["stwórz", "sobie", "tutaj", "więcej", "wyrazów", "byłem", "byłem", "wczoraj", "w", "domu", "i", "leżałem", "bardzo", "długo",];

function findPhraseInArray(array, phrase) {
  if (!Array.isArray(array)) throw new Error("First argument is not an array");
  if (array.length === 0) throw new Error("Array has no content");

  // Sprawdzenie czy wszystkie elementy są typu string
  const isEveryElementString = array.every((el) => typeof el === "string");
  //"every" returns true In contrast to filter which creates new array of elements that matches a condition
  if (!isEveryElementString) throw new Error("Every element in array has to be string");

  if (typeof phrase !== "string") throw new Error("Phrase must be a string");

  // Tworzony jest RegExp który w środku zawiera podaną frazę
  const arrayRegexp = new RegExp(`\\w*(${phrase})\\w*`, `g`);

  const resultArray = array.reduce((accumulator, element, id) => {
    // Sprawdzany jest warunek czy w elemencie znajduje się podana fraza
    // Jeśli warunek zwróci true to dodawana jest do akumulatora nowa tablica składającą się z indeksu elementu jak i samego elementu
    if (arrayRegexp.test(element)) accumulator.push([id, element]);
    return accumulator;
  }, []);

  // Jeśli dana fraza nie występuje w tablicy należy wyrzucić error
  if (resultArray.length === 0) throw new Error("The phrase is not in an array");

  return resultArray;
}





const result = findPhraseInArray(inputData, "tut");

console.log(result);