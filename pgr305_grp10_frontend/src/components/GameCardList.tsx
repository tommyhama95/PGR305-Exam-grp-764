import React, { useContext } from 'react';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import { UserGameContext } from '../contexts/UserGameContext';
import { IUserGameContext } from '../contexts/UserGameContext';
import { IGame } from '../models/IGame';
import GameCardItem from './GameCardItem';


const GameCardList = () => {
    const { games } = useContext<IUserGameContext>(UserGameContext);

    return (
        <> 
            {
                games?.map( (game: IGame, i: number) => {

                return (
                    <StyledCol key={i}>
                        <GameCardItem key={i} {...game}/> 
                    </StyledCol>
                    )
                })
            } 
        </>
    );
}

const StyledCol = styled(Col)`
    padding: 0;
`;

export default GameCardList;
