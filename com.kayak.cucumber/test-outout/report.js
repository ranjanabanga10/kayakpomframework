$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/ranjanabanga/git/repository/com.kayak.cucumber/src/test/resources/Features/kayak.feature");
formatter.feature({
  "line": 1,
  "name": "Search flights in kayak.com",
  "description": "",
  "id": "search-flights-in-kayak.com",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to kayak.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on Flight Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on cross sign",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter \"Origin_City\", \"Destination_City\" , \"Deapature_Date\", \"Return_Date\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate the search details same as first page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 12,
  "name": "",
  "description": "",
  "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;",
  "rows": [
    {
      "cells": [
        "Origin_City",
        "Destination_City",
        "Deapature_Date",
        "Return_Date"
      ],
      "line": 13,
      "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;1"
    },
    {
      "cells": [
        "SFO",
        "New York",
        "08/05/2020",
        "09/20/2020"
      ],
      "line": 14,
      "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;2"
    },
    {
      "cells": [
        "Los Angles",
        "California",
        "08/05/2020",
        "09/20/2020"
      ],
      "line": 15,
      "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;3"
    },
    {
      "cells": [
        "California",
        "Navada",
        "08/05/2020",
        "09/20/2020"
      ],
      "line": 16,
      "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 14,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to kayak.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on Flight Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on cross sign",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter \"Origin_City\", \"Destination_City\" , \"Deapature_Date\", \"Return_Date\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate the search details same as first page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "kayakStepDefination.go_to_kayak_com()"
});
formatter.result({
  "duration": 21148300760,
  "status": "passed"
});
formatter.match({
  "location": "kayakStepDefination.user_clicked_on_Flight_Menu()"
});
formatter.result({
  "duration": 30416822545,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//ul[@class\u003d\u0027keel-grid _jrD _jrE _joN _joO\u0027]//li/descendant::a[@id\u003d\u0027ZM4h\u0027]\"}\n  (Session info: chrome\u003d84.0.4147.89)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranjanabangas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zt/y0dj4hkn5jz...}, goog:chromeOptions: {debuggerAddress: localhost:58047}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3118022f4bab9032d7da130cbe86d3de\n*** Element info: {Using\u003dxpath, value\u003d//ul[@class\u003d\u0027keel-grid _jrD _jrE _joN _joO\u0027]//li/descendant::a[@id\u003d\u0027ZM4h\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy16.click(Unknown Source)\n\tat com.kayak.qa.pages.kayakSearchPage.clickFlight(kayakSearchPage.java:58)\n\tat StepDefination.kayakStepDefination.user_clicked_on_Flight_Menu(kayakStepDefination.java:25)\n\tat ✽.When User clicked on Flight Menu(/Users/ranjanabanga/git/repository/com.kayak.cucumber/src/test/resources/Features/kayak.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "kayakStepDefination.user_click_on_cross_sign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Origin_City",
      "offset": 12
    },
    {
      "val": "Destination_City",
      "offset": 27
    },
    {
      "val": "Deapature_Date",
      "offset": 48
    },
    {
      "val": "Return_Date",
      "offset": 66
    }
  ],
  "location": "kayakStepDefination.user_enter(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.user_click_search_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.validate_the_search_details_same_as_first_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 15,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to kayak.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on Flight Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on cross sign",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter \"Origin_City\", \"Destination_City\" , \"Deapature_Date\", \"Return_Date\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate the search details same as first page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "kayakStepDefination.go_to_kayak_com()"
});
formatter.result({
  "duration": 39314095583,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 19.035\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranjanabangas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zt/y0dj4hkn5jz...}, goog:chromeOptions: {debuggerAddress: localhost:58271}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 75f3b13a76b2159ac7cedde839a4386b\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.kayak.qa.util.TestBase.initialization(TestBase.java:48)\n\tat StepDefination.kayakStepDefination.go_to_kayak_com(kayakStepDefination.java:19)\n\tat ✽.Given Go to kayak.com(/Users/ranjanabanga/git/repository/com.kayak.cucumber/src/test/resources/Features/kayak.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "kayakStepDefination.user_clicked_on_Flight_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.user_click_on_cross_sign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Origin_City",
      "offset": 12
    },
    {
      "val": "Destination_City",
      "offset": 27
    },
    {
      "val": "Deapature_Date",
      "offset": 48
    },
    {
      "val": "Return_Date",
      "offset": 66
    }
  ],
  "location": "kayakStepDefination.user_enter(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.user_click_search_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.validate_the_search_details_same_as_first_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 16,
  "name": "Search flight from origin to destination",
  "description": "",
  "id": "search-flights-in-kayak.com;search-flight-from-origin-to-destination;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "Go to kayak.com",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User clicked on Flight Menu",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User click on cross sign",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User enter \"Origin_City\", \"Destination_City\" , \"Deapature_Date\", \"Return_Date\"",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "User click search buton",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "validate the search details same as first page",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "kayakStepDefination.go_to_kayak_com()"
});
formatter.result({
  "duration": 117025208501,
  "error_message": "org.openqa.selenium.TimeoutException: timeout: Timed out receiving message from renderer: 15.529\n  (Session info: chrome\u003d84.0.4147.89)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ranjanabangas-MacBook-Pro.local\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.6\u0027, java.version: \u00271.8.0_221\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 84.0.4147.89, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zt/y0dj4hkn5jz...}, goog:chromeOptions: {debuggerAddress: localhost:58695}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c29de7f5bd39adb4fc5d6bb0a15820a0\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat com.kayak.qa.util.TestBase.initialization(TestBase.java:48)\n\tat StepDefination.kayakStepDefination.go_to_kayak_com(kayakStepDefination.java:19)\n\tat ✽.Given Go to kayak.com(/Users/ranjanabanga/git/repository/com.kayak.cucumber/src/test/resources/Features/kayak.feature:4)\n",
  "status": "failed"
});
formatter.match({
  "location": "kayakStepDefination.user_clicked_on_Flight_Menu()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.user_click_on_cross_sign()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Origin_City",
      "offset": 12
    },
    {
      "val": "Destination_City",
      "offset": 27
    },
    {
      "val": "Deapature_Date",
      "offset": 48
    },
    {
      "val": "Return_Date",
      "offset": 66
    }
  ],
  "location": "kayakStepDefination.user_enter(String,String,String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.user_click_search_buton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.validate_the_search_details_same_as_first_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "kayakStepDefination.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});