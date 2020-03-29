export class TemplateStringNumCollection {
	protected materialNameList: Array<string>;
	constructor(materials: string[]) {
		this.materialNameList = materials;
	}

	public exportMaterialNames(): string[] {
		return this.materialNameList;
	}

	/*constructor(BasicFood: number, CheapAlcohol: number, Water: number, Medicine: number, SpaceWaste: number, Drugs: number, Oil: number,
        Electronics: number, MechanicalParts: number, Explosives: number, Plastics: number, Optics: number, NobleGas: number, EnergyCell: number,
        Processors: number, Nanotech: number, ArmouredPlating: number, Chemicals: number, IronOre: number, TitaniumOre: number, GoldOre: number,
        UraniumOre: number, AluminiumOre: number, CopperOre: number, TinOre: number, IridiumOre: number, Luxuries: number, Organs: number,
        Contraband: number, FancyAlcohol: number, Relics: number, Prosthetics: number) {
        super()
        this.materialMap = new Map()
            .set("BasicFood", BasicFood)
            .set("CheapAlcohol", CheapAlcohol)
            .set("Water", Water)
            .set("Medicine", Medicine)
            .set("SpaceWaste", SpaceWaste)
            .set("Drugs", Drugs)
            .set("Oil", Oil)
            .set("Electronics", Electronics)
            .set("MechanicalParts", MechanicalParts)
            .set("Explosives", Explosives)
            .set("Plastics", Plastics)
            .set("Optics", Optics)
            .set("NobleGas", NobleGas)
            .set("EnergyCell", EnergyCell)
            .set("Processors", Processors)
            .set("Nanotech", Nanotech)
            .set("ArmouredPlating", ArmouredPlating)
            .set("Chemicals", Chemicals)
            .set("IronOre", IronOre)
            .set("TitaniumOre", TitaniumOre)
            .set("GoldOre", GoldOre)
            .set("UraniumOre", UraniumOre)
            .set("AluminiumOre", AluminiumOre)
            .set("")
    }*/
}
