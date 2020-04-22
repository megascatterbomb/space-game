import { TemplateItemCollection } from "./TemplateItemCollection";

export class BaseItemCollection<T extends BaseItem> {
	protected collectionMap: Map<T, number>;
	protected templateCollection: TemplateItemCollection<T>;

	constructor(template: TemplateItemCollection<T>, quantity?: number[]) {
		if (quantity == undefined) {
			let len: number = template.exportItemList().length;
			quantity = new Array<number>(len).fill(0, 0, len);
		}
		this.collectionMap = new Map();
		template.exportItemList().forEach((el: T, idx: number) => {
			this.collectionMap.set(el, quantity![idx]);
		});
		this.templateCollection = template;
	}

	public getAmountsAsArray(): number[] {
		let arr: number[] = new Array();
		this.collectionMap.forEach((value) => {
			arr.push(value);
		});
		return arr;
	}

	public checkItemExists(itemName: T): boolean {
		return !(this.collectionMap.get(itemName) == undefined || this.collectionMap.get(itemName) == null);
	}

	public setItem(orderedQuantityArray: number[]) {
		let idx = 0;
		this.collectionMap.forEach((_val, key) => {
			this.collectionMap.set(key, orderedQuantityArray[idx]);
			idx++;
		});
	}

	public addToItem(material: T, incrementAmount: number): boolean {
		if (this.checkItemExists(material)) {
			let newMaterialAmount = this.collectionMap.get(material)! + incrementAmount;
			this.collectionMap.set(material, newMaterialAmount);
			return true;
		} else {
			throw new Error("Error: Item does not exist");
		}
	}

	public removeFromItem(material: T, decrementAmount: number): boolean {
		if (this.checkItemExists(material)) {
			if (this.collectionMap.get(material)! >= decrementAmount) {
				let newMaterialAmount = this.collectionMap.get(material)! - decrementAmount;
				this.collectionMap.set(material, newMaterialAmount);
				return true;
			} else {
				return false;
			}
		} else {
			throw new Error("Error: Item does not exist");
		}
	}

	public compareCollection(comparedCollection: BaseItemCollection<T>): boolean {
		let comparedArray: number[] = comparedCollection.getAmountsAsArray();
		let materialArray: number[] = this.getAmountsAsArray();

		return materialArray.every((el, idx) => {
			return el >= comparedArray[idx];
		});
	}

	public subtractCollection(comparedCollection: BaseItemCollection<T>): boolean {
		let comparedArray: number[] = comparedCollection.getAmountsAsArray();
		let materialArray: number[] = this.getAmountsAsArray();

		return this.compareCollection(comparedCollection)
			? (() => {
					this.setItem(
						materialArray.map((el: number, idx: number) => {
							return el - comparedArray[idx];
						})
					);
					return true;
			  })()
			: false;
	}

	public addCollection(comparedCollection: BaseItemCollection<T>): void {}
}
