export default class RegisterBox {
  constructor(target) {
    this.form = target.querySelector("form[id='form']");
    this.username = target.querySelector("input[id='username']");
    this.email = target.querySelector("input[id='email']");
    this.password = target.querySelector("input[id='password']");
    this.password2 = target.querySelector("input[id='password2']");

    // Event listeners
    this.form.addEventListener("submit", (e) => {
      e.preventDefault();

      this.checkRequired([
        this.username,
        this.email,
        this.password,
        this.password2,
      ]);
      this.checkLength(this.username, 3, 15);
      this.checkLength(this.password, 6, 25);
      this.checkEmail(this.email);
      this.checkPasswordsMatch(this.password, this.password2);
    });
  }

  showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = "form-control error";
    const small = formControl.querySelector("small");
    small.innerText = message;
  }

  // Show success outline
  showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
  }

  // Check email is valid
  checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
      this.showSuccess(input);
    } else {
      this.showError(input, "Email is not valid");
    }
  }

  // Check required fields
  checkRequired(inputArr) {
    inputArr.forEach((input) => {
      if (input.value.trim() === "") {
        this.showError(input, `${this.getFieldName(input)} is required`);
      } else {
        this.showSuccess(input);
      }
    });
  }

  // Check input length
  checkLength(input, min, max) {
    if (input.value.length < min) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be at least ${min} characters`
      );
    } else if (input.value.length > max) {
      this.showError(
        input,
        `${this.getFieldName(input)} must be less than ${max} characters`
      );
    } else {
      this.showSuccess(input);
    }
  }

  // Check passwords match
  checkPasswordsMatch(input1, input2) {
    if (input1.value !== input2.value) {
      this.showError(input2, "Passwords do not match");
    }
  }

  // Get fieldname
  getFieldName(input) {
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
  }
}
