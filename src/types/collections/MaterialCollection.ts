import { TemplateMaterialCollection } from "./TemplateMaterialCollection";

export class MaterialCollection {

    private materialMap: Map<string, number>
    private templateMaterialCollection: TemplateMaterialCollection

    public constructor(templateCollection: TemplateMaterialCollection)
    public constructor(templateCollection: TemplateMaterialCollection, orderedQuantityArray: number[])

    public constructor(...args: any[]) {
        this.materialMap = new Map()
        switch (args.length) {
            case 1:
                args[0].exportMaterialNames().forEach((el: string) => {
                    this.materialMap.set(el, 0)
                });
                break;
            case 2:
                args[0].exportMaterialNames().forEach((el: string, idx: number) => {
                    this.materialMap.set(el, args[1][idx])
                });
                break;
        }
        this.templateMaterialCollection = args[0]
    }

    public setMaterial(orderedQuantityArray: number[]) {
        this.templateMaterialCollection.exportMaterialNames().forEach((el: string, idx: number) => {
            this.materialMap.set(el, orderedQuantityArray[idx])
        });
    }

    public addMaterial(materialName: string, incrementAmount: number): boolean {
        if (this.checkMaterialExists(materialName)) {
            let newMaterialAmount = this.materialMap.get(materialName)! + incrementAmount;
            this.materialMap.set(materialName, newMaterialAmount);
            return true;
        } else {
            throw new Error("Error: Material does not exist");
        }
    }

    public removeMaterial(materialName: string, decrementAmount: number): boolean {
        if (this.checkMaterialExists(materialName)) {
            if (this.materialMap.get(materialName)! >= decrementAmount) {
                let newMaterialAmount = this.materialMap.get(materialName)! - decrementAmount;
                this.materialMap.set(materialName, newMaterialAmount);
                return true
            } else {
                return false
            }
        } else {
            throw new Error("Error: Material does not exist");
        }
    }

    public compareMaterialCollection(comparedCollection: MaterialCollection): boolean {
        let comparedArray: number[] = comparedCollection.getAmountsAsArray()
        let materialArray: number[] = this.getAmountsAsArray()

        return materialArray.every(indexAtleast)

        function indexAtleast(el: number, idx: number): boolean {
            return el >= comparedArray[idx]
        }
    }

    public subtractMaterialCollection(comparedCollection: MaterialCollection): boolean {
        let comparedArray: number[] = comparedCollection.getAmountsAsArray()
        let materialArray: number[] = this.getAmountsAsArray()

        return this.compareMaterialCollection(comparedCollection) ? (() => {
            materialArray = materialArray.map(subtractElements)
            this.setMaterial(materialArray)
            return true
        })() : false;

        function subtractElements(el: number, idx: number): number {
            return el - comparedArray[idx]
        }

    }


    public getAmountsAsArray() {
        let a: number[] = new Array()
        this.materialMap.forEach(value => {
            a.push(value)
        })
        return a;
    }


    private checkMaterialExists(materialName: string): boolean {
        if (this.materialMap.get(materialName) == undefined || this.materialMap.get(materialName) == null) {
            return false;
        } else {
            return true;
        }
    }

}