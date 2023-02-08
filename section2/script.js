(() => {
  function CharacterCountdown(input, options) {
    this.input = input;
    this.input.on('keydown', (e) => {
      this.onKeydown(e);
    });
  }

  CharacterCountdown.prototype.onKeydown = function(e) {
    //
  };

  CharacterCountdown.prototype.onFieldChange = function(e) {
    const remaining = this.options.maxLength - this.field.val().length;
    this.status.html(this.options.message.replace(/%count%/, remaining));
  };
})();

(() => {
  function CheckboxCollapser(checkbox, toggleElement) {
    this.checkbox = checkbox;
    this.toggleElement = toggleElement;
    this.check();
    this.checkbox.on('click', (e) => {
      this.onCheckboxClick(e);
    });
  }

  CheckboxCollapser.prototype.onCheckboxClick = function(e) {
    this.check();
  }

  CheckboxCollapser.prototype.check = function() {
    if (this.checkbox.prop('checked')) {
      this.toggleElement.addClass('hidden');
    } else {
      this.toggleElement.removeClass('hidden');
    }
  }
})();