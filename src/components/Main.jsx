import React from "react";
import '../App.css';
import Signal from '../img/signal.jpg';
import Container from "./Main.view";

const Main = () => {
    return (
        <Container>
            <h1>The Signal</h1>
            <img className='main-img' src={Signal} alt="main"/>
            <p className='main-text'>
                Duke is the biological son of Gotham City social worker Elaine Thomas and the villain known as Gnomon. 
                Prior to his birth, Elaine fled to Gotham while still pregnant with Duke in order to escape Gnomon, 
                as well as the various secret wars between immortals; involving individuals like the Immortal Man, 
                The Infinite Woman, Ra's al Ghul and others. Elaine went on to become a social worker and marry Doug Thomas, 
                a humble construction worker, and together they raised Duke in Tracey Towers in the Gotham Narrows. 
                Duke grew up to live a relatively uneventful childhood, completely unaware of his mother's previous life.
                When the terrorist Edward Nygma, aka the Riddler, shut off all the power in Gotham City, the madman challenged 
                the city to get smart or die by natural selection during what would later be called the Zero Year. 
                Riddler told the city that if anyone could ask him a riddle that he couldn't answer, he would restore power to Gotham. 
                Duke, who was a confident young student at the time, began to train his mind with brain teasers in anticipation of 
                accepting the Riddler's challenge. Duke and Bruce Wayne met for the first time when the Thomas family rescued 
                the unconscious billionaire when Hurricane Rene began its rampage on Gotham simultaneously during the Riddler's plot. 
                Thanking Duke for his kindness, Wayne departed to take on the Riddler himself.
                Several years later, the Joker had returned to Gotham with an endgame for Batman in mind. 
                Figuring out the vigilante's secret identity, the Joker kidnapped Duke and his family, 
                and planned to recreate Bruce Wayne's parents' murders right in front of him using the Thomas family. 
                Batman managed to rescue Duke and save the Thomas family from the murderous plot, but he was ultimately 
                unable to save Duke's parents from succumbing to the mind-controlling gas Joker had released. 
                Batman and Duke managed to make their way through the chaos on the streets of Gotham, 
                and Batman left Duke in the care of Julia Pennyworth before setting off for a fatal showdown with the Joker;
                Batman went missing shortly thereafter.
            </p>
        </Container>
    )
}

export default Main;