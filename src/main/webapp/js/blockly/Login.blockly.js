window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Login = window.blockly.js.blockly.Login || {};

/**
 * Descreva esta função...
 */
window.blockly.js.blockly.Login.FecharModalArgs = [];
window.blockly.js.blockly.Login.FecharModal = async function() {

  this.cronapi.screen.hideModal("modalCadastro");
}

/**
 * Login
 */
window.blockly.js.blockly.Login.AbrirModalCadastroArgs = [];
window.blockly.js.blockly.Login.AbrirModalCadastro = async function() {

  this.cronapi.screen.showModal("modalCadastro");
}
