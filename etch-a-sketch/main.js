
let grid = document.querySelector('.grid');
let color = 1;
let range = document.querySelector('input');
let x = range.value;
let para = document.querySelector('p');

main();
range.addEventListener('input',function(){
    clear();
    x = range.value;
    main();
},false);

function generateRandomColor(){
    let maxVal = 0xFFFFFF; // 16777215
    let randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    let randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}

function erase(){
    color = 0;
}

function colors(){
    color = 1;
}
function main(){
    para.textContent = `${x}x${x}`;
    para.style = "text-align: center; font-size:larger;"
    for (let i = 0; i < x*x; i++) {
        const gridElement = document.createElement('div')
        gridElement.classList.add('grid-element')
        gridElement.addEventListener('mouseover', function handleMouseOver() {
            if(color == 0){
                gridElement.style = "background-color:"+"white"+';';
            }
            else{
                gridElement.style = "background-color:"+generateRandomColor()+';';
            }
            
        });
        grid.appendChild(gridElement);
    }
    grid.style = 'display:grid; grid-template-columns: repeat('+x+',1fr);grid-template-rows: repeat('+x+',1fr);';
}

function clear(){
    color = 1;
    let child = document.querySelectorAll('.grid-element');
    let parent = document.querySelector('.grid');
    for(let i = 0;i<child.length;i++){
        parent.removeChild(child[i]);
    }
}




