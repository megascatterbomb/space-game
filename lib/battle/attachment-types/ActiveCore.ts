import { Blueprint } from "../../types/Blueprint";
import { ItemTier } from "../../types/ItemTier";
import { ItemType } from "../../types/ItemType";
import { Attachment } from "fraserbot-space";

export class ActiveCore extends Attachment {
    protected costWeapon: number;
    protected costCpu: number;
    protected costEngine: number;
    protected keepTurn: boolean;
    protected cooldown: number;

    protected cooldownRemaining: number = 0;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number,
        costWeapon: number, costCpu: number, costEngine: number, keepTurn: boolean, cooldown: number) {
        super(id, name, cost, description, itemType, tier, blueprint, itemTech);

        this.costWeapon = costWeapon;
        this.costCpu = costCpu;
        this.costEngine = costEngine;
        this.keepTurn = keepTurn;
        this.cooldown = cooldown;
    }

    public setCooldown(): void {
        this.cooldownRemaining = this.cooldown;
    }
    public reduceCooldown(): void {
        this.cooldownRemaining--;
    }
    public checkReady(): boolean {
        return this.cooldownRemaining < 1;
    }
    public checkEnergy(userWeapon: number, userCpu: number, userEngine: number): boolean {
        return (userWeapon >= this.costWeapon && userCpu >= this.costCpu && userEngine >= this.costEngine);
    }
    public checkUsable() {
        return (this.checkEnergy && this.checkReady);
    }

}