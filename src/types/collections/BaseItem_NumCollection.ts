import { BaseItem_Template } from "./BaseItem_Template";

export class BaseItem_NumCollection {
	protected collectionMap: Map<BaseItem, number>;
	protected templateCollection: BaseItem_Template;

	public constructor(template: BaseItem_Template, quantity: number[]) {
		this.collectionMap = new Map();
		template.exportItemList().forEach((el: BaseItem, idx: number) => {
			this.collectionMap.set(el, quantity[idx]);
		});
		this.templateCollection = template;
	}

	public getAmountsAsArray(): number[] {
		let a: number[] = new Array();
		this.collectionMap.forEach(value => {
			a.push(value);
		});
		return a;
	}

	protected checkItemExists(itemName: BaseItem): boolean {
		if (this.collectionMap.get(itemName) == undefined || this.collectionMap.get(itemName) == null) {
			return false;
		} else {
			return true;
		}
	}
}
