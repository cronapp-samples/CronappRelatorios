window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Abastecimento = window.blockly.js.blockly.Abastecimento || {};

/**
 * Abastecimento
 */
window.blockly.js.blockly.Abastecimento.validarValorArgs = [];
window.blockly.js.blockly.Abastecimento.validarValor = async function() {
 var valid;
  if (this.cronapi.screen.getValueOfField("Abastecimento.active.valor") > 1000) {
    this.cronapi.screen.notify('error','Valor acima do limite!');
    valid = false;
  } else {
    valid = true;
  }
  return valid;
}

/**
 * Abastecimento
 */
window.blockly.js.blockly.Abastecimento.ConfirmarArgs = [];
window.blockly.js.blockly.Abastecimento.Confirmar = async function() {
 var valid;
  if (await this.blockly.js.blockly.Abastecimento.validarValor()) {
    this.cronapi.screen.post("Abastecimento");
  } else {
    this.cronapi.screen.notify('error','Dados inválidos');
  }
}
