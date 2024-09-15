let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#newgame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let isO =true;
let c=0;
let game=false;

const winP=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

boxes.forEach((box) =>{
    box.addEventListener("click", () => {
        //console.log("box is clicked");
        if(isO)
        {
            box.textContent = "O";
            isO = false;
        }
        else{
            box.textContent = "X";
            isO = true;
        }
        c++;
        box.disabled=true;
        checkWinner();
        if(c===9 && game===false)
        {
            msg.innerText = "It's a tie!";
            msgContainer.classList.remove("hide");
        }
        
    });
});

const resetGame =() => {
    isO=true;
    c=0;
    game=false;
    enableBoxes();
}
const disableBoxes =()=>{
    for (let box of boxes)
    {
        box.disabled=true;
    }
};

const enableBoxes =()=>{
    for (let box of boxes)
    {
        box.disabled=false;
        box.innerText = "";
    }
    msgContainer.classList.add("hide");
};
const showWinner= (winner) =>{
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner=() =>{
    for(let i of winP)
    {
        let p1=boxes[i[0]].innerText;
        let p2=boxes[i[1]].innerText;
        let p3=boxes[i[2]].innerText;
        if(p1!=="" && p2!=="" && p3!=="")
        {
            if(p1===p2 && p2===p3)
            {
                console.log(`Winner is ${p1}`);
                game=true;
                showWinner(p1);
            }
        }
    }
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
