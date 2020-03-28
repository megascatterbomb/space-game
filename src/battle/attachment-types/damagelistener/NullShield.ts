import { ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { DamageListenerCore } from "../DamageListenerCore";

export class NullShield extends DamageListenerCore {

    private reductionChance: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        reductionChance: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);

        this.reductionChance = reductionChance;
    }

    protected checkTick(): boolean {
        return this.rb(0, 100) <= (this.reductionChance * 100)
    }


}