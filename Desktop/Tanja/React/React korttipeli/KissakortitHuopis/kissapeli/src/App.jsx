import './App.css';
import Card from './components/Card';


// const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const pelaajanKissa = Math.floor(Math.random() * (8 - 0 + 1) + 0);
const pelaajankortti = {
    image: 'http://placekitten.com/120/100?image=' + pelaajanKissa,
    ominaisuudet: [
        {name: 'cuteness', value: 10},
        {name: 'loving', value: 200},
        {name: 'speed', value: 15},
    ],
};

const vastustajanKissa = Math.floor(Math.random() * (16 - 9 + 1) + 9);
const vastustajankortti = {
    image: 'http://placekitten.com/120/100?image=' + vastustajanKissa,
    ominaisuudet: [
        {name: 'cuteness', value: 100},
        {name: 'loving', value: 20},
        {name: 'speed', value: 55},
    ],
};


export default function App() {

    function compareCards() {
        console.log('Button clicked');

        const pelaajanStatus = pelaajankortti.ominaisuudet[0];
        const vastustajanStatus = vastustajankortti.ominaisuudet[0];

        let result = '';

        if (pelaajanStatus.value === vastustajanStatus.value) result = 'tasapeli';
        else if (pelaajanStatus.value > vastustajanStatus.value) result = 'voitto';
        else result = 'häviö';

        console.log(result);
    }

    return(
        <>
            <h1> Kissakorttipeli </h1>

            <p> Pelaajan kortti </p>
            <Card card={pelaajankortti}/>

            <button onClick={compareCards} type="button"> Vertaa </button>

            <p> Vastustajan kortti</p>
            <Card card={vastustajankortti}/>
        </>
    );
}