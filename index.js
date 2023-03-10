// Фильтрация строк

const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и", "ю", "У", "Е", "Ы", "А", "О", "Э", "Ё", "Я", "И", "Ю"];

const getVowles = stringToFilter => {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i];

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    };
  }

  return extractedVowels;
}

console.log(getVowles(string));

// Выборка элементов

const workers = [
  { "name": "John", "salary": 500 },
  { "name": "Mike", "salary": 1300 },
  { "name": "Linda", "salary": 1500 }
];

const getWorthyWorkers = (workersArr) => {
  const worthyWorkers = [];

  workersArr.forEach(currentWorker => {
    if (currentWorker.salary > 1000) {
      worthyWorkers.push(currentWorker.name)
    }
  });

  return worthyWorkers;
};

console.log(getWorthyWorkers(workers));

// анализ строки

const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExt = ".html";

  const pathExt = path.slice(-5);

  if (pathExt == requiredExt) {
    return true
  } else {
    return false
  }
}

console.log(isHtml(path))

// Фильтрация массива

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
  return num % 2 == 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
  const filterArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filterArray.push(num);
    }
  })

  return filterArray
}

console.log(filterArray(mixedArray, isEven));