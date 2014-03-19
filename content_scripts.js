(function(){
  function getSelectedArea(obj) {
    var pos = new Object();

    pos.start = obj.selectionStart;
    pos.end = obj.selectionEnd;

    return pos;
  }

  function setValueTextBox(function_name, obj_name) {
    var target = document.getElementsByName(obj_name)[0];
    var pos = getSelectedArea(target);
    var textValue = target.value;
    var selectedTextValue = textValue.slice(pos.start, pos.end);
    var beforeTextValue = textValue.slice(0, pos.start);
    var afterTextValue = textValue.slice(pos.end);

    target.value = beforeTextValue + function_name + "(" + selectedTextValue + ")" + afterTextValue;

    return true;
  }

  setValueTextBox("var_dump", "code");
})();
