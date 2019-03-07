import ipywidgets as widgets
from traitlets import Unicode

@widgets.register
class Input(widgets.DOMWidget):
    """An example widget."""
    _view_name = Unicode('InputView').tag(sync=True)
    _model_name = Unicode('InputModel').tag(sync=True)
    _view_module = Unicode('jupyterlab-data-binding').tag(sync=True)
    _model_module = Unicode('jupyterlab-data-binding').tag(sync=True)
    _view_module_version = Unicode('^0.1.0').tag(sync=True)
    _model_module_version = Unicode('^0.1.0').tag(sync=True)
    value = Unicode('Hello World').tag(sync=True)
