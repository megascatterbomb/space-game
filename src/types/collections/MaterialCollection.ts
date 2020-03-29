import { BaseStringNumCollection } from "./BaseStringNumCollection";
import { TemplateStringNumCollection } from "./TemplateNumStringCollection";

export class MaterialCollection extends BaseStringNumCollection {
	public constructor(templateCollection: TemplateStringNumCollection);
	public constructor(templateCollection: TemplateStringNumCollection, orderedQuantityArray: number[]);

	constructor(...args: any[]) {
		super(args);
	}

	public setMaterial(orderedQuantityArray: number[]) {
		this.templateCollection.exportMaterialNames().forEach((el: string, idx: number) => {
			this.collectionMap.set(el, orderedQuantityArray[idx]);
		});
	}

	public addMaterial(materialName: string, incrementAmount: number): boolean {
		if (this.checkItemExists(materialName)) {
			let newMaterialAmount = this.collectionMap.get(materialName)! + incrementAmount;
			this.collectionMap.set(materialName, newMaterialAmount);
			return true;
		} else {
			throw new Error("Error: Material does not exist");
		}
	}

	public removeMaterial(materialName: string, decrementAmount: number): boolean {
		if (this.checkItemExists(materialName)) {
			if (this.collectionMap.get(materialName)! >= decrementAmount) {
				let newMaterialAmount = this.collectionMap.get(materialName)! - decrementAmount;
				this.collectionMap.set(materialName, newMaterialAmount);
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

		return materialArray.every(indexAtleast);

		function indexAtleast(el: number, idx: number): boolean {
			return el >= comparedArray[idx];
		}
	}

	public subtractMaterialCollection(comparedCollection: MaterialCollection): boolean {
		let comparedArray: number[] = comparedCollection.getAmountsAsArray();
		let materialArray: number[] = this.getAmountsAsArray();

		return this.compareMaterialCollection(comparedCollection)
			? (() => {
					materialArray = materialArray.map(subtractElements);
					this.setMaterial(materialArray);
					return true;
			  })()
			: false;

		function subtractElements(el: number, idx: number): number {
			return el - comparedArray[idx];
		}
	}
}
