const bodyTag = document.querySelector("body")
const chickenForm = document.querySelector(".chicken-form")
const skeletonForm = document.querySelector(".skeleton-form")
const reloadDiv = document.querySelector('div#play-again')
const createChickenPlayer = (chickenObj) => {
    chickenForm.previousElementSibling.innerText = `Player: ${chickenObj.name}`
    chickenForm.dataset.id = chickenObj.id
}
const createSkeletonPlayer = (skeletonObj) => {
    skeletonForm.previousElementSibling.innerText = `Player: ${skeletonObj.name}`
    skeletonForm.dataset.id = skeletonObj.id
}


const createPlayerAPI = (name, character) => {
    return fetch("http://localhost:3000/players", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            score: 0,
            character: character
        })
    })
}


bodyTag.addEventListener("submit", (event) => {
    event.preventDefault()
    if (event.target.className === "chicken-form") {
        const hideChickenForm = (event.target.style.display = "none")
        const chickenNameValue = event.target.name.value
        const chickenCharacterValue = event.target.character.value
        createPlayerAPI(chickenNameValue, chickenCharacterValue)
            .then(res => res.json())
            .then(chickenObj => createChickenPlayer(chickenObj))

    } else if (event.target.className === "skeleton-form") {
        const hideSkeletonForm = (event.target.style.display = "none")
        const skeletonNameValue = event.target.name.value
        const skeletonCharacterValue = event.target.character.value
        createPlayerAPI(skeletonNameValue, skeletonCharacterValue)
            .then(res => res.json())
            .then(skeletonObj => createSkeletonPlayer(skeletonObj))
    }
})


const getPlayers = () => {
    return fetch("http://localhost:3000/players")
        .then(res => res.json())
}

getPlayers()
    .then(players => {
        players.sort(function(a, b) {
            return b.score - a.score
        })
    })

function topFivePlayers(array) {
  
}

const updateScoreApi = (playerId, playerScore) => {
  // debugger
    return fetch(`http://localhost:3000/players/${playerId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            score: playerScore,
        })
    })
    .then(resp => resp.json())
    .then(console.log)
}










//
>>>>>>> e0cba3c51f4cb122fd67afda32d060626866a64b
