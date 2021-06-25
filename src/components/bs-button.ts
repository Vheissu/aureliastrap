import { bindable, customElement, ICustomElementViewModel } from "@aurelia/runtime-html";

import template from './bs-button.html';

@customElement({
    name: 'bs-button',
    template
})
export class BsButton implements ICustomElementViewModel {
    @bindable active = false;
    @bindable block = false;
    @bindable close = false;
    @bindable color = 'primary';
    @bindable disabled = false;
    @bindable href = '';
    @bindable size = null;
    @bindable style = '';
    @bindable value = '';

    private classes = '';

    public bound() {
        this.classes = `${this.close ? 'btn-close' : 'btn'}`;

        if (this.size) {
            this.classes = `${this.classes} btn-${this.size}`;
        }

        if (this.block) {
            this.classes = `${this.classes} d-block w-100`;
        }
    }
}