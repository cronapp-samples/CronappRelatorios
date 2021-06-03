window.blockly = window.blockly || {};
window.blockly.js = window.blockly.js || {};
window.blockly.js.blockly = window.blockly.js.blockly || {};
window.blockly.js.blockly.Posto = window.blockly.js.blockly.Posto || {};

/**
 * Posto
 */
window.blockly.js.blockly.Posto.ObterDadosCEPArgs = [];
window.blockly.js.blockly.Posto.ObterDadosCEP = async function() {
 var dadosCEP;
  this.cronapi.util.getURLFromOthers('GET', 'application/json', ['https://viacep.com.br/ws/',this.cronapi.screen.getValueOfField("Posto.active.cep"),'/json/'].join(''), null, null, async function(sender_dadosCEP) {
      dadosCEP = sender_dadosCEP;
    this.cronapi.screen.changeValueOfField("Posto.active.cidade", this.cronapi.object.getProperty(dadosCEP, 'logradouro'));
    this.cronapi.screen.changeValueOfField("Posto.active.endereco", this.cronapi.object.getProperty(dadosCEP, 'localidade'));
    this.cronapi.screen.changeValueOfField("Posto.active.uf", this.cronapi.object.getProperty(dadosCEP, 'uf'));
  }.bind(this), async function(sender_dadosCEP) {
      dadosCEP = sender_dadosCEP;
    this.cronapi.screen.notify('error','Não foi possível obter o CEP!');
  }.bind(this));
}
