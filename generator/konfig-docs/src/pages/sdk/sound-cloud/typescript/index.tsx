import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function SoundCloudTypeScriptSdk() {
  return (
    <Sdk
      sdkName="soundcloud-typescript-sdk"
      metaDescription="Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators."
      company="SoundCloud"
      doesNotHaveApiDescription={true}
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/logo.jpg"
      clientNameCamelCase="soundCloud"
      homepage="developers.soundcloud.com"
      lastUpdated={new Date("2024-02-02T01:29:21.245Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/favicon.jpeg"
      contactUrl="https://github.com/soundcloud/api"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/connect",
    "method": "/connectGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id belonging to your application"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": true,
        "description": "The redirect uri you have configured for your application"
      },
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "Support only the Authorization Code Flow"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Any value included here will be appended to the redirect URI. Use this for CSRF protection."
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth2/token",
    "method": "/oauth2/tokenPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me",
    "method": "/meGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns the authenticated user’s information.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "SoundCloud Me object"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/activities",
    "method": "/me/activitiesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns the authenticated user's activities.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User's activities."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/activities/all/own",
    "method": "/me/activities/all/ownGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Recent the authenticated user's activities.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User's activities."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/activities/tracks",
    "method": "/me/activities/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns the authenticated user's recent track related activities.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User's activities."
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/likes/tracks",
    "method": "/me/likes/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of favorited or liked tracks of the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/likes/playlists",
    "method": "/me/likes/playlistsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of favorited or liked playlists of the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followings",
    "method": "/me/followingsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of users who are followed by the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followings/tracks",
    "method": "/me/followings/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of recent tracks from users followed by the authenticated user.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followings/{user_id}",
    "method": "/me/followings/{userId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Deletes a user who is followed by the authenticated user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followings/{user_id}",
    "method": "/me/followings/{userId}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SoundCloud User object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followings/{user_id}",
    "method": "/me/followings/{userId}Put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Follows a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "201",
        "description": "SoundCloud User object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followers",
    "method": "/me/followersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of users who are following the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/followers/{follower_id}",
    "method": "/me/followers/{followerId}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)",
    "parameters": [
      {
        "name": "followerId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id to denote a Follower"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SoundCloud User object"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/playlists",
    "method": "/me/playlistsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns user’s playlists (sets).",
    "parameters": [
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/tracks",
    "method": "/me/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of user's tracks.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks",
    "method": "/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Performs a track search based on a query",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "search"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of track ids to filter on"
      },
      {
        "name": "genres",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of genres"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of tags"
      },
      {
        "name": "bpm",
        "schema": "object",
        "required": false,
        "description": "Return tracks with a specified bpm[from], bpm[to]"
      },
      {
        "name": "duration",
        "schema": "object",
        "required": false,
        "description": "Return tracks within a specified duration range"
      },
      {
        "name": "createdAt",
        "schema": "object",
        "required": false,
        "description": "(yyyy-mm-dd hh:mm:ss) return tracks created within the specified dates"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks",
    "method": "/tracksPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Uploads a new track.",
    "parameters": [],
    "responses": [
      {
        "statusCode": "201",
        "description": "Soundcloud Track object."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "422",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists",
    "method": "/playlistsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Performs a playlist search based on a query",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "search"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists",
    "method": "/playlistsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Creates a playlist.",
    "parameters": [
      {
        "name": "playlist",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Soundcloud Playlist Object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users",
    "method": "/usersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Performs a user search based on a query",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "search"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of track ids to filter on"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}",
    "method": "/playlists/{playlistId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Deletes a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}",
    "method": "/playlists/{playlistId}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Returns a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      },
      {
        "name": "secretToken",
        "schema": "string",
        "required": false,
        "description": "A secret token to fetch private playlists/tracks"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Soundcloud Playlist Object"
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}",
    "method": "/playlists/{playlistId}Put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Updates a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      },
      {
        "name": "playlist",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Soundcloud Playlist Object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/tracks",
    "method": "/playlists/{playlistId}/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Returns tracks under a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      },
      {
        "name": "secretToken",
        "schema": "string",
        "required": false,
        "description": "A secret token to fetch private playlists/tracks"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/reposters",
    "method": "/playlists/{playlistId}/repostersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Returns a collection of playlist's reposters.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}",
    "method": "/tracks/{trackId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Deletes a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      }
    ],
    "responses": [
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}",
    "method": "/tracks/{trackId}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "secretToken",
        "schema": "string",
        "required": false,
        "description": "A secret token to fetch private playlists/tracks"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Soundcloud Track object."
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}",
    "method": "/tracks/{trackId}Put",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Updates a track's information.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "track",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Soundcloud Track object."
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}/streams",
    "method": "/tracks/{trackId}/streamsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a track's streamable URLs",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "secretToken",
        "schema": "string",
        "required": false,
        "description": "A secret token to fetch private playlists/tracks"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}/comments",
    "method": "/tracks/{trackId}/commentsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns the comments posted on the track(track_id).",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}/comments",
    "method": "/tracks/{trackId}/commentsPost",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns the newly created comment on success",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "comment",
        "schema": "object",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "User's Comment"
      },
      {
        "statusCode": "422",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}/favoriters",
    "method": "/tracks/{trackId}/favoritersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a list of users who have favorited or liked the track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}/reposters",
    "method": "/tracks/{trackId}/repostersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a collection of track's reposters.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}/related",
    "method": "/tracks/{trackId}/relatedGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns all related tracks of track on SoundCloud.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/resolve",
    "method": "/resolveGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "miscellaneous",
    "typeScriptTag": "miscellaneous",
    "description": "Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "SoundCloud URL"
      }
    ],
    "responses": [
      {
        "statusCode": "302",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "/users/{userId}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SoundCloud User object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/favorites",
    "method": "/users/{userId}/favoritesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/followers",
    "method": "/users/{userId}/followersGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user’s followers.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/followings",
    "method": "/users/{userId}/followingsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user’s followings.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/followings/{following_id}",
    "method": "/users/{userId}/followings/{followingId}Get",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a user's following. (use /users/{user_id} instead, to fetch the user details)",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "followingId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id to denote a Following of a user"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "SoundCloud User object"
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/playlists",
    "method": "/users/{userId}/playlistsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's playlists.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`."
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/tracks",
    "method": "/users/{userId}/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's tracks.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/web-profiles",
    "method": "/users/{userId}/webProfilesGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns list of user's links added to their profile (website, facebook, instagram).",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "User's links added to their profile"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/likes/tracks",
    "method": "/users/{userId}/likes/tracksGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's liked tracks.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/likes/playlists",
    "method": "/users/{userId}/likes/playlistsGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's liked playlists.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection."
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/tracks/{track_id}",
    "method": "/likes/tracks/{trackId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Unlikes a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/tracks/{track_id}",
    "method": "/likes/tracks/{trackId}Post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Likes a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/playlists/{playlist_id}",
    "method": "/likes/playlists/{playlistId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Unlikes a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/likes/playlists/{playlist_id}",
    "method": "/likes/playlists/{playlistId}Post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Likes a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      },
      {
        "statusCode": "400",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/reposts/tracks/{track_id}",
    "method": "/reposts/tracks/{trackId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Removes a repost on a track as the authenticated user",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reposts/tracks/{track_id}",
    "method": "/reposts/tracks/{trackId}Post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Reposts a track as the authenticated user",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id"
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reposts/playlists/{playlist_id}",
    "method": "/reposts/playlists/{playlistId}Delete",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Removes a repost on a playlist as the authenticated user",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/reposts/playlists/{playlist_id}",
    "method": "/reposts/playlists/{playlistId}Post",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Reposts a playlist as the authenticated user",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id"
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="SoundCloud Public API Specification"
      apiBaseUrl="https://api.soundcloud.com"
      apiVersion="1.0.0"
      endpoints={42}
      sdkMethods={55}
      schemas={22}
      parameters={132}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/openapi.yaml"
    />
  );
}
  