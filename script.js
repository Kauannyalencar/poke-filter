const filtro = document.querySelector("#filtro")
console.log(filtro);
const cards = document.querySelectorAll(".cartao-pokemon");
const descricao = document.querySelector(".descricao")


filtro.addEventListener('input', filterPokemons)

function filterPokemons() {
    if (filtro.value != '') {
        for (let card of cards) {
            let name = card.querySelector('h3');
            name = name.textContent.toLowerCase()
            let textFilter = filtro.value.toLowerCase();
            if (!name.includes(textFilter)) {
                card.style.display = "none"
            } else {
                card.style.display = "flex"
            }
        }
    } else {
        for (let card of cards) {
            card.style.display = "flex"
        }
    }
}

// cry play
const audios = document.querySelectorAll("audio");
const keys = document.querySelectorAll(".cry")

keys.forEach((key, indece) => key.addEventListener("click", () => {
  if (key.dataset.cry === audios[indece].dataset.cry) {
    audios[indece].play()
  }
}))

// cards.forEach((card) =>{
//     card.addEventListener("click", (e) =>{
//         e.target === e.currentTarget ? descricao.classList.add("active") : descricao.classList.remove("active")
//     })
// })