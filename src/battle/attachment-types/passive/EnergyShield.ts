import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../PassiveCore";

export class EnergyShield extends PassiveCore {

    private energyGained: number;


    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        energyGained: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);

        this.energyGained = energyGained;
    }

    public getEnergyHealNumber(): number {
        return this.energyGained;
    }


}