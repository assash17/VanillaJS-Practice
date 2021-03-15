const result = {
  checkbox: {},
  radio: "",
  select: "",
  description: "",
  show() {
    const result = document.querySelector(".result");
    function getText(obj) {
      console.log(obj);
      let text = "";
      for (const key of Object.keys(obj)) {
        if (typeof obj[key] === "function") continue;
        if (typeof obj[key] === "object") {
          text += getText(obj[key]);
        } else {
          text += `${key}:${obj[key]}</br>`;
        }
      }
      return text;
    }
    result.innerHTML = getText(this);
  },
};

const fruitCheckbox = document.querySelector(".fruit");
const generRadio = document.querySelector(".gender");
const citySelect = document.querySelector(".city");
const descriptionTextArea = document.querySelector(".description");

fruitCheckbox.addEventListener("change", (e) => {
  console.log(e.target);
  if (e.target.checked) {
    result.checkbox[e.target.name] = e.target.value;
  } else {
    delete result.checkbox[e.target.name];
  }
  result.show();
});
generRadio.addEventListener("change", (e) => {
  console.log(e.target);
  result.radio = e.target.value;
  result.show();
});
citySelect.addEventListener("change", (e) => {
  console.log(e.target);
  result.select = e.target.selectedOptions[0].value;
  result.show();
});
descriptionTextArea.addEventListener("input", (e) => {
  console.log(e.target);
  result.description = e.target.value;
  result.show();
});

Array.from(fruitCheckbox.querySelectorAll("input[type=checkbox]")).forEach(
  (cb) => {
    if (cb.checked) {
      result.checkbox[cb.name] = cb.value;
    }
  }
);
Array.from(generRadio.querySelectorAll("input[type=radio]")).forEach((r) => {
  if (r.checked) {
    result.radio = r.value;
  }
});
result.select = citySelect.querySelector("select").selectedOptions[0].value;
result.description = descriptionTextArea.querySelector("textarea").value;
result.show();
