// @flow 
import * as React from 'react';
import { Post } from '../components/Post';
type Props = {
    title: string
};
export const Services = ({ title }: Props) => {
    return (
        <>
            <Post id="services">
                <h1> {title}</h1>
                <p>
                Vi arbetar med ombyggnation, tillbyggnation och renovering. Vi utför alla typer av renoveringsarbeten, in- och utvändigt, samt till- och ombyggnader: badrum, kök, fasader, tak, altaner m.m.
                </p>

                <p>
                Vi kan skräddarsy våra tjänster efter varje kunds specifika önskemål. Vi anlitas av kunder inom många olika områden: allt från fastighetsbolag och handel till privatbostäder. Kils Byggservice är det självklara förstahandsvalet för våra återkommande kunder.
                </p>

                <p>
                Hos oss finns det lilla företagets korta beslutsvägar och närhet till kunden. Som kund hos oss kan du oavsett uppdragens storlek alltid räkna med vårt engagemang genom hela byggprocessen. Våra uppdrag kan gälla allt från enskilda fönsterbyten till nybyggnationer av stora kommersiella fastigheter, men vår noggrannhet är alltid densamma.
                </p>
                
                <p>
                Vi ger dig snabba anbudsförfaranden, korta produktionstider och hög kvalitet på arbetet vi genomför. Kontakta oss här.
                </p>
            </Post>
        </>
    );
};