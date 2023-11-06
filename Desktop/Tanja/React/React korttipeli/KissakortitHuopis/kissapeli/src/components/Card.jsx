

export default function Card({card}) {
    return(
        <div className="card">
            <img src={card.image}/>
            <ul className="kissalista">
                {card.ominaisuudet.map((listaelementti, index) => (
                    <li className="kissanominaisuus" key={index}>
                        <span> {listaelementti.name} </span>
                        <span> {listaelementti.value} </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}