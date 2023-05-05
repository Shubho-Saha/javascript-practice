const sagor = {
    name: 'Modu Sagor',
    age: 26
}

const shubho = {
    name: 'Shubho Saha',
    age: 26
}

function printName(person) {
    console.log(`Name: ${person.name}\nAge: ${person.age}`)
}


module.exports = {
    sagor: sagor,
    shubho: shubho,
    printName: printName
}


