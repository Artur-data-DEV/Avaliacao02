import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { MdFavorite, MdFavoriteBorder, MdPlaylistAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import ArtistaService from '../../services/ArtistasService'

const Artistas = () => {

    const [artistas, setArtistas] = useState([])
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const artistas = ArtistaService.getAll()
        setArtistas(artistas)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            ArtistaService.delete(i)
            setArtistas(ArtistaService.getAll())
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
            <Box title="Artistas">


                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Nome do artista</th>
                            <th>País</th>
                            <th>Genero</th>
                            <th>Data de Nascimento</th>
                            <th>Data de Falescimento</th>
                            <th>Instrumento(s)</th>
                            <th>Ações</th>
                            <th>Mais</th>
                        </tr>
                    </thead>
                    <tbody>
                        {artistas.map((artista, i) => (

                            

                            
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{artista.nome}</td>
                                <td>{artista.país}</td>
                                <td>{artista.genero}</td>
                                <td>{artista.dataNasc}</td>
                                <td>{artista.dataFalesc}</td>
                                <td>{artista.instrumento}</td>
                                <td>
                                    <Link to={"/artistas/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger " title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>
                                    {favorites.includes() ? (< MdFavorite className="text-danger" title="Favoritar" onClick={() => addFav(artista, i)} />) : (< MdFavoriteBorder className="text-danger" title="Favoritar" onClick={() => addFav(artista, i)} />)} {' '}
                                    {/* {console.log(album, i)} */}
                                    <MdPlaylistAdd className="text-dark" title="Excluir" onClick={() => excluir(i)} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/artistas/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Artista</Link>
            </Box>
        </>
    )
}

export default Artistas
