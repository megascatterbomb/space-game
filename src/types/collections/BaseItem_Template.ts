export class BaseItem_Template {
	protected itemNameList: Array<BaseItem>;
	constructor(itemList: BaseItem[]) {
		this.itemNameList = itemList;
	}

	public exportNameList(): string[] {
		return this.itemNameList.map(el => el.getName());
	}

	public exportItemList(): BaseItem[] {
		return this.itemNameList;
	}
}
