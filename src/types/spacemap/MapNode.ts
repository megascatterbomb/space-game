import { NodeLink } from "./NodeLink";
import { Faction } from "../interface/baseitem/Faction";

export class MapNode {
    private id: number;
    private name: string;
    private alliance: Faction;
    private linkedNodes: NodeLink[];

    constructor(id: number, name: string, alliance: Faction, connections: NodeLink[]) {
        this.id = id;
        this.name = name;
        this.alliance = alliance;
        this.linkedNodes = connections;
    }


}