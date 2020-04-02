ship();

function ship() {
    const { Ship } = require('../dist/types/Ship')

    const newShip = new Ship(23, "Ty'Linic Crawler", 3001000, "Heavy Cruiser", 6, 340, 195, [28, 24, 26], 1400, 8, 2, 2, 5, 1, 5)
    let rawJson = newShip.formatOutput()
    let formatJson = JSON.parse(rawJson)
    console.log(formatJson)
}