import gameBoard from "./gameBoard.js";
function drawMap() {
    console.log(gameBoard.length);
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const block = document.createElement("div")
            // block.innerText = gameBoard[i][j]
            block.addEventListener("click", (event) => {
                event.target.style.visibility = "hidden"
            })
            switch (gameBoard[i][j]) {
                case 0:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "sky")
                    block.classList.add("sky")
                    break
                case 1:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "sky")
                    // block.classList.add("cloud")
                    break
                case 2:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "leaf")
                    // block.classList.add("leaf")
                    break

                case 3:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "tree")
                    // block.classList.add("tree")
                    break
                case 4:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "rock")
                    // block.classList.add("rock")
                    break
                case 5:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "grass")
                    // block.classList.add("grass")
                    break
                case 6:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "dirt")
                    // block.classList.add("dirt")
                    break
                case 7:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "bush")
                    // block.classList.add("bush")
                    break
                default:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "sky")
                    block.classList.add("sky")
            }
            // block.style.backgroundImage = "url('./assets/" + block.getAttribute('category')
            //     + "/" + block.getAttribute('type') + ".png" + "')"

            document.getElementById("main_game").appendChild(block)
        }
    }
    console.log("done");
}


export default drawMap