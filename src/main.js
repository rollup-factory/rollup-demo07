import sayHello from "./modules/MyModule";
import Greeter from "./modules/Greeter";
import _ from "lodash";

const a = new Greeter();

a.greet();

const arr = _.concat([1, 2, 3], 4);

sayHello("Hello from Rollup" + arr);
