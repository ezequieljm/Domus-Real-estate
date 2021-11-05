import SimpleCard from "./SimpleCard";

const valuesOfCards = {
	titles: [
		"Total",
		"Recibidos ayer",
		"Sin verificar",
		"Cientes no registrados",
	],
	values: [23, 2, 2, 4],
};

const CardsContainer = ({ stylesOfContentCards }) =>
    <div style={stylesOfContentCards}>
        <SimpleCard title={valuesOfCards.titles[0]} value={valuesOfCards.values[0]} colorTxt="#039be5"/>
        <SimpleCard title={valuesOfCards.titles[1]} value={valuesOfCards.values[1]} colorTxt="#ec407a"/>
        <SimpleCard title={valuesOfCards.titles[2]} value={valuesOfCards.values[2]} colorTxt="#00897b"/>
        <SimpleCard title={valuesOfCards.titles[3]} value={valuesOfCards.values[3]} colorTxt="#ff5722"/>
    </div>

export default CardsContainer;