
import { MapNode } from "./MapNode";
import { WarpStrength } from "../types/WarpStrength"

export class NodeLink {
    private node: MapNode
    private strength: WarpStrength;

    constructor(node: MapNode, strength: WarpStrength) {
        this.node = node;
        this.strength = strength
    }

    public equalNodes(node: MapNode): boolean {
        return node.compareId(this.node.getId())
    }
    public checkStrength(userStrength: WarpStrength) {
        return userStrength >= this.strength;
    }
}