import { BaseStringNumCollection } from "../..";

export class ReputationCollection extends BaseStringNumCollection {
	constructor(...args: any[]) {
		super(args);
	}

	public addReputation(repName: string, incrementAmount: number): boolean {
		if (this.checkItemExists(repName)) {
			this.collectionMap.set(repName, this.collectionMap.get(repName)! + incrementAmount);
			return true;
		} else {
			throw new Error("Error: Faction does not exist");
		}
	}
}
