import { MapNode } from "./MapNode";
import { NodeLink } from "./NodeLink";
import { Faction } from "../interface/baseitem/Faction";

export class SpaceMap {
	private nodeMap = new Map<MapNode, Set<NodeLink>>();

	private nodesByName = new Map<string, MapNode>();
	private nodesById = new Map<number, MapNode>();

	constructor(mapNodeArray: MapNode[]) {
		let uniqueNodes = new Set<string>();
		mapNodeArray.map((el) => {
			uniqueNodes.add(el.findName());
		});
		if (uniqueNodes.size != mapNodeArray.length) throw new TypeError("Duplicate entries in input MapNode array.");

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
	public addLink(startNode: MapNode | number | string, endNode: MapNode | number | string, warpStrength: number): void {
		//convert from types
		startNode = this.getNodeFromTypes(startNode);
		endNode = this.getNodeFromTypes(endNode);

		//ERROR HANDLING: checking if nodes exist in the map
		if (this.nodeMap.get(startNode) == undefined || this.nodeMap.get(endNode) == undefined) {
			throw new TypeError(`${startNode == undefined ? startNode : endNode} is not defined in the SpaceMap.`);
		}
		let sLink = new NodeLink(startNode, endNode, warpStrength);
		let eLink = new NodeLink(endNode, startNode, warpStrength);

		//ERROR HANDLING: checking if the link already exists
		this.nodeMap.get(startNode)?.forEach((el) => {
			if (el.equals(sLink)) {
				throw new TypeError(`Edge between ${JSON.stringify(startNode)} and ${JSON.stringify(endNode)} already exists.`);
			}
		});

		this.nodeMap.get(startNode)?.add(sLink);
		this.nodeMap.get(endNode)?.add(eLink);
	}

	/**
	 * finds how much more warpstrength the user needs. If the user has sufficient warpstrength, returns 0.
	 * @param fromNode the node to start at
	 * @param toNode the node to end at
	 * @param userStrength the current warpstrength to check
	 * @returns the difference between the user warpstrength, ie how much more warpstrength the user requires.
	 */
	public checkRequiredWarpStrength(fromNode: MapNode | number | string, toNode: MapNode | number | string, userStrength: number): number {
		let output = undefined;
		this.findConnectedNodes(fromNode).forEach((el, idx) => {
			if (el.isEndNode(this.getNodeFromTypes(toNode))) {
				output = el.strengthDifference(userStrength);
			}
		});
		if (output == undefined) throw new RangeError(`There is no NodeLink between ${JSON.stringify(fromNode)} to ${JSON.stringify(toNode)}`);
		return output;
	}

	//SECTION get nodes from {type}

	/**
	 * returns a node from a variety of types
	 * @param searchNode the node to return, either in its actual form, its ID or its name.
	 */
	public getNodeFromTypes(searchNode: MapNode | number | string): MapNode {
		if (typeof searchNode == "string") {
			return this.nodeFromName(searchNode);
		} else if (typeof searchNode == "number") {
			return this.nodeFromId(searchNode);
		} else if (searchNode instanceof MapNode) {
			return this.nodeFromNode(searchNode);
		} else {
			throw new TypeError(`Cannot accept type ${typeof searchNode} where MapNode, number or string is required.`);
		}
	}
	/**
	 * returns the given node
	 * @param searchNode the node
	 */
	public nodeFromNode(searchNode: MapNode): MapNode {
		if (!this.nodeMap.has(searchNode)) {
			throw new RangeError(`Cannot find given node ${JSON.stringify(MapNode)} in map.`);
		}
		return searchNode;
	}
	/**
	 * gets a node from a given node ID
	 * @param id the id of the node
	 */
	public nodeFromId(id: number): MapNode {
		let node = this.nodesById.get(id);
		if (node == undefined) {
			throw new RangeError(`Cannot find node with ID ${id}`);
		}
		return node;
	}
	/**
	 * gets a node from a given node name
	 * @param name the name of the node
	 */
	public nodeFromName(name: string): MapNode {
		let node = this.nodesByName.get(name);
		if (node == undefined) {
			throw new RangeError(`Cannot find node with name ${name}`);
		}
		return node;
	}

	//SECTION get node links from {type}

	/**
	 * returns a set of nodelinks representing the connections that a node has
	 * @param searchNode the node to search for
	 */
	public findConnectedNodes(searchNode: MapNode | number | string): Set<NodeLink> {
		if (typeof searchNode == "string") {
			return this.nodeLinksFromName(searchNode);
		} else if (typeof searchNode == "number") {
			return this.nodeLinksFromId(searchNode);
		} else if (searchNode instanceof MapNode) {
			return this.nodeLinksFromNode(searchNode);
		} else {
			throw new TypeError(`Cannot accept type ${typeof searchNode} where MapNode, number or string is required.`);
		}
	}

	/**
	 * gets a node's connections from a given node
	 * @param searchNode the node
	 */
	public nodeLinksFromNode(searchNode: MapNode): Set<NodeLink> {
		let node = this.nodeMap.get(searchNode);
		if (node == undefined) {
			throw new RangeError(`Cannot find given node ${JSON.stringify(MapNode)} in map.`);
		}
		return node;
	}
	/**
	 * gets a node's connections from a given node ID
	 * @param id the id of the node
	 */
	public nodeLinksFromId(id: number): Set<NodeLink> {
		let node = this.nodesById.get(id);
		if (node == undefined) {
			throw new RangeError(`Cannot find node with ID ${id}`);
		}
		return this.nodeLinksFromNode(node);
	}
	/**
	 * gets a node's connections from a given node name
	 * @param name the name of the node
	 */
	public nodeLinksFromName(name: string): Set<NodeLink> {
		let node = this.nodesByName.get(name);
		if (node == undefined) {
			throw new RangeError(`Cannot find node with name ${name}`);
		}
		return this.nodeLinksFromNode(node);
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
