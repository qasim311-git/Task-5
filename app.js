// Task 05: one example for each property used to get values from HTML.
// Results are written with textContent so markup is shown as text, not run.

function show(outputId, text) {
  document.getElementById(outputId).textContent = text;
}

// 1. .value  (input, textarea, select)
document.getElementById("btnValue").addEventListener("click", function () {
  const name = document.getElementById("nameInput").value;
  const note = document.getElementById("noteInput").value;
  show("outValue", "Name: " + name + "\nNote: " + note);
});

// 2. .innerText  (visible text only)
document.getElementById("btnInnerText").addEventListener("click", function () {
  const text = document.getElementById("textDemo1").innerText;
  show("outInnerText", text);
});

// 3. .textContent  (all text, including hidden)
document.getElementById("btnTextContent").addEventListener("click", function () {
  const text = document.getElementById("textDemo2").textContent;
  show("outTextContent", text);
});

// 4. .innerHTML  (markup inside the element)
document.getElementById("btnInnerHTML").addEventListener("click", function () {
  const html = document.getElementById("htmlBox").innerHTML;
  show("outInnerHTML", html);
});

// 5. .outerHTML  (the element itself plus its markup)
document.getElementById("btnOuterHTML").addEventListener("click", function () {
  const html = document.getElementById("outerBox").outerHTML;
  show("outOuterHTML", html);
});

// 6. .checked  (checkbox and radio buttons)
document.getElementById("btnChecked").addEventListener("click", function () {
  const agreed = document.getElementById("agreeBox").checked;
  const chosen = document.querySelector('input[name="lang"]:checked');
  const langText = chosen ? chosen.value : "none selected";
  show("outChecked", "Checkbox checked: " + agreed + "\nRadio chosen: " + langText);
});

// 7. .selectedIndex  (dropdown)
document.getElementById("btnSelectedIndex").addEventListener("click", function () {
  const select = document.getElementById("citySelect");
  const index = select.selectedIndex;
  show(
    "outSelectedIndex",
    "selectedIndex: " + index + "\nSelected text: " + select.options[index].text
  );
});

// 8. .files  (file input)
document.getElementById("btnFiles").addEventListener("click", function () {
  const files = document.getElementById("fileInput").files;
  if (files.length === 0) {
    show("outFiles", "No file selected.");
    return;
  }
  let lines = ["Files selected: " + files.length];
  for (let i = 0; i < files.length; i++) {
    const f = files[i];
    lines.push(
      (i + 1) + ". " + f.name + " | " + f.type + " | " + f.size + " bytes"
    );
  }
  show("outFiles", lines.join("\n"));
});

// 9. .className  (class attribute as a string)
document.getElementById("btnClassName").addEventListener("click", function () {
  const cls = document.getElementById("classDemo").className;
  show("outClassName", "className: " + cls);
});

// 10. .id  (element id)
document.getElementById("btnId").addEventListener("click", function () {
  const id = document.getElementById("uniqueParagraph").id;
  show("outId", "id: " + id);
});

// 11. .attributes  (all attributes of an element)
document.getElementById("btnAttributes").addEventListener("click", function () {
  const attrs = document.getElementById("linkDemo").attributes;
  let lines = ["Number of attributes: " + attrs.length];
  for (let i = 0; i < attrs.length; i++) {
    lines.push(attrs[i].name + " = " + attrs[i].value);
  }
  show("outAttributes", lines.join("\n"));
});