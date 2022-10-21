const database = {
    fish: [
        {
            id: 1,
            name: "Peacock Mantis Shrimp",
            species: "O. scyllarus",
            size: "4.5 inches in length",
            diet: "Gastropods and mollusks",
            harvestLocation: "Guam"
            
        },
        {
            id: 2,
            name: "Pelican Eel",
            species: "E. pelecanoides",
            size: "2.5 feet in length",
            diet: "Small Crustaceans",
            harvestLocation: "Portugal"
        },
        {
            id: 3,
            name: "Macropinna",
            species: "M. microstoma",
            size: "6 inches in length",
            diet: "Cnidaria",
            harvestLocation: "California"
        },
        {
            id: 4,
            name: "Bloodybelly Comb Jelly",
            species: "L. cruentiventer",
            size: "8.75 centimeters in length",
            diet: "Zooplankton",
            harvestLocation: "California"
        },
        {
            id: 5,
            name: "Giant Siphonophore",
            species: "P. Dubia",
            size: "160 feet in length",
            diet: "Gelatinous sea life",
            harvestLocation: "Iceland"
        },
        {
            id: 6,
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