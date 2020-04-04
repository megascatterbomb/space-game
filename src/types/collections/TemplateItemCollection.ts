export class TemplateItemCollection<T extends BaseItem> {
	protected itemNameList: Array<T>;
	constructor(itemList: T[]) {
		this.itemNameList = itemList;
	}

	public exportNameList(): string[] {
		return this.itemNameList.map((el) => el.getName());
	}

	public exportItemList(): T[] {
		return this.itemNameList;
	}
}
