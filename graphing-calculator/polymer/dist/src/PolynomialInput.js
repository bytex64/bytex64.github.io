import { __decorate } from "../../node_modules/tslib/tslib.es6.js";
import { html, css, LitElement, property } from '../../node_modules/lit-element/lit-element.js';
export class PolynomialInput extends LitElement {
    constructor() {
        super(...arguments);
        this.a = "0.5";
        this.b = "0";
        this.c = "-3";
    }
    connectedCallback() {
        super.connectedCallback();
        this.firePolynomialChanged();
    }
    convert(e) {
        if (e.target instanceof HTMLInputElement) {
            if (e.target.name == 'a') {
                this.a = e.target.value;
            }
            else if (e.target.name == 'b') {
                this.b = e.target.value;
            }
            else if (e.target.name == 'c') {
                this.c = e.target.value;
            }
        }
        this.firePolynomialChanged();
    }
    firePolynomialChanged() {
        this.dispatchEvent(new CustomEvent('polynomial-changed', {
            detail: {
                a: parseFloat(this.a),
                b: parseFloat(this.b),
                c: parseFloat(this.c),
            }
        }));
    }
    render() {
        return html `
    <p class="polynomial">
      <input type="text" name="a" @input=${this.convert} value=${this.a} /><i>x<sup>2</sup></i>
      + <input type="text" name="b" @input=${this.convert} value=${this.b} /><i>x</i>
      + <input type="text" name="c" @input=${this.convert} value=${this.c} />
    </p>
    `;
    }
}
PolynomialInput.styles = css `
    :host {
      font-size: 24px;
      font-family: serif;
    }

    input {
      font-size: 24px;
      width: 32px;
      text-align: right;
    }
  `;
__decorate([
    property({ type: String })
], PolynomialInput.prototype, "a", void 0);
__decorate([
    property({ type: String })
], PolynomialInput.prototype, "b", void 0);
__decorate([
    property({ type: String })
], PolynomialInput.prototype, "c", void 0);
//# sourceMappingURL=PolynomialInput.js.map