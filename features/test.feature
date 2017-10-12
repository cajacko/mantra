Feature: Test feature for something
  Background:
    Given a background condition
    When I do a background action

  Scenario: The first scenario to test
    When I do an action in the scenario
    Then I see the intended result

  Scenario: Testing an animation or something that can't be done automatically
    Given I am on the animation page
    When I click on the animation
    Then I see the animation run
    And it is not jerky
