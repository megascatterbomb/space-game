import { MaterialCollection } from "./collections/MaterialCollection";
import { Attachment } from "./Attachment";

export class Blueprint {
	private requiredMaterials: MaterialCollection;
	private attachment: Attachment;
	constructor(materialCollection: MaterialCollection, attachment: Attachment) {
		this.requiredMaterials = materialCollection;
		this.attachment = attachment;
	}

	public blueprintCheck(usersMats: MaterialCollection): boolean {
		return usersMats.compareMaterialCollection(this.requiredMaterials);
	}

	public getAttachment(): Attachment {
		return this.attachment;
	}
}
