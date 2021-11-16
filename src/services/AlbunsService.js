class AlbunsService {
    
    getAll() {
        const albuns = localStorage.getItem('albuns')
        return albuns ? JSON.parse(albuns) : []
    }

    get(id) {
        const albuns = this.getAll()
        return albuns[id]
    }

    create(dados) {
        const albuns = this.getAll()
        albuns.push(dados)
        localStorage.setItem('albuns', JSON.stringify(albuns))
    }

    update(dados, id) {
        const albuns = this.getAll()
        albuns.splice(id, 1, dados)
        localStorage.setItem('albuns', JSON.stringify(albuns))
    }

    delete(id) {

        const albuns = this.getAll()
        albuns.splice(id, 1)
        localStorage.setItem('albuns', JSON.stringify(albuns))
    }
    favoritar(dados, id) {

        const favoritosAlbuns = this.getAll()
        favoritosAlbuns.push(id, dados)
        localStorage.setItem('albuns', JSON.stringify(favoritosAlbuns))
    }
  
}

export default new AlbunsService()