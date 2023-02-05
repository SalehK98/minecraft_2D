function setBackGround() {
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


export { setBackGround }