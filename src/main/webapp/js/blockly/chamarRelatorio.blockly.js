window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.ChamarRelatorio = window.blockly.js.blockly.ChamarRelatorio || {};

/**
 * chamarRelatorio
 */
window.blockly.js.blockly.ChamarRelatorio.chamarRelatorioArgs = [];
window.blockly.js.blockly.ChamarRelatorio.chamarRelatorio = async function() {

  this.cronapi.util.openReport('reports/AbastecimentosSimples.report', []);
}
