import { BaseItemCollection } from "./BaseItemCollection";
import { Material } from "../interface/baseitem/Material";
import { TemplateItemCollection } from "./TemplateItemCollection";

export class MaterialCollection extends BaseItemCollection<Material> {
	constructor(template: TemplateItemCollection<Material>, quantity?: number[]) {
		super(template, quantity);
	}

	public getCollectionSize(): number {
		let count: number = 0;
		this.collectionMap.forEach((val: number, key: Material) => {
			count += key.getSize() * val;
		});
		return count;
	}
}
