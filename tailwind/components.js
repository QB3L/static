function createCustomElement(templateId, elementName, callback) {
	class CustomElement extends HTMLElement {
		constructor() {
			super();
			console.log('constructing', elementName);
			/* Appending to Shadow DOM
			const shadow = this.attachShadow({ mode: 'open' });
			const template = document.getElementById(templateId);
			const instance = document.importNode(template.content, true);
			shadow.appendChild(instance);
      */

			// Another approach
			const template = document.getElementById(templateId);
			const clone = template.content.cloneNode(true);
			this.appendChild(clone);

			callback(shadow, templateId);
		}
	}
	customElements.define(elementName, CustomElement);
}
