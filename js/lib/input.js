var widgets = require('@jupyter-widgets/base');
var _ = require('lodash');


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
var InputModel = widgets.DOMWidgetModel.extend({
    defaults: _.extend(widgets.DOMWidgetModel.prototype.defaults(), {
        _model_name : 'InputModel',
        _view_name : 'InputView',
        _model_module : 'jupyterlab-data-binding',
        _view_module : 'jupyterlab-data-binding',
        _model_module_version : '0.1.0',
        _view_module_version : '0.1.0',
        value : 'Hello World'
    })
});


// Custom View. Renders the widget model.
var InputView = widgets.DOMWidgetView.extend({
    template: _.template('<input value="<%= value %>" />'),
    events: {
        input: "handleChange"
    },
    handleChange: function(e) {
        this.model.set({ value: e.target.value });
        this.touch();
    },
    updateView: function() {
        var value = this.model.get("value");
        this.$el.html(this.template({ value: value }));
        // re-focus input tricks
        var input = this.$('input')
        input.focus();
        input.val('')
        input.val(value);
    },
    render: function() {
        this.updateView();
        this.model.on('change:value', this.updateView, this);
    }
});


module.exports = {
    InputModel : InputModel,
    InputView : InputView
};
