import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class InputsHome {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = "Input Elements";
		config.map([{
			route: ['', 'form'],
			moduleId: './form',
			title: 'Form',
			nav: true,
			auth: false,
			name: 'form'
		}, {
				route: 'button',
				moduleId: './button',
				title: 'Buttons',
				nav: true,
				auth: false,
				name: 'buttons'
			}]);
	}
}
