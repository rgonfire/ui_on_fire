import React from 'react';

var classnamesExports = {};
var classnames$1 = {
  get exports(){ return classnamesExports; },
  set exports(v){ classnamesExports = v; },
};

/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
						classes.push(arg.toString());
						continue;
					}

					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames$1));

var classnames = classnamesExports;

/**
 * @description Type definitions Button
 */
// Match de clases
const RecordColors = {
    primary: "--primary",
    secondary: "--secondary",
    tertiary: "--tertiary",
};
const RecordSizes = {
    small: "--small",
    medium: "--medium",
    large: "--large",
};
const RecordRounded = {
    a: "--roundedA",
    b: "--roundedB",
    c: "--roundedC",
};

const Button = ({ children, type = "button", onClick, disabled = false, color = "primary", size = "medium", round = "a", classNames, }) => {
    return (React.createElement("button", { type: type, onClick: onClick, disabled: disabled, className: classnames("btn", RecordColors[color], RecordSizes[size], RecordRounded[round], classNames) }, children));
};

export { Button };
//# sourceMappingURL=index.esm.js.map
