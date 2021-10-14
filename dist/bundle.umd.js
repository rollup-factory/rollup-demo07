(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('lodash')) :
  typeof define === 'function' && define.amd ? define(['lodash'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global._));
})(this, (function (_) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var ___default = /*#__PURE__*/_interopDefaultLegacy(_);

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

  var arr = ___default["default"].concat([1, 2, 3], 4);

  sayHello("Hello from Rollup" + arr);

}));
//# sourceMappingURL=bundle.umd.js.map
