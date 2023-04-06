console.log("Recursion");

const person = {
    name: "mrinmoy",
    friend: {
        name: 'sagor',
        friend: {
            name: 'saadi'
        }
    }
}

//Recursion Function
function prinNames(person) {
    if(person == null) return;
    console.log(person.name);
    prinNames(person.friend);
}
prinNames(person);

//Another example of Recursion Function

function factorial(number) {
    if (number <= 1) return 1;
    return number * factorial(number - 1);
}

console.log(factorial(3));