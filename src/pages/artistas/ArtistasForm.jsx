import React, { useEffect } from 'react'
import { Col, Form, Row, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { FaArrowLeft, FaCheck } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { mask, unMask } from 'remask'
import Box from '../../components/Box'
import ArtistaService from '../../services/ArtistasService'
import validador from '../../validators/ArtistasValidator'

const ArtistasForm = (props) => {

    const { register, setValue, handleSubmit, formState: { errors } } = useForm()

  
    useEffect(() => {
        const id = props.match.params.id

        if (id) {
            const artista = ArtistaService.get(id)
            for (let campo in artista) {
                setValue(campo, artista[campo])
            }
        }
    }, [props, setValue])

    function enviarDados(dados) {
        const id = props.match.params.id
        id ? ArtistaService.update(dados, id) : ArtistaService.create(dados)
        props.history.push('/artistas')
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
            <Box title="Novo Artista ">
            <Form>
                    <Form.Group as={Row} className="mb-3" controlId="nome">
                        <Form.Label column sm={2} >Nome do artista: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o nome do artista..." type="text" {...register("nome", validador.nome)} />
                            {errors.nome && <span className="text-danger">{errors.nome.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="país">
                        <Form.Label column sm={2} >País: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Origem..." type="text" {...register("país", validador.país)} />
                            {errors.país && <span className="text-danger">{errors.país.message}</span>}
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
                    <Form.Group as={Row} className="mb-3" controlId="dataFalesc">
                        <Form.Label column sm={2}>Data de nascimento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira a data de nascimento..." type="text"  {...register("dataNasc", validador.dataNasc)} onChange={handleChange} mask="99/99/9999"/>
                            {errors.dataNasc && <span className="text-danger">{errors.dataNasc.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="dataFalesc">
                        <Form.Label column sm={2}>Data de falescimento: </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira data de falescimento..." type="text"  {...register("dataFalesc", validador.dataFalesc)} onChange={handleChange} mask="99/99/9999"/>
                            {errors.dataFalesc && <span className="text-danger">{errors.dataFalesc.message}</span>}
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} className="mb-3" controlId="instrumento">
                        <Form.Label column sm={2} >Instrumento(s): </Form.Label>
                        <Col sm={10}>
                            <Form.Control placeholder="Insira o(s) instrumento(s)..." type="text" {...register("instrumento", validador.instrumento)} />
                            {errors.instrumento && <span className="text-danger">{errors.instrumento.message}</span>}
                        </Col>
                    </Form.Group>
                    <div className="text-center" >
                        <Button style={{margin: "10px"}} variant="success" onClick={handleSubmit(enviarDados)}><FaCheck /> Salvar</Button>
                        <Link className="btn btn-danger" to="/artistas"><FaArrowLeft /> Voltar</Link>
                    </div>
                </Form>
            </Box>
        </>
    )
}

export default ArtistasForm
