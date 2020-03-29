import { BaseItem_NumCollection } from "./BaseItem_NumCollection";
import { BaseItem_Template } from "./BaseItem_Template";
import { Material } from "../Material";

export class MaterialCollection extends BaseItem_NumCollection {
	constructor(template: BaseItem_Template, quantity?: number[]) {
		if (quantity == undefined) {
			let len: number = template.exportItemList().length;
			quantity = new Array<number>(len).fill(0, 0, len);
		}
		super(template, quantity);
	}

	public setMaterial(orderedQuantityArray: number[]) {
		let idx = 0;
		this.collectionMap.forEach((_val, key) => {
			this.collectionMap.set(key, orderedQuantityArray[idx]);
			idx++;
		});
	}

	public addMaterial(material: Material, incrementAmount: number): boolean {
		if (this.checkItemExists(material)) {
			let newMaterialAmount = this.collectionMap.get(material)! + incrementAmount;
			this.collectionMap.set(material, newMaterialAmount);
			return true;
		} else {
			throw new Error("Error: Material does not exist");
		}
	}

	public removeMaterial(material: Material, decrementAmount: number): boolean {
		if (this.checkItemExists(material)) {
			if (this.collectionMap.get(material)! >= decrementAmount) {
				let newMaterialAmount = this.collectionMap.get(material)! - decrementAmount;
				this.collectionMap.set(material, newMaterialAmount);
				return true;
			} else {
				return false;
			}
		} else {
			throw new Error("Error: Material does not exist");
		}
	}

	public compareMaterialCollection(comparedCollection: MaterialCollection): boolean {
		let comparedArray: number[] = comparedCollection.getAmountsAsArray();
		let materialArray: number[] = this.getAmountsAsArray();

		return materialArray.every((el, idx) => {
			return el >= comparedArray[idx];
		});
	}

	public subtractMaterialCollection(comparedCollection: MaterialCollection): boolean {
		let comparedArray: number[] = comparedCollection.getAmountsAsArray();
		let materialArray: number[] = this.getAmountsAsArray();
		return this.compareMaterialCollection(comparedCollection)
			? (() => {
					this.setMaterial(
						materialArray.map((el: number, idx: number) => {
							return el - comparedArray[idx];
						})
					);
					return true;
			  })()
			: false;
	}
}
