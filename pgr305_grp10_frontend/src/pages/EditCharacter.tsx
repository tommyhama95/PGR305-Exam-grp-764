import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Container, Form, Jumbotron, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import styled from 'styled-components';
import Header from '../components/Header';
import { ICharacter } from '../models/ICharacter';

const EditCharacter = () => {
    const history = useHistory();
    const location = useLocation();

    const [gameId] = useState<string>(location.pathname.split('/')[location.pathname.split('/').length - 3]);  // Game ID is second to last index of string
    const [characterId] = useState<string>(location.pathname.substring(location.pathname.lastIndexOf('/') + 1));
    const [character, setCharacter] = useState<ICharacter>({
        id: "",
        name: "",
        gameId: gameId,
        image: "",
        description: ""
    });

    // Set the currently selected game
    useEffect(() => {
        axios.get(`https://localhost:5001/admincharacters/${characterId}`)
        .then( response => {
            setCharacter(response.data)
        })
        .catch( error => {
            console.log(error)
        })
    }, [characterId]);

    // Copy the current state of the game
    const handleInput = (property : string, value : string) => {
        let characterCopy = JSON.parse(JSON.stringify(character))

        switch(property) {
            case "name": characterCopy.name = value; break;
            case "image": characterCopy.image = value; break;
            case "description": characterCopy.description = value; break;
            default: return;
        }

        setCharacter(characterCopy);
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
            handleInput("image", resp.data)
            setIsUploadingImage(false);
        }).catch( error => {
            console.error(error);
        })
        ;
    }

    // Method that updates the game
    const putCharacter = () => {
        axios({
            method: "PUT",
            url: "https://localhost:5001/admincharacters",
            data: character,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => {
            console.log(resp)
            console.info(`Successfully updated ${character.name}`);

            // On posting of game, wait a second and then return back to admin homepage
            setTimeout(() => {
                history.replace(`/admin/game/${gameId}`);
            }, 1000);

        }).catch(error => {
            console.error(error);
        })
    }

    return (
        <>
            <Header url="/admin/home"/>
            <Jumbotron>
                <h2>Edit character</h2>
                <p>Change the details of characters by editing the contents below:</p>
            </Jumbotron>
            <Container>
                {
                    !character.id ?
                    <CenteredDiv>
                        <Spinner animation="border"></Spinner>
                    </CenteredDiv>
                    :
                    <Form>
                        <Form.Group>
                            <Form.Label>Character Name</Form.Label>
                            <Form.Control 
                                type="text" 
                                placeholder="Enter character name" 
                                value={character.name} 
                                onChange={(e) => handleInput("name", e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Character Description*</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Enter the character's description." 
                                value={character.description} 
                                onChange={(e) => handleInput("description", e.target.value)}/>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Cover Image</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="No image has been uploaded..." 
                                value={character.image}
                                readOnly />
                            <StyledFormFile id="characterImageThumbnailFile" onChange={onFileChange}/>

                            <Button onClick={doImageUpload} disabled={!file}>
                                {
                                    isUploadingImage ?
                                        <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                                    :
                                        <>Upload Image</>
                                }
                            </Button>
                        </Form.Group>
                        <Button style={{marginBottom: "1em"}} variant="primary" onClick={putCharacter} disabled={!character.name || !character.description || !character.image}>
                            Update Character
                        </Button>
                    </Form>
                }
            </Container>
        </>
    )
}

const CenteredDiv = styled.div`
    width: 100%;
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: middle;
    align-items: center;
`

const StyledFormFile = styled(Form.File)`
    margin: 1rem 0rem;
`;

export default EditCharacter
