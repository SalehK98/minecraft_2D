import gameBoard from "./gameBoard.js";
import { setBackGround, reset } from "./utilities.js";
function drawMap() {
    console.log("drawing")
    console.log(gameBoard.length);
    document.getElementById("main_game").innerHTML = ""
    for (let i = 0; i < gameBoard.length; i++) {
        for (let j = 0; j < gameBoard[i].length; j++) {
            const block = document.createElement("div")
            // block.innerText = gameBoard[i][j], i, j
            switch (gameBoard[i][j]) {
                case 0:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "sky")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    block.classList.add("sky")
                    break
                case 1:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "cloud")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break
                case 2:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "leaf")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break

                case 3:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "tree")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break
                case 4:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "rock")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break
                case 5:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "grass")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break
                case 6:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "dirt")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break
                case 7:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "bush")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")
                    break
                default:
                    block.setAttribute("category", "block")
                    block.setAttribute("type", "sky")
                    block.classList.add("sky")
                    block.setAttribute("Coord", "[" + i + "," + j + "]")

            }

            document.getElementById("main_game").appendChild(block)
        }
    }
    setBackGround()
    reset()
    console.log("done");
}


export default drawMap