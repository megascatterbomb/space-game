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
    /**
     * Adds a link between two nodes
     * @param startNode the starting node
     * @param endNode the ending node
     * @param warpStrength the warp strength requried to go from start to end node.
     */
	public addLink(startNode: MapNode, endNode: MapNode, warpStrength: number): void | TypeError {

        //ERROR HANDLING: checking if nodes exist in the map
		if (this.nodeMap.get(startNode) == undefined || this.nodeMap.get(endNode) == undefined) {
			throw new TypeError(`${startNode == undefined ? startNode : endNode} is not defined in the SpaceMap.`);
		}
		let sLink = new NodeLink(startNode, endNode, warpStrength);
        let eLink = new NodeLink(endNode, startNode, warpStrength);
        
        //ERROR HANDLING: checking if the link already exists
		if (this.nodeMap.get(startNode)!.has(sLink) || this.nodeMap.get(startNode)!.has(eLink)) {
			throw new TypeError(`Edge between ${sLink} and ${eLink} already exists.`);
		}
		this.nodeMap.get(startNode)?.add(sLink);
		this.nodeMap.get(endNode)?.add(eLink);
	}

    /**
     * Generates an array of mapnodes from a list of names and factions
     * @param nameList list of names for every node
     * @param factionList list of the faction that each node belongs to
     */
	public static GenerateMapNodes(nameList: string[], factionList: Faction[]): MapNode[] | RangeError {
        //ERROR HANDLING: checking if there is a faction for every node
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
