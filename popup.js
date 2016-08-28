window.onload = function() {

  btnGoPlus.onclick = function() {
    var x = parseFloat(inptXplus.value);
    var y = parseFloat(inptYplus.value);
    var result = x+y;
    spnResultPlus.innerHTML = result;
  }

  btnGoMinus.onclick = function() {
    var x = parseFloat(inptXminus.value);
    var y = parseFloat(inptYminus.value);
    var result = x-y;
    spnResultMinus.innerHTML = result;
  }

  btnGoMulty.onclick = function() {
    var x = parseFloat(inptXmulty.value);
    var y = parseFloat(inptYmulty.value);
    var result = x*y;
    spnResultMulty.innerHTML = result;
  }

  btnGoDivide.onclick = function() {
    var x = parseFloat(inptXdivide.value);
    var y = parseFloat(inptYdivide.value);
    var result = x/y;
    spnResultDivide.innerHTML = result;
  }
}
