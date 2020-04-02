import { Attachment } from "./Attachment";

export class Ship {
	private id: number;
	private name: string;
	private cost: number;
	private subclass: string;
	private techLevel: number;
	private baseHp: number;
	private baseShield: number;
	private baseEnergy: number[];
	private baseCargo: number;
	private baseHandling: number;
	private primaryCap: number;
	private shieldCap: number;
	private heavyCap: number;
	private mineCap: number;
	private generalCap: number;
	private imageName: string;
	/**
	 *
	 * @param id ship id
	 * @param name ship name
	 * @param cost ship cost
	 * @param subclass the subclass of the ship
	 * @param techLevel the ships techlevel
	 * @param baseHp the base health of the ship
	 * @param baseShield the base shield of the ship
	 * @param baseEnergy the base energies of the ship
	 * @param baseCargo the base cargo capacity of the ship
	 * @param baseHandling the base handling of the ship
	 * @param primaryCap max number of primary weapons
	 * @param shieldCap max number of shield augments
	 * @param heavyCap max number of heavy weapons
	 * @param mineCap max number of mining lasers
	 * @param generalCap max number of general attachments
	 * @param imageName the name of the image representing this ship
	 */
	constructor(
		id: number,
		name: string,
		cost: number,
		subclass: string,
		techLevel: number,
		baseHp: number,
		baseShield: number,
		baseEnergy: number[],
		baseCargo: number,
		baseHandling: number,
		primaryCap: number,
		shieldCap: number,
		heavyCap: number,
		mineCap: number,
		generalCap: number,
		imageName: string
	) {
		this.id = id;
		this.name = name;
		this.cost = cost;
		this.subclass = subclass;
		this.techLevel = techLevel;
		this.baseHp = baseHp;
		this.baseShield = baseShield;
		this.baseEnergy = baseEnergy;
		this.baseCargo = baseCargo;
		this.baseHandling = baseHandling;
		this.primaryCap = primaryCap;
		this.shieldCap = shieldCap;
		this.heavyCap = heavyCap;
		this.mineCap = mineCap;
		this.generalCap = generalCap;
		this.imageName = imageName;
	}
	/**
	 * Gets all information about this ship as a stringified JSON
	 */
	public formatOutput(): string {
		return JSON.stringify(this);
	}
	/**
	 * return true if the ship has a tech level high enough for this attachment
	 * @param attachment the attachment to be checked
	 */
	public itemTechCheck(attachment: Attachment): boolean {
		return this.techLevel >= attachment.getTechLevel();
    }
    
}
