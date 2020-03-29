export class Material implements BaseItem {
	private id: number;
	private name: string;
	private minCost: number;
	private maxCost: number;
	private size: number;

	constructor(id: number, name: string, minCost: number, maxCost: number, size: number) {
		this.id = id;
		this.name = name;
		this.minCost = minCost;
		this.maxCost = maxCost;
		this.size = size;
	}
	getName(): string {
		return this.name;
	}
}
