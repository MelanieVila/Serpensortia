const products = [
    {
        id: '1',
        nombre: "Suéter Gryffindor",
        img: "./img/SueterG.png",
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '2',
        nombre: "Suéter Hufflepuff",
        img: "./img/SueterH.png",
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '3',
        nombre: "Suéter Harry",
        img: "./img/SueterHarry.png",
        precio: 4800,
        categoría: 'sueter'
    },
    {
        id: '4',
        nombre: "Suéter Ravenclaw",
        img: "./img/SueterR.png",
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '5',
        nombre: "Suéter Ron",
        img: "./img/SueterRon.png",
        precio: 4800,
        categoría: 'sueter'
    },
    {
        id: '6',
        nombre: "Suéter Slytherin",
        img: "./img/SueterS.png",
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '7',
        nombre: "Bufanda Gryffindor",
        img: "./img/BufandaG.png",
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '8',
        nombre: "Bufanda Hufflepuff",
        img: "./img/BufandaH.png",
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '9',
        nombre: "Bufanda Ravenclaw",
        img: "./img/BufandaR.png",
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '10',
        nombre: "Bufanda Slytherin",
        img: "./img/BufandaS.png",
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '11',
        nombre: "Túnica Gryffindor",
        img: "./img/TunicaG.png",
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '12',
        nombre: "Túnica Hufflepuff",
        img: "./img/TunicaH.png",
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '13',
        nombre: "Túnica Ravenclaw",
        img: "./img/TunicaR.png",
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '14',
        nombre: "Túnica Slytherin",
        img: "./img/TunicaS.png",
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '15',
        nombre: "Corbata Gryffindor",
        img: "./img/CorbataG.png",
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '16',
        nombre: "Corbata Hufflepuff",
        img: "./img/CorbataH.png",
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '17',
        nombre: "Corbata Ravenclaw",
        img: "./img/CorbataR.png",
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '18',
        nombre: "Corbata Slytherin",
        img: "./img/CorbataS.png",
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '19',
        nombre: "Varita Draco",
        img: "./img/VaritaDraco.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '20',
        nombre: "Varita Dumbledore",
        img: "./img/VaritaDumbledore.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '21',
        nombre: "Varita Ginny",
        img: "./img/VaritaGinny.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '22',
        nombre: "Varita Harry",
        img: "./img/VaritaHarry.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '23',
        nombre: "Varita Hermione",
        img: "./img/VaritaHermione.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '24',
        nombre: "Varita Luna",
        img: "./img/VaritaLuna.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '25',
        nombre: "Varita Ron",
        img: "./img/VaritaRon.png",
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '26',
        nombre: "Varita Voldemort",
        img: "./img/VaritaVoldemort.png",
        precio: 3200,
        categoría: 'varita'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}