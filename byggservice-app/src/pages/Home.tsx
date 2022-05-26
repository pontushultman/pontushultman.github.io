// @flow 
import * as React from 'react';
import styled from 'styled-components';
import { Post } from '../components/Post';

const Div = styled.div`
margin-top: 80px;
margin-bottom: 80px;
`

type Props = {
    title: string
}

export const Home = ( {title} : Props) => {
    return (
        <>
       <Post id={"home"}> 
                    <h1> {title}</h1>
                    <p>
                        Vi på Kils Byggservice åtar oss stora som små projekt åt både privatpersoner och företag. Vi erbjuder både totalentreprenad och del-entreprenad av byggprojekt. Kils Byggservice har bred erfarenhet på försäkringsskador och serviceuppdrag till kommuner och fastighetsbolag. Vi har också möjligheten att ta in jobb på kort varsel.
                    </p>
                    <p>
                        Kils Byggservice är ett byggföretag i Kil som startades 2010 och ägs och drivs av David Lawner. Vi är idag 10 personer som arbetar i företaget, alla med gedigen branscherfarenhet.
                    </p>
                    <p>
                        Genom vår strävan att alltid hålla högsta kvalitet på våra arbeten och en hög servicenivå har vi genom åren fått många nöjda kunder, både privatpersoner och företag. Välkommen att kontakta oss för förfrågan på ert behov.
                    </p>
       </Post>
       </>
    );
};



