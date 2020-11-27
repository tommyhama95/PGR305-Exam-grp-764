import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form, Jumbotron, Navbar, Spinner } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import Header from '../components/Header';
import { ICharacter } from '../models/ICharacter';

const NewCharacter = () => {
    const history = useHistory();

    // To determine which game the character belongs to
    const location = useLocation();
    const [gameId] = useState<string>(location.pathname.split('/')[location.pathname.split('/').length - 2]);  // Game ID is second to last index of string

    const [character, setCharacter] = useState<ICharacter>({
        id: "",
        name: "",
        gameId: gameId,
        image: "",
        description: ""
    });

    // Create a copy of the game, modify a value on it, and replace it
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
        });
    }

    const postCharacter = () => {
        axios({
            method: "POST",
            url: "https://localhost:5001/characters",
            data: character,
            headers: {
                "Content-Type": "application/json"
            }
        }).then(resp => {
            console.info(`Successfully created new character: ${character.name}`);

            // On posting of game, wait a second and then return back to admin game view
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
                <h2>New [Gamename] character:</h2>
                <p>Write in the details of the character below</p>
            </Jumbotron>
            <Container>
                <Form>
                    <Form.Group>
                        <Form.Label>Character Title*</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Enter Character Name" 
                            value={character.name} 
                            onChange={(e) => handleInput("name", e.target.value)}/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Categories (At least one)*</Form.Label>
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
                        <Form.File id="characterImageFile" onChange={onFileChange}/>

                        <Button onClick={doImageUpload} disabled={!file}>
                            {
                                isUploadingImage ?
                                    <Spinner as="span" animation="border" size="sm" role="status" aria-hidden="true"/>
                                :
                                    <>Upload Image</>
                            }
                        </Button>
                    </Form.Group>
                    <Button variant="primary" onClick={postCharacter} disabled={!character.name || !character.description || !character.image}>
                        Create Character
                    </Button>
                </Form>
            </Container>
        </>
    )
}

export default NewCharacter
