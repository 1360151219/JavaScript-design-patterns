class WebSite {
    constructor(name) {
        this.name = name
    }
    use(username) {
        console.log(`The Website ${this.name} is used by ${username}`)
    }
}
export class WebSiteFactory {
    map = new Map()
    getWebSite(name) {
        if (this.map.has(name)) return this.map.get(name)
        this.map.set(name, new WebSite(name))
        return this.map.get(name)
    }
    getSize() {
        return this.map.size
    }
}
