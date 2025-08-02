import {inline} from "./inline.js"
import { renamedFunction as salame } from "./inline.js";
import defaultInline from "./inline.js";
import { group } from "./non-inline.js";
import exportDefault from "./non-inline.js";
import ramon from "./non-inline.js"; // same as the line above but renamed

//combined
import ramon2, {group} from "./non-inline.js";

inline();
salame();
defaultInline();

group();
exportDefault();
ramon();
ramon2();