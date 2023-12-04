import './App.css';
import Card from './components/Card';
import { useState } from 'react';


const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const kortti = (index) => ({
    image: 'http://placekitten.com/120/100?image=' + index,
    ominaisuudet: [
        {name: 'cuteness', value: getRandomInt(1,10)},
        {name: 'loving', value: getRandomInt(1,20)},
        {name: 'speed', value: getRandomInt(1,15)},
    ],
});

// luodaan 16 kortin korttipakka
const korttipakka = Array(16).fill(null).map((_,index)=>kortti(index));
console.log(korttipakka);

// etsitään korttipakan puoliväli
const puolivali = Math.ceil(korttipakka.length / 2);

// jaetaan kortit
function jaaKortit() {
    shuffle(korttipakka);
    return {
        pelaaja: korttipakka.slice(0, puolivali),
        vastustaja: korttipakka.slice(puolivali)
    }
};

console.log(jaaKortit());

// Fisher-Yates shuffle valmis koodi
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

const pelaajankortti = korttipakka[0];
const vastustajankortti = korttipakka[1];



export default function App() {

    const [result, setResult] = useState('');
    const [kortit, setKortit] = useState(jaaKortit)

    function compareCards() {
        console.log('Button clicked');

        const pelaajanStatus = pelaajankortti.ominaisuudet[0];
        const vastustajanStatus = vastustajankortti.ominaisuudet[0];

        //let result = '';

        if (pelaajanStatus.value === vastustajanStatus.value) setResult('tasapeli');
        else if (pelaajanStatus.value > vastustajanStatus.value) setResult('voitto');
        else setResult('häviö');

        // näyttää vanhaa tietoa
        console.log(result);
    }

    return(
        <>
            <h1> Kissakorttipeli </h1>

            <div className='pelialue'>

                <div>
                    <p> Pelaajan kortti </p>
                    {kortit.pelaaja.map(pelaajankortti => (
                        <Card card={pelaajankortti}/>
                    ))}
                </div>

                <button onClick={compareCards} type="button" className='playButton'> Vertaa </button>
                <p> { result } </p>

                <div>
                    <p> Vastustajan kortti</p>
                    {kortit.vastustaja.map(vastustajankortti => (
                        <Card card={vastustajankortti}/>
                    ))}
                </div>

            </div>
        </>
    );
}