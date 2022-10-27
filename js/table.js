const template = document.createElement('template');
template.innerHTML = `
  <table>
  
  </table>
`;

class TableTag extends HTMLElement {
    fields;
    data;

    constructor() {
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

    }

    toJson() {
        let jsonRows = [];
        let row = new RowTag();
        for (const elementsByTagNameElement of document.getElementsByTagName('row-so')) {
            console.log(elementsByTagNameElement.getAttribute('column'));
            jsonRows.push(row.toJson(elementsByTagNameElement));
        }
        console.log(jsonRows);
    }

    async connectedCallback() {
        this.toJson();

        let fields = [];
        console.log("name: " + this.children)
        for (let i = 0; i < this.children.length; i++) {
            fields.push({
                name: `${this.children.item(i).getAttribute('name')}`,
                type: `${this.children.item(i).getAttribute('type')}`
            });
        }
        let data = await fetch(`${this.getAttribute('api')}`).then((res) => res.json()).then((data) => {
            return data;
        });
        this.fields = fields;
        this.data = data;

        console.log("fields", this.fields);
        console.log("data", this.data);
    }

    draw() {
    }

    disconnectedCallback() {
    }
}


window.customElements.define('table-so', TableTag);
