const mixedArray = ["Math", 67, true, 'D'];
const slideshowImages = [
  { src: "images/burger.svg", alt: "Classic burger with lettuce and cheese", caption: "Classic burger" },
  { src: "images/pizza.svg", alt: "Pizza topped with tomato and basil", caption: "Margherita pizza" },
  { src: "images/salad.svg", alt: "Fresh garden salad in a bowl", caption: "Garden salad" }
];

function addNumbers(numbers) {
  return numbers.reduce((sum, number) => sum + number, 0);
}

function findMaxNumber() {
  if (arguments.length === 0) {
    return undefined;
  }

  return Math.max(...arguments);
}

function addOnlyNumbers(mixed) {
  return mixed.reduce((sum, value) => {
    const number = parseFloat(value);
    return Number.isNaN(number) ? sum : sum + number;
  }, 0);
}

function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

function reverseWords(sentence) {
  return sentence.trim().split(/\s+/).reverse().join(" ");
}

function getCurrentDate() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function changeIt() {
  document.getElementById("message").textContent = "Paragraph changed!";
}

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");
  const slideshowImage = document.getElementById("slideshow-image");
  const slideshowCaption = document.getElementById("slideshow-caption");
  let currentSlide = 0;
  let visitorName;
  let favoriteFood;
  let promptError;

  try {
    visitorName = prompt("What is your name?");
    favoriteFood = prompt("What is your favorite food?");
  } catch (error) {
    promptError = error;
  }

  function showSlide(index) {
    currentSlide = (index + slideshowImages.length) % slideshowImages.length;
    const slide = slideshowImages[currentSlide];
    slideshowImage.src = slide.src;
    slideshowImage.alt = slide.alt;
    slideshowCaption.textContent = slide.caption;
  }

  document.getElementById("previous-slide").addEventListener("click", () => {
    showSlide(currentSlide - 1);
  });
  document.getElementById("next-slide").addEventListener("click", () => {
    showSlide(currentSlide + 1);
  });

  if (promptError) {
    content.textContent = `Unable to show the prompts: ${String(promptError)}`;
  } else if (visitorName !== null && favoriteFood !== null) {
    content.textContent = `Hello, ${visitorName}! Your favorite food is ${favoriteFood}.`;
  } else {
    content.textContent = "You skipped one or both questions.";
  }

  document.getElementById("array-to-string").textContent = mixedArray.toString();
  document.getElementById("array-joined").textContent = mixedArray.join(" & ");

  const indexedValues = [];
  mixedArray.forEach((value, index) => {
    indexedValues.push(`${index}: ${value}`);
  });
  document.getElementById("array-indexed").textContent = indexedValues.join("\n");

  document.getElementById("add-numbers-result").textContent = addNumbers([1, 2, 3, 4]);
  document.getElementById("find-max-result").textContent = findMaxNumber(12, 4, 27, 9);
  document.getElementById("add-only-numbers-result").textContent = addOnlyNumbers([4, 5, "3.0 birds", true, "birds2"]);
  document.getElementById("count-vowels-result").textContent = countVowels("Hello, world!");
  document.getElementById("reverse-words-result").textContent = reverseWords("See you later");
  document.getElementById("current-date-result").textContent = getCurrentDate();
});
