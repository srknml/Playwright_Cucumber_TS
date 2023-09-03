Feature: User Authentication tests


  Background: User on the page
    Given User on the login page
  @happy
  Scenario Outline: Login should be success
    Given User enters "<username>" and "<password>"
    And User clicks login button
    Then User should be logged in with "<username>"
    Examples:
      | username | password |
      | meja123  | Meja123. |

  @sad
  Scenario Outline: Login should be unsuccess
    Given User enters "<username>" and "<password>"
    And User clicks login button
    Then User should not be logged in with "<username>"
    Examples:
      | username    | password    |
      | meja123123  | Meja12313.  |
      | meja123s123 | Mejsa12313. |

# Scenario: Login should be success2
#   And User enter the username as "seko"
#   When xxxx
#   Then asda
