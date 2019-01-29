const constants = require("../constants/constants");
const Wine = require('../page-objects/po-vinhos');
const Helper = require("protractor-helper");

describe('Should create and delete Wine', () => {
    const wine = new Wine();

    beforeEach(() => browser.get('/angular-cellar/#/wines'));

    it('Should Delete Wine', () => {
        expect(wine.Welcome.isPresent()).toBe(true);

        Helper.clickWhenClickable(wine.BtnNewWine);
        Helper.waitForElementVisibility(wine.BtnDelete)

        Helper.fillFieldWithTextWhenVisible(wine.NomeDoVinho, constants.Vinho)
        wine.Uvas.sendKeys(constants.Uva);
        wine.Pais.sendKeys(constants.Pais);
        wine.Regiao.sendKeys(constants.Region);
        wine.Ano.sendKeys(constants.Ano)

        wine.BtnDelete.click();
        expect(wine.Welcome.isPresent()).toBe(true);

    });

    it('Should create Wine', () => {
        expect(wine.Welcome.isPresent()).toBeTruthy();

        wine.BtnNewWine.click();
        expect(wine.BtnSave.isPresent()).toBeTruthy();

        wine.NomeDoVinho.sendKeys(constants.Vinho);
        wine.Uvas.sendKeys(constants.Uva);
        wine.Pais.sendKeys(constants.Pais);
        wine.Regiao.sendKeys(constants.Region);
        wine.Ano.sendKeys(constants.Ano);

        wine.BtnSave.click();
        expect(wine.Welcome.isPresent()).toBeTruthy();
    });

})