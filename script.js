const hiraganaChars = [
    { character: "あ", romanized: "a", choices: ["a", "i", "u", "e", "o"] },
    { character: "い", romanized: "i", choices: ["a", "i", "u", "e", "o"] },
    { character: "う", romanized: "u", choices: ["a", "i", "u", "e", "o"] },
    { character: "え", romanized: "e", choices: ["a", "i", "u", "e", "o"] },
    { character: "お", romanized: "o", choices: ["a", "i", "u", "e", "o"] },
    { character: "か", romanized: "ka", choices: ["ka", "ki", "ku", "ke", "ko"] },
    { character: "き", romanized: "ki", choices: ["ka", "ki", "ku", "ke", "ko"] },
    { character: "く", romanized: "ku", choices: ["ka", "ki", "ku", "ke", "ko"] },
    { character: "け", romanized: "ke", choices: ["ka", "ki", "ku", "ke", "ko"] },
    { character: "こ", romanized: "ko", choices: ["ka", "ki", "ku", "ke", "ko"] },
    { character: "さ", romanized: "sa", choices: ["sa", "shi", "su", "se", "so"] },
    { character: "し", romanized: "shi", choices: ["sa", "shi", "su", "se", "so"] },
    { character: "す", romanized: "su", choices: ["sa", "shi", "su", "se", "so"] },
    { character: "せ", romanized: "se", choices: ["sa", "shi", "su", "se", "so"] },
    { character: "そ", romanized: "so", choices: ["sa", "shi", "su", "se", "so"] },
    // Add more hiragana characters and romanized versions as needed
];
let currentIndex = 0;

const hiraganaCharElement = document.getElementById("hiraganaChar");
const choicesElement = document.getElementById("choices");
const resultElement = document.getElementById("result");
const nextCardButton = document.getElementById("nextCard");
const startTestButton = document.getElementById("startTest");

function displayHiragana() {
    const currentCard = hiraganaChars[currentIndex];
    hiraganaCharElement.textContent = currentCard.character;
    
    // Clear previous choices
    choicesElement.innerHTML = "";

    // Add multiple-choice options
    currentCard.choices.forEach((choice) => {
        const choiceButton = document.createElement("button");
        choiceButton.textContent = choice;
        choiceButton.addEventListener("click", () => checkAnswer(choice, currentCard.romanized));
        choicesElement.appendChild(choiceButton);
    });

    resultElement.textContent = "";
}

function checkAnswer(userAnswer, correctAnswer) {
    if (userAnswer === correctAnswer) {
        resultElement.textContent = "Correct!";
    } else {
        resultElement.textContent = "Incorrect. Try again.";
    }
}

function nextCard() {
    currentIndex++;
    if (currentIndex >= hiraganaChars.length) {
        currentIndex = 0;
    }
    displayHiragana();
}

function startTest() {
    currentIndex = 0;
    displayHiragana();
    nextCardButton.style.display = "block";
    startTestButton.style.display = "none";
}

nextCardButton.addEventListener("click", nextCard);
startTestButton.addEventListener("click", startTest);

// Hide the "Next Card" button initially
nextCardButton.style.display = "none";





