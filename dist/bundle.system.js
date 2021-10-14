System.register('A', [], (function () {
  'use strict';
  return {
    execute: (function () {

      var sayHello = function sayHello(message) {
        alert(message);
      };

      sayHello('Hello from Rollup');

    })
  };
}));
//# sourceMappingURL=bundle.system.js.map
