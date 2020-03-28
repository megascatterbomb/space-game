import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../../attachment-types/PassiveCore";

export class StandardBlaster extends PassiveCore {

    private minDamage: number | undefined;
    private maxDamage: number | undefined;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number) {
        super(1, "Standard Blaster", cost, description, itemType, tier, blueprint, itemTech);
    }

    public getDamageNumber(opponentHp: number): number {
        return Math.floor(opponentHp / 10)
    }
}