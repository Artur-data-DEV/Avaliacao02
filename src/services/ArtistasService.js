class ArtistaService {
    
    getAll() {
        const artista = localStorage.getItem('artista')
        return artista ? JSON.parse(artista) : []
    }

    get(id) {
        const artista = this.getAll()
        return artista[id]
    }

    create(dados) {
        const artista = this.getAll()
        artista.push(dados)

        localStorage.setItem('artista', JSON.stringify(artista))
    }

    update(dados, id) {
        const artista = this.getAll()
        artista.splice(id, 1, dados)
        localStorage.setItem('artista', JSON.stringify(artista))
    }

    delete(id) {
        const artista = this.getAll()
        artista.splice(id, 1)
        localStorage.setItem('artista', JSON.stringify(artista))
    }
}

export default new ArtistaService()