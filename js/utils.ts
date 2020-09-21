export const hash = (path: string) => `/#${path}`;

export const empty = ($element: HTMLElement) => {
  $element.innerHTML = '';
};

type ElementsType = (
  tag: string,
  options?: {
    id?: string;
    classNames?: string[];
    href?: string;
    text?: string;
  },
  children?: HTMLElement[],
) => HTMLElement;
export const createElements: ElementsType = (tag, options, children) => {
  const $element: HTMLElement = document.createElement(tag);

  if (!!options?.id) {
    $element.id = options.id;
  }

  if (!!options?.classNames) {
    $element.classList.add(options.classNames.join(' '));
  }

  if (!!options?.href) {
    $element.setAttribute('href', options.href);
  }

  if (!!options?.text) {
    $element.innerHTML = options.text;
  }

  if (!!children) {
    children.forEach((child) => {
      $element.appendChild(child);
    });
  }

  return $element;
};
