import React from 'react';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

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
const RecordColors$2 = {
    darkPrimary: "--darkPrimary",
    darkSecondary: "--darkSecondary",
    darkTertiary: "--darkTertiary",
    lightPrimary: "--lightPrimary",
    lightSecondary: "--lightSecondary",
    lightTertiary: "--lightTertiary",
};
const RecordHeightSizes$2 = {
    small: "--h-small",
    medium: "--h-medium",
    large: "--h-large",
};
const RecordWidthSizes$2 = {
    small: "--w-small",
    medium: "--w-medium",
    large: "--w-large",
};
const RecordRounded$2 = {
    sm: "--roundedSm",
    m: "--roundedM",
    lm: "--roundedLm",
};

const Button = (_a) => {
    var { type = "button", onClick, disabled = false, theme = "darkPrimary", height = "medium", width = "medium", round = "m", alt = "", text = "", iconLeft, iconRight, classNames } = _a, rest = __rest(_a, ["type", "onClick", "disabled", "theme", "height", "width", "round", "alt", "text", "iconLeft", "iconRight", "classNames"]);
    return (React.createElement("button", Object.assign({ type: type, onClick: onClick, disabled: disabled, className: classnames("rg-btn", RecordColors$2[theme], RecordHeightSizes$2[height], RecordWidthSizes$2[width], RecordRounded$2[round], classNames) }, rest),
        iconLeft && React.createElement("img", { className: "w-3", src: iconLeft, alt: alt }),
        React.createElement("span", { className: `"bg-${theme}"` }, text),
        iconRight && React.createElement("img", { className: "w-3", src: iconRight, alt: alt })));
};

/**
 * @description Type definitions ButtonLink
 */
// Match de clases
const RecordColors$1 = {
    darkPrimary: "--darkPrimary",
    darkSecondary: "--darkSecondary",
    darkTertiary: "--darkTertiary",
    lightPrimary: "--lightPrimary",
    lightSecondary: "--lightSecondary",
    lightTertiary: "--lightTertiary",
};
const RecordHeightSizes$1 = {
    small: "--h-small",
    medium: "--h-medium",
    large: "--h-large",
};
const RecordWidthSizes$1 = {
    small: "--w-small",
    medium: "--w-medium",
    large: "--w-large",
};
const RecordRounded$1 = {
    sm: "--roundedSm",
    m: "--roundedM",
    lm: "--roundedLm",
};

const ButtonLink$1 = (_a) => {
    var { theme = "darkPrimary", height = "medium", width = "medium", round = "m", alt = "", text = "", iconLeft, iconRight, classNames, link = "" } = _a, rest = __rest(_a, ["theme", "height", "width", "round", "alt", "text", "iconLeft", "iconRight", "classNames", "link"]);
    return (React.createElement("a", Object.assign({ href: link, className: classnames("rg-btn", RecordColors$1[theme], RecordHeightSizes$1[height], RecordWidthSizes$1[width], RecordRounded$1[round], classNames) }, rest),
        iconLeft && React.createElement("img", { className: "w-3", src: iconLeft, alt: alt }),
        React.createElement("span", { className: `"bg-${theme}"` }, text),
        iconRight && React.createElement("img", { className: "w-3", src: iconRight, alt: alt })));
};

/**
 * @description Type definitions ButtonLink
 */
// Match de clases
const RecordColors = {
    darkPrimary: "--darkPrimary",
    darkSecondary: "--darkSecondary",
    darkTertiary: "--darkTertiary",
    lightPrimary: "--lightPrimary",
    lightSecondary: "--lightSecondary",
    lightTertiary: "--lightTertiary",
};
const RecordHeightSizes = {
    small: "--h-small",
    medium: "--h-medium",
    large: "--h-large",
};
const RecordWidthSizes = {
    small: "--w-small",
    medium: "--w-medium",
    large: "--w-large",
};
const RecordRounded = {
    sm: "--roundedSm",
    m: "--roundedM",
    lm: "--roundedLm",
};

const ButtonLink = ({ onClick, theme = "darkPrimary", height = "medium", width = "medium", round = "sm", alt = "", iconSrc = "https://rgonfire.com/assets/icons/svgs/star.svg", classNames, }) => {
    return (React.createElement("img", { src: iconSrc, alt: alt, onClick: onClick, className: classnames("rg-btn", RecordColors[theme], RecordHeightSizes[height], RecordWidthSizes[width], RecordRounded[round], classNames) }));
};

export { Button, ButtonLink as ButtonIcon, ButtonLink$1 as ButtonLink };
//# sourceMappingURL=index.esm.js.map
