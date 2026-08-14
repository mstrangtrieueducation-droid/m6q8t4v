const ASSET = "assets/extracted/";

const sections = [
  {
    letter: "A",
    title: "Listen and circle the correct words.",
    note: "Nghe audio và chọn từ em nghe được.",
    points: 6,
    audio: "assets/audio/Listening-A.mp3",
    questions: [
      choice("A1", "1. Choose the word you hear.", ["board game", "game"], "game", "Trong audio, từ được đọc là “game”."),
      choice("A2", "2. Choose the word you hear.", ["pins", "stickers"], "pins", "Trong audio, từ được đọc là “pins”."),
      choice("A3", "3. Choose the word you hear.", ["farmer", "fancy"], "farmer", "Trong audio, từ được đọc là “farmer”."),
      choice("A4", "4. Choose the word you hear.", ["milk", "market"], "milk", "Trong audio, từ được đọc là “milk”."),
      choice("A5", "5. Choose the word you hear.", ["buy", "sell"], "sell", "Trong audio, từ được đọc là “sell”."),
      choice("A6", "6. Choose the word you hear.", ["soup", "ice cream"], "ice cream", "Trong audio, cụm từ được đọc là “ice cream”.")
    ]
  },
  {
    letter: "B",
    title: "Look and write the words.",
    note: "Dùng các từ: game, comic book, pins, board game, doll.",
    points: 4,
    questions: [
      input("B1", "Picture 1", ["board game"], "Hình số 1 là một board game.", `${ASSET}b-picture-1-board-game.png`),
      input("B2", "Picture 2", ["comic book"], "Hình số 2 là một comic book.", `${ASSET}b-picture-2-comic-book.png`),
      input("B3", "Picture 3", ["doll"], "Hình số 3 là một doll.", `${ASSET}b-picture-3-doll.png`),
      input("B4", "Picture 4", ["game"], "Hình số 4 là một game.", `${ASSET}b-picture-4-game.png`)
    ]
  },
  {
    letter: "C",
    title: "Look at the pictures and letters. Write the words.",
    note: "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
    points: 3,
    questions: [
      input("C1", "afremr", ["farmer"], "Sắp xếp afremr thành farmer.", `${ASSET}page1-img_p0_2.png`),
      input("C2", "kaemrt", ["market"], "Sắp xếp kaemrt thành market.", `${ASSET}page1-img_p0_3.png`),
      input("C3", "lapni", ["plain"], "Sắp xếp lapni thành plain.", `${ASSET}page1-img_p0_6.png`)
    ]
  },
  {
    letter: "D",
    title: "Circle or write the correct words.",
    note: "Chọn dạng động từ đúng với chủ ngữ.",
    points: 5,
    questions: [
      choice("D1", "He ___ a cow.", ["has", "have"], "has", "He là ngôi thứ ba số ít nên dùng has."),
      choice("D2", "It ___ need water.", ["don’t", "doesn’t"], "doesn’t", "It là ngôi thứ ba số ít nên dùng doesn’t."),
      choice("D3", "She ___ an ice cream.", ["wants", "want"], "wants", "She là ngôi thứ ba số ít; động từ thêm -s: wants."),
      choice("D4", "It ___ milk.", ["like", "likes"], "likes", "It là ngôi thứ ba số ít; động từ thêm -s: likes."),
      choice("D5", "He doesn’t ___ a doll.", ["has", "have"], "have", "Sau doesn’t, động từ trở về dạng nguyên mẫu: have.")
    ]
  },
  {
    letter: "E",
    title: "Complete with doesn’t like, doesn’t want, or needs.",
    note: "Quan sát hình rồi điền cụm từ phù hợp.",
    points: 3,
    questions: [
      input("E1", "She ___ soup.", ["doesn't want", "does not want"], "Hình cho thấy cô bé không muốn món soup, nên dùng doesn’t want.", `${ASSET}page2-img_p1_2.png`),
      input("E2", "He ___ cucumbers.", ["doesn't like", "does not like"], "Hình cho thấy cậu bé không thích cucumbers, nên dùng doesn’t like.", `${ASSET}page2-img_p1_4.png`),
      input("E3", "She ___ a backpack.", ["needs"], "Hình cho thấy cô bé cần một backpack, nên dùng needs.", `${ASSET}page2-img_p1_5.png`)
    ]
  },
  {
    letter: "F",
    title: "Look at the picture. Write True or False.",
    note: "Đối chiếu từng câu với bức tranh.",
    points: 4,
    sectionImage: `${ASSET}page2-img_p1_3.png`,
    questions: [
      choice("F1", "He doesn’t like avocados.", ["True", "False"], "True", "Cậu bé thể hiện không thích avocados, vì vậy câu này đúng."),
      choice("F2", "She doesn’t have carrots.", ["True", "False"], "False", "Trong tranh cô bé có carrots, vì vậy câu phủ định này sai."),
      choice("F3", "He doesn’t need an eraser.", ["True", "False"], "False", "Trong tranh cậu bé cần một eraser, vì vậy câu phủ định này sai."),
      choice("F4", "She wants an orange.", ["True", "False"], "True", "Trong tranh cô bé muốn một orange, vì vậy câu này đúng.")
    ]
  },
  {
    letter: "G",
    title: "Look and circle the correct words.",
    note: "Quan sát từng hình và chọn từ đúng.",
    points: 5,
    questions: [
      choice("G1", "Picture 1", ["soda", "juice"], "juice", "Hình là một hộp và cốc orange juice.", `${ASSET}page3-img_p2_6.png`),
      choice("G2", "Picture 2", ["grapes", "sandwich"], "sandwich", "Hình là một sandwich.", `${ASSET}page3-img_p2_7.png`),
      choice("G3", "Picture 3", ["chips", "cookie"], "cookie", "Hình là một cookie.", `${ASSET}page3-img_p2_8.png`),
      choice("G4", "Picture 4", ["juice", "grapes"], "grapes", "Hình là một chùm grapes.", `${ASSET}page3-img_p2_2.png`),
      choice("G5", "Picture 5", ["sandwich", "chips"], "chips", "Hình là một gói chips.", `${ASSET}page3-img_p2_9.png`)
    ]
  },
  {
    letter: "H",
    title: "Complete the sentences.",
    note: "Nhìn hình và điền một từ phù hợp.",
    points: 4,
    questions: [
      input("H1", "My aunt works in a school. She is a ___.", ["teacher"], "Người làm việc và dạy học ở trường là a teacher.", `${ASSET}page3-img_p2_3.png`),
      input("H2", "My dad likes his job. He is a ___.", ["police officer", "policeman"], "Hình cho thấy một police officer.", `${ASSET}page3-img_p2_10.png`),
      input("H3", "Ann wants a jacket. She needs ___ to buy it.", ["money"], "Cần money để mua một chiếc jacket.", `${ASSET}page3-img_p2_4.png`),
      input("H4", "When I’m hot, I drink ___.", ["water"], "Khi nóng, em uống water.", `${ASSET}page3-img_p2_11.png`)
    ]
  },
  {
    letter: "I",
    title: "Listen and complete the sentences.",
    note: "Nghe audio và điền từ còn thiếu.",
    points: 4,
    audio: "assets/audio/Listening-I.mp3",
    questions: [
      input("I1", "Cats and dogs don’t need ___.", ["clothes"], "Trong audio, câu hoàn chỉnh là: Cats and dogs don’t need clothes."),
      input("I2", "___ keep us healthy.", ["doctors"], "Trong audio, chủ ngữ là Doctors."),
      input("I3", "People get ___ from jobs.", ["money"], "Trong audio, từ còn thiếu là money."),
      input("I4", "It’s good to drink ___ in the morning.", ["juice"], "Trong audio, từ còn thiếu là juice.")
    ]
  },
  {
    letter: "J",
    title: "Look at the pictures and circle the answers.",
    note: "Quan sát hình rồi chọn câu trả lời đầy đủ.",
    points: 4,
    questions: [
      choice("J1", "Does he need a jacket?", ["Yes, he does.", "No, he doesn’t."], "Yes, he does.", "Cậu bé đang ở ngoài trời tuyết và cần một chiếc jacket.", `${ASSET}page4-img_p3_2.png`),
      choice("J2", "Does she have a board game?", ["Yes, she does.", "No, she doesn’t."], "No, she doesn’t.", "Cô bé đang cầm một doll, không phải board game.", `${ASSET}page4-img_p3_3.png`),
      choice("J3", "Does she want a cookie?", ["Yes, she does.", "No, she doesn’t."], "Yes, she does.", "Bong bóng suy nghĩ cho thấy cô bé muốn một cookie.", `${ASSET}page4-img_p3_4.png`),
      choice("J4", "Does it want water?", ["Yes, it does.", "No, it doesn’t."], "Yes, it does.", "Chú chó nhìn bát water và muốn uống nước.", `${ASSET}page4-img_p3_5.png`)
    ]
  },
  {
    letter: "K",
    title: "Look at the pictures. Complete the questions and answers.",
    note: "Mỗi câu có hai chỗ cần hoàn thành.",
    points: 8,
    questions: [
      pair("K1", "Picture 1", `${ASSET}page4-img_p3_6.png`,
        ["what does he", "what does he want", "what does the boy want"],
        ["he wants", "he wants stickers and pins", "he wants pins and stickers"],
        "want?", "stickers and pins.",
        "Dùng What does he want? để hỏi mong muốn; câu trả lời là He wants stickers and pins."),
      pair("K2", "Picture 2", `${ASSET}page4-img_p3_7.png`,
        ["does she", "does she need a pen"], ["yes she does"],
        "need a pen?", "",
        "Câu hỏi dùng Does she need a pen?; trả lời khẳng định Yes, she does."),
      pair("K3", "Picture 3", `${ASSET}page4-img_p3_8.png`,
        ["does it", "does it like milk", "does the cat like milk"], ["yes it does"],
        "like milk?", "",
        "Câu hỏi dùng Does it like milk?; trả lời khẳng định Yes, it does."),
      pair("K4", "Picture 4", `${ASSET}page4-img_p3_9.png`,
        ["what does she", "what does she have", "what does the girl have"],
        ["she has", "she has grapes and mangoes", "she has mangoes and grapes"],
        "have?", "grapes and mangoes.",
        "Dùng What does she have?; câu trả lời là She has grapes and mangoes.")
    ]
  }
];

