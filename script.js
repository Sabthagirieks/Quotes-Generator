const authorEl = document.getElementById("value");
const quoteEl = document.getElementById("value1");
const generateBtn = document.getElementById("generateBtn");
const inputEl = document.getElementById("sabtha");


function fetchQuote(num) {
  let url = num
    ? `https://mimic-server-api.vercel.app/quotes/${num}`
    : `https://mimic-server-api.vercel.app/quotes/${Math.floor(Math.random() * 10) + 1}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      authorEl.innerText = data.author || "Unknown Author";
      quoteEl.innerText = data.quote || "No quote found!";
    })
    .catch((error) => {
      authorEl.innerText = "Error!";
      quoteEl.innerText = "Could not fetch quote.";
      console.error(error);
    });
}

generateBtn.addEventListener("click", () => {
  const num = inputEl.value.trim();
  fetchQuote(num ? Number(num) : null);
});

window.addEventListener("load", () => {
  fetchQuote();
});
