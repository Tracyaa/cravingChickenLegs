const bodyTag = document.querySelector("body")
const chickenForm = document.querySelector(".chicken-form")
const skeletonForm = document.querySelector(".skeleton-form")

const createChickenPlayer = (chickenObj) => {
    chickenForm.previousElementSibling.innerText = `Player: ${chickenObj.name}`
    chickenForm.nextElementSibling.innerText = `Score: ${chickenObj.score}`
}
const createSkeletonPlayer = (skeletonObj) => {
    skeletonForm.previousElementSibling.innerText = `Player: ${skeletonObj.name}`
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
        debugger
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