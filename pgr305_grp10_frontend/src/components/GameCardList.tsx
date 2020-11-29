import React, { useContext, useEffect, useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, Row } from 'react-bootstrap';
import styled from 'styled-components';
import { IUserGameContext, UserGameContext } from '../contexts/UserGameContext';
import { IGame } from '../models/IGame';
import GameCardItem from './GameCardItem';


export interface IFilterGames {
    filterBy: string | undefined    
    value: string 
}

const GameCardList = () => {
    const { games } = useContext<IUserGameContext>(UserGameContext);
    const [filterGamesBy, setFilterGamesBy] = useState<IFilterGames>({} as IFilterGames);
    const [pegiSelected, setPegiSelected] = useState<string | undefined>("All");

    let gameList = games;
    const {filterBy, value} = filterGamesBy;

    useEffect(() => {
        filterGames(filterGamesBy);
    }, [filterGamesBy]);

    const handleOnPegiSelect = (valueIn: string | null) => {
        setFilterGamesBy({filterBy: "pegi", value: valueIn!});
        setPegiSelected(valueIn!);
    }

    const filterGames = ({filterBy, value}: IFilterGames) => { 
        if(filterBy === "pegi") {
            gameList = games?.filter( (game: IGame) => game.pegiRating === parseInt(value));
        }
        if(filterBy === "category") {
            gameList = games?.filter( (game: IGame) => game.category === value);
        }
    }

    if(filterBy === "pegi") {
        const filterData: IFilterGames = {filterBy: "pegi", value: value}
        switch(value) {
            case "3": filterGames(filterData); break;
            case "7": filterGames(filterData); break;
            case "12": filterGames(filterData); break;
            case "16": filterGames(filterData); break;
            case "18": filterGames(filterData); break;
            default: gameList = games;
        }
    }

    return (
        <> 
            <Container>
                <DropdownButton 
                        onSelect={e => handleOnPegiSelect(e)}
                        title={`Pegi Rating: ${pegiSelected}`}
                        >
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3</Dropdown.Item>
                        <Dropdown.Item eventKey="7">7</Dropdown.Item>
                        <Dropdown.Item eventKey="12">12</Dropdown.Item>
                        <Dropdown.Item eventKey="16">16</Dropdown.Item>
                        <Dropdown.Item eventKey="18">18</Dropdown.Item>
                    </DropdownButton>
            </Container>
            <StyledRow>
            {
                gameList?.map( (game: IGame, i: number) => {
                    return (
                        <StyledCol key={i}>
                            <GameCardItem key={i} {...game}/> 
                        </StyledCol>
                        )
                    })
                } 
            </StyledRow>
        </>
    );
}

const StyledRow = styled(Row)`
    margin: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(700px, 1fr));
    @media (max-width: 700px) {
        grid-template-columns: repeat(auto-fit, minmax(100%, 1fr));
    }
`;

const StyledCol = styled(Col)`
    padding: 0;
`;

export default GameCardList;
