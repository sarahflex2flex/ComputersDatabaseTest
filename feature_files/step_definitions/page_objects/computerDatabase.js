module.exports = {
    newComputerButton: function() {
        return browser.driver.findElement(by.id('add'));
    },

    computerName: function() {
        return browser.driver.findElement(by.id('name'));
    },

    introducedDate: function() {
        return browser.driver.findElement(by.id('introduced'));
    },

    discontinuedDate: function() {
        return browser.driver.findElement(by.id('discontinued'));
    },

    selectCompany: function() {
        return browser.driver.findElement(by.xpath('//*[@id="company"]/option[4]'));
    },

    saveButton: function() {
        return browser.driver.findElement(by.css('.btn'));
    },

    alertMessage: function() {
        return browser.driver.findElement(by.css('.alert-message'));
    },

    searchBox: function() {
        return browser.driver.findElement(by.id('searchbox'));
    },

    searchButton: function() {
        return browser.driver.findElement(by.id('searchsubmit'));
    },

    deleteButton: function() {
        return browser.driver.findElement(by.css('.btn.danger'));
    },

    notice: function() {
        return browser.driver.findElement(by.css('.well'));
    },
   
};