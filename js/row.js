class RowTag extends HTMLElement {

    constructor() {
        super();
    }

    toJson(elementColumnName) {
        for (const elementsByTagNameKey of document.getElementsByTagName('row-so')) {
            if (elementsByTagNameKey.getAttribute('column') === elementColumnName) {
                return {
                    column: elementsByTagNameKey.getAttribute('column'),
                    type: elementsByTagNameKey.getAttribute('type'),
                    format: elementsByTagNameKey.getAttribute('format'),
                }
            }
        }

    }
}
window.customElements.define('row-so', RowTag);