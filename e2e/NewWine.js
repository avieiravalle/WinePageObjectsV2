const constants = require("../constants/constants")
const Wine = require('../page-objects/po-vinhos');


describe('Should create and delete Wine', () => {
    const wine = new Wine();

    beforeEach((
        ) => browser.get('/angular-cellar/#/wines')
    );

    it('Should Delete Wine', () => {
        const Welcome = $('#content');
        browser.sleep(2000);

        expect(Welcome.isPresent()).toBe(true);

     
        const BtnNewWine = element(by.buttonText('New Wine'));   
        const BtnDelete = element(by.buttonText('Delete'));
        const NomeDoVinho = $('[name="wine.name"]')
        const Uvas = $('[name="wine.grapes"]');
        const Pais = $('[name="wine.country"]');
        const Regiao = $('[name="wine.region"]');
        const Ano = $('[name="wine.year"]');

        BtnNewWine.click();
        browser.sleep(2000);
        expect(BtnDelete.isPresent()).toBeTruthy();

        NomeDoVinho.sendKeys(constants.Vinho);
        Uvas.sendKeys(constants.Uva);
        Pais.sendKeys(constants.Pais);
        Regiao.sendKeys(constants.Region);
        Ano.sendKeys(constants.Ano)

        BtnDelete.click();
        expect(Welcome.isPresent()).toBe(true);

    });

    it('Should create Wine', () => {
        const Welcome = $('#content');
        
        expect(Welcome.isPresent()).toBeTruthy();

        const BtnNewWine = element(by.buttonText('New Wine'));
        const BtnSave = element(by.buttonText('Save'));
        const NomeDoVinho = $('[name="wine.name"]')
        const Uvas = $('[name="wine.grapes"]');
        const Pais = $('[name="wine.country"]');
        const Regiao = $('[name="wine.region"]');
        const Ano = $('[name="wine.year"]');

        BtnNewWine.click();
        browser.sleep(2000);
    
        expect(BtnSave.isPresent()).toBeTruthy();

        NomeDoVinho.sendKeys(constants.Vinho);
        Uvas.sendKeys(constants.Uva);
        Pais.sendKeys(constants.Pais);
        Regiao.sendKeys(constants.Region);
        Ano.sendKeys(constants.Ano);

        BtnSave.click();
        expect(Welcome.isPresent()).toBeTruthy();


    });

})