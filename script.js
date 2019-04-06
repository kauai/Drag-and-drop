const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragStart',dragStart);
fill.addEventListener('dragEnd',dragEnd);


//loop through empties and call drag Events
for(const empty of empties){
    empty.addEventListener('dragover',dragOver)
    empty.addEventListener('dragenter',dragEnter)
    empty.addEventListener('dragleave',dragLeave)
    empty.addEventListener('drop',dragDrop)
}

//Drag functions
function dragStart(){
    this.className = 'hold'
   
    setTimeout(() =>  this.className = 'invisible',0)
    console.log('start')
}

function dragEnd(){
   console.log('end')
   this.className = 'fill'
}

function dragOver(e){
    e.preventDefault()
    console.log('over')
}
function dragEnter(e){
    e.preventDefault()
    this.className += ' hovered'
}
function dragLeave(){
   console.log('leave')
   this.className = 'empty'
}
function dragDrop(){
   this.className = 'empty'
   this.append(fill)
}