function choice(id, prompt, options, answer, explanation, image = "") {
  return { id, type: "choice", prompt, options, answers: [answer], explanation, image, points: 1 };
}

function input(id, prompt, answers, explanation, image = "") {
  return { id, type: "input", prompt, answers, explanation, image, points: 1 };
}

function pair(id, prompt, image, questionAnswers, responseAnswers, questionSuffix, responseSuffix, explanation) {
  return { id, type: "pair", prompt, image, questionAnswers, responseAnswers, questionSuffix, responseSuffix, explanation, points: 2 };
}

const form = document.querySelector("#testForm");
const sectionsRoot = document.querySelector("#sections");
const sectionJump = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test6-v2";

renderSections();
restoreProgress();
updateProgress();

form.addEventListener("click", (event) => {
  const choiceButton = event.target.closest("[data-choice]");
  if (!choiceButton) return;
  const question = choiceButton.closest(".question");
  question.querySelectorAll("[data-choice]").forEach(button => {
    button.classList.toggle("is-selected", button === choiceButton);
    button.setAttribute("aria-pressed", button === choiceButton ? "true" : "false");
  });
  question.dataset.value = choiceButton.dataset.value;
  question.classList.remove("is-missing");
  saveProgress();
  updateProgress();
});

form.addEventListener("input", (event) => {
  if (!event.target.matches("input")) return;
  event.target.closest(".question")?.classList.remove("is-missing");
  saveProgress();
  updateProgress();
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const missing = getMissingFields();
  document.querySelectorAll(".question.is-missing").forEach(el => el.classList.remove("is-missing"));
  if (missing.length) {
    missing.forEach(field => field.closest(".question").classList.add("is-missing"));
    document.querySelector("#submitHelp").textContent = `Bài còn thiếu ${missing.length} ý. Em hoàn thành phần được đánh dấu trước khi xem đáp án.`;
    missing[0].closest(".question").scrollIntoView({ behavior: "smooth", block: "center" });
    missing[0].focus?.({ preventScroll: true });
    return;
  }
  gradeTest();
});

