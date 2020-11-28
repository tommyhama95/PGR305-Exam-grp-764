import React, { useContext } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AdminGameContext, IAdminGameContext } from '../contexts/AdminGameContext';
import AdminGameItem from './AdminGameItem';

const AdminGameList = () => {

    const { games, setDidChangeList } = useContext<IAdminGameContext>(AdminGameContext)
    
    //const [ games, setGames ] : IGame[] = adminGame.games;
    //const [ setDidChangeList ] : any = adminGame.listUpdate;

    /*
    const [gameList, setGameList] = useState<IGame[] | undefined>();
    const [didChangeList, setDidChangeList] = useState<boolean>(false)

    
    useEffect(() => {
        axios.get("https://localhost:5001/admingames")
        .then( response => {
            setGameList(response.data)
            setDidChangeList(false)
        })
        .catch( error => {
            console.log(error)
        })
    }, [didChangeList]);*/

    const initiateListChange = () => {
        setDidChangeList(true);
    }

    return (
        <>
            <Container style={{backgroundColor: "#f5f5f5", paddingTop: "1em"}}>
                <StyledRow className="justify-content-md-between">
                    <Col>            
                        <h3 style={{textAlign: "center", padding: "0.5em 0em"}}>Game Administration:</h3>
                    </Col>
                    <Col>                
                        <Link style={{textDecoration: "none"}} to={`/admin/newgame`}>
                            <Button variant="outline-primary">
                                + Add new game
                            </Button>
                        </Link>
                    </Col>
                </StyledRow>
                <br />
                <Row style={{margin: 0}} className="justify-content-md-center">
                    {
                        games?.map(game => {
                            return <AdminGameItem game={game} initiateListChange={initiateListChange} key={game.id}/>
                        })
                    }
                </Row>
            </Container>
        </>
    )
}

const StyledRow = styled(Row)`
    margin: 0;
    align-items: center;
    text-align: center;
`;

export default AdminGameList
