System.register('A', ['lodash'], (function () {
  'use strict';
  var _;
  return {
    setters: [function (module) {
      _ = module["default"];
    }],
    execute: (function () {

      var sayHello = function sayHello(message) {
        alert(message);
      };

      var Greeter = /** @class */ (function () {
          function Greeter(message) {
              this.greeting = message;
          }
          Greeter.prototype.greet = function () {
              console.log("hello ts");
          };
          return Greeter;
      }());

      var a = new Greeter();
      a.greet();

      var arr = _.concat([1, 2, 3], 4);

      sayHello("Hello from Rollup" + arr);

    })
  };
}));
//# sourceMappingURL=bundle.system.js.map
