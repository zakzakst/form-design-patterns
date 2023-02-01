(() => {
  function PasswordReveal(input) {
    this.input = input;
    this.createButton();
  }

  PasswordReveal.prototype.createButton = function() {
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.textContent = 'パスワードを表示する';
    this.button.setAttribute('aria-pressed', false);

    const parent = this.input.parentNode;
    parent.appendChild(this.button);
    this.button.addEventListener('click', () => {
      this.onButtonClick();
    });
  }

  PasswordReveal.prototype.onButtonClick = function() {
    if (this.input.type === 'password') {
      this.input.type = 'text';
      // this.button.textContent = '隠す';
      this.button.setAttribute('aria-pressed', true);
    } else {
      this.input.type = 'password';
      // this.button.textContent = '表示する';
      this.button.setAttribute('aria-pressed', false);
    }
  }

  new PasswordReveal(document.querySelector('#password'));
})();

(() => {
  function FormValidator(form) {
    this.form = form;
    this.form.addEventListener('submit', (e) => {
      this.onSubmit(e);
    });
  }

  FormValidator.prototype.onSubmit = function(e) {
    e.preventDefault();
    if (!this.form.checkValidity()) {
      console.log('エラーあり');
      // document.title = `(${this.error.length}件のエラー)${document.title}`;
    } else {
      console.log('エラーなし');
    }
  }

  new FormValidator(document.querySelector('form'));
})();