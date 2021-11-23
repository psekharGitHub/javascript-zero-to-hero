console.log('Welcome to Drag and Drop');

const imgBox = document.querySelector('.imgBox');
const whiteBoxes = document.getElementsByClassName('whitebox');

//Event listeners for draggable imgBox
imgBox.addEventListener('dragstart', (e)=>{
    console.log('Drag start triggered');
    e.target.className += ' hold';
    setTimeout(()=> {
        e.target.className = 'hide';
    }, 0);
})

imgBox.addEventListener('dragend', (e)=>{
    console.log('Drag end triggered');
    e.target.className = 'imgBox';
})

for (whiteBox of whiteBoxes) {
    whiteBox.addEventListener('dragover', (e)=>{
        e.preventDefault();
        console.log('Drag Over triggered');
    });

    whiteBox.addEventListener('dragenter', (e)=>{
        e.preventDefault();
        console.log('Drag Enter triggered');
    });
    whiteBox.addEventListener('dragleave', (e)=>{
        e.preventDefault();
        console.log('Drag Leave triggered');
    });
    whiteBox.addEventListener('drop', (e)=>{
        e.preventDefault();
        console.log('Drag Drop triggered');
        e.target.append(imgBox);
    });
}