import React, { useContext, useState } from 'react';
import { Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row } from 'react-bootstrap';
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
    const [categoryText, setCategoryText] = useState<string>("Seach by name or category");

    let gameList = games;

    const handleOnPegiSelect = (valueIn: string | null) => {
        if(valueIn !== "All" || valueIn !== null) {
            setFilterGamesBy({filterBy: "pegi", value: valueIn!});
        }
        setPegiSelected(valueIn!);
    }
    
    const handleOnSearchChange = (input: string) => {
        setPegiSelected("All");
        setFilterGamesBy({filterBy: "input", value: input});
        setCategoryText(input);
    }

    const filterGames = ({filterBy, value}: IFilterGames) => { 
        if(filterBy === "pegi") {
            gameList = games?.filter( (game: IGame) => game.pegiRating === parseInt(value));
        } else {
            gameList = games?.filter( (game: IGame) => (
                game.title.toLowerCase().includes(value.toLowerCase()) 
                || 
                game.category.toLowerCase().includes(value.toLowerCase())
            ) )
        }
    }

    if(filterGamesBy.filterBy === "pegi") {
        switch(filterGamesBy.value) {
            case "3": filterGames(filterGamesBy); break;
            case "7": filterGames(filterGamesBy); break;
            case "12": filterGames(filterGamesBy); break;
            case "16": filterGames(filterGamesBy); break;
            case "18": filterGames(filterGamesBy); break;
            default: gameList = games;
        }
    }  else {
        if(filterGamesBy.value !== undefined) {
            filterGames(filterGamesBy);
        }
    }


    return (
        <> 
            <StyledContainer>
                <p style={{color: "#f5f5f5"}}>Search by input field OR Pegi rating</p>
                <StyledSearchRow>
                    <StyledInputGroup>
                        <FormControl placeholder={categoryText} onChange={e => handleOnSearchChange(e.target.value)}/>
                        <InputGroup.Append>
                            <InputGroup.Text>{ gameList ? `Found: ${gameList!.length}` : `Found: 0` }</InputGroup.Text>
                        </InputGroup.Append>
                    </StyledInputGroup>
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
                </StyledSearchRow>
            </StyledContainer>
            <StyledGameListRow>
            {
                gameList?.map( (game: IGame, i: number) => {
                    return (
                        <StyledCol key={i}>
                            <GameCardItem key={i} {...game}/> 
                        </StyledCol>
                        )
                    })
                } 
            </StyledGameListRow>
        </>
    );
}

const StyledContainer = styled(Container)`
    margin: 1.5rem auto;
    @media (max-width: 800px) {
        margin: 1.5rem 1rem;
    }
`;

const StyledSearchRow = styled(Row)`
    min-width: 100vw;
`;

const StyledInputGroup = styled(InputGroup)`
    width: 70%;
    margin-right: 2rem;

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 1rem;
    }
`;

const StyledGameListRow = styled(Row)`
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
