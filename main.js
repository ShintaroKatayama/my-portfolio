const menu = document.getElementById("menu");
const close = document.getElementById("close");
const close2 = document.getElementById("close2");
const contact = document.getElementById("contact");
const btn = document.getElementById("btn");
const playGame = document.getElementById("playGame");

contact.onclick = function () {
  menu.classList.remove("hidden");
};

close.onclick = function () {
  menu.classList.add("hidden");
};

close2.onclick = function () {
  playGame.classList.add("hidden");
};

const omikuji = {
  text: "上のボタンを押してね！",
  results: [
    {
      nakami: "大吉",
      feedback: "今日はすごく運がいいね",
    },
    {
      nakami: "中吉",
      feedback: "今日は運がいいね",
    },
    {
      nakami: "吉",
      feedback: "今日は運が悪いね",
    },
    {
      nakami: "凶",
      feedback: "今日は運が悪いね",
    },
  ],
};

play.onclick = function () {
  // text.innerHTML = ""
  playGame.classList.remove("hidden");
  const text = document.createElement("div");
  text.className = "text";
  text.textContent = omikuji.text;
  playGame.append(text);
};

btn.onclick = function () {
  const n = Math.floor(Math.random() * 4);
  btn.textContent = omikuji.results[n].nakami;
  text.textContent = omikuji.results[n].feedback;
};

// btn.onclick = function () {
//   let nakami = ["大吉", "中吉", "凶"];
//   const n = Math.floor(Math.random() * 3);
//   btn.textContent = omikuji.results[n].nakami;
// };
