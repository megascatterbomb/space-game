materialCollection()
materialCollectionSize()

function factionCollection() {
    const { Faction } = require('../dist/types/Faction')
    const { BaseItem_Template } = require('../dist/types/collections/BaseItem_Template')
    const { ReputationCollection } = require('../dist/types/collections/ReputationCollection');

    let Kalen = new Faction(0, 'Kalen', 2)
    let Quarg = new Faction(0, 'Quarg', 7)
    let Lumissa = new Faction(0, 'Lumissa', 8)
    let Asaria = new Faction(0, 'Asaria', 10)

    console.log(Kalen.getName() + ". Tech level: " + Kalen.getTech())
    console.log(Quarg.getName() + ". Tech level: " + Quarg.getTech())
    console.log(Lumissa.getName() + ". Tech level: " + Lumissa.getTech())
    console.log(Asaria.getName() + ". Tech level: " + Asaria.getTech())

    const GAME_FACTION_TEMPLATE = new BaseItem_Template([Kalen, Quarg, Lumissa, Asaria])
    console.log("Loaded with factions: " + GAME_FACTION_TEMPLATE.exportNameList())

    let playerReputation = new ReputationCollection(GAME_FACTION_TEMPLATE, [8, 3, 6, 5])
    console.log(playerReputation.getAmountsAsArray() + " Reputations currently")

    console.log("Adding 2 to Asaria and removing 2 from Lumissa");
    playerReputation.addReputation(Asaria, 2)
    playerReputation.removeReputation(Lumissa, 2)
    console.log(playerReputation.getAmountsAsArray() + " Reputations currently")

}

function materialCollection() {

    const { MaterialCollection } = require('../dist/types/collections/MaterialCollection');
    const { TemplateItemCollection } = require('../dist/types/collections/TemplateItemCollection');
    const { Material } = require('../dist/types/interface/baseitem/Material')

    let Rocks = new Material(0, "Rocks", 5, 50, 5)
    let Metal = new Material(1, "Metal", 50, 150, 8)
    let Energy = new Material(2, "Energy", 15, 30, 1)

    const MATERIAL_NAME_LIST = [Rocks, Metal, Energy];

    const TEMPLATE_MATERIALS = new TemplateItemCollection(MATERIAL_NAME_LIST)

    let myQuantity = [100, 50, 20];
    let requiredQuantity = [5, 5, 5];

    let myCollection = new MaterialCollection(TEMPLATE_MATERIALS, myQuantity);


    let comparedCollection = new MaterialCollection(TEMPLATE_MATERIALS, requiredQuantity)
    let expensiveCollection = new MaterialCollection(TEMPLATE_MATERIALS, [1000, 1, 1])



    console.log('Blueprint Cost: ' + requiredQuantity)
    console.log("Blueprint check: " + myCollection.compareCollection(comparedCollection))

    myCollection.removeFromItem(Energy, 18)
    console.log('Removing 18 energy. New amount: ' + myCollection.getAmountsAsArray())

    console.log("Blueprint check: " + myCollection.compareCollection(comparedCollection))

    myCollection.addToItem(Energy, 18)
    console.log('Adding 18 energy. New amount: ' + myCollection.getAmountsAsArray())

    console.log("Blueprint check: " + myCollection.compareCollection(comparedCollection))

    let secondCollection = new MaterialCollection(TEMPLATE_MATERIALS)
    console.log('Base Material Collection: ' + secondCollection.getAmountsAsArray())

    console.log('Testing subtracting full blueprint (can afford): ' + (myCollection.subtractCollection(comparedCollection) ? myCollection.getAmountsAsArray() : "Not enough resources!"))
    console.log('Testing subtracting full blueprint (cant afford): ' + (myCollection.subtractCollection(expensiveCollection) ? myCollection.getAmountsAsArray() : "Not enough resources!"))
}

function materialCollectionSize() {
    const { MaterialCollection } = require('../dist/types/collections/MaterialCollection');
    const { TemplateItemCollection } = require('../dist/types/collections/TemplateItemCollection');
    const { Material } = require('../dist/types/interface/baseitem/Material')

    let Rocks = new Material(0, "Rocks", 5, 50, 5)
    let Metal = new Material(1, "Metal", 50, 150, 10)
    let Energy = new Material(2, "Energy", 15, 30, 2)

    const MATERIAL_NAME_LIST = [Rocks, Metal, Energy];
    const TEMPLATE_MATERIALS = new TemplateItemCollection(MATERIAL_NAME_LIST);

    let myQuantity = [10, 5, 20];

    let myCollection = new MaterialCollection(TEMPLATE_MATERIALS, myQuantity);

    console.log(myCollection.getCollectionSize());



}