'use strict';

describe('Register', () => {
    it('should should navigate to the register page', () => {
        browser.get('http://localhost:8000/#');

        $('#link-register').click();

        expect(browser.getCurrentUrl()).toBe('http://localhost:8000/#/register');
    });

    it('should register a random user', () => {
        let userName = `user${Math.floor(Math.random() * 3000000000)}`;
        $('#username').sendKeys(userName);
        $('#password').sendKeys('password');

        $('button[type=submit]').click();

        expect(browser.getCurrentUrl()).toBe(`http://localhost:8000/#/${userName}/recipes`);
    });
});
