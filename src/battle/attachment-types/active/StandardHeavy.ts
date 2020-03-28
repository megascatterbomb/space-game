import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { ActiveCore } from "../ActiveCore";

export class StandardHeavy extends ActiveCore {

    private baseDamage: number;
    private scalingDamage: number;
    private energyPerScale: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        costWeapon: number, costCpu: number, costEngine: number, keepTurn: boolean, cooldown: number, baseDamage: number, scalingDamage: number, energyPerScale: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech, costWeapon, costCpu, costEngine, keepTurn, cooldown);

        this.baseDamage = baseDamage;
        this.scalingDamage = scalingDamage;
        this.energyPerScale = energyPerScale;
    }

    public getDamageNumber(userEnergy: number): number {
        return this.baseDamage + Math.floor(userEnergy / this.energyPerScale) * this.scalingDamage
    }

}