import { LightningElement, api } from 'lwc';
import MyModal from 'c/pocLightningModal';

export default class PocPopupWrapper extends LightningElement {
	@api recordId;
	initialized = false;

    renderedCallback() {
        if (typeof this.recordId !== "string" || this.initialized === true) {
			console.log('return');
            return;
        }
        this.initialized = true;
		console.log('render/open');
		this.handleOpenModal();
	}
	
	async handleOpenModal() {
        const result = await MyModal.open({
            // `label` is not included here in this example.
            // it is set on lightning-modal-header instead
            size: 'large',
            description: 'Accessible description of modal\'s purpose',
            content: 'Passed into content api',
        });
        // if modal closed with X button, promise returns result = 'undefined'
        // if modal closed with OK button, promise returns result = 'okay'
        console.log('result: ', result);
    }
}