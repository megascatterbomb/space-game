import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { ActiveCore } from "../ActiveCore";

export class EmpHeavy extends ActiveCore {

    private baseDamage: number;
    private energyDamage: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        costWeapon: number, costCpu: number, costEngine: number, keepTurn: boolean, cooldown: number, baseDamage: number, energyDamage: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech, costWeapon, costCpu, costEngine, keepTurn, cooldown);

        this.baseDamage = baseDamage;
        this.energyDamage = energyDamage;
    }

    public getDamageNumber(): number {
        return this.baseDamage
    }
    public getEnergyDamageNumber(): number[] {
        return new Array(4).fill(this.energyDamage)
    }

}