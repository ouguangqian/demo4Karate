$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("demo/demo.feature");
formatter.feature({
  "line": 1,
  "name": "Learn How to use Karate for testing.",
  "description": "",
  "id": "learn-how-to-use-karate-for-testing.",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Testing valid GET endpoint",
  "description": "",
  "id": "learn-how-to-use-karate-for-testing.;testing-valid-get-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "url \u0027http://localhost:8088/user/get\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "method GET",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "status 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://localhost:8088/user/get\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 404500745,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 343148402,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 395797,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Testing the exact response of a GET endpoint",
  "description": "",
  "id": "learn-how-to-use-karate-for-testing.;testing-the-exact-response-of-a-get-endpoint",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 11,
  "name": "url \u0027http://localhost:8088/user/get\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "method GET",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "match $ \u003d\u003d {id:\"1234\", name:\"John Smith\"}",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://localhost:8088/user/get\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 5526270,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 9828497,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 62389,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$",
      "offset": 6
    },
    {},
    {
      "val": "\u003d\u003d",
      "offset": 8
    },
    {
      "val": "{id:\"1234\", name:\"John Smith\"}",
      "offset": 11
    }
  ],
  "location": "StepDefs.matchEquals(String,String,String,String,String)"
});
formatter.result({
  "duration": 8041432,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Testing that GET response contains specific field",
  "description": "",
  "id": "learn-how-to-use-karate-for-testing.;testing-that-get-response-contains-specific-field",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "url \u0027http://localhost:8088/user/get\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "method GET",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "status 200",
  "keyword": "Then "
});
formatter.step({
  "line": 21,
  "name": "match $ contains {id:\"1234\"}",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://localhost:8088/user/get\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 5489181,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 8460823,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 70318,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {},
    {
      "val": "$",
      "offset": 6
    },
    {},
    {},
    {},
    {
      "val": " {id:\"1234\"}",
      "offset": 16
    }
  ],
  "location": "StepDefs.matchContains(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 436777,
  "status": "passed"
});
});