import { api } from 'lwc';
import LightningModal from 'lightning/modal';

export default class PocLightningModal extends LightningModal {
    @api content;

    handleOkay() {
        this.close('okay');
    }

	renderedCallback() {
		const modal = this.template.querySelector("lightning-modal-body");
		if (modal) {
			modal.focus();
			console.log('focus');
		}
	}
}

// https://developer.salesforce.com/docs/component-library/bundle/lightning-modal/documentation