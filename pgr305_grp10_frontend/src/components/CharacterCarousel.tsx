import React, { useContext, useEffect, useState } from 'react';
import { Carousel, Container, Image } from 'react-bootstrap';
import styled from 'styled-components';
import { IUserCharacterContext } from '../contexts/UserCharacterContext';
import { UserCharacterContext } from '../contexts/UserCharacterContext';
import { ICharacter } from '../models/ICharacter';

interface ISlideInfo {
    name: string
    desc: string
}

const CharacterCarousel = ( props: any ) => {
    const { characters, getCharactersFromGame } = useContext<IUserCharacterContext>(UserCharacterContext);
    const [slideIndex, setSlideIndex] = useState<ISlideInfo>();

    const handleOnSlid = (i: number) => { // set the text below slider to contain description of current character shown
        const slideInfo: ISlideInfo = {name: characters![i].name, desc: characters![i].description};
        setSlideIndex(slideInfo);
    }

    useEffect(() => {
        getCharactersFromGame(props.gameId);
    }, []);

    return (
        <StyledContainer className="d-flex align-items-center flex-column">
            {
                (characters && characters.length > 0) ? 
                    <>
                        <StyledH2>{characters.length > 1 ? "Characters": "Character"}</StyledH2>
                        <StyledCarousel onSlid={(i: number) => handleOnSlid(i)}>
                            {
                                characters?.map((character: ICharacter, i: number) => 
                                <StyledCarouselItem key={i}>
                                        <CarouselImage 
                                            className="d-block"
                                            src={`https://localhost:5001/images/${character.image}`} 
                                            alt={character.name}
                                            />
                                        <Carousel.Caption style={{paddingBottom: "0"}}>
                                            <StyledH3>{character.name}</StyledH3>
                                        </Carousel.Caption>
                                    </StyledCarouselItem>    
                                )
                            }
                        </StyledCarousel>
                        <StyledP>{slideIndex ? slideIndex?.desc : characters[0].description}</StyledP>
                    </>
                    :
                    <StyledH2>No characters in this game</StyledH2>
            }
        </StyledContainer>
    );
}

const StyledContainer = styled(Container)`
    min-width: 100vw;
`;

const StyledCarousel = styled(Carousel)`
    height: 100%;
`;

const StyledCarouselItem = styled(Carousel.Item)`
    width: 100vw;
`;

const CarouselImage = styled(Image)`
    margin: auto;
    height: 40vw;

    @media (max-width: 955px) {
        height: 55vw;
    }
`;

const StyledH2 = styled.h2`
    padding: 1.25rem 0;
    color: #f2f2f2;
    text-shadow: 2px 2px #2f2f2f;
`;

const StyledH3 = styled.h3`
    text-shadow: 2px 2px #222;
    font-size: calc(2rem - 10%);
    padding-bottom: 1rem;
`;

const StyledP = styled.p`
    color: #f5f5f5;
    text-shadow: 2px 2px #222;
    font-size: calc(1vw + 0.7rem);
    min-height: 20vh;
    padding: 1.25rem 8vw;
    @media (max-width: 700px) {
        font-size: calc(1vw + 0.6rem);
    } 
`;

export default CharacterCarousel;
