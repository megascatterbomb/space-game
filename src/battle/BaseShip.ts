class ShipIdentifier {
    protected name: string;
    protected subclass: string;
    protected description: string;
    protected id: number;

    constructor(id: number, name: string, subclass: string, description: string) {
        this.id = id;
        this.name = name;
        this.subclass = subclass;
        this.description = description;
    }
    /**
     * @returns {number} the ship id
     */
    public getShipId(): number {
        return this.id;
    }
}

export class BaseShip extends ShipIdentifier {
    protected techLevel: number;
    protected baseHp: number; protected baseShield: number;
    protected baseWeapon: number; protected baseCpu: number; protected baseEngine: number;
    protected baseCargo: number; protected baseHandling: number;
    protected primarySlots: number; protected shieldSlots: number; protected heavySlots: number; protected minerSlots: number; protected generalSlots: number;
    protected cost: number;

    
    
    constructor(id: number, name: string, subclass: string, description: string, techLevel: number, baseHp: number,
        baseShield: number, baseWeapon: number, baseCpu: number, baseEngine: number, baseCargo: number, baseHandling: number,
        primarySlots: number, shieldSlots: number, heavySlots: number, minerSlots: number, generalSlots: number, cost: number) {
        super(id, name, subclass, description);

        this.techLevel = techLevel;
        this.baseHp = baseHp; this.baseShield = baseShield;
        this.baseWeapon = baseWeapon; this.baseCpu = baseCpu; this.baseEngine = baseEngine;
        this.baseCargo = baseCargo; this.baseHandling = baseHandling;
        this.primarySlots = primarySlots; this.shieldSlots = shieldSlots; this.heavySlots = heavySlots; this.minerSlots = minerSlots; this.generalSlots = generalSlots;
        this.cost = cost;

    }
}

