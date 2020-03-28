import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../PassiveCore";

export class ScatterPrimary extends PassiveCore {
    private baseDamage: number;
    private damagePerHundred: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        baseDamage: number, damagePerHundred: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);
        this.baseDamage = baseDamage;
        this.damagePerHundred = damagePerHundred;
    }

    public getDamageNumber(opponentHp: number): number {
        return this.baseDamage + (Math.round(opponentHp / 100)) * this.damagePerHundred;
    }


}