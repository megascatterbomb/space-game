export class Faction implements BaseItem {
	private id: number;
	private name: string;
	private techLevel: number;

	constructor(id: number, name: string, techLevel: number) {
		this.name = name;
		this.techLevel = techLevel;
		this.id = id;
	}
	public getName(): string {
		return this.name;
	}
	public getTech(): number {
		return this.techLevel;
	}
	public getSize(): number {
		return 0;
	}
}