document.querySelector("#restartTest").addEventListener("click", () => {
  if (!window.confirm("Em muốn xoá toàn bộ câu trả lời và làm lại từ đầu?")) return;
  localStorage.removeItem(STORAGE_KEY);
  window.location.reload();
});

document.querySelector("#reviewMistakes").addEventListener("click", () => {
  const firstWrong = document.querySelector(".review-card.is-wrong");
  (firstWrong || answerReview).scrollIntoView({ behavior: "smooth", block: "start" });
});

function renderSections() {
  sections.forEach(section => {
    const jump = document.createElement("button");
    jump.type = "button";
    jump.textContent = section.letter;
    jump.title = `Phần ${section.letter}`;
    jump.dataset.jump = section.letter;
    jump.addEventListener("click", () => document.querySelector(`#section-${section.letter}`).scrollIntoView({ behavior: "smooth" }));
    sectionJump.appendChild(jump);

    const sectionElement = document.createElement("section");
    sectionElement.className = "test-section";
    sectionElement.id = `section-${section.letter}`;
    sectionElement.innerHTML = `
      <header class="section-heading">
        <span class="section-letter">${section.letter}</span>
        <div><h2>${section.title}</h2><p>${section.note}</p></div>
        <span class="section-points">/${section.points}</span>
      </header>
      ${section.audio ? `<div class="audio-panel"><p>Audio phần ${section.letter}</p><audio controls preload="metadata" src="${section.audio}"></audio></div>` : ""}
      ${section.sectionImage ? `<img class="source-image" src="${section.sectionImage}" alt="Hình minh hoạ phần ${section.letter}">` : ""}
      <div class="question-list">${section.questions.map((question, index) => renderQuestion(section, question, index)).join("")}</div>
    `;
    sectionsRoot.appendChild(sectionElement);
  });
}

