import { distribute } from "./distribute";
import { Player } from "./playerClass";

p1 = Player(60);
p2 = Player(80);
p3 = Player(120);
p4 = Player(60);
p5 = Player(40);

pLst = [p1, p2, p3, p4, p5];
console.log(distribute[pLst]);
