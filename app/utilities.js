// let mode = "none"
// let toolType = "none"
// let blocksList = []
// let invType = "none"
// let blockType = ""
// let count = 0


function setBackGround() {
    console.log("setBack")
    const divs = document.querySelectorAll("div")
    for (let index = 0; index < divs.length; index++) {
        const div = divs[index]
        if (div.getAttribute("category") && div.getAttribute("type")) {
            const category = div.getAttribute("category")
            const type = div.getAttribute("type")
            const backGroundUrl = "url('./assets/" + category + "/" + type + ".png" + "')"
            div.style.backgroundImage = backGroundUrl
        }
    }
}

function reset() {
    const inventoryList = document.querySelectorAll("div[category=inventory]")
    inventoryList.forEach(el => {
        el.setAttribute("count", 0)
        el.innerText = el.getAttribute("count")
    })
    document.querySelector("body").style = "cursor:pointer"
    // mode = "none"
    // toolType = "none"
    // blocksList = []
    // invType = "none"
    // blockType = ""
    // count = 0
}


// function doAction() {}


export { setBackGround, reset }