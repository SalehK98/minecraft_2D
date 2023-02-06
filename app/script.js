import drawMap from "./draw-map.js"
import { setBackGround } from "./utilities.js"


let mode = "none"
let toolType = "none"
let blocksList = []
let invType = "none"
let blockType = ""
let count = 0

// reset button
document.getElementById("reset").addEventListener("click", drawMap)
drawMap()



const divs = document.querySelectorAll("div")
for (let index = 0; index < divs.length; index++) {
    const div = divs[index]
    div.addEventListener("click", (event) => {
        switch (div.getAttribute("category")) {
            case "tool":
                mode = "none"
                invType = "none"
                if (toolType === "none") {
                    mode = "remove"
                    toolType = div.getAttribute("type")
                    blocksList = JSON.parse(div.getAttribute("blocksList"))
                    document.querySelector("body").style = "cursor:url(./assets/cursor/" + toolType + ".png) , auto"
                } else {
                    if (toolType === div.getAttribute("type")) {
                        mode = "none"
                        blocksList = []
                        toolType = "none"
                        document.querySelector("body").style = "cursor:pointer"
                    } else {
                        mode = "remove"
                        toolType = div.getAttribute("type")
                        blocksList = JSON.parse(div.getAttribute("blocksList"))
                        document.querySelector("body").style = "cursor:url(./assets/cursor/" + toolType + ".png) , auto"
                    }
                }
                console.log("in switch 1");
                break
            case "inventory":
                mode = "none"
                toolType = "none"
                blocksList = []
                if (invType === "none") {
                    mode = "restore"
                    invType = div.getAttribute("invType")
                    document.querySelector("body").style = "cursor:url(./assets/cursor/" + invType + ".png) , auto"
                } else {
                    if (invType === div.getAttribute("invType")) {
                        mode = "none"
                        invType = "none"
                        document.querySelector("body").style = "cursor:pointer"
                    } else {
                        mode = "restore"
                        invType = div.getAttribute("invType")
                        document.querySelector("body").style = "cursor:url(./assets/cursor/" + invType + ".png) , auto"
                    }
                }
                console.log("in switch 2");
                break
            case "block":
                if (mode === "remove") {
                    blockType = div.getAttribute("type")
                    let coord = JSON.parse(div.getAttribute("coord"))
                    let prevCoord = coord[0] - 1
                    let prevBlock = document.querySelector('div[coord="[' + prevCoord + ',' + coord[1] + ']"')
                    if (prevCoord >= 0 && prevBlock.getAttribute("type") === "sky" && blocksList.includes(blockType)) {
                        div.setAttribute("type", "sky")
                        div.classList.add("sky")
                        setBackGround()
                        count = parseInt(document.querySelector("div[invType=" + blockType + "]").getAttribute("count"))
                        count++
                        document.querySelector("div[invType=" + blockType + "]").setAttribute("count", count)
                        document.querySelector("div[invType=" + blockType + "]").innerText = count
                    }
                } else if (mode === "restore") {
                    blockType = div.getAttribute("type")
                    count = parseInt(document.querySelector("div[invType=" + invType + "]").getAttribute("count"))
                    console.log(count);
                    if (blockType === "sky" && count > 0) {
                        div.setAttribute("type", invType)
                        div.classList.remove("sky")
                        setBackGround()
                        count--
                        document.querySelector("div[invType=" + invType + "]").setAttribute("count", count)
                        document.querySelector("div[invType=" + invType + "]").innerText = count
                    }
                }
                console.log("in switch 3");
                break
            default:
                console.log("in default");
        }
    })
}

