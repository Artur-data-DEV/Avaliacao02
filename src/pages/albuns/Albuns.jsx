import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaPlus, FaEdit, FaRegTrashAlt } from 'react-icons/fa'
import { MdPlaylistAdd, MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import AlbunsService from '../../services/AlbunsService'

const Albuns = () => {

    const [albuns, setAlbuns] = useState([])
    const [favorites, setFavorites] = useState([]);


    // useEffect(() => {
    //     if(getArray !== 0){
    //         setFavorites([...getArray])
    //     }
    // }, [])

    useEffect(() => {
        const albuns = AlbunsService.getAll()
        setAlbuns(albuns)
    }, [])



    function excluir(i) {
        if (window.confirm('Deseja realmente excluir o registro?')) {
            AlbunsService.delete(i)
            setAlbuns(AlbunsService.getAll())
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
            <Box title="Albuns">


                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Nome do album</th>
                            <th>Artista(s)</th>
                            <th>Genero</th>
                            <th>Ano</th>
                            <th>Ações</th>
                            <th>Mais</th>
                        </tr>
                    </thead>
                    <tbody>
                        {albuns.map((album, i) => (

                            

                            
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{album.nome}</td>
                                <td>{album.artista}</td>
                                <td>{album.genero}</td>
                                <td>{album.ano}</td>
                                <td>
                                    <Link to={"/albuns/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger " title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>
                                    {favorites.includes() ? (< MdFavorite className="text-danger" title="Favoritar" onClick={() => addFav(album, i)} />) : (< MdFavoriteBorder className="text-danger" title="Favoritar" onClick={() => addFav(album, i)} />)} {' '}
                                    {/* {console.log(album, i)} */}
                                    <MdPlaylistAdd className="text-dark" title="Excluir" onClick={() => excluir(i)} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/albuns/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Album</Link>
            </Box>
        </>
    )
}

export default Albuns
