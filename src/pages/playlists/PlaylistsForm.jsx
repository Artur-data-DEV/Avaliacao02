import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../components/Box'
import PlaylistsService from '../../services/PlaylistsService'
import validador from '../../validators/PlaylistsValidator'

const PlaylistsForm = (props) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm()

  
    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const playlist = PlaylistsService.get(id)
            for (let campo in playlist) {
                setValue(campo, playlist[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? PlaylistsService.update(dados, id) : PlaylistsService.create(dados)
        props.history.push('/playlists')
    }

    
    return (
        <>
            <Box title="Nova Playlist ">
            <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2} >Nome da playlist: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o nome do playlist..." type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="musica">
                        <Form.Label column sm={2} >Musica(s): </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira as músicas..." type="text" {...register("musica", validador.musica)} />
                            {errors.musica && <span className="text-danger">{errors.musica.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="dataCriacao">
                        <Form.Label column sm={2} >Data de criação: </Form.Label>
                        <Col sm={10}>
                        <Form.Control type="text" value={new Date(Date.now()).toString()} {...register("dataCriacao")} />
                         
                        </Col>
                    </Form.Group>
                    <div className="text-center" >
                        <Button style={{margin: "10px"}} variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/playlists"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default PlaylistsForm
