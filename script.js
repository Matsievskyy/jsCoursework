const name = document.getElementById("name");
const question = document.getElementById("question");
const options = [
  "It is certain",
  "It is decidedly so",
  "Without a doubt",
  "Yes – definitely",
  "You may rely on it",
  "As I see it, yes",
  "Most likely",
  "Outlook good",
  "Yes",
  "Signs point to yes",
  "Don’t count on it",
  "My reply is no",
  "My sources say no",
  "Outlook not so good",
  "Very doubtful",
  "Reply hazy, try again",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again"
];
const results = document.getElementById("results");
let result = [];

function removeError(element) {
  element.classList.remove('error');
}

ball.addEventListener('click', function () {
  const name = document.getElementById("name")
  if (name.value === "" || question.value === "") {
    ball.classList.toggle("shakeEmpty");
    name.classList.add("error");
    question.classList.add("error");
  } else {
    eighth.classList.toggle("eighthHide");
    ball.classList.toggle("shake");
    answers.classList.toggle("answersShow");
    const rand = options[Math.floor(Math.random() * options.length)];
    answers.innerHTML = rand;
    const res = {
      name: name.value,
      question: question.value,
      answer: rand
    }
    result.push(res);
    setData(result);
    name.value = "";
    question.value = "";
  }
});

function setData(arr) {
  if (arr.length >= 0) {
    let tmp = "";
    for (let i = 0; i < arr.length; i++) {
      tmp += renderItem(i, arr[i]);
    }
    results.innerHTML = tmp;
  }
}

function renderItem(i, item) {
  return `
<div class="number">
  <p>${i + 1}</p>
</div>
  <div class="users">
    <p id="users">${item.name}</p>
  </div>
  <div class="question">
    <p id="questionArray">${item.question}</p>
  </div>
  <div class="answer">
    <p id="answer">${item.answer}</p>
  </div>
`
}










