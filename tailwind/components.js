function createCustomElement(templateId, elementName, callback) {
	class CustomElement extends HTMLElement {
		constructor() {
			super();
			console.log('constructing', elementName);
			/* Appending to Shadow DOM */
			const shadow = this.attachShadow({ mode: 'open' });
			const template = document.getElementById(templateId);
			const instance = document.importNode(template.content, true);
			shadow.appendChild(instance);
			callback(shadow, templateId);
		}
		connectedCallback() {
			console.log('Custom element added to page.');
		}

		disconnectedCallback() {
			console.log('Custom element removed from page.');
		}
	}
	customElements.define(elementName, CustomElement);
}
