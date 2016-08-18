import {autoinject} from "aurelia-framework";
import {Router} from "aurelia-router";

@autoinject()
export class UtilsHome {
	private router: Router;

	configureRouter(config, router: Router) {
		this.router = router;
		config.title = "Utility Classes";
		config.map([{
			route: ['', 'app'],
			moduleId: './app',
			title: 'Application',
			nav: true,
			auth: false,
			name: 'app'
		}]);
	}
}
