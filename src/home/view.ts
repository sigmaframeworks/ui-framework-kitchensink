import {autoinject} from "aurelia-framework";
import {ValidationController, ValidationRules} from "aurelia-validation";
import {UIModel} from "sigma-ui-framework";

@autoinject()
export class Home {
	model;
	constructor(public vc: ValidationController) {
		this.model = new MyModel();
	}

	validateMe() {
		this.vc.validate().then(e => console.log(e)).catch(e => console.log(e));
	}
}

export class MyModel extends UIModel {
	username: string = '';
	password: string = '';

	constructor() {
		super();

		ValidationRules
			.ensure((mm: MyModel) => mm.username)
			.required()
			.minLength(3)
			.maxLength(20)
			.ensure(mm => mm.password)
			.required()
			.minLength(3)
			.maxLength(20)
			.on(MyModel);
	}
}
