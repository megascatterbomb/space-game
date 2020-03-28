import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../../attachment-types/PassiveCore";

export class PerfectedPlasmaRay extends PassiveCore {

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);
    }

    public getHealNumber(opponentMaxHp: number): number {
        return Math.floor(opponentMaxHp / 50);
    }

    public getDamageNumber(opponentMaxHp: number): number {
        return Math.floor(opponentMaxHp / 10)
    }


}