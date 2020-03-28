import { Attachment, ItemType, ItemTier, Blueprint } from "fraserbot-space";
import { DamageListenerCore } from "../DamageListenerCore";

export class SaveShield extends DamageListenerCore {

    private shieldGained: number;
    private hullGained: number;

    private available: boolean = true;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        shieldGained: number, hullGained: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);

        this.shieldGained = shieldGained;
        this.hullGained = hullGained;
    }

    public getShieldHealNumber(): number {
        return this.shieldGained;
    }

    public getHealNumber(): number {
        return this.hullGained;
    }

    public useSaveShield(): void {
        this.available = false;
    }

    public checkUsable(): boolean {
        return this.available;
    }

}