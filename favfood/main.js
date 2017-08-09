var name = prompt("What's your name?")
var favfood = prompt("What is your favorite food?")

firebase.database().ref(name).set(
    {
        food: favfood
    }
)