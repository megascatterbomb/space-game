import { Blueprint } from "../../types/Blueprint";
import { ItemTier } from "../../types/ItemTier";
import { ItemType } from "../../types/ItemType";
import { MaterialCollection } from "../../types/collections/MaterialCollection";

export class Attachment {
    protected id: number;
    protected name: string;
    protected cost: number;
    protected description: string;
    protected itemType: ItemType;
    protected tier: ItemTier;
    protected blueprint: Blueprint;
    protected itemTech: number;

    constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number) {
        this.id = id;
        this.name = name;
        this.cost = cost;
        this.description = description;
        this.itemType = itemType;
        this.tier = tier;
        this.blueprint = blueprint;
        this.itemTech = itemTech;
    }

    /**
     * canPurchase
     * @param cr users available credits
     * @returns {boolean} if the purchase is possible
     */
    public canPurchase(cr: number): boolean {
        return cr >= this.cost;
    }
    /**
     * canEquip
     * @param tl users current tech level
     * @returns {boolean} if the equip is possible
     */
    public canEquip(tl: number): boolean {
        return tl > this.itemTech
    }
    /**
     * getItemInfo returns the core data of the attachment
     * @returns {Map} key value pairs of the data
     */
    public getItemInfo(): Map<string, any> {
        return new Map<string, any>()
            .set("name", this.name)
            .set("cost", this.cost)
            .set("description", this.description)
            .set("tier", this.tier)
            .set("itemType", this.itemType)
            .set("itemTech", this.itemTech)
    }

    /**
     * blueprintCheck compares a users @external MaterialCollection to the
     * amount required to build this item
     * @returns {boolean} 
     */
    public blueprintCheck(matCollection: MaterialCollection): boolean {
        return false;
    }

    public getDamageNumber(a: any): number {
        return 0;
    }
}