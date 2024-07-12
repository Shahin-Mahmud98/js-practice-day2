var javascript = {
    name:"JavaScript",
    libraries:["React","Angular","Vue"],
    printLibraries: function () {
        this.libraries.forEach((a) =>
            console.log(`${this.name} love ${a}`)
        )
    }
}

javascript.printLibraries();