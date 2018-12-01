class Wine {
  constructor() {
    this.Ano = $('[name="wine.year"]');

    this.BtnDelete = element(by.buttonText('Delete'));
    this.BtnNewWine = element(by.buttonText('New Wine'));
    this.BtnSave = element(by.buttonText('Save'));
    
    this.NomeDoVinho = $('[name="wine.name"]');

    this.Pais = $('[name="wine.country"]');

    this.Regiao = $('[name="wine.region"]');

    this.Uvas = $('[name="wine.grapes"]');

    this.Welcome = $('#content');
  
  }
}

module.exports = Wine;