import ControllerExtension from 'sap/ui/core/mvc/ControllerExtension';
import ExtensionAPI from 'sap/fe/templates/ListReport/ExtensionAPI';
import { Button$PressEvent } from 'sap/m/Button';
import ODataModel from 'sap/ui/model/odata/v4/ODataModel';
import MessageBox from 'sap/m/MessageBox';

/**
 * @namespace com.subbu.typefiori.ext.controller
 * @controller
 */
export default class ListExtReport extends ControllerExtension<ExtensionAPI> {
	static overrides = {
		/**
		 * Called when a controller is instantiated and its View controls (if available) are already created.
		 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
		 * @memberOf com.subbu.typefiori.ext.controller.ListExtReport
		 */
		onInit(this: ListExtReport) {
			// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
			const model = this.base.getExtensionAPI().getModel();
		}
	}
	handleCustom(oEvent:Button$PressEvent) {
	console.log("handleCustom");
	let actionName = 'DemoService.sayHello';

	this.base.getExtensionAPI().getEditFlow().invokeAction(actionName, {
 		model: this.base.getExtensionAPI().getModel() as ODataModel,
	}).then((result: any) => {
		MessageBox.information(result.getObject().value)
	});
}

}

/**
 * Generated event handler.
 */
