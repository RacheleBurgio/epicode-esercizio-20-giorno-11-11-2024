//esercizio 1

class User {
  constructor(_firstName, _lastName, _age, _location) {
    this.firstName = _firstName
    this.lastName = _lastName
    this.age = _age
    this.location = _location
  }
  static function(user1, user2) {
    if (user1.age > user2.age) {
      return 'user1 è più vecchio di user2'
    } else if (user1.age === user2.age) {
      return 'user1 e user2 hanno la stessa età'
    } else if (user1.age < user2.age) {
      return 'user1 è più piccolo di user2'
    } else {
      return 'inserisci un utente'
    }
  }
}

const Rachele = new User('Rachele', 'Burgio', 22, 'Altofonte')
const Marco = new User('Marco Emanuele', 'Sapio', 24, 'Palermo')

console.log(User.function(Rachele, Marco))

//esercizio 2

const petName = document.getElementById('name')
const owner = document.getElementById('owner')
const species = document.getElementById('species')
const breed = document.getElementById('breed')
const form = document.getElementById('button')

class Pet {
  constructor(_petName, _ownerName, _species, _breed) {
    this.petName = _petName
    this.ownerName = _ownerName
    this.species = _species
    this.breed = _breed
  }

  ownerPet(pet) {
    return this.ownerName === pet.ownerName
  }
}

const pets = []

form.addEventListener('click', (e) => {
  e.preventDefault()
  const pet = new Pet(petName.value, owner.value, breed.value, species.value)
  pets.push(pet)
  console.log(pet)
})

const buttonControl = document.getElementById('control')

buttonControl.addEventListener('click', (e) => {
  console.log(pets[0].ownerPet(pets[1]))
})
