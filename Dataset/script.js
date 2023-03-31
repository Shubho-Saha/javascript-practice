console.log('dataset practice');

const buttons = document.querySelectorAll("button");

buttons.forEach(button => {
    button.addEventListener("click", ()=> {
        const currentClick = parseInt(button.dataset.clicks);

        button.dataset.clicks = currentClick + 1;
    })
})

const demoData = document.getElementById('demo');
console.log(demoData);
console.log(demoData.dataset);