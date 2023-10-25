class Point { 
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) { 
            const dx = a.x - a.y;
            const dy = b.x - b.y;
            return Math.hypot(dx , dy)
    }
}
const p1 = new Point(5,5);
const p2 = new Point(10,11);
console.log(Point.distance(p1, p2));