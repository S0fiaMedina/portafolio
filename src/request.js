export function newElement(type, attributes = {}, children = []) {
    const element = document.createElement(type);
    Object.keys(attributes).forEach(attr => element[attr] = attributes[attr]);
    children.forEach(child => element.appendChild(child));
    return element;
}