export const hash = (path) => `/#${path}`;
export const empty = ($element) => {
    $element.innerHTML = '';
};
export const createElements = (tag, options, children) => {
    const $element = document.createElement(tag);
    if (!!(options === null || options === void 0 ? void 0 : options.id)) {
        $element.id = options.id;
    }
    if (!!(options === null || options === void 0 ? void 0 : options.classNames)) {
        $element.classList.add(options.classNames.join(' '));
    }
    if (!!(options === null || options === void 0 ? void 0 : options.href)) {
        $element.setAttribute('href', options.href);
    }
    if (!!(options === null || options === void 0 ? void 0 : options.text)) {
        $element.innerHTML = options.text;
    }
    if (!!children) {
        children.forEach((child) => {
            $element.appendChild(child);
        });
    }
    return $element;
};
//# sourceMappingURL=utils.js.map