Feature: Logout
  # Bug - https://trello.com/c/tcTcnpsg
  @trello_tcTcnpsg
  Scenario: Logging out, and then logging in to a new account, does not pull accross data from the 1st account
    Given account "x" exists
    And account "x" has "3" mantra items
    And account "x" is logged in
    And account "Y" exists
    And account "y" has "0" mantra items
    And the application is actively syncing
    When I logout
    And I login to account "y"
    And the application "successfully" finishes syncing
    Then account "y" has "0" mantra items
