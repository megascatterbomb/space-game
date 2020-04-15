import { MapNode } from "./MapNode";
import { NodeLink } from "./NodeLink";
import { Faction } from "../interface/baseitem/Faction";

export class SpaceMap {
	private nodeMap = new Map<MapNode, Set<NodeLink>>();

	private nodesByName = new Map<string, MapNode>();
	private nodesById = new Map<number, MapNode>();

	constructor(mapNodeArray: MapNode[]) {
		mapNodeArray.forEach((el) => {
			this.nodeMap.set(el, new Set<NodeLink>());
			this.nodesByName.set(el.findName(), el);
			this.nodesById.set(el.findId(), el);
		});
	}

	public addLink(startNode: MapNode, endNode: MapNode, warpStrength: number): void | TypeError {
		if (this.nodeMap.get(startNode) == undefined || this.nodeMap.get(endNode) == undefined) {
			throw new TypeError(`${startNode == undefined ? startNode : endNode} is not defined in the SpaceMap.`);
		}
		let sLink = new NodeLink(startNode, endNode, warpStrength);
		let eLink = new NodeLink(endNode, startNode, warpStrength);

		if (this.nodeMap.get(startNode)!.has(sLink) || this.nodeMap.get(startNode)!.has(eLink)) {
			throw new TypeError(`Edge between ${sLink} and ${eLink} already exists.`);
		}
		this.nodeMap.get(startNode)?.add(sLink);
		this.nodeMap.get(endNode)?.add(eLink);
	}

	public static GenerateMapNodes(nameList: string[], factionList: Faction[]): MapNode[] | RangeError {
		if (nameList.length != factionList.length) {
			throw new RangeError("Argument of incorrect length when generating nodes.");
		}
		let a = new Array<MapNode>();

		for (var i = 0; i < nameList.length; i++) {
			a.push(new MapNode(i + 1, nameList[i], factionList[i]));
		}

		return a;
	}
}
