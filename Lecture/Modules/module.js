const sum = (a,b) => {
    return a + b;
}
const sub = (a,b) => {
    return a - b;
}

const todoList = [
    {
        id : 1,
        name : "kajal",
        task : "Speaking",
    },
    {
        id : 2,
        name : "pruthvi",
        task : "Writing",
    },
    {
        id : 3,
        name : "prujal",
        task : "Reading",
    }
]

module.exports = {
    sum,sub,todoList
}