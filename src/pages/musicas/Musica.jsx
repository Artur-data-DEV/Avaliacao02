import React, { useState, useEffect } from 'react'
import { Col, Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { MdFavorite, MdFavoriteBorder, MdPlaylistAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import MusicasService from '../../services/MusicasService'

const Musica = () => {

    const [musicas, setMusicas] = useState([])
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const musicas = MusicasService.getAll()
        setMusicas(musicas)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            MusicasService.delete(i)
            setMusicas(MusicasService.getAll())
        }
    }
    const addFav = (props) => {
        console.log(props)
        if (window.confirm('Deseja realmente favoritar o registro?')) {
            let array = favorites;
            let addArray = true;

            array.map((album, i) => {
                
                if(album === props.i){
                    array.splice(i, 1)
                    addArray = false;
                }
            })
         
            if (addArray) {
                array.push(props.i)
            }
            setFavorites([...array])
            
            // AlbunsService.favoritar(i)
            // setFavorites(AlbunsService.getAll())
        }
    }




    return (
        <>
            <Col >
                <Box title="Musicas" >




                    <Table striped bordered hover>
                        <thead>
                            <tr>
                               
                                <th>#</th>
                                <th>Música</th>
                                <th>Artista(s)</th>
                                <th>Album</th>
                                <th>Gênero</th>
                                <th>Ano</th>
                                <th>Ações</th>
                                <th>Mais</th>
                            </tr>
                        </thead>
                        <tbody>
                            {musicas.map((musica, i) => (
                                <tr key={i}>
                                    
                                    <td>{i}</td>
                                    <td>{musica.nome}</td>
                                    <td>{musica.artista}</td>
                                    <td>{musica.album}</td>
                                    <td>{musica.genero}</td>
                                    <td>{musica.ano}</td>
                                    <td>
                                        <Link to={'/musicas/' + i}>
                                            <FaEdit title="Editar" />
                                        </Link>
                                        {' '}
                                        <FaRegTrashAlt className="text-danger" onClick={() => excluir(i)} title="Excluir" />
                                    </td>
                                    <td>
                                    {favorites.includes() ? (< MdFavorite className="text-danger" title="Favoritar" onClick={() => addFav(musica, i)} />) : (< MdFavoriteBorder className="text-danger" title="Favoritar" onClick={() => addFav(musica, i)} />)} {' '}
                                    {/* {console.log(album, i)} */}
                                    <MdPlaylistAdd className="text-dark" title="Excluir" onClick={() => excluir(i)} />

                                </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Link to="/musicas/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Musica</Link>
                </Box>

            </Col>
        </>
    )
}

export default Musica
