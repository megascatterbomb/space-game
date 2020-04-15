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

	public checkStrength(userStrength: number) {
		if (typeof userStrength == "number") {
			return userStrength > this.strength;
		} else {
			throw new TypeError(`Cannot accept type ${typeof userStrength} where number is required.`);
		}
	}
}
