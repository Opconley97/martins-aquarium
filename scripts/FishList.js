import { getFish } from './database.js'

export const fishListOne = () => {
    const fishes = getFish();
    let htmlString = `<div class="fish_pics_one">\n   <div class="fish_ul_div">`
    for (const fish of fishes) {
        htmlString += `<img class="fish_img" id="fish_img_${fish.id}" src="${fish.img}"/>`
        htmlString += `<ul>`
        htmlString += `<li>Name:`
        htmlString += `<ul>`
        htmlString += `<li>`
        htmlString += `${fish.name}`
        htmlString += `</li>`
        htmlString += `</ul>`
        htmlString += `</li>`
        htmlString += `<li>Species:`
        htmlString += `<ul>`
        htmlString += `<li>`
        htmlString += `${fish.species}`
        htmlString += `</li>`
        htmlString += `</ul>`
        htmlString += `</li>`
        htmlString += `<li>Size:`
        htmlString += `<ul>`
        htmlString += `<li>`
        htmlString += `${fish.size}`
        htmlString += `</li>`
        htmlString += `</ul>`
        htmlString += `</li>`
        htmlString += `<li>Diet:`
        htmlString += `<ul>`
        htmlString += `<li>`
        htmlString += `${fish.diet}`
        htmlString += `</li>`
        htmlString += `</ul>`
        htmlString += `</li>`
        htmlString += `<li>Harvest Location:`
        htmlString += `<ul>`
        htmlString += `<li>`
        htmlString += `${fish.harvestLocation}`
        htmlString += `</li>`
        htmlString += `</ul>`
        htmlString += `</li>`
    }
    htmlString += `</ul>`
    htmlString += `</div>`

    return htmlString
}

