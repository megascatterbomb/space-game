import { Attachment } from "./Attachment";

export class Inventory {
	private attachments: Map<Attachment, number>;

	constructor() {
		this.attachments = new Map<Attachment, number>();
	}

    //todo implement this (check if attachment can go on a ship)
	public checkAttachment(attachment: Attachment): boolean {
		return false;
    }
    //todo implement this (add attachment to inventory)
	public addAttachment(attachment: Attachment): void {
		
	}
}
