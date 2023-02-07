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