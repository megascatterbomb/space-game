import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../PassiveCore";

export class StandardPrimary extends PassiveCore {
    private minDamage: number;
    private maxDamage: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        minDamage: number, maxDamage: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);
        this.minDamage = minDamage;
        this.maxDamage = maxDamage;
    }



    public getDamageNumber(): number {
        return this.rb(this.minDamage, this.maxDamage)
    }


}