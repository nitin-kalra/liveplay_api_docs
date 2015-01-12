define({ api: [
  {
    "type": "post",
    "url": "/deviceToken",
    "title": "        Device Token",
    "name": "deviceToken_(POST)",
    "description": "Register a device token with the server for push notifications",
    "group": "API_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceID",
            "optional": false,
            "description": "Device identification"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fbID",
            "optional": false,
            "description": "Facebook ID of user (if available)"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "Push notification token"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceType",
            "optional": false,
            "description": "iOS / Android"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "result",
            "optional": false,
            "description": "OK"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    }, 
    "filename": "./server.js"
  },
  {
    "type": "get",
    "url": "/gamelist",
    "title": "            Game List",
    "name": "gamelist_(GET)",
    "description": "Retrieve the list of scheduled games. Only changes in schedule since the lastUpdate timestamp are sent",
    "group": "API_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "lastUpdate",
            "optional": false,
            "description": "Timestamp of last update"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "country1",
            "optional": false,
            "description": "Name of first country"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "countryAbbr1",
            "optional": false,
            "description": "Abbreviation of first country"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "country2",
            "optional": false,
            "description": "Name of second country"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "countryAbbr2",
            "optional": false,
            "description": "Abbreviation of second country"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "dateTime",
            "optional": false,
            "description": "Scheduled start time of match"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "matchType",
            "optional": false,
            "description": "e.g. Group A Match, Semi-Final, etc"
          },
          {
            "group": "Success 200",
            "type": "String",
            "field": "lastUpdate",
            "optional": false,
            "description": "Timestamp"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "post",
    "url": "/login",
    "title": "              Login",
    "name": "login_(POST)",
    "description": "Inform server of facebook id after login on device",
    "group": "API_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceID",
            "optional": false,
            "description": "Device identification"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fbID",
            "optional": false,
            "description": "Facebook ID of user"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Name of user as displayed on facebook"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Integer",
            "field": "isNew",
            "optional": false,
            "description": "1 if new / 0 if existing"
          },
          {
            "group": "Success 200",
            "type": "TBD",
            "field": "TBD",
            "optional": false,
            "description": "Other parameters to be determined at a later time"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "get",
    "url": "/leaderboard",
    "title": "        Leader Board",
    "name": "leaderboardToken_(POST)",
    "description": "Get data for leaderboard",
    "group": "API_Server",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "leaderBoard",
            "optional": false,
            "description": "Return array of JSONObject with following parameter" 
          }
        ],
        "leaderboard": [
          {
            "group": "leaderboard",
            "type": "String",
            "field": "fbId",
            "optional": false,
            "description": "" 
          },
          {
            "group": "leaderboard",
            "type": "Integer",
            "field": "currentScore",
            "optional": false,
            "description": "" 
          },
          {
            "group": "leaderboard",
            "type": "Integer",
            "field": "currentRank",
            "optional": false,
            "description": "" 
          },
          {
            "group": "leaderboard",
            "type": "Integer",
            "field": "previousRank",
            "optional": false,
            "description": "" 
          },
          {
            "group": "leaderboard",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "" 
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "post",
    "url": "/friendsScore",
    "title": "        Friends Score",
    "name": "friendsScore_(POST)",
    "description": "Send FBIDs to get friend score",
    "group": "API_Server",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "fbIds",
            "optional": false,
            "description": "Comma Seprated FB IDS" 
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "friendsScore",
            "optional": false,
            "description": "JSONObject of friend's score." 
          }
        ],
        "friendsScore": [
          {
            "group": "friendsScore",
            "type": "String",
            "field": "fbId",
            "optional": false,
            "description": "Id of user" 
          },
          {
            "group": "friendsScore",
            "type": "Integer",
            "field": "currentScore",
            "optional": false,
            "description": "Current Score of User" 
          },
          {
            "group": "friendsScore",
            "type": "Integer",
            "field": "previousScore",
            "optional": false,
            "description": "Prev. Score of User" 
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "post",
    "url": "/gameReciept",
    "title": "        Game Reciept",
    "name": "GameReceipt_(POST)",
    "description": "Get game receipt",
    "group": "API_Server",
    "version": "1.0.0",
    "success": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "gameId",
            "optional": false,
            "description": "Id of the game" 
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fbId",
            "optional": false,
            "description": "FB Id of the user" 
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "friendsList",
            "optional": false,
            "description": "Ids of the fb friends" 
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONObject",
            "field": "top3",
            "optional": false,
            "description": "JSONObject of top3 rank users." 
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "field": "user",
            "optional": false,
            "description": "JSONObject contains allgamesdata, gamedata objects " 
          },
          {
            "group": "Success 200",
            "type": "JSONObject",
            "field": "friendsScore",
            "optional": false,
            "description": "JSONObject contains friends score informations." 
          }
        ],
        "top3": [
          {
            "group": "top3",
            "type": "string",
            "field": "fbId",
            "optional": false,
            "description": "Id of the user" 
          },
          {
            "group": "top3",
            "type": "Integer",
            "field": "gameScore",
            "optional": false,
            "description": "Score of the users" 
          },
          {
            "group": "top3",
            "type": "String",
            "field": "name",
            "optional": false,
            "description": "Name of the users" 
          },
          {
            "group": "top3",
            "type": "Integer",
            "field": "rank",
            "optional": false,
            "description": "Rank of the user" 
          }
        ],
        "allGamesData": [
          {
            "group": "allGamesData",
            "type": "Integer",
            "field": "currentRank",
            "optional": false,
            "description": "Current Rank of User" 
          },
          {
            "group": "allGamesData",
            "type": "Integer",
            "field": "currentScore",
            "optional": false,
            "description": "Current Score of the users" 
          },
          {
            "group": "allGamesData",
            "type": "Integer",
            "field": "previousRank",
            "optional": false,
            "description": "PreviousRank of User" 
          }
        ],
        "gamesData": [
          {
            "group": "gamesData",
            "type": "Integer",
            "field": "gameRank",
            "optional": false,
            "description": "Game Rank of User" 
          },
          {
            "group": "gamesData",
            "type": "Integer",
            "field": "gameScore",
            "optional": false,
            "description": "Game Score of the users" 
          }
        ],
        "friendsScore": [
          {
            "group": "friendsScore",
            "type": "Integer",
            "field": "currentScore",
            "optional": false,
            "description": "Score of Friends" 
          },
          {
            "group": "friendsScore",
            "type": "Integer",
            "field": "fbId",
            "optional": false,
            "description": "Id of the user" 
          },
          {
            "group": "previousScore",
            "type": "Integer",
            "field": "previousScore",
            "optional": false,
            "description": "Previous Score of Friends" 
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "socket/post",
    "url": "getUpdates",
    "title": "       Get Updates",
    "name": "getUpdates_(SOCKET)",
    "description": "Get all updates after specified time. APP TO GAME SERVER",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "DataObject": [
          {
            "group": "DataObject",
            "type": "String",
            "field": "lastUpdatedTime",
            "optional": false,
            "description": "Unix timestamp of the time since last update"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeStamp",
            "optional": false,
            "description": "Current Unix timestamp"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "JSONArray",
            "field": "messages",
            "optional": false,
            "description": "A sequence (or array?) of socket messages for newQuestion, newAnswer and scoreUpdate types"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "String",
            "field": "error",
            "optional": false,
            "description": "Error Message"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "socket",
    "url": "newQuestion",
    "title": "       New Question",
    "name": "newQuestion_(SOCKET)",
    "description": "New question posted on server. GAME SERVER BROADCAST",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "DataObject": [
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionId",
            "optional": false,
            "description": "Question Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "gameId",
            "optional": false,
            "description": "Game Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionText",
            "optional": false,
            "description": "Question Text"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeToAnswer",
            "optional": false,
            "description": "Amount of time provided for answering question"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "correctAnswer",
            "optional": false,
            "description": "Correct answer id if known, 0 otherwise"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionTime",
            "optional": false,
            "description": "Unix timestamp of the time at which question was posted"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "score",
            "optional": false,
            "description": "Score at the time of the question"
          },
          {
            "group": "DataObject",
            "type": "JSONArray",
            "field": "answers",
            "optional": false,
            "description": "Array of Answer Objects"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeStamp",
            "optional": false,
            "description": "Current Unix timestamp"
          }
        ],
        "AnswerObject": [
          {
            "group": "AnswerObject",
            "type": "String",
            "field": "answersId",
            "optional": false,
            "description": "Answer Identifier"
          },
          {
            "group": "AnswerObject",
            "type": "String",
            "field": "answersText",
            "optional": false,
            "description": "Answer Text"
          },
          {
            "group": "AnswerObject",
            "type": "Integer",
            "field": "points",
            "optional": false,
            "description": "Points for answer choice"
          }
        ]
      }
    },
    "filename": "./server.js"
  },

  {
    "type": "post",
    "url": "deviceTokenOnLetsPay",
    "title": "       DeviceToken On LetsPlay",
    "name": "deviceTokenOnLetsPay_(SOCKET)",
    "description": "Send device token on let play",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "deviceToken",
            "optional": false,
            "description": "DeviceToken Object containing method parameters"
          }
        ],
        "deviceToken": [
          {
            "group": "deviceToken",
            "type": "String",
            "field": "deviceType",
            "optional": false,
            "description": "ios or android"
          },
          {
            "group": "deviceToken",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "Token of devices"
          }
        ]
      }
    },
    "filename": "./server.js"
  },


  {
    "type": "socket/post",
    "url": "newAnswer",
    "title": "         New Answer",
    "name": "newAnswer_(SOCKET)",
    "description": "New answer posted on server. GAME SERVER BROADCAST",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "DataObject": [
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionId",
            "optional": false,
            "description": "Question Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "gameId",
            "optional": false,
            "description": "Game Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "answerId",
            "optional": false,
            "description": "Correct Answer Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeStamp",
            "optional": false,
            "description": "Current Unix timestamp"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
   {
    "type": "socket",
    "url": "liveScore",
    "title": "       Live Score",
    "name": "newLiveScore_(SOCKET)",
    "description": "GAME SERVER BROADCAST",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "Data Object": [
          {
            "group": "Data Object",
            "type": "String",
            "field": "gameID",
            "optional": false,
            "description": "Id of the game."
          },
          {
            "group": "Data Object",
            "type": "JSONObject",
            "field": "country1",
            "optional": false,
            "description": "Country1 object containg the data for country1"
          },
          {
            "group": "Data Object",
            "type": "JSONObject",
            "field": "country2",
            "optional": false,
            "description": "Country2 object containg the data for country2"
          }
        ],
        "Country1 Object": [
          {
            "group": "Country1 Object",
            "type": "String",
            "field": "abbr",
            "optional": false,
            "description": "Abbreviation of the country"
          },
          {
            "group": "Country1 Object",
            "type": "Integer",
            "field": "battingStatus",
            "optional": false,
            "description": "Batting status of country"
          },
          {
            "group": "Country1 Object",
            "type": "String",
            "field": "runs",
            "optional": false,
            "description": "Score of country"
          },
          {
            "group": "Country1 Object",
            "type": "Integer",
            "field": "wickets",
            "optional": false,
            "description": "Wickets of country"
          },
          {
            "group": "Country1 Object",
            "type": "Integer",
            "field": "overs",
            "optional": false,
            "description": "Over of country"
          }
        ],
        "Country2 Object": [
          {
            "group": "Country2 Object",
            "type": "String",
            "field": "abbr",
            "optional": false,
            "description": "Abbreviation of the country"
          },
          {
            "group": "Country2 Object",
            "type": "Integer",
            "field": "battingStatus",
            "optional": false,
            "description": "Batting status of country"
          },
          {
            "group": "Country2 Object",
            "type": "String",
            "field": "runs",
            "optional": false,
            "description": "Score of country"
          },
          {
            "group": "Country2 Object",
            "type": "Integer",
            "field": "wickets",
            "optional": false,
            "description": "Wickets of country"
          },
          {
            "group": "Country2 Object",
            "type": "Integer",
            "field": "overs",
            "optional": false,
            "description": "Over of country"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "socket",
    "url": "newQuestion",
    "title": "       New Question",
    "name": "newQuestion_(SOCKET)",
    "description": "New question posted on server. GAME SERVER BROADCAST",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "DataObject": [
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionId",
            "optional": false,
            "description": "Question Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "gameId",
            "optional": false,
            "description": "Game Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionText",
            "optional": false,
            "description": "Question Text"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeToAnswer",
            "optional": false,
            "description": "Amount of time provided for answering question"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "correctAnswer",
            "optional": false,
            "description": "Correct answer id if known, 0 otherwise"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionTime",
            "optional": false,
            "description": "Unix timestamp of the time at which question was posted"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "score",
            "optional": false,
            "description": "Score at the time of the question"
          },
          {
            "group": "DataObject",
            "type": "JSONArray",
            "field": "answers",
            "optional": false,
            "description": "Array of Answer Objects"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeStamp",
            "optional": false,
            "description": "Current Unix timestamp"
          }
        ],
        "AnswerObject": [
          {
            "group": "AnswerObject",
            "type": "String",
            "field": "answersId",
            "optional": false,
            "description": "Answer Identifier"
          },
          {
            "group": "AnswerObject",
            "type": "String",
            "field": "answersText",
            "optional": false,
            "description": "Answer Text"
          },
          {
            "group": "AnswerObject",
            "type": "Integer",
            "field": "points",
            "optional": false,
            "description": "Points for answer choice"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "socket",
    "url": "invalidateQuestion",
    "title": "       Invalidate Question",
    "name": "invalidateQuestion_(SOCKET)",
    "description": "Question Invalid. GAME SERVER BROADCAST",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "DataObject": [
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionId",
            "optional": false,
            "description": "Question Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "gameId",
            "optional": false,
            "description": "Game Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "status",
            "optional": false,
            "description": "Question Status. It always come -1"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "socket/post",
    "url": "userAnswer",
    "title": "        User Answer",
    "name": "userAnswer_(SOCKET)",
    "description": "Submit a user answer to the server. APP TO GAME SERVER",
    "group": "Game_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "method",
            "optional": false,
            "description": "Name of method as defined above"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "hash",
            "optional": false,
            "description": "MD5 Hash of data"
          },
          {
            "group": "Parameter",
            "type": "JSONObject",
            "field": "data",
            "optional": false,
            "description": "Data Object containing method parameters"
          }
        ],
        "DataObject": [
          {
            "group": "DataObject",
            "type": "String",
            "field": "questionId",
            "optional": false,
            "description": "Question Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "answerId",
            "optional": false,
            "description": "Game Identifier"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "fbId",
            "optional": false,
            "description": "Question Text"
          },
          {
            "group": "DataObject",
            "type": "String",
            "field": "timeStamp",
            "optional": false,
            "description": "Current Unix timestamp"
          }
        ],
        "Success": [
          {
            "group": "Success",
            "type": "String",
            "field": "result",
            "optional": false,
            "description": "ok"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "get",
    "url": "/apiServer",
    "title": "           API Server",
    "name": "apiServer_(GET)",
    "description": "Assign an API server to a user and return the address",
    "group": "Routing_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceID",
            "optional": false,
            "description": "Device identification"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "serverAddress",
            "optional": false,
            "description": "Address of API server"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "get",
    "url": "/gameServer",
    "title": "          Game Server",
    "name": "gameServer_(GET)",
    "description": "Assign a game server to a user and return the address",
    "group": "Routing_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceID",
            "optional": false,
            "description": "Device identification"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fbID",
            "optional": false,
            "description": "Facebook ID of user (if available)"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "serverAddress",
            "optional": false,
            "description": "Address of game server"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    },
    "filename": "./server.js"
  },

  {
    "type": "post",
    "url": "sendMessage",
    "title": "         Send Message",
    "name": "sendMessage",
    "description": "Send message posted on server.",
    "group": "Chat_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "messageID",
            "optional": false,
            "description": "Unique Message ID"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fromFbID",
            "optional": false,
            "description": "From FB ID"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "toFbID",
            "optional": false,
            "description": "To FB ID"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "messageBody",
            "optional": false,
            "description": "Message Body"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "messageType",
            "optional": false,
            "description": "can be 1- short 2 -long 3- delivered 4- read"
          }
        ],
      },
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "OK",
            "optional": false,
            "description": "Confirmation of the message"
          }
        ]
      }

    },
    "filename": "./server.js"
  },

  {
    "type": "post",
    "url": "getMessage",
    "title": "         Get Message",
    "name": "getMessage",
    "description": "Get message from server.",
    "group": "Chat_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "messageID",
            "optional": false,
            "description": "Unique Message ID"
          }
        ],
      },
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "chatMessage",
            "optional": false,
            "description": "Chat Message Json Object"
          },
        ],
        "chatMessage": [
          {
            "group": "chatMessage",
            "type": "String",
            "field": "messageID",
            "optional": false,
            "description": "" 
          },
          {
            "group": "chatMessage",
            "type": "String",
            "field": "fromFbID",
            "optional": false,
            "description": "" 
          },
          {
            "group": "chatMessage",
            "type": "String",
            "field": "messageType",
            "optional": false,
            "description": "" 
          },
          {
            "group": "chatMessage",
            "type": "String",
            "field": "messageBody",
            "optional": false,
            "description": "" 
          }
        ]
      }
    },
    "filename": "./server.js"
  },
  {
    "type": "post",
    "url": "/deviceToken",
    "title": "        Device Token",
    "name": "chat_deviceToken_(POST)",
    "description": "Register a device token with the server for push notifications",
    "group": "Chat_Server",
    "version": "1.0.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceID",
            "optional": false,
            "description": "Device identification"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "fbID",
            "optional": false,
            "description": "Facebook ID of user"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "token",
            "optional": false,
            "description": "Push notification token"
          },
          {
            "group": "Parameter",
            "type": "String",
            "field": "deviceType",
            "optional": false,
            "description": "iOS / Android"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "field": "result",
            "optional": false,
            "description": "OK"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error": [
          {
            "group": "Error",
            "field": "401",
            "optional": false,
            "description": "Not Authorized"
          },
          {
            "group": "Error",
            "field": "500",
            "optional": false,
            "description": "Internal server error"
          }
        ]
      }
    }, 
    "filename": "./server.js"
  },


  {
    "type": "",
    "url": "private",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "admin.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/admin.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "binary.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/binary.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "binary.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/binary.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "binary.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/binary.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "binary.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/binary.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "binary.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/binary.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "bson.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/browser_build/bson.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "build.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/readable-stream/node_modules/isarray/build/build.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "build.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/readable-stream/node_modules/isarray/build/build.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "build.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/readable-stream/node_modules/isarray/build/build.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "build.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/readable-stream/node_modules/isarray/build/build.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "build.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/readable-stream/node_modules/isarray/build/build.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "build.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/readable-stream/node_modules/isarray/build/build.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "collection.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "common.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/common.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursor.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursor.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursorstream.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursorstream.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursorstream.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursorstream.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "cursorstream.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/cursorstream.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "db.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/db.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "double.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/double.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "grid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/grid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "grid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/grid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "grid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/grid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "gridstore.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/gridfs/gridstore.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/cookie-jar/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/cookie-jar/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/aws-sign/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "index.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/qs/index.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "jar.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/cookie-jar/jar.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "jar.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/cookie-jar/jar.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "jar.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/cookie-jar/jar.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "jar.js",
    "version": "0.0.0",
    "filename": "./node_modules/node-gcm/node_modules/request/node_modules/cookie-jar/jar.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "long.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/long.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "mongo_client.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/mongo_client.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "mongo_client.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/mongo_client.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "mongo_client.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/mongo_client.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "mongo_client.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/mongo_client.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "mongo_client.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/mongo_client.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "objectid.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/objectid.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "ordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/ordered.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "shared.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/shared.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "symbol.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/symbol.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "private",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "timestamp.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/node_modules/bson/lib/bson/timestamp.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  },
  {
    "type": "",
    "url": "public",
    "group": "unordered.js",
    "version": "0.0.0",
    "filename": "./node_modules/mongojs/node_modules/mongodb/lib/mongodb/collection/batch/unordered.js"
  }
] });