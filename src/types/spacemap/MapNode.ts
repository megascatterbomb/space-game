import { NodeLink } from "./NodeLink";
import { Faction } from "../interface/baseitem/Faction";

export class MapNode {
	private id: number;
	private name: string;
	private alliance: Faction;

	constructor(id: number, name: string, alliance: Faction) {
		this.id = id;
		this.name = name;
		this.alliance = alliance;
	}
	public findName(): string {
		return this.name;
	}
	public findId(): number {
		return this.id;
	}
}
