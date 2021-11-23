const color = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']

let changeBtn = document.getElementById('changeBtn')

let colorTag = document.getElementById('colorTag')
colorTag.innerHTML = `Background Color: default`

changeBtn.addEventListener('click', () => {
     let ind = 0
     let code = "#"
     while (ind < 6) {
         code += color[getRandomNumber()]
         ind++
     }   
     html = `Background Color: ${code}`
     colorTag.innerHTML = html
     document.body.style.backgroundColor = code
})

function getRandomNumber() {
    return Math.floor(Math.random() * color.length)
}