import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { PassiveCore } from "../../attachment-types/PassiveCore";

export class AsarinFusionBeam extends PassiveCore {


    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);

    }


    public getShieldHealNumber(opponentShield: number): number {
        return opponentShield;
    }

    public getDamageNumber(opponentShield: number): number {
        return opponentShield;
    }


}