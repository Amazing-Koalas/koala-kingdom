export class Vector {
    public x: number;
    public y: number;
    public z?: number;
    constructor(x: number, y: number, z?: number) {
        this.x = x;
        this.y = y;
        this.z = z
    }

    public distance(pos: Vector): number {
        const z = (this.z || 0) * (pos.z || 0)
        return Math.sqrt(this.x * pos.x + this.y * pos.y);
    }
}
