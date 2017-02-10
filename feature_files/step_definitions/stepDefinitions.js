module.exports = function() {
var page = require('./page_objects/computerDatabase.js');
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised);
var expect = chai.expect;


this.Given(/^I am on the computer database site$/, function() {
  	browser.driver.get('http://computer-database.herokuapp.com/computers');
  });

this.When(/^I create a new computer name$/, function(){
   	page.newComputerButton().click(); //cick on the button Add a new computer
   	page.computerName().sendKeys('New computer name'); //enter a new computer name
   	page.introducedDate().sendKeys('1950-06-05'); //enter introduced date
   	page.discontinuedDate().sendKeys('1985-02-10'); //enter discontinued date
   	page.selectCompany().click(); //select company
   	page.saveButton().click(); //click on the create this computer button
   	page.alertMessage().isDisplayed(); //alert message is displayed that computer name is created
   	expect(page.alertMessage().getText()).to.eventually.equal('Done! Computer New computer name has been created'); //check if the correct alert message is shown
});
  
this.Then(/^the new computer name is shown in the overview$/, function(){
  	page.searchBox().sendKeys('New computer name'); //search for the new created computer name
  	page.searchButton().click(); //click on the Filter by name
  	expect(browser.driver.findElement(by.linkText('New computer name')).getText()).to.eventually.equal('New computer name');

});

this.When(/^I open a computer record$/, function(){
	page.searchBox().sendKeys('New computer name'); //search for the record
	page.searchButton().click(); //click on the button Filter by name
	browser.driver.findElement(by.linkText('New computer name')).click();
});

this.Then(/^the record can be edited$/, function(){
	page.computerName().clear(); //clear the computer name field
	page.computerName().sendKeys('Edited computer name'); //edit the computer name
	page.introducedDate().clear(); //clear the introduced date field
	page.introducedDate().sendKeys('1980-09-12'); //Edit the introduced date
   	page.discontinuedDate().clear(); //clear the discontinued date field
   	page.discontinuedDate().sendKeys('2017-12-10'); //Edit the discontinued date
   	page.saveButton().click(); //Save the changes
   	page.alertMessage().isDisplayed(); //alert message is shown that computer name is edited
	expect(page.alertMessage().getText()).to.eventually.equal('Done! Computer Edited computer name has been updated'); //check if the correct alert message is shown
});

 this.Then(/^I delete a computer record$/, function(){
 	page.searchBox().sendKeys('Edited computer name'); //search for therecord
	page.searchButton().click(); //click on the button Filter by name
	browser.driver.findElement(by.linkText('Edited computer name')).click();
 	page.deleteButton().click(); //delete the record
 });
    	
 this.Then(/^the record is removed from the database$/, function(){
 	page.searchBox().sendKeys('New computer name'); //search for the record
	page.searchButton().click(); //click on the button Filter by name
	expect(page.notice().getText()).to.eventually.equal('Nothing to display');//message is shown that no record is found
 });
};