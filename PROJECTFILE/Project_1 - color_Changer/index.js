const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach((button) => {
    // console.log(button);
    button.addEventListener("click", function(e) {
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'gray':
                body.style.backgroundColor = e.target.id;
                break;
            case 'white':
                body.style.backgroundColor = e.target.id;
                body.style.color = 'black';
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id;
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id;
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id;
                break;
            default:
                // default behavior if none of the cases match
                break;
        };
        //* Tray with if Condition
        // if (e.target.id === 'gray') {
        //     body.style.backgroundColor = e.target.id;
        // };
        // if (e.target.id === 'white') {
        //     body.style.backgroundColor = e.target.id;
        //     body.style.color = "black";
        // };
        // if (e.target.id === 'blue') {
        //     body.style.backgroundColor = e.target.id;
        // };
        // if (e.target.id === 'yellow') {
        //     body.style.backgroundColor = e.target.id;
        // };
        // if (e.target.id === 'purple') {
        //     body.style.backgroundColor = e.target.id;
        // };
    }, false);
})