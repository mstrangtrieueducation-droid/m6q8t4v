const ASSET = "assets/extracted/";

const sections = [
  {
    "letter": "A",
    "title": "Listen and circle the correct words.",
    "note": "Nghe audio và chọn từ em nghe được.",
    "points": 6,
    "audio": "assets/audio/Listening-A.mp3",
    "questions": [
      {
        "id": "A1",
        "type": "choice",
        "prompt": "1. Choose the word you hear.",
        "options": [
          "board game",
          "game"
        ],
        "answers": [
          "game"
        ],
        "explanation": "Trong audio, từ được đọc là “game”.",
        "image": "",
        "points": 1
      },
      {
        "id": "A2",
        "type": "choice",
        "prompt": "2. Choose the word you hear.",
        "options": [
          "pins",
          "stickers"
        ],
        "answers": [
          "pins"
        ],
        "explanation": "Trong audio, từ được đọc là “pins”.",
        "image": "",
        "points": 1
      },
      {
        "id": "A3",
        "type": "choice",
        "prompt": "3. Choose the word you hear.",
        "options": [
          "farmer",
          "fancy"
        ],
        "answers": [
          "farmer"
        ],
        "explanation": "Trong audio, từ được đọc là “farmer”.",
        "image": "",
        "points": 1
      },
      {
        "id": "A4",
        "type": "choice",
        "prompt": "4. Choose the word you hear.",
        "options": [
          "milk",
          "market"
        ],
        "answers": [
          "milk"
        ],
        "explanation": "Trong audio, từ được đọc là “milk”.",
        "image": "",
        "points": 1
      },
      {
        "id": "A5",
        "type": "choice",
        "prompt": "5. Choose the word you hear.",
        "options": [
          "buy",
          "sell"
        ],
        "answers": [
          "sell"
        ],
        "explanation": "Trong audio, từ được đọc là “sell”.",
        "image": "",
        "points": 1
      },
      {
        "id": "A6",
        "type": "choice",
        "prompt": "6. Choose the word you hear.",
        "options": [
          "soup",
          "ice cream"
        ],
        "answers": [
          "ice cream"
        ],
        "explanation": "Trong audio, cụm từ được đọc là “ice cream”.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "B",
    "title": "Look and write the words.",
    "note": "Chọn từ trong Word Bank để điền vào đúng hình.",
    "points": 4,
    "wordBank": [
      "game",
      "comic book",
      "pins",
      "board game",
      "doll"
    ],
    "sectionImage": "assets/extracted/page1-img_p0_5.png",
    "imageMarkers": [
      {
        "label": "1",
        "left": "47%",
        "top": "78%"
      },
      {
        "label": "2",
        "left": "14%",
        "top": "42%"
      },
      {
        "label": "3",
        "left": "80%",
        "top": "30%"
      },
      {
        "label": "4",
        "left": "9%",
        "top": "87%"
      }
    ],
    "questions": [
      {
        "id": "B1",
        "type": "input",
        "prompt": "Picture 1",
        "answers": [
          "board game"
        ],
        "explanation": "Hình số 1 là một board game.",
        "image": "",
        "points": 1
      },
      {
        "id": "B2",
        "type": "input",
        "prompt": "Picture 2",
        "answers": [
          "comic book"
        ],
        "explanation": "Hình số 2 là một comic book.",
        "image": "",
        "points": 1
      },
      {
        "id": "B3",
        "type": "input",
        "prompt": "Picture 3",
        "answers": [
          "doll"
        ],
        "explanation": "Hình số 3 là một doll.",
        "image": "",
        "points": 1
      },
      {
        "id": "B4",
        "type": "input",
        "prompt": "Picture 4",
        "answers": [
          "game"
        ],
        "explanation": "Hình số 4 là một game.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "C",
    "title": "Look at the pictures. Look at the letters. Write the words.",
    "note": "Sắp xếp lại các chữ cái để tạo thành từ đúng.",
    "points": 3,
    "questions": [
      {
        "id": "C1",
        "type": "input",
        "prompt": "afremr",
        "answers": [
          "farmer"
        ],
        "explanation": "Sắp xếp afremr thành farmer.",
        "image": "assets/extracted/page1-img_p0_2.png",
        "points": 1
      },
      {
        "id": "C2",
        "type": "input",
        "prompt": "kaemrt",
        "answers": [
          "market"
        ],
        "explanation": "Sắp xếp kaemrt thành market.",
        "image": "assets/extracted/page1-img_p0_3.png",
        "points": 1
      },
      {
        "id": "C3",
        "type": "input",
        "prompt": "lapni",
        "answers": [
          "plain"
        ],
        "explanation": "Sắp xếp lapni thành plain.",
        "image": "assets/extracted/page1-img_p0_6.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "D",
    "title": "Circle or write the correct words.",
    "note": "Nhìn chủ ngữ đầu câu: He = cậu ấy, She = cô ấy, It = nó. Sau đó chọn đúng dạng động từ.",
    "points": 5,
    "questions": [
      {
        "id": "D1",
        "type": "choice",
        "prompt": "He ___ a cow.",
        "options": [
          "has",
          "have"
        ],
        "answers": [
          "has"
        ],
        "explanation": "He dùng để chỉ một người nam (cậu ấy/anh ấy). Với He, have đổi thành has. Câu đúng là: He has a cow.",
        "image": "",
        "points": 1
      },
      {
        "id": "D2",
        "type": "choice",
        "prompt": "It ___ need water.",
        "options": [
          "don’t",
          "doesn’t"
        ],
        "answers": [
          "doesn’t"
        ],
        "explanation": "It dùng để chỉ một con vật hoặc đồ vật (nó). Muốn nói “nó không cần”, ta dùng doesn’t need. Câu đúng là: It doesn’t need water.",
        "image": "",
        "points": 1
      },
      {
        "id": "D3",
        "type": "choice",
        "prompt": "She ___ an ice cream.",
        "options": [
          "wants",
          "want"
        ],
        "answers": [
          "wants"
        ],
        "explanation": "She dùng để chỉ một người nữ (cô ấy). Với She, động từ want thêm -s thành wants. Câu đúng là: She wants an ice cream.",
        "image": "",
        "points": 1
      },
      {
        "id": "D4",
        "type": "choice",
        "prompt": "It ___ milk.",
        "options": [
          "like",
          "likes"
        ],
        "answers": [
          "likes"
        ],
        "explanation": "It dùng để chỉ một con vật hoặc đồ vật (nó). Với It, động từ like thêm -s thành likes. Câu đúng là: It likes milk.",
        "image": "",
        "points": 1
      },
      {
        "id": "D5",
        "type": "choice",
        "prompt": "He doesn’t ___ a doll.",
        "options": [
          "has",
          "have"
        ],
        "answers": [
          "have"
        ],
        "explanation": "He dùng để chỉ một người nam (cậu ấy/anh ấy). Khi đã có doesn’t, động từ phía sau giữ nguyên là have, không dùng has. Câu đúng là: He doesn’t have a doll.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "E",
    "title": "Complete with doesn’t like, doesn’t want, or needs.",
    "note": "Quan sát hình rồi điền cụm từ phù hợp.",
    "points": 3,
    "questions": [
      {
        "id": "E1",
        "type": "input",
        "prompt": "She ___ soup.",
        "answers": [
          "doesn't want",
          "does not want"
        ],
        "explanation": "She dùng để chỉ một người nữ (cô ấy). Trong hình, cô bé không muốn soup nên dùng doesn’t want. Sau doesn’t, want giữ nguyên. Câu đúng là: She doesn’t want soup.",
        "image": "assets/extracted/page2-img_p1_2.png",
        "points": 1
      },
      {
        "id": "E2",
        "type": "input",
        "prompt": "He ___ cucumbers.",
        "answers": [
          "doesn't like",
          "does not like"
        ],
        "explanation": "He dùng để chỉ một người nam (cậu ấy/anh ấy). Trong hình, cậu bé không thích cucumbers nên dùng doesn’t like. Sau doesn’t, like giữ nguyên. Câu đúng là: He doesn’t like cucumbers.",
        "image": "assets/extracted/page2-img_p1_4.png",
        "points": 1
      },
      {
        "id": "E3",
        "type": "input",
        "prompt": "She ___ a backpack.",
        "answers": [
          "needs"
        ],
        "explanation": "She dùng để chỉ một người nữ (cô ấy). Trong hình, cô bé cần một chiếc backpack. Với She, need thêm -s thành needs. Câu đúng là: She needs a backpack.",
        "image": "assets/extracted/page2-img_p1_5.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "F",
    "title": "Look at the picture. Write True or False.",
    "note": "Đối chiếu từng câu với bức tranh.",
    "points": 4,
    "sectionImage": "assets/extracted/page2-img_p1_3.png",
    "questions": [
      {
        "id": "F1",
        "type": "choice",
        "prompt": "He doesn’t like avocados.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Cậu bé thể hiện không thích avocados, vì vậy câu này đúng.",
        "image": "",
        "points": 1
      },
      {
        "id": "F2",
        "type": "choice",
        "prompt": "She doesn’t have carrots.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Trong tranh cô bé có carrots, vì vậy câu phủ định này sai.",
        "image": "",
        "points": 1
      },
      {
        "id": "F3",
        "type": "choice",
        "prompt": "He doesn’t need an eraser.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "False"
        ],
        "explanation": "Trong tranh cậu bé cần một eraser, vì vậy câu phủ định này sai.",
        "image": "",
        "points": 1
      },
      {
        "id": "F4",
        "type": "choice",
        "prompt": "She wants an orange.",
        "options": [
          "True",
          "False"
        ],
        "answers": [
          "True"
        ],
        "explanation": "Trong tranh cô bé muốn một orange, vì vậy câu này đúng.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "G",
    "title": "Look and circle the correct words.",
    "note": "Quan sát từng hình và chọn từ đúng.",
    "points": 5,
    "questions": [
      {
        "id": "G1",
        "type": "choice",
        "prompt": "Picture 1",
        "options": [
          "soda",
          "juice"
        ],
        "answers": [
          "juice"
        ],
        "explanation": "Hình là một hộp và cốc orange juice.",
        "image": "assets/extracted/page3-img_p2_6.png",
        "points": 1
      },
      {
        "id": "G2",
        "type": "choice",
        "prompt": "Picture 2",
        "options": [
          "grapes",
          "sandwich"
        ],
        "answers": [
          "sandwich"
        ],
        "explanation": "Hình là một sandwich.",
        "image": "assets/extracted/page3-img_p2_7.png",
        "points": 1
      },
      {
        "id": "G3",
        "type": "choice",
        "prompt": "Picture 3",
        "options": [
          "chips",
          "cookie"
        ],
        "answers": [
          "cookie"
        ],
        "explanation": "Hình là một cookie.",
        "image": "assets/extracted/page3-img_p2_8.png",
        "points": 1
      },
      {
        "id": "G4",
        "type": "choice",
        "prompt": "Picture 4",
        "options": [
          "juice",
          "grapes"
        ],
        "answers": [
          "grapes"
        ],
        "explanation": "Hình là một chùm grapes.",
        "image": "assets/extracted/page3-img_p2_2.png",
        "points": 1
      },
      {
        "id": "G5",
        "type": "choice",
        "prompt": "Picture 5",
        "options": [
          "sandwich",
          "chips"
        ],
        "answers": [
          "chips"
        ],
        "explanation": "Hình là một gói chips.",
        "image": "assets/extracted/page3-img_p2_9.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "H",
    "title": "Complete the sentences.",
    "note": "Nhìn hình và điền một từ phù hợp.",
    "points": 4,
    "questions": [
      {
        "id": "H1",
        "type": "input",
        "prompt": "My aunt works in a school. She is a ___.",
        "answers": [
          "teacher"
        ],
        "explanation": "Người làm việc và dạy học ở trường là a teacher.",
        "image": "assets/extracted/page3-img_p2_3.png",
        "points": 1
      },
      {
        "id": "H2",
        "type": "input",
        "prompt": "My dad likes his job. He is a ___.",
        "answers": [
          "police officer",
          "policeman"
        ],
        "explanation": "Hình cho thấy một police officer.",
        "image": "assets/extracted/page3-img_p2_10.png",
        "points": 1
      },
      {
        "id": "H3",
        "type": "input",
        "prompt": "Ann wants a jacket. She needs ___ to buy it.",
        "answers": [
          "money"
        ],
        "explanation": "Cần money để mua một chiếc jacket.",
        "image": "assets/extracted/page3-img_p2_4.png",
        "points": 1
      },
      {
        "id": "H4",
        "type": "input",
        "prompt": "When I’m hot, I drink ___.",
        "answers": [
          "water"
        ],
        "explanation": "Khi nóng, em uống water.",
        "image": "assets/extracted/page3-img_p2_11.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "I",
    "title": "Listen and complete the sentences.",
    "note": "Nghe audio và điền từ còn thiếu.",
    "points": 4,
    "audio": "assets/audio/Listening-I.mp3",
    "questions": [
      {
        "id": "I1",
        "type": "input",
        "prompt": "Cats and dogs don’t need ___.",
        "answers": [
          "clothes"
        ],
        "explanation": "Trong audio, câu hoàn chỉnh là: Cats and dogs don’t need clothes.",
        "image": "",
        "points": 1
      },
      {
        "id": "I2",
        "type": "input",
        "prompt": "___ keep us healthy.",
        "answers": [
          "doctors"
        ],
        "explanation": "Trong audio, chủ ngữ là Doctors.",
        "image": "",
        "points": 1
      },
      {
        "id": "I3",
        "type": "input",
        "prompt": "People get ___ from jobs.",
        "answers": [
          "money"
        ],
        "explanation": "Trong audio, từ còn thiếu là money.",
        "image": "",
        "points": 1
      },
      {
        "id": "I4",
        "type": "input",
        "prompt": "It’s good to drink ___ in the morning.",
        "answers": [
          "juice"
        ],
        "explanation": "Trong audio, từ còn thiếu là juice.",
        "image": "",
        "points": 1
      }
    ]
  },
  {
    "letter": "J",
    "title": "Look at the pictures and circle the answers.",
    "note": "Quan sát hình rồi chọn câu trả lời đầy đủ.",
    "points": 4,
    "questions": [
      {
        "id": "J1",
        "type": "choice",
        "prompt": "Does he need a jacket?",
        "options": [
          "Yes, he does.",
          "No, he doesn’t."
        ],
        "answers": [
          "Yes, he does."
        ],
        "explanation": "Cậu bé đang ở ngoài trời tuyết và cần một chiếc jacket.",
        "image": "assets/extracted/page4-img_p3_2.png",
        "points": 1
      },
      {
        "id": "J2",
        "type": "choice",
        "prompt": "Does she have a board game?",
        "options": [
          "Yes, she does.",
          "No, she doesn’t."
        ],
        "answers": [
          "No, she doesn’t."
        ],
        "explanation": "Cô bé đang cầm một doll, không phải board game.",
        "image": "assets/extracted/page4-img_p3_3.png",
        "points": 1
      },
      {
        "id": "J3",
        "type": "choice",
        "prompt": "Does she want a cookie?",
        "options": [
          "Yes, she does.",
          "No, she doesn’t."
        ],
        "answers": [
          "Yes, she does."
        ],
        "explanation": "Bong bóng suy nghĩ cho thấy cô bé muốn một cookie.",
        "image": "assets/extracted/page4-img_p3_4.png",
        "points": 1
      },
      {
        "id": "J4",
        "type": "choice",
        "prompt": "Does it want water?",
        "options": [
          "Yes, it does.",
          "No, it doesn’t."
        ],
        "answers": [
          "Yes, it does."
        ],
        "explanation": "Chú chó nhìn bát water và muốn uống nước.",
        "image": "assets/extracted/page4-img_p3_5.png",
        "points": 1
      }
    ]
  },
  {
    "letter": "K",
    "title": "Look at the pictures. Complete the questions and answers.",
    "note": "A hỏi, B trả lời. Điền phần còn thiếu để hoàn thành từng câu.",
    "points": 8,
    "questions": [
      {
        "id": "K1",
        "type": "pair",
        "prompt": "Picture 1",
        "image": "assets/extracted/page4-img_p3_6.png",
        "questionAnswers": [
          "what does he",
          "what does he want",
          "what does the boy want"
        ],
        "responseAnswers": [
          "he wants",
          "he wants stickers and pins",
          "he wants pins and stickers"
        ],
        "questionSuffix": "want?",
        "responseSuffix": "stickers and pins.",
        "explanation": "He dùng để chỉ một người nam (cậu ấy/anh ấy). A hỏi: What does he want? Sau does, want giữ nguyên. B trả lời: He wants stickers and pins.",
        "points": 2
      },
      {
        "id": "K2",
        "type": "pair",
        "prompt": "Picture 2",
        "image": "assets/extracted/page4-img_p3_7.png",
        "questionAnswers": [
          "does she",
          "does she need a pen"
        ],
        "responseAnswers": [
          "yes she does"
        ],
        "questionSuffix": "need a pen?",
        "responseSuffix": "",
        "explanation": "She dùng để chỉ một người nữ (cô ấy). A hỏi: Does she need a pen? Sau does, need giữ nguyên. B trả lời ngắn: Yes, she does.",
        "points": 2
      },
      {
        "id": "K3",
        "type": "pair",
        "prompt": "Picture 3",
        "image": "assets/extracted/page4-img_p3_8.png",
        "questionAnswers": [
          "does it",
          "does it like milk",
          "does the cat like milk"
        ],
        "responseAnswers": [
          "yes it does"
        ],
        "questionSuffix": "like milk?",
        "responseSuffix": "",
        "explanation": "It dùng để chỉ một con vật hoặc đồ vật (nó). A hỏi: Does it like milk? Sau does, like giữ nguyên. B trả lời ngắn: Yes, it does.",
        "points": 2
      },
      {
        "id": "K4",
        "type": "pair",
        "prompt": "Picture 4",
        "image": "assets/extracted/page4-img_p3_9.png",
        "questionAnswers": [
          "what does she",
          "what does she have",
          "what does the girl have"
        ],
        "responseAnswers": [
          "she has",
          "she has grapes and mangoes",
          "she has mangoes and grapes"
        ],
        "questionSuffix": "have?",
        "responseSuffix": "grapes and mangoes.",
        "explanation": "She dùng để chỉ một người nữ (cô ấy). A hỏi: What does she have? Sau does, have giữ nguyên. B trả lời: She has grapes and mangoes.",
        "points": 2
      }
    ]
  }
];

const form = document.querySelector("#testForm");
const sectionsRoot = document.querySelector("#sections");
const sectionJump = document.querySelector("#sectionJump");
const progressText = document.querySelector("#progressText");
const progressBar = document.querySelector("#progressBar");
const results = document.querySelector("#results");
const answerReview = document.querySelector("#answerReview");
const scoreValue = document.querySelector("#scoreValue");
const scoreMessage = document.querySelector("#scoreMessage");
const STORAGE_KEY = "discover1-written-test6-v2-source-audit-v2";

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
      ${renderWordBank(section)}
      ${renderSectionImage(section)}
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
    control = `<div class="paired-inputs dialogue-completion" aria-label="Hội thoại A và B">
      <label class="input-label dialogue-turn"><span class="speaker-row"><b class="speaker-badge">A</b><span>hỏi</span></span><span class="sentence-completion"><input class="answer-input" data-pair="question" autocomplete="off" spellcheck="false" placeholder="Điền phần còn thiếu"><b>${question.questionSuffix}</b></span></label>
      <label class="input-label dialogue-turn"><span class="speaker-row"><b class="speaker-badge speaker-b">B</b><span>trả lời</span></span><span class="sentence-completion"><input class="answer-input" data-pair="answer" autocomplete="off" spellcheck="false" placeholder="Điền phần còn thiếu">${question.responseSuffix ? `<b>${question.responseSuffix}</b>` : ""}</span></label>
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

function renderWordBank(section) {
  if (!section.wordBank) return "";
  return `<div class="word-bank" aria-label="Word Bank">
    <span class="word-bank-title">WORD BANK</span>
    <div class="word-bank-items">${section.wordBank.map(word => `<span>${word}</span>`).join("")}</div>
  </div>`;
}

function renderSectionImage(section) {
  if (!section.sectionImage) return "";
  if (!section.imageMarkers) {
    return `<img class="source-image" src="${section.sectionImage}" alt="Hình minh hoạ phần ${section.letter}">`;
  }
  return `<div class="numbered-source-image">
    <img class="source-image" src="${section.sectionImage}" alt="Hình minh hoạ phần ${section.letter} có đánh số 1 đến 4">
    ${section.imageMarkers.map(marker => `<span class="picture-marker" style="left:${marker.left};top:${marker.top}">${marker.label}</span>`).join("")}
  </div>`;
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[’‘`]/g, "'")
    .replace(/[?.!,]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function matches(value, accepted) { return DiscoverAnswerMatcher.matches(value, accepted); }

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
      shownAnswer = `${DiscoverAnswerDisplay.formatAnswer(joinSentence(question.questionAnswers[0], question.questionSuffix), {section, question, kind: "question"})} / ${DiscoverAnswerDisplay.formatAnswer(joinSentence(question.responseAnswers[0], question.responseSuffix), {section, question, kind: "sentence"})}`;
    } else {
      correct = matches(value, question.answers);
      earned = correct ? 1 : 0;
      shownAnswer = DiscoverAnswerDisplay.formatAnswer(question.answers[0], {section, question});
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
    <div class="review-answer"><span>Em trả lời: <b>${escapeHtml(studentAnswer)}</b></span><span>Đáp án: <b>${escapeHtml(review.shownAnswer)}</b></span></div>
    <p class="explanation"><b>Giải thích:</b> ${escapeHtml(DiscoverAnswerDisplay.formatExplanation(review.question.explanation))}</p>
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
