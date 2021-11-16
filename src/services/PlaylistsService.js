class PlaylistsService {
    
    getAll() {
        const playlists = localStorage.getItem('playlists')
        return playlists ? JSON.parse(playlists) : []
    }

    get(id) {
        const playlists = this.getAll()
        return playlists[id]
    }

    create(dados) {
        const playlists = this.getAll()
        playlists.push(dados)

        localStorage.setItem('playlists', JSON.stringify(playlists))
    }

    update(dados, id) {
        const playlists = this.getAll()
        playlists.splice(id, 1, dados)
        localStorage.setItem('playlists', JSON.stringify(playlists))
    }

    delete(id) {
        const playlists = this.getAll()
        playlists.splice(id, 1)
        localStorage.setItem('playlists', JSON.stringify(playlists))
    }
}

export default new PlaylistsService()