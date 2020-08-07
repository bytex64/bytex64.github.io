import { __decorate } from "../../node_modules/tslib/tslib.es6.js";
import { html, css, LitElement, property } from '../../node_modules/lit-element/lit-element.js';
export class GraphingCalculator extends LitElement {
    polynomialChanged(e) {
        const p = e.detail;
        this.func = new Function('x', `return ${p.a} * x * x + ${p.b} * x + ${p.c}`);
    }
    render() {
        return html `
      <h1>${this.title} (<s>Polymer</s> LitElement)</h1>
      <polynomial-input @polynomial-changed=${this.polynomialChanged}></polynomial-input>
      <the-display .func=${this.func}></the-display>
    `;
    }
}
GraphingCalculator.styles = css `
    :host {
      font-family: sans-serif;
    }
  `;
__decorate([
    property({ type: Function })
], GraphingCalculator.prototype, "func", void 0);
//# sourceMappingURL=GraphingCalculator.js.map
