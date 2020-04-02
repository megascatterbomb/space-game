import { ReputationCollection } from "./collections/ReputationCollection";
import { MaterialCollection } from "./collections/MaterialCollection";
import { Blueprint } from "./Blueprint";
import { Faction } from "./interface/baseitem/Faction";
import { Ship } from "./Ship";
import { Skin } from "./Skin";

export class Player {
	private discordId: string;
	private ship: Ship;
	private skin: Skin;
	private tokens: number;
	private credits: number;
	private reputation: ReputationCollection;
	private materials: MaterialCollection;

	private blueprintCollection: Map<Blueprint, Blueprint>;

	constructor(discordId: string, ship: Ship, skin: Skin, tokens: number, credits: number, reputation: ReputationCollection, materials: MaterialCollection) {
		this.discordId = discordId;
		this.ship = ship;
		this.skin = skin;

		this.tokens = tokens;
		this.credits = credits;

		this.reputation = reputation;
		this.materials = materials;

		this.blueprintCollection = new Map<Blueprint, Blueprint>();
	}

	/**
	 * Alters the reputation of this player
	 * @param faction the faction to edit the reputation of
	 * @param quantity the amount to change the repuation by
	 */
	public addReputation(faction: Faction, quantity: number): void {
		this.reputation.addReputation(faction, quantity);
	}
	public removeReputation(faction: Faction, quantity: number): void {
		this.reputation.removeReputation(faction, quantity);
	}

	public addCredits(quantity: number): void {
		this.credits += quantity;
	}
	public removeCredits(quantity: number): boolean {
		return this.checkCredits(quantity)
			? (() => {
					this.credits -= quantity;
					return true;
			  })()
			: false;
	}
	public checkCredits(quantity: number): boolean {
		return this.credits >= quantity;
	}

	public subtractMaterialCollection(comparedCollection: MaterialCollection): boolean {
		return this.materials.subtractMaterialCollection(comparedCollection);
	}

	//section Τokens

	/**
	 * adds tokens to the player
	 * @param quantity the number of tokens to add
	 */
	public addTokens(quantity: number): void {
		this.tokens += quantity;
	}
	/**
	 * removes tokens from a player
	 * @param quantity number of tokens to spend
	 */
	public removeTokens(quantity: number): boolean {
		return this.tokens - quantity >= 0
			? (() => {
					this.tokens -= quantity;
					return true;
			  })()
			: false;
	}

	//section Blueprints

	/**
	 * adds a blueprint to a players owned blueprints
	 * @param blueprint the blueprint to add to the users collection
	 */
	public addBlueprint(blueprint: Blueprint): void {
		this.blueprintCollection.set(blueprint, blueprint);
	}
	/**
	 * returns if the blueprint exists in the players collection
	 * @param blueprint the blueprint to see if the player owns
	 */
	public checkPlayerOwnsBlueprint(blueprint: Blueprint): boolean {
		return this.blueprintCollection.get(blueprint) != undefined;
	}
	/**
	 *  returns if the player can build a blueprint (has the materials and owns it)
	 * @param blueprint the blueprint to check
	 */
	public canBuildBlueprint(blueprint: Blueprint): boolean {
		return this.checkPlayerOwnsBlueprint(blueprint) && blueprint.blueprintCheck(this.materials);
	}

	//TODO Implement this function
	/**
	 * builds the blueprint. TO BE IMPLEMENTED
	 * @param blueprint the blueprint to build
	 */
	public buildBlueprint(blueprint: Blueprint): void {
		if (this.canBuildBlueprint(blueprint)) {
		}
	}
}
