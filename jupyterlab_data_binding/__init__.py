from ._version import version_info, __version__

from .input import *

def _jupyter_nbextension_paths():
    return [{
        'section': 'notebook',
        'src': 'static',
        'dest': 'jupyterlab-data-binding',
        'require': 'jupyterlab-data-binding/extension'
    }]
