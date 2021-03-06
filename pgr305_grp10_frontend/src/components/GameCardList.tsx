import React, { useContext, useState } from 'react';
import { Alert, Col, Container, Dropdown, DropdownButton, FormControl, InputGroup, Row, Spinner } from 'react-bootstrap';
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
    const [categoryText, setCategoryText] = useState<string>("");

    let gameList = games; // Holds current filtered game list if filtered

    // Reset search bar and list out game list by selected pegi rating
    const handleOnPegiSelect = (valueIn: string | null) => {
        setCategoryText("");
        if(valueIn !== "All" || valueIn !== null) {
            setFilterGamesBy({filterBy: "pegi", value: valueIn!});
        }
        setPegiSelected(valueIn!);
    }
    
    // Reset pegi selected and search after each change in searchbar
    const handleOnSearchChange = (input: string) => {
        setPegiSelected("All");
        setFilterGamesBy({filterBy: "input", value: input});
        setCategoryText(input);
    }

    // returns game list base on filter state
    const filterGames = ({filterBy, value}: IFilterGames) => { 
        if(filterBy === "pegi") {
            if( parseInt(value) ) { // if value selected is not "All"
                gameList = games?.filter( (game: IGame) => game.pegiRating === parseInt(value));
            }
        } else {
            gameList = games?.filter( (game: IGame) => (
                game.title.toLowerCase().includes(value.toLowerCase()) // filter for title checking
                || 
                game.category.toLowerCase().includes(value.toLowerCase()) // filter for category checking
            ) )
        }
    }

    if(filterGamesBy.value !== undefined) { // Only filter if any value has been chosen
        filterGames(filterGamesBy);
    }

    return (
        <> 
            <StyledSearchContainer>
                <p style={{color: "#f5f5f5"}}>Search by input field OR Pegi rating</p>
                <StyledSearchRow>
                    <StyledInputGroup>
                        <FormControl value={categoryText} placeholder="Seach by name or category" onChange={e => handleOnSearchChange(e.target.value)}/>
                        <InputGroup.Append>
                            <InputGroup.Text>{ gameList ? `Found: ${gameList!.length}` : `Found: 0` }</InputGroup.Text>
                        </InputGroup.Append>
                    </StyledInputGroup>
                    <DropdownButton 
                        onSelect={e => handleOnPegiSelect(e)}
                        title={`Pegi Rating: ${pegiSelected}`}
                        >
                        <Dropdown.Item eventKey="All">All</Dropdown.Item>
                        <Dropdown.Item eventKey="3">3 / Everyone</Dropdown.Item>
                        <Dropdown.Item eventKey="7">7</Dropdown.Item>
                        <Dropdown.Item eventKey="12">12</Dropdown.Item>
                        <Dropdown.Item eventKey="16">16</Dropdown.Item>
                        <Dropdown.Item eventKey="18">18</Dropdown.Item>
                    </DropdownButton>                
                </StyledSearchRow>
            </StyledSearchContainer>
            <Container fluid style={{padding: "0"}}>
            {
                !gameList ?
                    <LoaderRow className="justify-content-md-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </LoaderRow>
                    :
                    <>
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
                        {
                            gameList.length < 1 &&
                            <Row className="justify-content-md-center">
                                <Alert variant="light">No games found</Alert>
                            </Row>
                        }
                    </>
            } 
            </Container>
        </>
    );
}

const StyledSearchContainer = styled(Container)`
    margin: 1.5rem auto;
    @media (max-width: 800px) {
        margin: 1.5rem 1rem;
    }
`;

const StyledSearchRow = styled(Row)`
    min-width: 100vw;
`;

const StyledInputGroup = styled(InputGroup)`
    width: 50%;
    margin-right: 2rem;

    @media (max-width: 500px) {
        width: 100%;
        margin-bottom: 1rem;
    }

    @media (max-width: 1400px) {
        width: 70%;
    }
`;

const LoaderRow = styled(Row)`
    margin: 0;
    padding: 3em 0;
    height: 100%;
    align-items: center;
`
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