const button = window.document.querySelector(".card__button")
const number = window.document.querySelector(".card__advice-number")
const adviceElement = window.document.querySelector(".card__advice")

button.addEventListener("click", async () => {
  const response = await window.fetch("https://api.adviceslip.com/advice")
  const { slip: { advice, id } } = await response.json()

  number.textContent = `ADVICE # ${id}`
  adviceElement.textContent = advice
})