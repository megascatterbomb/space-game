import { MapNode } from "./MapNode";

export class NodeCollection {
    private nodeMap = new Map()
    
    constructor(mapNodeArray: MapNode[]) {
        this.fillMap(mapNodeArray);
    }

    public fillMap(mapNodeArray: MapNode[]): void {
        mapNodeArray.forEach(el => {
            this.nodeMap.set(el.getId(), el)
        })
    }

}