import SueterG from "./img/SueterG.png";
import SueterH from "./img/SueterH.png";
import SueterHarry from "./img/SueterHarry.png";
import SueterR from "./img/SueterR.png";
import SueterRon from "./img/SueterRon.png";
import SueterS from "./img/SueterS.png";
import BufandaG from "./img/BufandaG.png";
import BufandaH from "./img/BufandaH.png";
import BufandaR from "./img/BufandaR.png";
import BufandaS from "./img/BufandaS.png";
import TunicaG from "./img/TunicaG.png";
import TunicaH from "./img/TunicaH.png";
import TunicaR from "./img/TunicaR.png";
import TunicaS from "./img/TunicaS.png";
import CorbataG from "./img/CorbataG.png";
import CorbataH from "./img/CorbataH.png";
import CorbataR from "./img/CorbataR.png";
import CorbataS from "./img/CorbataS.png";
import VaritaDraco from "./img/VaritaDraco.png";
import VaritaDumbledore from "./img/VaritaDumbledore.png";
import VaritaGinny from "./img/VaritaGinny.png";
import VaritaHarry from "./img/VaritaHarry.png";
import VaritaHermione from "./img/VaritaHermione.png";
import VaritaLuna from "./img/VaritaLuna.png";
import VaritaRon from "./img/VaritaRon.png";
import VaritaVoldemort from "./img/VaritaVoldemort.png";

const products = [
    {
        id: '1',
        nombre: "Suéter Gryffindor",
        img: SueterG,
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '2',
        nombre: "Suéter Hufflepuff",
        img: SueterH,
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '3',
        nombre: "Suéter Harry",
        img: SueterHarry,
        precio: 4800,
        categoría: 'sueter'
    },
    {
        id: '4',
        nombre: "Suéter Ravenclaw",
        img: SueterR,
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '5',
        nombre: "Suéter Ron",
        img: SueterRon,
        precio: 4800,
        categoría: 'sueter'
    },
    {
        id: '6',
        nombre: "Suéter Slytherin",
        img: SueterS,
        precio: 4500,
        categoría: 'sueter'
    },
    {
        id: '7',
        nombre: "Bufanda Gryffindor",
        img: BufandaG,
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '8',
        nombre: "Bufanda Hufflepuff",
        img: BufandaH,
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '9',
        nombre: "Bufanda Ravenclaw",
        img: BufandaR,
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '10',
        nombre: "Bufanda Slytherin",
        img: BufandaS,
        precio: 3300,
        categoría: 'bufanda'
    },
    {
        id: '11',
        nombre: "Túnica Gryffindor",
        img: TunicaG,
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '12',
        nombre: "Túnica Hufflepuff",
        img: TunicaH,
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '13',
        nombre: "Túnica Ravenclaw",
        img: TunicaR,
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '14',
        nombre: "Túnica Slytherin",
        img: TunicaS,
        precio: 7400,
        categoría: 'tunica'
    },
    {
        id: '15',
        nombre: "Corbata Gryffindor",
        img: CorbataG,
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '16',
        nombre: "Corbata Hufflepuff",
        img: CorbataH,
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '17',
        nombre: "Corbata Ravenclaw",
        img: CorbataR,
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '18',
        nombre: "Corbata Slytherin",
        img: CorbataS,
        precio: 2300,
        categoría: 'corbata'
    },
    {
        id: '19',
        nombre: "Varita Draco",
        img: VaritaDraco,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '20',
        nombre: "Varita Dumbledore",
        img: VaritaDumbledore,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '21',
        nombre: "Varita Ginny",
        img: VaritaGinny,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '22',
        nombre: "Varita Harry",
        img: VaritaHarry,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '23',
        nombre: "Varita Hermione",
        img: VaritaHermione,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '24',
        nombre: "Varita Luna",
        img: VaritaLuna,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '25',
        nombre: "Varita Ron",
        img: VaritaRon,
        precio: 3200,
        categoría: 'varita'
    },
    {
        id: '26',
        nombre: "Varita Voldemort",
        img: VaritaVoldemort,
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