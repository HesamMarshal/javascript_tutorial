(function () { function r(e, n, t) { function o(i, f) { if (!n[i]) { if (!e[i]) { var c = "function" == typeof require && require; if (!f && c) return c(i, !0); if (u) return u(i, !0); var a = new Error("Cannot find module '" + i + "'"); throw a.code = "MODULE_NOT_FOUND", a } var p = n[i] = { exports: {} }; e[i][0].call(p.exports, function (r) { var n = e[i][1][r]; return o(n || r) }, p, p.exports, r, e, n, t) } return n[i].exports } for (var u = "function" == typeof require && require, i = 0; i < t.length; i++)o(t[i]); return o } return r })()({
    1: [function (require, module, exports) {
        // console.log(require('./utils'));

        const utils = require('./utils');
        console.log(utils);

        console.log(utils.userName);
        utils.greeting();


        const utils2 = require('./utils2');
        utils2()


        const utils3 = require('./utils3');
        utils3.greeting()
    }, { "./utils": 2, "./utils2": 3, "./utils3": 4 }], 2: [function (require, module, exports) {
        const userName = "Hesam";

        function greeting() {
            console.log("Hello", userName);
        }
        function anotherFunc() {
            console.log('Another Function');
        }

        module.exports.userName = userName;
        module.exports.greeting = greeting;

        // console.log(module)
    }, {}], 3: [function (require, module, exports) {
        const userName = "Hesam";

        function greeting() {
            console.log("Hello", userName);
        }
        function anotherFunc() {
            console.log('Another Function');
        }


        module.exports = greeting;

        // console.log(module)
    }, {}], 4: [function (require, module, exports) {
        const userName = "Hesam";

        function greeting() {
            console.log("Hello", userName);
        }
        function anotherFunc() {
            console.log('Another Function');
        }


        // module.exports = {
        //     userName: userName,
        //     greeting: greeting,
        // };


        module.exports = {
            userName,
            greeting,
        };
        // console.log(module)
    }, {}]
}, {}, [1]);
