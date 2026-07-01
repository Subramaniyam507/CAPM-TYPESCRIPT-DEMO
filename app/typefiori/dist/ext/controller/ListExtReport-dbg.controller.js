sap.ui.define(["sap/ui/core/mvc/ControllerExtension", "sap/m/MessageBox"], function (ControllerExtension, MessageBox) {
  "use strict";

  /**
   * @namespace com.subbu.typefiori.ext.controller
   * @controller
   */
  const ListExtReport = ControllerExtension.extend("com.subbu.typefiori.ext.controller.ListExtReport", {
    override: {
      /**
       * Called when a controller is instantiated and its View controls (if available) are already created.
       * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
       * @memberOf com.subbu.typefiori.ext.controller.ListExtReport
       */
      onInit() {
        // you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
        const model = this.base.getExtensionAPI().getModel();
      }
    },
    handleCustom: function _handleCustom(oEvent) {
      console.log("handleCustom");
      let actionName = 'DemoService.sayHello';
      this.base.getExtensionAPI().getEditFlow().invokeAction(actionName, {
        model: this.base.getExtensionAPI().getModel()
      }).then(result => {
        MessageBox.information(result.getObject().value);
      });
    }
  });
  /**
   * Generated event handler.
   */
  return ListExtReport;
});
//# sourceMappingURL=ListExtReport-dbg.controller.js.map
