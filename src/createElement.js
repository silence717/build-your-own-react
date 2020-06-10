/**
 * const element = <h1 title="foo">Hello</h1>;
 * const container = document.getElementById('root');
 * ReactDOM.render(element, container);
 * 内部调用 createElement，传递 tag name，props 和 children 参数
 */

export function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            // children 或者为object，可能是string或者number，因此特殊处理为 TEXT_ELEMENT
            children: children.map(child =>
                typeof child === "object"
                  ? child
                  : createTextElement(child)
            ),
        }
    };
}
/**
 * 为child为string和number类型的原始类型创建一个特殊的元素 TEXT_ELEMENT
 * @param {*} text 文本内容
 */
function createTextElement(text) {
    return {
        type: 'TEXT_ELEMENT',
        props: {
            nodeValue: text,
            children: []
        }
    };
}