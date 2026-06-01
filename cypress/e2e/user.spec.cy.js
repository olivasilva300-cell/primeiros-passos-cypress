import userData from '../fixtures/user-data.json'

describe ('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField:"[name='username']",
    passwordField:"[name='password']",
    loginButton:"[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashboardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert: "[role='alert']",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-inpuut--active",
    firstNameField: '[name="firstName"]',
    dateField: "[placeholder='yyyy-mm-dd']",
    dateCloseButton: ".--close"
  }

it.only('User Info Update - Success', () => {

cy.visit('/auth/login')
cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
cy.get(selectorsList.loginButton).click()
cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
cy.get(selectorsList.dashboardGrid)
cy.get(selectorsList.myInfoButton).click()
cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')  
cy.get(selectorsList.lastNameField).clear().type('LastNameTest')




})
it('Login - Fail', () => {
  cy.visit('/auth/login')
  cy.get(selectorsList.usernameField).type(userData.userFail.username)
  cy.get(selectorsList.passwordField).type(userData.userFail.password)
  cy.get(selectorsList.loginButton).click()
  cy.get(selectorsList.wrongCredentialAlert)
})
})