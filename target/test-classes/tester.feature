Feature: Life of IT Tester

  In order to get good salary
  As a IT guy
  I want to keep my boss happy


#Give "Scenario"  word if you want to test one scenario only with out  "Examples"
#Give "Scenario Outline: " word if you want to test multiple scenarios with "Examples"
  Scenario Outline: I am a tester
    Given I am a "<TesterType>" Tester
    | industry  | country |
    | IT        |  India  |
    |Automobile | Germany |
    When I go to work
    Then I "<work_Output>" it
    And My boss "<boss_Action>" me
    | country |
    | India   |
    | Germany |
    But The developer "<developer_Reaction>" me

# The table must  have a header row corresponding to the variables  in the scenario Outline steps
# Data Driven Testing Using Examples Keyword
Examples:
  | TesterType | work_Output | boss_Action | developer_Reaction |
  | Good       | Complete    | Salute      | hates              |
  | bad        | Mess        | Fires       | Likes              |
  | avg        | sufficient  | Congrats    | respects           |

#    @goodtester
#    Scenario: I am a good tester
#      Given I am a "good" Tester
#      When I go to work
#      Then I "complete" it
#      And My boss "salutes" me
#      But The developer "hates" me