Feature: Search flights in kayak.com

  Scenario Outline: Search flight from origin to destination
    Given Go to kayak.com
    When User clicked on Flight Menu
    And User click on cross sign
    Then User enter "Origin_City", "Destination_City" , "Deapature_Date", "Return_Date"
    And User click search buton
    Then validate the search details same as first page
    Then close the browser

    Examples: 
      | Origin_City | Destination_City | Deapature_Date | Return_Date |
      | SFO         | New York         | 08/05/2020     | 09/20/2020  |
      | Los Angles  | California       | 08/05/2020     | 09/20/2020  |
      | California  | Navada           | 08/05/2020     | 09/20/2020  |
