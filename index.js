
var initialArray = [
    [0,0,0],
    [0,0,0],
    [0,0,0],
];

var array = JSON.parse(JSON.stringify(initialArray))

var winningCombo = [
    [
    [0,0],
    [0,1],
    [0,2],
    ],
    [
        [1,0],
        [1,1],
        [1,2],
    ],
    [
        [2,0],
        [2,1],
        [2,2],
    ],
    [
        [0,0],
        [1,1],
        [2,2],
    ],
    [
        [0,2],
        [1,1],
        [2,0],
    ]

    ]

var p1Turn = true;

document.onload(loadGame())


function handleClick(x,y){

    if(array[x][y] ===0){

        array[x][y] = p1Turn?-1:1;

        p1Turn =!p1Turn;

        loadGame();

        window.setTimeout(()=>checkGameOver(),200)

        return;
    }

    window.alert('Nobody wins')

    array = JSON.parse(JSON.stringify(initialArray))
    loadGame()

}

function checkGameOver(){

    winningCombo.forEach((combo)=>{
        var sum = 0
        combo.forEach(i=>{
            sum += array[i[0]][i[1]]
        })

        if(sum === -3){
            window.alert('Player 1 wins')

            array = JSON.parse(JSON.stringify(initialArray))
            loadGame()
        }

        else if (sum === 3){

            alert("Player 2 wins")

            array = JSON.parse(JSON.stringify(initialArray))
            loadGame()
        }

        var sum = 0
        combo.forEach(i=>{
            sum += array[i[1]][i[0]]
        })

        if(sum === -3){
            window.alert('Player 1 wins')

            array = JSON.parse(JSON.stringify(initialArray))
            loadGame()
        }

        else if (sum === 3){

            alert("Player 2 wins")

            array = JSON.parse(JSON.stringify(initialArray))
            loadGame()
        }
    })
}

function loadGame(){

    let root = document.getElementById('game')

    root.innerHTML='';

    array.forEach((item,index1)=>{

        let element = document.createElement('div')
        element.setAttribute('style','display: flex; margin: 4px')
        item.forEach((e,index2)=>{

            element.innerHTML+=`
            <div style="
            width:60px; 
            height: 60px; 
            margin:2px;
            border-radius: 8px;
            background-color: #ccc;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
            
            "
            onclick="handleClick(${index1},${index2})"
            >
            ${
                (e>0)?'X':(e<0)?'O':''
                }
            </div>
            `
        })

        root.appendChild(element)
    })

}