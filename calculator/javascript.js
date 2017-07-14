function myFunction() {
    var list = document.getElementById("myText1").value;
    var list1 = document.getElementById("myText2").value;
    var z = +list + +list1
  //  alert(z);
    document.getElementById("myText3").value=z;
}
