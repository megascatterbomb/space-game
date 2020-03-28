declare module 'fraserbot-space' {
    class ShipIdentifier {
        protected name: string;
        protected subclass: string;
        protected description: string;
        protected id: number;
        constructor(id: number, name: string, subclass: string, description: string);
        /**
         * @returns {number} the ship id
         */
        getShipId(): number;
    }
    export class BaseShip extends ShipIdentifier {
        protected techLevel: number;
        protected baseHp: number;
        protected baseShield: number;
        protected baseWeapon: number;
        protected baseCpu: number;
        protected baseEngine: number;
        protected baseCargo: number;
        protected baseHandling: number;
        protected primarySlots: number;
        protected shieldSlots: number;
        protected heavySlots: number;
        protected minerSlots: number;
        protected generalSlots: number;
        protected cost: number;
        constructor(id: number, name: string, subclass: string, description: string, techLevel: number, baseHp: number, baseShield: number, baseWeapon: number, baseCpu: number, baseEngine: number, baseCargo: number, baseHandling: number, primarySlots: number, shieldSlots: number, heavySlots: number, minerSlots: number, generalSlots: number, cost: number);
    }

    export class BattleShip {
        constructor(BaseShip: BaseShip);
    }
    export class MapNode {
        private id;
        private name;
        private alliance;
        private linkedNodes;
        constructor(id: number, name: string, alliance: SpaceAlliance, connections: NodeLink[]);
        checkLocationAvailability(destination: MapNode, userStrength: WarpStrength): boolean;
        compareId(id: number): boolean;
        getId(): number;
    }
    export class NodeCollection {
        private nodeMap;
        constructor(mapNodeArray: MapNode[]);
        fillMap(mapNodeArray: MapNode[]): void;
    }
    export class NodeLink {
        private node;
        private strength;
        constructor(node: MapNode, strength: WarpStrength);
        equalNodes(node: MapNode): boolean;
        checkStrength(userStrength: WarpStrength): boolean;
    }
    export class Attachment {
        protected id: number;
        protected name: string;
        protected cost: number;
        protected description: string;
        protected itemType: ItemType;
        protected tier: ItemTier;
        protected blueprint: Blueprint;
        protected itemTech: number;
        constructor(id: number, name: string, cost: number, description: string, itemType: ItemType, tier: ItemTier, blueprint: Blueprint, itemTech: number);
        /**
         * canPurchase
         * @param cr users available credits
         * @returns {boolean} if the purchase is possible
         */
        canPurchase(cr: number): boolean;
        /**
         * canEquip
         * @param tl users current tech level
         * @returns {boolean} if the equip is possible
         */
        canEquip(tl: number): boolean;
        /**
         * getItemInfo returns the core data of the attachment
         * @returns {Map} key value pairs of the data
         */
        getItemInfo(): Map<string, any>;
        /**
         * blueprintCheck compares a users @external MaterialCollection to the
         * amount required to build this item
         * @returns {boolean}
         */
        blueprintCheck(matCollection: MaterialCollection): boolean;
    }

    export class Blueprint {
        constructor(materialCollection: MaterialCollection);
    }

    export enum ItemTier {
        Standard = 0,
        Improved = 1,
        Advanced = 2,
        Elite = 3,
        Capital = 4,
        Relic = 5
    }
    export enum ItemType {
        Primary = 0,
        Heavy = 1,
        Shield = 2,
        Miner = 3,
        Cargohold = 4,
        Armour = 5,
        Reserves = 6,
        Warpdrive = 7,
        Tractor = 8,
        Thruster = 9
    }
    export class Material {
        private id;
        private name;
        private minCost;
        private maxCost;
        private size;
        constructor(id: number, name: string, minCost: number, maxCost: number, size: number);


    }
    export class MaterialCollection {
        protected materialMap: Map<string, number>;
        constructor(list: Map<string, number>);


    }
    export class SpaceAlliance {
        name: string;
        techLevel: number;
        constructor(name: string, techLevel: number);
    }
    export enum WarpStrength {
        NONE = 0,
        SHORT = 1,
        MEDIUM = 2,
        LONG = 3


    }
}