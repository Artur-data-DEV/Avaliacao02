import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'

import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../components/Box'
import AlbunsService from '../../services/AlbunsService'
import validador from '../../validators/AlbunsValidator'



const AlbunsForm = (props) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm()


    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const album = AlbunsService.get(id)
            for (let campo in album) {
                setValue(campo, album[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? AlbunsService.update(dados, id) : AlbunsService.create(dados)
        props.history.push('/albuns')
    }

    function handleChange(event) {
        const name = event.target.name
        const mascara = event.target.getAttribute('mask')

        let valor = unMask(event.target.value)
        valor = mask(valor, mascara)

        setValue(name, valor)
    }

    return (
        <>
            <Box title="Novo Album">
                <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2} >Nome do album: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o nome do album..." type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="artista">
                        <Form.Label column sm={2} >Artista: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o artista..." type="text" {...register("artista", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.artista.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="genero">
                        <Form.Label column sm={2}>Gênero: </Form.Label>
                        <Col sm={10}>
                            <Form.Select aria-label="Selecione um gênero..." type="text" {...register("genero", validador.genero)} >
                                <option value={''}>Selecione um gênero...</option>
                                <option value="Reggae">Reggae</option>
                                <option value="Rock">Rock</option>
                                <option value="Sertanejo">Sertanejo</option>
                                <option value="Funk">Funk</option>
                                <option value="Eletronica">Eletronica</option>
                                <option value="Rap">Rap</option>
                                <option value="Hip Hop">Hip Hop</option>
                                <option value="Gospel">Gospel</option>
                                <option value="Bossa nova">Bossa nova</option>
                                <option value="Pagode">Pagode</option>
                                <option value="Samba">Samba</option>
                                <option value="Alternativa">Alternativa</option>
                            </Form.Select>

                            {errors.genero && <span className="text-danger">{errors.genero.message}</span>}

                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="ano">
                        <Form.Label column sm={2}>Ano: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira a ano do album..." type="text"  {...register("ano", validador.ano)} onChange={handleChange} mask="9999"/>
                            {errors.ano && <span className="text-danger">{errors.ano.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center" >
                        <Button style={{margin: "10px"}} variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/albuns"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default AlbunsForm;
