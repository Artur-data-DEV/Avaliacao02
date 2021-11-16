import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import { FaEdit, FaPlus, FaRegTrashAlt } from 'react-icons/fa'
import { MdFavorite, MdFavoriteBorder, MdPlaylistAdd } from 'react-icons/md'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import FavoritoService from '../../services/FavoritosService'

const Favoritos = () => {

    const [favoritos, setFavoritos] = useState([])
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const favoritos = FavoritoService.getAll()
        setFavoritos(favoritos)
    }, [])

    function excluir(i) {

        if (window.confirm('Deseja realmente excluir o registro?')) {
            FavoritoService.delete(i)
            setFavoritos(FavoritoService.getAll())
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
            <Box title="Favoritos">


                <Table striped bordered hover>
                    <thead>
                        <tr>

                            <th>#</th>
                            <th>Nome do favorito</th>
                            <th>Tipo</th>
                            <th>Ações</th>
                            <th>Mais</th>
                        </tr>
                    </thead>
                    <tbody>
                        {favoritos.map((favorito, i) => (

                            

                            
                            <tr key={i}>
                                <td>{i}</td>
                                <td>{favorito.nome}</td>
                                <td>{favorito.tipo}</td>
    
                                <td>
                                    <Link to={"/favoritos/" + i}>
                                        <FaEdit title="Editar" />
                                    </Link>
                                    {' '}
                                    <FaRegTrashAlt className="text-danger " title="Excluir" onClick={() => excluir(i)} />
                                </td>
                                <td>
                                    {favorites.includes() ?  (< MdFavoriteBorder className="text-danger" title="Favoritar" onClick={() => addFav(favorito, i)} />) : (< MdFavorite className="text-danger" title="Favoritar" onClick={() => addFav(favorito, i)} />) } {' '}
                                    {/* {console.log(album, i)} */}
                                    <MdPlaylistAdd className="text-dark" title="Excluir" onClick={() => excluir(i)} />

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Link to="/favoritos/create" className="btn btn-primary mb-3"><FaPlus /> Adicionar Favorito</Link>
            </Box>
        </>
    )
}

export default Favoritos
