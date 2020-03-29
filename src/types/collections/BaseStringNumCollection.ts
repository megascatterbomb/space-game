import { TemplateStringNumCollection } from "./TemplateMaterialCollection";

export class BaseStringNumCollection {
	protected materialMap: Map<string, number>;
	protected templateMaterialCollection: TemplateStringNumCollection;

	public constructor(...args: any[]) {
		this.materialMap = new Map();
		switch (args.length) {
			case 1:
				args[0].exportMaterialNames().forEach((el: string) => {
					this.materialMap.set(el, 0);
				});
				break;
			case 2:
				args[0].exportMaterialNames().forEach((el: string, idx: number) => {
					this.materialMap.set(el, args[1][idx]);
				});
				break;
		}
		this.templateMaterialCollection = args[0];
	}

	public getAmountsAsArray() {
		let a: number[] = new Array();
		this.materialMap.forEach(value => {
			a.push(value);
		});
		return a;
	}
}
