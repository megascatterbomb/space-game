import { BaseStringNumCollection } from "./BaseStringNumCollection";
import { TemplateStringNumCollection } from "./TemplateNumStringCollection";

export class MaterialCollection extends BaseStringNumCollection {
	public constructor(templateCollection: TemplateStringNumCollection);
	public constructor(templateCollection: TemplateStringNumCollection, orderedQuantityArray: number[]);

	constructor(...args: any[]) {
		super(args);
	}

	public setMaterial(orderedQuantityArray: number[]) {
		this.templateMaterialCollection.exportMaterialNames().forEach((el: string, idx: number) => {
			this.materialMap.set(el, orderedQuantityArray[idx]);
		});
	}

	public addMaterial(materialName: string, incrementAmount: number): boolean {
		if (this.checkMaterialExists(materialName)) {
			let newMaterialAmount = this.materialMap.get(materialName)! + incrementAmount;
			this.materialMap.set(materialName, newMaterialAmount);
			return true;
		} else {
			throw new Error("Error: Material does not exist");
		}
	}

	public removeMaterial(materialName: string, decrementAmount: number): boolean {
		if (this.checkMaterialExists(materialName)) {
			if (this.materialMap.get(materialName)! >= decrementAmount) {
				let newMaterialAmount = this.materialMap.get(materialName)! - decrementAmount;
				this.materialMap.set(materialName, newMaterialAmount);
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

	private checkMaterialExists(materialName: string): boolean {
		if (this.materialMap.get(materialName) == undefined || this.materialMap.get(materialName) == null) {
			return false;
		} else {
			return true;
		}
	}
}
