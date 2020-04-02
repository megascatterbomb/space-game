import { Faction } from "../interface/baseitem/Faction";
import { BaseItem_Template } from "./BaseItem_Template";
import { BaseItem_NumCollection } from "./BaseItem_NumCollection";

export class ReputationCollection extends BaseItem_NumCollection {
	constructor(template: BaseItem_Template, quantity: number[]) {
		super(template, quantity);
	}

	public addReputation(faction: Faction, incrementAmount: number): boolean {
		if (this.checkItemExists(faction)) {
			this.collectionMap.set(faction, this.collectionMap.get(faction)! + incrementAmount);
			return true;
		} else {
			throw new Error("Error: Faction does not exist");
		}
	}

	public removeReputation(faction: Faction, decrementAmount: number) {
		if (this.checkItemExists(faction)) {
			if (this.collectionMap.get(faction)! >= decrementAmount) {
				let newRepAmount = this.collectionMap.get(faction)! - decrementAmount;
				this.collectionMap.set(faction, newRepAmount);
				return true;
			} else {
				return false;
			}
		} else {
			throw new Error("Error: Material does not exist");
		}
	}
}
