let players = [
  { name: '櫻木花道', pts: 0, reb: 0, ast: 0, stl: 0, blk: 2 },
  { name: '流川楓', pts: 30, reb: 6, ast: 3, stl: 3, blk: 0 },
  { name: '赤木剛憲', pts: 16, reb: 10, ast: 0, stl: 0, blk: 5 },
  { name: '宮城良田', pts: 6, reb: 0, ast: 7, stl: 6, blk: 0 },
  { name: '三井壽', pts: 21, reb: 4, ast: 3, stl: 0, blk: 0 }
]

const dataPanel = document.querySelector('#data-panel')
function displayPlayerList(players) {
  let content = ``
  for (let i = 0; i < players.length; i++) {
    content += `<tr>`
    for (let n = 0; n <= 5; n++) {
      let playersDetail = players[i][Object.keys(players[0])[n]]
      if (typeof playersDetail === "number") {
        content += `<th>${playersDetail}<i class = "fa fa-plus-circle up"></i><i class = "fa fa-minus-circle down"></i></th>`
      } else {
        content += `<th>${playersDetail}</th>`
      }
    }
    content += `</tr>`
  }
  return content
}
// write your code here
dataPanel.innerHTML = displayPlayerList(players)

//加減功能
dataPanel.addEventListener("click", function (event) {
  const target = event.target
  let element_score = Number(target.parentElement.innerText)
  if (target.classList.contains("fa-plus-circle")) {
    element_score += 1
    target.parentElement.innerHTML = `<th>${element_score}<i class = "fa fa-plus-circle up"></i><i class = "fa fa-minus-circle down"></i></th>`
  } else if (target.classList.contains("fa-minus-circle") && element_score > 0) {
    element_score -= 1
    target.parentElement.innerHTML = `<th>${element_score}<i class = "fa fa-plus-circle up"></i><i class = "fa fa-minus-circle down"></i></th>`
  }
})
