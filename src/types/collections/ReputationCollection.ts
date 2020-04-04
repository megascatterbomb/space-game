import { BaseItemCollection } from "./BaseItemCollection";
import { TemplateItemCollection } from "./TemplateItemCollection";
import { Faction } from "../interface/baseitem/Faction";

export class ReputationCollection extends BaseItemCollection<Faction> {
	constructor(template: TemplateItemCollection<Faction>, quantity?: number[]) {
		super(template, quantity);
	}

	
}
