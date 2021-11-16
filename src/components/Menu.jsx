import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Spotify from "../assets/Spotify.svg"

const Menu = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/"><img src={Spotify} width="150" height="50" alt="Spotify logo"/></Navbar.Brand>
                <Nav className="me-auto">
                    <Link className="nav-link" to="/musicas">Musicas</Link>
                    <Link className="nav-link" to="/albuns">Albuns</Link>                    
                    <Link className="nav-link" to="/artistas">Artistas</Link>
                    <Link className="nav-link" to="/playlists">Playlists</Link>
                    <Link className="nav-link" to="/favoritos">Favoritos</Link>
                    
 
                                  
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Menu
