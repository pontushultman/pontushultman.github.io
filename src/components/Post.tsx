// @flow 
import * as React from 'react';
import styled from 'styled-components';

const Div = styled.div`
margin-top: 80px;
margin-bottom: 80px;
`



type Props = {
    id?: string,
    children: JSX.Element | JSX.Element[]
}

export const Post = ( {id, children } : Props) => {
    return (
        <Div id={id}>
        <div className="text-lg block-px">
            <div className="mx-auto block-max-w--sm">
                {children}
            </div>
        </div>
        </Div>
    );
};