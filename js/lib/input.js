const widgets = require("@jupyter-widgets/base");
const _ = require("lodash");
const React = require("react");
const ReactDOM = require("react-dom");
const { Input, Icon } = require("antd");
require("antd/dist/antd.css");
const { useModel } = require("./hooks");

// Custom Model. Custom widgets models must at least provide default values
// for model attributes, including
//
//  - `_view_name`
//  - `_view_module`
//  - `_view_module_version`
//
//  - `_model_name`
//  - `_model_module`
//  - `_model_module_version`
//
//  when different from the base class.

// When serialiazing the entire widget state for embedding, only values that
// differ from the defaults will be specified.
const InputModel = widgets.DOMWidgetModel.extend({
  defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
    _model_name: "InputModel",
    _view_name: "InputView",
    _model_module: "jupyterlab-data-binding",
    _view_module: "jupyterlab-data-binding",
    _model_module_version: "0.1.0",
    _view_module_version: "0.1.0",
    value: "Hello World"
  })
});

// Custom View. Renders the widget model.
const InputView = widgets.DOMWidgetView.extend({
  initialize: function() {
    const backbone = this;
    function ReactInput() {
      const [value, setValue] = useModel(backbone, "value");
      return React.createElement(Input, {
        value,
        onChange: e => setValue(e.target.value),
        prefix: React.createElement(Icon, {
          type: "heart",
          style: { color: "rgba(0,0,0,.25)" }
        }),
        addonAfter: "Built with antd and ❤️"
      });
    }
    const $root = document.createElement("div");
    const App = React.createElement(ReactInput);
    ReactDOM.render(App, $root);
    backbone.el.append($root);
  }
});

module.exports = {
  InputModel: InputModel,
  InputView: InputView
};
