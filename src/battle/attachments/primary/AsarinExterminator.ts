import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../../attachment-types/PassiveCore";

export class AsarinExterminator extends PassiveCore {

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);
    }

    public getDamageNumber(opponentHp: number): number {
        return Math.floor(opponentHp / 10)
    }
}