import drawMap from "./draw-map.js"
import { setBackGround } from "./utilities.js"

// reset button
document.getElementById("reset").addEventListener("click", drawMap)


drawMap()
setBackGround()
const divs = document.querySelectorAll("div")
for (let index = 0; index < divs.length; index++) {
    const div = divs[index]
    div.addEventListener("click", (event) => {
        if (div.getAttribute("category") === "tool" || div.getAttribute("kind") === "inventory") {
            console.log("reached");
            document.querySelector("body").style = "cursor:url('url('./assets/" + div.getAttribute('category')
                + "/" + div.getAttribute('type') + ".png" + "')) , pointer";
        }
    })
}