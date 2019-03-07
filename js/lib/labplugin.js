var jupyterlabDataBinding = require('./index');
var base = require('@jupyter-widgets/base');

module.exports = {
  id: 'jupyterlab-data-binding',
  requires: [base.IJupyterWidgetRegistry],
  activate: function(app, widgets) {
      widgets.registerWidget({
          name: 'jupyterlab-data-binding',
          version: jupyterlabDataBinding.version,
          exports: jupyterlabDataBinding
      });
  },
  autoStart: true
};

