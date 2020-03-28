import { NodeLink } from "./NodeLink";
import { SpaceAlliance } from "../types/SpaceAlliance";
import { WarpStrength } from "../types/WarpStrength";

export class MapNode {
    private id: number;
    private name: string;
    private alliance: SpaceAlliance;
    private linkedNodes: NodeLink[];

    constructor(id: number, name: string, alliance: SpaceAlliance, connections: NodeLink[]) {
        this.id = id;
        this.name = name;
        this.alliance = alliance;
        this.linkedNodes = connections;
    }

    public checkLocationAvailability(destination: MapNode, userStrength: WarpStrength): boolean {
        this.linkedNodes.forEach((el: NodeLink) => {
            if (el.equalNodes(destination) && el.checkStrength(userStrength)) {
                return true;
            }
        });
        return false;
    }

    public compareId(id: number): boolean {
        return this.id == id;
    }

    public getId() {
        return this.id;
    }

}