function renderQuestion(section, question, index) {
  const label = `${section.letter}${index + 1}`;
  let control = "";
  if (question.type === "choice") {
    control = `<div class="choice-grid">${question.options.map((option, optionIndex) => `
      <button type="button" class="choice" data-choice data-value="${escapeAttr(option)}" aria-pressed="false">
        <span class="choice-key">${String.fromCharCode(65 + optionIndex)}</span><span>${option}</span>
      </button>`).join("")}</div>`;
  } else if (question.type === "input") {
    control = `<input class="answer-input" data-input="${question.id}" autocomplete="off" spellcheck="false" placeholder="Nhập câu trả lời">`;
  } else {
    control = `<div class="paired-inputs">
      <label class="input-label"><span>Question</span><span class="sentence-completion"><input class="answer-input" data-pair="question" autocomplete="off" spellcheck="false" placeholder="Điền phần còn thiếu"><b>${question.questionSuffix}</b></span></label>
      <label class="input-label"><span>Answer</span><span class="sentence-completion"><input class="answer-input" data-pair="answer" autocomplete="off" spellcheck="false" placeholder="Điền phần còn thiếu">${question.responseSuffix ? `<b>${question.responseSuffix}</b>` : ""}</span></label>
    </div>`;
  }
  return `<article class="question" data-id="${question.id}" data-section="${section.letter}">
    <span class="question-number">${label}</span>
    <div class="question-copy">
      ${question.image ? `<img class="question-image" src="${question.image}" alt="Hình minh hoạ câu ${label}">` : ""}
      <p class="question-prompt">${question.prompt}</p>
      ${control}
    </div>
  </article>`;
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[?.!,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matches(value, accepted) {
  const normalized = normalize(value).replace(/does not/g, "doesn't");
  return accepted.some(answer => normalize(answer).replace(/does not/g, "doesn't") === normalized);
}

function questionValue(question, element) {
  if (question.type === "choice") return element.dataset.value || "";
  if (question.type === "input") return element.querySelector("input").value;
  return {
    question: element.querySelector('[data-pair="question"]').value,
    answer: element.querySelector('[data-pair="answer"]').value
  };
}

function getMissingFields() {
  const missing = [];
  sections.forEach(section => section.questions.forEach(question => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    if (question.type === "choice") {
      if (!element.dataset.value) missing.push(element.querySelector(".choice"));
    } else if (question.type === "input") {
      const field = element.querySelector("input");
      if (!field.value.trim()) missing.push(field);
    } else {
      element.querySelectorAll("input").forEach(field => { if (!field.value.trim()) missing.push(field); });
    }
  }));
  return missing;
}

function gradeTest() {
  let score = 0;
  const reviews = [];
  sections.forEach(section => section.questions.forEach((question, index) => {
    const element = document.querySelector(`[data-id="${question.id}"]`);
    const value = questionValue(question, element);
    let earned = 0;
    let correct;
    let shownAnswer;
    if (question.type === "pair") {
      const questionCorrect = matches(value.question, question.questionAnswers);
      const answerCorrect = matches(value.answer, question.responseAnswers);
      earned = Number(questionCorrect) + Number(answerCorrect);
      correct = earned === 2;
      shownAnswer = `${joinSentence(question.questionAnswers[0], question.questionSuffix)} / ${joinSentence(question.responseAnswers[0], question.responseSuffix)}`;
    } else {
      correct = matches(value, question.answers);
      earned = correct ? 1 : 0;
      shownAnswer = question.answers[0];
    }
    score += earned;
    reviews.push({ section, question, label: `${section.letter}${index + 1}`, value, correct, earned, shownAnswer });
  }));

  scoreValue.textContent = score;
  scoreMessage.textContent = score === 50
    ? "Em đã làm đúng toàn bộ bài."
    : `Em cần chữa ${50 - score} ý. Hãy đọc kỹ giải thích và đối chiếu lại câu gốc.`;
  answerReview.innerHTML = reviews.map(renderReview).join("");
  results.hidden = false;
  form.hidden = true;
  document.querySelector("#stickyProgress").hidden = true;
  localStorage.setItem(`${STORAGE_KEY}-result`, JSON.stringify({ score, at: Date.now() }));
  results.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderReview(review) {
  const studentAnswer = review.question.type === "pair"
    ? `${review.value.question || "(trống)"} / ${review.value.answer || "(trống)"}`
    : review.value;
  return `<article class="review-card ${review.correct ? "" : "is-wrong"}">
    <div class="review-head"><h3>Câu ${review.label}</h3><span class="review-status">${review.earned}/${review.question.points} điểm</span></div>
    <p class="review-question">${review.question.prompt}</p>
    <div class="review-answer"><span>Em trả lời: <b>${escapeHtml(studentAnswer)}</b></span><span>Đáp án: <b>${review.shownAnswer}</b></span></div>
    <p class="explanation"><b>Giải thích:</b> ${review.question.explanation}</p>
  </article>`;
}

function updateProgress() {
  let completed = 0;
  sections.forEach(section => {
    let sectionCompleted = 0;
    section.questions.forEach(question => {
      const element = document.querySelector(`[data-id="${question.id}"]`);
      if (question.type === "choice") {
        if (element.dataset.value) { completed += 1; sectionCompleted += 1; }
      } else if (question.type === "input") {
        if (element.querySelector("input").value.trim()) { completed += 1; sectionCompleted += 1; }
      } else {
        element.querySelectorAll("input").forEach(field => {
          if (field.value.trim()) { completed += 1; sectionCompleted += 1; }
        });
      }
    });
    const jump = document.querySelector(`[data-jump="${section.letter}"]`);
    jump.classList.toggle("has-progress", sectionCompleted > 0);
    jump.classList.toggle("is-complete", sectionCompleted === section.points);
  });
  progressText.textContent = `${completed} / 50`;
  progressBar.style.width = `${completed * 2}%`;
}

function saveProgress() {
  const data = {};
  document.querySelectorAll(".question").forEach(element => {
    const id = element.dataset.id;
    const question = sections.flatMap(section => section.questions).find(item => item.id === id);
    data[id] = questionValue(question, element);
  });
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function restoreProgress() {
  let data;
  try { data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}"); } catch { data = {}; }
  Object.entries(data).forEach(([id, value]) => {
    const element = document.querySelector(`[data-id="${id}"]`);
    if (!element || !value) return;
    if (typeof value === "string") {
      const input = element.querySelector("input");
      if (input) input.value = value;
      const button = [...element.querySelectorAll("[data-choice]")].find(item => item.dataset.value === value);
      if (button) {
        button.classList.add("is-selected");
        button.setAttribute("aria-pressed", "true");
        element.dataset.value = value;
      }
    } else {
      element.querySelector('[data-pair="question"]').value = value.question || "";
      element.querySelector('[data-pair="answer"]').value = value.answer || "";
    }
  });
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"]/g, character => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[character]);
}

function escapeAttr(value) { return escapeHtml(value).replace(/'/g, "&#39;"); }

function joinSentence(answer, suffix) {
  return `${answer}${suffix ? ` ${suffix}` : ""}`.trim();
}
