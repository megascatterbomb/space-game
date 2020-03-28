import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../PassiveCore";

export class InfernalPrimary extends PassiveCore {
    private baseDamage: number;
    private damagePerTurn: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        baseDamage: number, damagePerTurn: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);
        this.baseDamage = baseDamage;
        this.damagePerTurn = damagePerTurn;
    }

    public getDamageNumber(turns: number): number {
        return this.baseDamage + (turns * this.damagePerTurn)
    }


}