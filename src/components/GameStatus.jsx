import React from 'react';
import Container from '@material-ui/core/Container';

function GameStatus({getStatus}){

    return (
        <Container >
            <h1 align="center" className="game-info">{getStatus()}</h1>
        </Container>
    )
}

export default GameStatus;