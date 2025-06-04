// Basic array

const fruitBowl = [
    'apple',
    'Banana',
    'Orange,'
] 

console.log(fruitBowl)

const character = [
    'Per',
    'Pål',
    'Espen-Askeladden',
    90,
    , false
]

console.log(character[3])

// Object array

const allCharacters = [ 
        {charName: 'Per', charClass: 'Evoker', charLevel: 80, isDown: false},
        {charName: 'Pål', charClass: 'Paladin', charLevel: 80, isDown: false},
        {charName: 'Espen-Askeladden,', charClass: 'Death Knight', charLevel: 80, isDown: false}
]


// 
// 

document.addEventListener('DOMContentLoaded', () => {

    const cardName = document.getElementById('cardName')
    const cardTitle = document.getElementById('cardTitle')
    const cardDiscription = document.getElementById('cardDescription')
    const cardImage = document.getElementById('cardImage')

    const cardInformation = [
        {
            Name: 'Lars Magne Johnsen',
            Title: 'Frontend-utvikler-student',
            Description: 'Går på frontend kurs hos Gløde data.',
            image: 'images/githubQrCode.png',
            imageDescription: 'QR-kode'
        }
    ]

    cardName.textContent = cardInformation[0].Name
    cardTitle.textContent = cardInformation[0].Title
    cardDiscription.textContent = cardInformation[0].Description
    cardImage.src = cardInformation[0].image
    cardImage.alt = cardInformation[0].imageDescription

})

// 
// 
