import { Attachment, Blueprint, ItemTier, ItemType } from "fraserbot-space";

export class DamageListenerCore extends Attachment {

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);
    }

    
    protected rb(min: number, max: number): number { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

}