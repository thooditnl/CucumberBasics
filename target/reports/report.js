$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("developer.feature");
formatter.feature({
  "line": 1,
  "name": "Life of IT Developer",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "id": "life-of-it-developer",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 7,
  "name": "I am a java developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-java-developer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I work in \"microsoft\"",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I meet \"bill gates\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I \"hesitate\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "he is a \"good\" person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "microsoft",
      "offset": 11
    }
  ],
  "location": "HolyDeveloper.i_work_in(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "bill gates",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.i_meet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "hesitate",
      "offset": 3
    }
  ],
  "location": "HolyDeveloper.i(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "good",
      "offset": 9
    }
  ],
  "location": "HolyDeveloper.he_is_a_person(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 13,
  "name": "I am a linux developer",
  "description": "",
  "id": "life-of-it-developer;i-am-a-linux-developer",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 14,
  "name": "I work in \"apple\"",
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I meet \"steve jobs\"",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"scream\"",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "he is a \"wise\" person",
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "apple",
      "offset": 11
    }
  ],
  "location": "HolyDeveloper.i_work_in(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "steve jobs",
      "offset": 8
    }
  ],
  "location": "HolyDeveloper.i_meet(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "scream",
      "offset": 3
    }
  ],
  "location": "HolyDeveloper.i(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "wise",
      "offset": 9
    }
  ],
  "location": "HolyDeveloper.he_is_a_person(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("tester.feature");
formatter.feature({
  "line": 1,
  "name": "Life of IT Tester",
  "description": "\r\nIn order to get good salary\r\nAs a IT guy\r\nI want to keep my boss happy",
  "id": "life-of-it-tester",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 8,
      "value": "#Give \"Scenario\"  word if you want to test one scenario only with out  \"Examples\""
    },
    {
      "line": 9,
      "value": "#Give \"Scenario Outline: \" word if you want to test multiple scenarios with \"Examples\""
    }
  ],
  "line": 10,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am a \"\u003cTesterType\u003e\" Tester",
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 12
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 13
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"\u003cwork_Output\u003e\" it",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "My boss \"\u003cboss_Action\u003e\" me",
  "rows": [
    {
      "cells": [
        "country"
      ],
      "line": 18
    },
    {
      "cells": [
        "India"
      ],
      "line": 19
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "The developer \"\u003cdeveloper_Reaction\u003e\" me",
  "keyword": "But "
});
formatter.examples({
  "comments": [
    {
      "line": 23,
      "value": "# The table must  have a header row corresponding to the variables  in the scenario Outline steps"
    },
    {
      "line": 24,
      "value": "# Data Driven Testing Using Examples Keyword"
    }
  ],
  "line": 25,
  "name": "",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;",
  "rows": [
    {
      "cells": [
        "TesterType",
        "work_Output",
        "boss_Action",
        "developer_Reaction"
      ],
      "line": 26,
      "id": "life-of-it-tester;i-am-a-tester;;1"
    },
    {
      "cells": [
        "Good",
        "Complete",
        "Salute",
        "hates"
      ],
      "line": 27,
      "id": "life-of-it-tester;i-am-a-tester;;2"
    },
    {
      "cells": [
        "bad",
        "Mess",
        "Fires",
        "Likes"
      ],
      "line": 28,
      "id": "life-of-it-tester;i-am-a-tester;;3"
    },
    {
      "cells": [
        "avg",
        "sufficient",
        "Congrats",
        "respects"
      ],
      "line": 29,
      "id": "life-of-it-tester;i-am-a-tester;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am a \"Good\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 12
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 13
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"Complete\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "My boss \"Salute\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "country"
      ],
      "line": 18
    },
    {
      "cells": [
        "India"
      ],
      "line": 19
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "The developer \"hates\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "Good",
      "offset": 8
    }
  ],
  "location": "HolyTester.i_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HolyTester.i_go_to_work()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Complete",
      "offset": 3
    }
  ],
  "location": "HolyTester.i_mess_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Salute",
      "offset": 9
    }
  ],
  "location": "HolyTester.my_boss_fire_me(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "hates",
      "offset": 15
    }
  ],
  "location": "HolyTester.the_developer_likes_me(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am a \"bad\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 12
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 13
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"Mess\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "My boss \"Fires\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "country"
      ],
      "line": 18
    },
    {
      "cells": [
        "India"
      ],
      "line": 19
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "The developer \"Likes\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "bad",
      "offset": 8
    }
  ],
  "location": "HolyTester.i_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HolyTester.i_go_to_work()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Mess",
      "offset": 3
    }
  ],
  "location": "HolyTester.i_mess_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fires",
      "offset": 9
    }
  ],
  "location": "HolyTester.my_boss_fire_me(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Likes",
      "offset": 15
    }
  ],
  "location": "HolyTester.the_developer_likes_me(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "I am a tester",
  "description": "",
  "id": "life-of-it-tester;i-am-a-tester;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 11,
  "name": "I am a \"avg\" Tester",
  "matchedColumns": [
    0
  ],
  "rows": [
    {
      "cells": [
        "industry",
        "country"
      ],
      "line": 12
    },
    {
      "cells": [
        "IT",
        "India"
      ],
      "line": 13
    },
    {
      "cells": [
        "Automobile",
        "Germany"
      ],
      "line": 14
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 15,
  "name": "I go to work",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "I \"sufficient\" it",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "My boss \"Congrats\" me",
  "matchedColumns": [
    2
  ],
  "rows": [
    {
      "cells": [
        "country"
      ],
      "line": 18
    },
    {
      "cells": [
        "India"
      ],
      "line": 19
    },
    {
      "cells": [
        "Germany"
      ],
      "line": 20
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "The developer \"respects\" me",
  "matchedColumns": [
    3
  ],
  "keyword": "But "
});
formatter.match({
  "arguments": [
    {
      "val": "avg",
      "offset": 8
    }
  ],
  "location": "HolyTester.i_am_a_bad_tester(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "HolyTester.i_go_to_work()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "sufficient",
      "offset": 3
    }
  ],
  "location": "HolyTester.i_mess_it(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Congrats",
      "offset": 9
    }
  ],
  "location": "HolyTester.my_boss_fire_me(String,DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "respects",
      "offset": 15
    }
  ],
  "location": "HolyTester.the_developer_likes_me(String)"
});
formatter.result({
  "status": "skipped"
});
});