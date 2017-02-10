module.exports = function() {
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


  this.Given(/^I am on the computer database site$/, function() {
browser.driver.get('http://computer-database.herokuapp.com/computers');
  });

  this.When(/^I create a new computer name$/, function(){
   browser.driver.findElement(by.id('add')).click(); //cick on the button Add a new computer
   browser.driver.findElement(by.id('name')).sendKeys('New computer name'); //enter a new computer name
   browser.driver.findElement(by.id('introduced')).sendKeys('1950-06-05'); //enter introduced date
   browser.driver.findElement(by.id('discontinued')).sendKeys('1985-02-10'); //enter discontinued date
   browser.driver.findElement(by.xpath('//*[@id="company"]/option[4]')).click(); //select company
   browser.driver.findElement(by.css('.btn')).click(); //click on the create this computer button
   browser.driver.findElement(by.css('.alert-message')).isDisplayed(); //alert message is shown that computer name is created
    });
  
  this.Then(/^the new computer name is shown in the overview$/, function(){
  	browser.driver.findElement(by.id('searchbox')).sendKeys('New computer name'); //search for the new created computer name
  	browser.driver.findElement(by.id('searchsubmit')).click(); //click on the Filter by name
  	expect(browser.driver.findElement(by.linkText('New computer name')).getText()).to.eventually.equal('New computer name');
});

};