 let boxes = document.body.querySelectorAll(".box");
let resetbtn = document.body.querySelector("#rest");
let newbtn = document.body.querySelector("#New");
let msgcon = document.body.querySelector(".msg-container");
let msg = document.body.querySelector(".msg");
let player = true;
let count =0;
// game winning case
const winpartten = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
// add event on box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player) {
            box.innerText = "X";
            player = false;
            
        } else {
            box.innerText = "O";
            player = true;
        }
        // disable the button
        box.disabled = true;
        count++
    
    let iswinner = winner();
     if (count===9 && !iswinner){
        gamedraw();
     }

    });
});

const showwinner = (winner) => {
    msg.textContent = `Congratulations, Winner is ${winner}`;
    msgcon.classList.remove("hide");
    disablebox();
}

const winner = () => {
    for (let win of winpartten) {
        let pat1 = boxes[win[0]].innerText;
        let pat2 = boxes[win[1]].innerText;
        let pat3 = boxes[win[2]].innerText;

        if (pat1 !== "" && pat2 !== "" && pat3 !== "") {
            if (pat1 === pat2 && pat2 === pat3) {
                showwinner(pat1);
            }
        }
    }
}
 const gamedraw =()=>{
    msg.innerText = `Game was Draw.`;
    msgcon.classList.remove("hide");
    disablebox()
 }
const disablebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const resetgame = () => {
    player = true;
    count=0;
    enablebox();
    msgcon.classList.add("hide");
}

newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
