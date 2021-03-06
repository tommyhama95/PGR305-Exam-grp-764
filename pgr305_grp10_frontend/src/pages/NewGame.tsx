import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form, InputGroup, Jumbotron, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import Header from '../components/Header';
import { IGame } from '../models/IGame';

const NewGame = () => {

    const history = useHistory();

    const [game, setGame] = useState<IGame>({
        id: "",
        title: "",
        category: "",
        coverImage: "",
        price: 0,
        pegiRating: 0,
        description: ""
    });

    // Create a copy of the game, modify a value on it, and replace it
    const handleInput = (property : string, value : string) => {
        let gameCopy = JSON.parse(JSON.stringify(game))

        switch(property) {
            case "title": gameCopy.title = value; break;
            case "description": gameCopy.description = value; break;
            case "category": gameCopy.category = value; break;
            case "cover": gameCopy.coverImage = value; break;
            case "price": gameCopy.price = parseInt(value); break;
            case "pegi":  gameCopy.pegiRating = parseInt(value); break;
            default: return;
        }

        setGame(gameCopy);
    }

    // Uploading image to backend
    const [file, setFile] = useState<any>("");
    const onFileChange = (e : any) => {
        setFile( e.target.files[0] )
    }

    const [isUploadingImage, setIsUploadingImage] = useState<boolean>(false);
    const doImageUpload = () => {
        setIsUploadingImage(true);
        let data = new FormData();
        data.append("file", file)

        axios({
            method: "POST",
            url: "https://localhost:5001/imageupload/uploadimage",
            data: data,
            headers: {
                "Content-Type": "multipart/form-data" 
            }
        }).then(resp => {
            // Wait for the image to be uploaded, and set the cover image to be the generated name
            handleInput("cover", resp.data)
            setIsUploadingImage(false);
        }).catch( error => {
            console.error(error);
        })
        ;
    }

    const postGame = () => {
        axios({
            method: "POST",
            url: "https://localhost:5001/admingames",
            data: game,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => {
            console.info("Successful game upload");

            // On posting of game, wait a second and then return back to admin homepage
            setTimeout(() => {
                history.replace("/admin/home");
            }, 1000);

        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <Header url="/admin/home"/> 
            <StyledJumbotron>
                <h2>Make a new game</h2>
                <p>Input the values of the game in the form below</p>
            </StyledJumbotron>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Game Title*</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter game title" 
                            value={game.title} 
                            onChange={(e) => handleInput("title", e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Game Description*</Form.Label>
                        <Form.Control 
                            type="textarea" 
                            placeholder="Enter description" 
                            value={game.description} 
                            onChange={(e) => handleInput("description", e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categories (At least one)*</Form.Label>
                        <Form.Control
                            type="text" 
                            placeholder="Input game categories separated by commas" 
                            value={game.category} 
                            onChange={(e) => handleInput("category", e.target.value)}/>
                        <Form.Text className="text-muted">
                            Separate categories with commas. Eg: (Platformer, Shooter, Adventure)
                        </Form.Text>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Cover Image</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="No image has been uploaded..." 
                            value={game.coverImage}
                            readOnly />
                        <StyledFormFile id="gameImageThumbnailFile" onChange={onFileChange}/>

                        <Button onClick={doImageUpload} disabled={!file}>
                            {
                                isUploadingImage ?
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                                :
                                    <>Upload Image</>
                            }
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Price (-1 = NA, 0 = Free)</Form.Label>
                        <InputGroup>
                            <Form.Control
                                type="number" 
                                placeholder="Input the game price" 
                                value={game.price} 
                                onChange={(e) => handleInput("price", e.target.value)}/>
                            <InputGroup.Append>
                                <InputGroup.Text id="priceAppend">,-</InputGroup.Text>
                            </InputGroup.Append>                    
                        </InputGroup>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            PEGI Rating (3 is same as Everyone)
                        </Form.Label>
                        <Form.Control as="select" defaultValue="3" onChange={e => handleInput("pegi", e.target.value)}>
                            <option>3</option>
                            <option>7</option>
                            <option>12</option>
                            <option>16</option>
                            <option>18</option>
                        </Form.Control>
                    </Form.Group>
                    <Button style={{marginBottom: "1em"}} variant="primary" onClick={postGame} disabled={!game.title || !game.description || !game.category || !game.coverImage}>
                        Create Game
                    </Button>
                </Form>
            </Container>
        </>
    )
}

const StyledJumbotron = styled(Jumbotron)`
    background-color: #2e5fff;
    color: #f2f2f2;
`;

const StyledFormFile = styled(Form.File)`
    margin: 1rem 0rem;
`;

export default NewGame
