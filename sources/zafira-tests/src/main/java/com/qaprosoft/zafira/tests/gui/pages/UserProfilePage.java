package com.qaprosoft.zafira.tests.gui.pages;

import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.qaprosoft.zafira.tests.gui.components.modals.UploadImageModalWindow;

public class UserProfilePage extends BasePage
{
	@FindBy(tagName = "md-dialog")
	private UploadImageModalWindow uploadImageModalWindow;

	@FindBy(xpath="//i[ancestor::header[@class='profile-header'] and contains(text(),'settings')]")
	private WebElement loadProfilePhotoHoverIcon;

	@FindBy(xpath="//div[@class='profile-img']")
	private WebElement loadProfilePhotoIcon;

	@FindBy(xpath="//input[@name='username']")
	private WebElement userNameInput;

	@FindBy(xpath="//input[@name='firstName']")
	private WebElement firstNameInput;

	@FindBy(xpath="//input[@name='lastName']")
	private WebElement lastNameInput;

	@FindBy(xpath="//input[@name='email']")
	private WebElement emailInput;

	@FindBy(xpath="//div[contains(text(),'ROLE_USER')]")
	private WebElement roleUserLabel;

	@FindBy(xpath="//div[contains(text(),'ROLE_ADMIN')]")
	private WebElement roleAdminLabel;

	@FindBy(xpath="//md-option[@value='General']")
	private WebElement generalBoardOption;

	@FindBy(xpath="//md-option[contains(@value,'Nightly')]")
	private WebElement nightlyBoardOption;

	@FindBy(xpath="//button[ancestor::form[@name='profile_form']]")
	private WebElement saveUserProfileButton;

	@FindBy(xpath="//body[contains(@class, 'zaf-light')]")
	private WebElement lightZafiraSchemaStyle;

	@FindBy(xpath="//body[contains(@class, 'zaf-dark')]")
	private WebElement darkZafiraSchemaStyle;

	@FindBy(xpath="//md-radio-button[@value=32]")
	private WebElement lightZafiraSchemaRadioButton;

	@FindBy(xpath="//md-radio-button[@value=22]")
	private WebElement darkZafiraSchemaRadioButton;

	@FindBy(xpath="//md-radio-button[@value=32 and contains(@class, 'md-checked')]")
	private WebElement lightZafiraSchemaRadioButtonChecked;

	@FindBy(xpath="//md-radio-button[@value=22 and contains(@class, 'md-checked')]")
	private WebElement darkZafiraSchemaRadioButtonChecked;

	@FindBy(xpath="//button[ancestor::form[@name='preference_form'] and contains(@class,'md-primary')]")
	private WebElement savePreferencesButton;

	@FindBy(xpath="//button[ancestor::form[@name='preference_form'] and contains(@class,'md-warn')]")
	private WebElement resetPreferencesButton;

	@FindBy(xpath="//md-select[ancestor::form[@name='preference_form'] and @name='defaultDashboard']")
	private WebElement defaultDashboardSelect;

	@FindBy(xpath="//md-select[ancestor::form[@name='preference_form'] and @name='refreshInterval']")
	private WebElement defaultRefreshIntervalSelect;

	@FindBy(id = "userPassword")
	private WebElement passwordInput;

	@FindBy(id = "userOldPassword")
	private WebElement oldPassword;

	@FindBy(xpath="//button[ancestor::form[@name='password_form']]")
	private WebElement changePasswordButton;

	@FindBy(xpath = "//button[ancestor::form[@name='access_token_form'] and @type='submit']")
	private WebElement generateTokenButton;

	@FindBy(xpath = "//button[ancestor::form[@name='access_token_form'] and @type='button']")
	private WebElement copyTokenButton;

	@FindBy(xpath = "//input[@name='accessToken']")
	private WebElement tokenInput;


	public enum ColorSchema {LIGHT, DARK}

	public UserProfilePage(WebDriver driver)
	{
		super(driver, "/users/profile");
	}

	public WebElement getGenerateTokenButton()
	{
		return generateTokenButton;
	}

	public WebElement getCopyTokenButton()
	{
		return copyTokenButton;
	}

	public WebElement getTokenInput()
	{
		return tokenInput;
	}

	public WebElement getLightZafiraSchemaStyle()
	{
		return lightZafiraSchemaStyle;
	}

	public WebElement getDarkZafiraSchemaStyle()
	{
		return darkZafiraSchemaStyle;
	}

	public WebElement getLightZafiraSchemaRadioButton()
	{
		return lightZafiraSchemaRadioButton;
	}

	public WebElement getDarkZafiraSchemaRadioButton()
	{
		return darkZafiraSchemaRadioButton;
	}

	public WebElement getLightZafiraSchemaRadioButtonChecked()
	{
		return lightZafiraSchemaRadioButtonChecked;
	}

	public WebElement getDarkZafiraSchemaRadioButtonChecked()
	{
		return darkZafiraSchemaRadioButtonChecked;
	}

	public WebElement getSavePreferencesButton() {
		return savePreferencesButton;
	}

	public WebElement getResetPreferencesButton() {
		return resetPreferencesButton;
	}

	public WebElement getDefaultDashboardSelect() {
		return defaultDashboardSelect;
	}

	public WebElement getDefaultRefreshIntervalSelect() {
		return defaultRefreshIntervalSelect;
	}

	public WebElement getPasswordInput() {
		return passwordInput;
	}

	public WebElement getOldPassword() {
		return oldPassword;
	}

	public WebElement getChangePasswordButton() {
		return changePasswordButton;
	}

	public WebElement getUserNameInput() {
		return userNameInput;
	}

	public WebElement getFirstNameInput() {
		return firstNameInput;
	}

	public WebElement getLastNameInput() {
		return lastNameInput;
	}

	public WebElement getEmailInput() {
		return emailInput;
	}

	public WebElement getRoleUserLabel() {
		return roleUserLabel;
	}

	public WebElement getRoleAdminLabel() {
		return roleAdminLabel;
	}

	public WebElement getSaveUserProfileButton() {
		return saveUserProfileButton;
	}

	public WebElement getGeneralBoardOption() {
		return generalBoardOption;
	}

	public WebElement getNightlyBoardOption() {
		return nightlyBoardOption;
	}

	public WebElement getLoadProfilePhotoHoverIcon()
	{
		return loadProfilePhotoHoverIcon;
	}

	public WebElement getLoadProfilePhotoIcon()
	{
		return loadProfilePhotoIcon;
	}

	public UploadImageModalWindow getUploadImageModalWindow()
	{
		return uploadImageModalWindow;
	}

	public List<WebElement> getDashboardSelectValues(){
		return driver.findElements(By.xpath("//md-option[contains(@ng-repeat,'dashboard')]"));
	}

}
