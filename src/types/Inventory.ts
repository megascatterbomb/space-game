import { Attachment } from "./Attachment";

export class Inventory {
	private attachments: Map<Attachment, number>;

	constructor() {
		this.attachments = new Map<Attachment, number>();
	}

    //todo implement this
	public checkAttachment(attachment: Attachment): boolean {
		return false;
	}
	public addAttachment(attachment: Attachment): void {
		this.attachments;
	}
}
