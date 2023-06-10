* Make sure you ran `qroma protobuf :my-qroma-project`
* Run `poetry init` in Python project directory
* Add/install py-qroma dependency: `poetry add git+https://github.com/qromatech/py-qroma`
* Set your COM Port accordingly in `settings.py`
* `poetry run python py_qroma_monitor.py`
  * demonstrate control by changing message sent when calling `create_hello_qroma_message()` 
* `poetry run python py_qroma_control.py`