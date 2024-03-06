import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function NbaTypeScriptSdk() {
  return (
    <Sdk
      sdkName="nba-typescript-sdk"
      metaDescription="The NBA (National Basketball Association) is a professional basketball league in North America. It is widely regarded as the premier men's professional basketball league in the world. The NBA features 30 teams, including iconic franchises like the Los Angeles Lakers, Boston Celtics, and Chicago Bulls. The league showcases top basketball talent from around the globe, with players competing in high-energy games to vie for the championship title."
      company="NBA"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nba/logo.png"
      clientNameCamelCase="nba"
      homepage="nba.com"
      lastUpdated={new Date("2024-03-06T04:52:34.288Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nba/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nba/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/allstarballotpredictor",
    "method": "predictionsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "AllStarBallotPredictor",
    "typeScriptTag": "allStarBallotPredictor",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscore",
    "method": "getStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoreadvanced",
    "method": "getAdvancedData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoreadvancedv2",
    "method": "getAdvancedData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscorefourfactors",
    "method": "getFourFactors",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscorefourfactorsv2",
    "method": "getFourFactorsData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoremisc",
    "method": "getMiscData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoremiscv2",
    "method": "getMiscData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoreplayertrackv2",
    "method": "getPlayerTrackV2",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscorescoring",
    "method": "getScoringData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscorescoringv2",
    "method": "getScoringData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoresummaryv2",
    "method": "summaryV2Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoretraditionalv2",
    "method": "getTraditionalData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoreusage",
    "method": "getUsageData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/boxscoreusagev2",
    "method": "getUsageData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Boxscore",
    "typeScriptTag": "boxscore",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/commonTeamYears",
    "method": "commonTeamYearsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/commonallplayers",
    "method": "getAllPlayers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/commonplayerinfo",
    "method": "infoGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/commonplayoffseries",
    "method": "getCommonPlayoffSeries",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayoffSeries",
    "typeScriptTag": "playoffSeries",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/commonteamroster",
    "method": "rosterGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/draftcombinedrillresults",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DraftCombineStat",
    "typeScriptTag": "draftCombineStat",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/draftcombinenonstationaryshooting",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DraftCombineNonStationaryShooting",
    "typeScriptTag": "draftCombineNonStationaryShooting",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/draftcombineplayeranthro",
    "method": "combinePlayerAnthroGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/draftcombinespotshooting",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DraftCombineSpotShooting",
    "typeScriptTag": "draftCombineSpotShooting",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/draftcombinestats",
    "method": "getReportData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DraftCombineStat",
    "typeScriptTag": "draftCombineStat",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/drafthistory",
    "method": "getAll",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "DraftHistory",
    "typeScriptTag": "draftHistory",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/franchisehistory",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "FranchiseHistory",
    "typeScriptTag": "franchiseHistory",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/homepageleaders",
    "method": "getHomepageLeaders",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leader",
    "typeScriptTag": "leader",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/homepagev2",
    "method": "getLatestNews",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Homepagev2",
    "typeScriptTag": "homepagev2",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaderstiles",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "LeaderTile",
    "typeScriptTag": "leaderTile",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashlineups",
    "method": "getDetails",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lineup",
    "typeScriptTag": "lineup",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashplayerbiostats",
    "method": "bioStatsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashplayerclutch",
    "method": "clutchData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashplayerptshot",
    "method": "ptShotGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashplayershotlocations",
    "method": "shotLocationsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashplayerstats",
    "method": "dashPlayerStatsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashptdefend",
    "method": "statsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Defense",
    "typeScriptTag": "defense",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashptteamdefend",
    "method": "defendStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashteamclutch",
    "method": "dashboardDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashteamptshot",
    "method": "dashboardTeamStatsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashteamshotlocations",
    "method": "getShotLocations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leaguedashteamstats",
    "method": "dashboardTeamStatsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/leagueleaders",
    "method": "getList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Leader",
    "typeScriptTag": "leader",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playbyplay",
    "method": "summaryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playby",
    "typeScriptTag": "playby",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playbyplayv2",
    "method": "getPlayByPlayData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playby",
    "typeScriptTag": "playby",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playercareerstats",
    "method": "careerStatsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playercompare",
    "method": "getPlayerStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerCompare",
    "typeScriptTag": "playerCompare",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbyclutch",
    "method": "getByClutchData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbygamesplits",
    "method": "byGameSplitsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbygeneralsplits",
    "method": "byGeneralSplitsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbylastngames",
    "method": "getLastGames",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbyopponent",
    "method": "opponentGetData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbyshootingsplits",
    "method": "shootingSplitsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbyteamperformance",
    "method": "getPerformanceData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashboardbyyearoveryear",
    "method": "yearOverYearGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashptpass",
    "method": "dashboardPtPassGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashptreb",
    "method": "getTrebData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerDashboard",
    "typeScriptTag": "playerDashboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashptreboundlogs",
    "method": "dashPtReboundLogsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashptshotdefend",
    "method": "dashboardPtShotDefendGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashptshotlog",
    "method": "dashboardPtshotlogGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerdashptshots",
    "method": "dashboardPtshotsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playergamelog",
    "method": "getPlayerGameLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GameLog",
    "typeScriptTag": "gameLog",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerprofile",
    "method": "getPlayerInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerProfile",
    "typeScriptTag": "playerProfile",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playerprofilev2",
    "method": "getPlayerData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerProfile",
    "typeScriptTag": "playerProfile",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playersvsplayers",
    "method": "viewPlayerStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playervsplayer",
    "method": "getStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "PlayerVsPlayer",
    "typeScriptTag": "playerVsPlayer",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/playoffpicture",
    "method": "getPlayoffPicture",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Standings",
    "typeScriptTag": "standings",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/scoreboard",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scoreboard",
    "typeScriptTag": "scoreboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/scoreboardV2",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Scoreboard",
    "typeScriptTag": "scoreboard",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/shotchartdetail",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shotchartdetail",
    "typeScriptTag": "shotchartdetail",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/shotchartlineupdetail",
    "method": "detailGetData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Lineup",
    "typeScriptTag": "lineup",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbyclutch",
    "method": "dashboardByClutchGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbygamesplits",
    "method": "dashboardByGameSplitsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbygeneralsplits",
    "method": "getDashboardByGeneralSplits",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbylastngames",
    "method": "dashboardByLastGamesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbyopponent",
    "method": "dashboardByOpponentGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbyshootingsplits",
    "method": "dashboardByShootingSplitsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbyteamperformance",
    "method": "performanceGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashboardbyyearoveryear",
    "method": "dashboardByYearOverYearGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashlineups",
    "method": "dashlineupsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashptpass",
    "method": "dashboardDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashptreb",
    "method": "dashboardDataGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamdashptshots",
    "method": "dashptshotsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamgamelog",
    "method": "getTeamLog",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "GameLog",
    "typeScriptTag": "gameLog",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teaminfocommon",
    "method": "infoCommonGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamplayerdashboard",
    "method": "getPlayerDashboard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamplayeronoffdetails",
    "method": "playerOnOffDetailsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamplayeronoffsummary",
    "method": "playerOnOffSummaryGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamvsplayer",
    "method": "getPlayerStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "TeamVsPlayer",
    "typeScriptTag": "teamVsPlayer",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/teamyearbyyearstats",
    "method": "getYearlyStats",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Team",
    "typeScriptTag": "team",
    "description": "",
    "parameters": [],
    "responses": []
  },
  {
    "url": "/videoStatus",
    "method": "getStatus",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "VideoStatus",
    "typeScriptTag": "videoStatus",
    "description": "",
    "parameters": [],
    "responses": []
  }
]
    }
      language="TypeScript"
      apiTitle="NBA Stats API"
      apiBaseUrl="https://stats.nba.com/stats"
      apiVersion="version"
      endpoints={91}
      sdkMethods={182}
      schemas={0}
      parameters={0}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/nba/openapi.yaml"
    />
  );
}
  