function canDrinkbetter(person:typeof p) {
    if(person?.age == null) {
        console.log("You are not a person");
    }

    return person.age < 18 ? "Nope"
        : person.age < 21 ? "Not in the US"
        : "Yes";

    
}

const p = {
    age: 9,
}

var yes = canDrinkbetter(p);
console.log(yes);

export default canDrinkbetter;