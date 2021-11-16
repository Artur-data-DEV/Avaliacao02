import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import PlaylistService from '../../services/PlaylistsService'

const Playlists = () => {

    const [playlists, setPlaylists] = useState([])
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const playlists = PlaylistService.getAll()
        setPlaylists(playlists)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            PlaylistService.delete(i)
            setPlaylists(PlaylistService.getAll())
        }
    }

    // const novaData = new Date(Date.now())


    return (
        <>
            <Box title="Playlists">


                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Nome da playlist</th>
                            <th>Musicas</th>
                            <th>Data Criação</th>
                            <th>Ações</th>                           
                        </tr>
                    </thead>
                    <tbody>
                        {playlists.map((playlist, i) => (

                            

                            
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{playlist.nome}</td>
                                <td>{playlist.musica}</td>
                                <td>{playlist.dataCriacao}</td> 
                                <td>
                                    <Link to={"/playlists/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger " title="Excluir" onClick={() => excluir(i)} />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/playlists/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Playlist</Link>
            </Box>
        </>
    )
}

export default Playlists
