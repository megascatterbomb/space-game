import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../PassiveCore";

export class StandardShield extends PassiveCore {

    private minShield: number;
    private maxShield: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        minShield: number, maxShield: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);

        this.minShield = minShield;
        this.maxShield = maxShield;
    }

    public getShieldHealNumber(): number {
        return this.rb(this.minShield, this.maxShield)
    }


}