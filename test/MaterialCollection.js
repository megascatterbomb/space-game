const { TemplateMaterialCollection } = require('../dist/types/collections/TemplateMaterialCollection');
const { MaterialCollection } = require('../dist/types/collections/MaterialCollection');

const MATERIAL_NAME_LIST = ["Rocks", "Metal", "Energy"];
const TEMPLATE_MATERIALS = new TemplateMaterialCollection(MATERIAL_NAME_LIST);

let myQuantity = [100, 50, 20];
let requiredQuantity = [5, 5, 5];

let myCollection = new MaterialCollection(TEMPLATE_MATERIALS, myQuantity);


let comparedCollection = new MaterialCollection(TEMPLATE_MATERIALS, requiredQuantity)
let expensiveCollection = new MaterialCollection(TEMPLATE_MATERIALS, [1000, 1, 1])


console.log('Blueprint Cost: ' + requiredQuantity)
console.log("Blueprint check: " + myCollection.compareMaterialCollection(comparedCollection))

myCollection.removeMaterial("Energy", 18)
console.log('Removing 18 energy. New amount: ' + myCollection.getAmountsAsArray())

console.log("Blueprint check: " + myCollection.compareMaterialCollection(comparedCollection))

myCollection.addMaterial("Energy", 18)
console.log('Adding 18 energy. New amount: ' + myCollection.getAmountsAsArray())

console.log("Blueprint check: " + myCollection.compareMaterialCollection(comparedCollection))

let secondCollection = new MaterialCollection(TEMPLATE_MATERIALS)
console.log('Base Material Collection: ' + secondCollection.getAmountsAsArray())

console.log('Testing subtracting full blueprint (can afford): ' + (myCollection.subtractMaterialCollection(comparedCollection) ? myCollection.getAmountsAsArray() : "Not enough resources!"))
console.log('Testing subtracting full blueprint (cant afford): ' + (myCollection.subtractMaterialCollection(expensiveCollection) ? myCollection.getAmountsAsArray() : "Not enough resources!"))