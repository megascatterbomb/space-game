import { MapNode } from "./MapNode";
import { Attachment } from "../Attachment";

export class NodeLink {
	private startNode: MapNode;
	private endNode: MapNode;
	private strength: number;

	constructor(startNode: MapNode, endNode: MapNode, strength: number) {
		this.startNode = startNode;
		this.endNode = endNode;
		this.strength = strength;
	}
    
    /**
     * checks if the given warp strength is sufficient to traverse along this link
     * @param userStrength the warp strength of the user to check
     */
	public checkStrength(userStrength: number): boolean | TypeError {
		if (typeof userStrength == "number") {
			return userStrength > this.strength;
		} else {
            //ERROR HANDLING: checks if input is number
			throw new TypeError(`Cannot accept type ${typeof userStrength} where number is required.`);
		}
	}
}
