import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Box from '../../components/Box'
import FavoritoService from '../../services/FavoritosService'
import validador from '../../validators/FavoritosValidator'

const FavoritosForm = (props) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm()

  
    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const favorito = FavoritoService.get(id)
            for (let campo in favorito) {
                setValue(campo, favorito[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? FavoritoService.update(dados, id) : FavoritoService.create(dados)
        props.history.push('/favoritos')
    }
    
    return (
        <>
            <Box title="Favoritos ">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2}>Nome: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o nome do favorito..."type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="tipo">
                        <Form.Label column sm={2}>Tipo: </Form.Label>
                        <Col sm={10}>
                            <Form.Select aria-label="Selecione o tipo..." type="text" {...register("tipo", validador.tipo)} >
                                <option value={''}>Selecione um tipo...</option>
                                <option value="Musica">Musica</option>
                                <option value="Artista">Artista</option>
                                <option value="Album">Album</option>
                            
                            </Form.Select>

                            {errors.tipo && <span className="text-danger">{errors.tipo.message}</span>}

                        </Col>
                    </Form.Group>
                    <div className="text-center">
                        <Button variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/favoritos   "><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default FavoritosForm
