const database = {
    fish: [
        {
            id: 1,
            img: "https://www.georgiaaquarium.org/wp-content/uploads/2022/03/peacock-mantis-shrimp-2.jpg",
            name: "Peacock Mantis Shrimp",
            species: "O. scyllarus",
            size: "4.5 inches in length",
            diet: "Gastropods and mollusks",
            harvestLocation: "Guam"
            
        },
        {
            id: 2,
            img: "https://www.imago-images.de/bild/st/0062956272/s.jpg",
            name: "Pelican Eel",
            species: "E. pelecanoides",
            size: "2.5 feet in length",
            diet: "Small Crustaceans",
            harvestLocation: "Portugal"
        },
        {
            id: 3,
            img: "https://www.ourbreathingplanet.com/wp-content/uploads/2019/11/Barreleye-Fish.jpg",
            name: "Macropinna",
            species: "M. microstoma",
            size: "6 inches in length",
            diet: "Cnidaria",
            harvestLocation: "California"
        },
        {
            id: 4,
            img: "https://imageio.forbes.com/specials-images/imageserve/6257938cd972e037e64f6c3f/0x0.jpg?format=jpg&width=1200",
            name: "Bloodybelly Comb Jelly",
            species: "L. cruentiventer",
            size: "8.75 centimeters in length",
            diet: "Zooplankton",
            harvestLocation: "California"
        },
        {
            id: 5,
            img: "https://top10animal.com/wp-content/uploads/2021/04/EB6o4Lv9WYmmczxs.jpg",
            name: "Giant Siphonophore",
            species: "P. Dubia",
            size: "160 feet in length",
            diet: "Gelatinous sea life",
            harvestLocation: "Iceland"
        },
        {
            id: 6,
            img: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Limulus_polyphemus_%28aq.%29.jpg",
            name: "Horseshoe Crab",
            species: "L. polyphemus",
            size: "2 feet in length",
            diet: "Mollusks",
            harvestLocation: "Mexico"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}