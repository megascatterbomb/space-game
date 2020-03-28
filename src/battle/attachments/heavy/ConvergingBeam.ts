import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { ActiveCore } from "../../attachment-types/ActiveCore";

export class ConvergingBeam extends ActiveCore {

    private baseDamage: number;
    private scalingPerUse: number;
    private maxScale: number;
    private usages: number = 0;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        costWeapon: number, costCpu: number, costEngine: number, keepTurn: boolean, cooldown: number, baseDamage: number, scalingPerUse: number, maxScale: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech, costWeapon, costCpu, costEngine, keepTurn, cooldown);

        this.baseDamage = baseDamage;
        this.scalingPerUse = scalingPerUse;
        this.maxScale = maxScale;
    }

    public getDamageNumber(): number {
        return this.baseDamage + this.usages * this.scalingPerUse;
    }
    public incrementDamage(): void {
        this.usages = (this.usages < this.maxScale) ? this.usages + 1 : this.usages;
    }

}