module.exports = function() {
var page = require(__dirname + '/page_objects/computerDatabase.js');

  this.Given(/^I go to the computers database site$/, function() {
browser.driver.get('http://computer-database.herokuapp.com/computers');
  });

  this.When(/^I create a new computer name$/, function(callback){
//   page.newComputerButton.click();
   browser.driver.find(By.id('add'))
    });

};
