import { Component } from 'angular2/angular2';
import * as moment from 'moment';

// under systemjs, moment is actually exported as the default export, so we account for that
// const moment:moment.MomentStatic = (<any>_moment)['default'] || _moment;

@Component({
	selector: 'date-time',
	template: `
		<span>{{ dateTimeValue }}</span>
	`
})
export class DateTime {
	public dateTimeValue: any;
	
	constructor() {
		this.dateTimeValue = moment().fromNow();
	}	
}
