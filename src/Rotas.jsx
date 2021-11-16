import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Musica from './pages/musicas/Musica'
import MusicasForm from './pages/musicas/MusicasForm'
import Albuns from './pages/albuns/Albuns'
import AlbunsForm from './pages/albuns/AlbunsForm'
import Artistas from './pages/artistas/Artistas'
import ArtistasForm from './pages/artistas/ArtistasForm'
import Favoritos from './pages/favoritos/Favoritos'
import FavoritosForm from './pages/favoritos/FavoritosForm'
import Playlists from './pages/playlists/Playlists'
import PlaylistsForm from './pages/playlists/PlaylistsForm'



const Rotas = () => {
    return (
        <Container className="mt-3">
            <Switch>
                <Route exact path="/" component={Musica} />
                <Route exact path="/musicas" component={Musica} />
                <Route exact path="/musicas/create" component={MusicasForm} />
                <Route exact path="/musicas/:id" component={MusicasForm} />
                <Route exact path="/albuns" component={Albuns} />
                <Route exact path="/albuns/create" component={AlbunsForm} />
                <Route exact path="/albuns/:id" component={AlbunsForm} />
                <Route exact path="/artistas" component={Artistas} />
                <Route exact path="/artistas/create" component={ArtistasForm} />
                <Route exact path="/artistas/:id" component={ArtistasForm} />
                <Route exact path="/favoritos" component={Favoritos} />
                <Route exact path="/favoritos/create" component={FavoritosForm} />
                <Route exact path="/favoritos/:id" component={FavoritosForm} />
                <Route exact path="/playlists" component={Playlists} />
                <Route exact path="/playlists/create" component={PlaylistsForm} />
                <Route exact path="/playlists/:id" component={PlaylistsForm} />

            </Switch>
        </Container>
    )
}

export default Rotas
