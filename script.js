var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for (var i = 0; i < names.length; i++) {
  var firstLetter = names[i].charAt(0).toLowerCase();
  if (firstLetter === 'j') {
    console.log("Hello " + names[i]);
    document.write("Hello " + names[i] +"<br>");
  } else {
    console.log("Goodbye " + names[i]);
    document.write("Goodbye " + names[i] +"<br>");

  }

}
