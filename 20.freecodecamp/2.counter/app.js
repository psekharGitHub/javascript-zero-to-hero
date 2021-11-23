let count = 0

const value = document.querySelector("#value")
const btns = document.querySelectorAll(".btn")  //return a node list

//iterate through all the buttons
btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const style = e.currentTarget.classList     //get all the class present in the button clicked
        if (style.contains('decrease')) {
            count--
        } else if (style.contains('increase')) {
            count++;
        } else {
            count = 0
        }
        if (count > 0) 
            value.style.color = 'green'
        else if (count < 0)
            value.style.color = 'red'
        else
            value.style.color = 'black'
            
        value.textContent = count
    })
})