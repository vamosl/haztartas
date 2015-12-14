'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('App', function() {

    it('should navigate to #/expense', function () {
        browser.get('/');
        element(by.xpath('/html/body/section/md-sidenav/md-content/md-menu-content/md-menu-item[1]/a')).click()
        .then(function () {
            browser.getLocationAbsUrl().then(function (url) {
                expect(url).toEqual('/expense');
            });

        })     
    });

    describe('Chips', function () {
        it('should search brokkoli chips', function () {
            var input = element(by.xpath('//*[@id="input-0"]'));
            input.sendKeys('Broccoli')
        });

    });

});