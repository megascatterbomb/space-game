import { TemplateStringNumCollection } from "./TemplateNumStringCollection";

export class BaseStringNumCollection {
	protected collectionMap: Map<string, number>;
	protected templateCollection: TemplateStringNumCollection;

	public constructor(args: any[]) {
		this.collectionMap = new Map();
		switch (args.length) {
			case 1:
				args[0].exportMaterialNames().forEach((el: string) => {
					this.collectionMap.set(el, 0);
				});
				break;
			case 2:
				args[0].exportMaterialNames().forEach((el: string, idx: number) => {
					this.collectionMap.set(el, args[1][idx]);
				});
				break;
		}
		this.templateCollection = args[0];
	}

	public getAmountsAsArray() {
		let a: number[] = new Array();
		this.collectionMap.forEach(value => {
			a.push(value);
		});
		return a;
	}

	protected checkItemExists(itemName: string): boolean {
		if (this.collectionMap.get(itemName) == undefined || this.collectionMap.get(itemName) == null) {
			return false;
		} else {
			return true;
		}
	}
}
