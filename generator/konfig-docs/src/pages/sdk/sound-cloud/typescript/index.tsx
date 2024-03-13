import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
// @ts-ignore
import FirstRequest from "./_first-request.mdx"
import { SdkNew } from "@site/src/components/SdkNew";

export default function SoundCloudTypeScriptSdk() {
  return (
    <SdkNew
      sdkName="soundcloud-typescript-sdk"
      metaDescription="Discover and play over 320 million music tracks. Join the world’s largest online community of artists, bands, DJs, and audio creators."
      company="SoundCloud"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/logo.jpg"
      clientNameCamelCase="soundCloud"
      homepage="developers.soundcloud.com"
      lastUpdated={new Date("2024-03-13T02:25:22.175Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/favicon.jpeg"
      contactUrl="https://github.com/soundcloud/api"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      FirstRequest={FirstRequest}
      categories={["media"]}
      methods={[
  {
    "url": "/connect",
    "method": "authorizeUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "The OAuth2 authorization endpoint. Your app redirects a user to this endpoint, allowing them to delegate access to their account.",
    "parameters": [
      {
        "name": "clientId",
        "schema": "string",
        "required": true,
        "description": "The client id belonging to your application",
        "example": "some client"
      },
      {
        "name": "redirectUri",
        "schema": "string",
        "required": true,
        "description": "The redirect uri you have configured for your application",
        "example": "https://soundcloud.com"
      },
      {
        "name": "responseType",
        "schema": "string",
        "required": true,
        "description": "Support only the Authorization Code Flow",
        "example": "code"
      },
      {
        "name": "state",
        "schema": "string",
        "required": false,
        "description": "Any value included here will be appended to the redirect URI. Use this for CSRF protection.",
        "example": "encrypted_session_info"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
      {
        "statusCode": "302",
        "description": "Redirect to connect portal"
      },
      {
        "statusCode": "401",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth2/token",
    "method": "provisionAccessToken",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "oauth",
    "typeScriptTag": "oauth",
    "description": "This endpoint accepts POST requests and is used to provision access tokens once a user has authorized your application.",
    "parameters": [
      {
        "name": "grant_type",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "authorization_code"
      },
      {
        "name": "client_id",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_ID"
      },
      {
        "name": "client_secret",
        "schema": "string",
        "required": true,
        "description": "",
        "example": "CLIENT_SECRET"
      },
      {
        "name": "code",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1-123456-12345678-FAbcfbe9ir2wdj0"
      },
      {
        "name": "redirect_uri",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "https://mywebsite/auth/soundcloud"
      },
      {
        "name": "refresh_token",
        "schema": "string",
        "required": false,
        "description": "",
        "example": "1234c331329477150e7b6056ff212345"
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
    "method": "getUserInformation",
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
    "method": "getActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns the authenticated user's activities.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "getRecentActivities",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Recent the authenticated user's activities.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "getRecentTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns the authenticated user's recent track related activities.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "listLikedTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of favorited or liked tracks of the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview,blocked"
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "getLikedPlaylists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of favorited or liked playlists of the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "getFollowedUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of users who are followed by the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
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
    "method": "listFollowedTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of recent tracks from users followed by the authenticated user.",
    "parameters": [
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
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
    "method": "deleteFollowedUser",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Deletes a user who is followed by the authenticated user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 743372812
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
    "method": "getFollowedUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a user who is followed by the authenticated user. (use /users/{user_id} instead, to fetch the user details)",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
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
    "method": "followUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Follows a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 743372812
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
    "method": "getFollowersList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of users who are following the authenticated user.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "getFollowerById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a user who is following the authenticated user. (use /users/{user_id} instead, to fetch the user details)",
    "parameters": [
      {
        "name": "followerId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id to denote a Follower",
        "example": 743372812
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
    "method": "listPlaylistsInfoTracksOwner",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns user’s playlists (sets).",
    "parameters": [
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`.",
        "example": true
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "listUserTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "me",
    "typeScriptTag": "me",
    "description": "Returns a list of user's tracks.",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "byQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Performs a track search based on a query",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "search",
        "example": "hello"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of track ids to filter on",
        "example": "1,2,3"
      },
      {
        "name": "genres",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of genres",
        "example": "Pop,House"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of tags",
        "example": "test"
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
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
        "statusCode": "500",
        "description": "Internal Server Error"
      }
    ]
  },
  {
    "url": "/tracks",
    "method": "uploadNewTrack",
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
    "method": "byQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Performs a playlist search based on a query",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "search",
        "example": "hello"
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`.",
        "example": true
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "createNewPlaylist",
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
    "method": "userQuery",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "Performs a user search based on a query",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": false,
        "description": "search",
        "example": "hello"
      },
      {
        "name": "ids",
        "schema": "string",
        "required": false,
        "description": "A comma separated list of track ids to filter on",
        "example": "1,2,3"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "deletePlaylist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Deletes a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 10
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}",
    "method": "getPlaylistById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Returns a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1212781357
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
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`.",
        "example": true
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
    "method": "updatePlaylistById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Updates a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 10
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
    "method": "getTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Returns tracks under a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1212781357
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
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "listReposters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "playlists",
    "typeScriptTag": "playlists",
    "description": "Returns a collection of playlist's reposters.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1212781357
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "deleteTrack",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Deletes a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "404",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{track_id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
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
    "method": "updateTrackInformation",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Updates a track's information.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
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
    "method": "getStreamableUrls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a track's streamable URLs",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
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
    "method": "getComments",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns the comments posted on the track(track_id).",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "createComment",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns the newly created comment on success",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
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
    "method": "getFavoriters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a list of users who have favorited or liked the track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "listReposters",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns a collection of track's reposters.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "getRelatedTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "tracks",
    "typeScriptTag": "tracks",
    "description": "Returns all related tracks of track on SoundCloud.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 308946187
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": "Offset of first result. Deprecated, use `linked_partitioning` instead.",
        "example": 0,
        "default": 0
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "resolveSoundcloudUrls",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "miscellaneous",
    "typeScriptTag": "miscellaneous",
    "description": "Resolves soundcloud.com and on.soundcloud.com URLs to Resource URLs to use with the API.",
    "parameters": [
      {
        "name": "url",
        "schema": "string",
        "required": true,
        "description": "SoundCloud URL",
        "example": "https://soundcloud.com/user-434241656"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "OK"
      },
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
    "method": "getUser",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a user.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
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
    "method": "listFavorites",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's favorited or liked tracks. (use /users/:userId/likes/tracks instead, to fetch a user's likes)",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "getFollowers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user’s followers.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "getUserFollowings",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user’s followings.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "getFollowingById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a user's following. (use /users/{user_id} instead, to fetch the user details)",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "followingId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id to denote a Following of a user",
        "example": 25219981
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
    "method": "getUserPlaylists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's playlists.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "showTracks",
        "schema": "boolean",
        "required": false,
        "description": "A boolean flag to request a playlist with or without tracks. Default is `true`.",
        "example": true
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "getUserTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's tracks.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "getUserWebProfiles",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns list of user's links added to their profile (website, facebook, instagram).",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
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
    "method": "listLikedTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's liked tracks.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "access",
        "schema": "array",
        "description": "Filters content by level of access the user (logged in or anonymous) has to the track. The result list will include only tracks with the specified access. Include all options if you'd like to see all possible tracks. See `Track#access` schema for more details.\n",
        "default": "playable,preview"
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "listLikedPlaylists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "users",
    "typeScriptTag": "users",
    "description": "Returns a list of user's liked playlists.",
    "parameters": [
      {
        "name": "userId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud User id",
        "example": 948745750
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": "Number of results to return in the collection.",
        "example": 2,
        "default": 50
      },
      {
        "name": "linkedPartitioning",
        "schema": "boolean",
        "required": false,
        "description": "Returns paginated collection of items (recommended, returning a list without pagination is deprecated and should not be used)",
        "example": true
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
    "method": "unlikeTrack",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Unlikes a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 1015448728
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
    "method": "trackAction",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Likes a track.",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 1015448728
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
    "method": "unlikePlaylist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Unlikes a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1212781357
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
    "method": "playlist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "likes",
    "typeScriptTag": "likes",
    "description": "Likes a playlist.",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1212781357
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
    "method": "removeRepost",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Removes a repost on a track as the authenticated user",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 1015448728
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
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
    "url": "/reposts/tracks/{track_id}",
    "method": "trackAsAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Reposts a track as the authenticated user",
    "parameters": [
      {
        "name": "trackId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud Track id",
        "example": 1015448728
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
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
    "url": "/reposts/playlists/{playlist_id}",
    "method": "removeRepostOnPlaylist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Removes a repost on a playlist as the authenticated user",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1205584273
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
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
    "url": "/reposts/playlists/{playlist_id}",
    "method": "playlistAsAuthenticatedUser",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "reposts",
    "typeScriptTag": "reposts",
    "description": "Reposts a playlist as the authenticated user",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "integer",
        "required": true,
        "description": "SoundCloud playlist id",
        "example": 1205584273
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": "Created"
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
  }
]
    }
      language="TypeScript"
      apiTitle="SoundCloud Public API Specification"
      apiBaseUrl="https://api.soundcloud.com"
      apiVersion="1.0.0"
      endpoints={42}
      sdkMethods={55}
      schemas={30}
      parameters={132}
      difficulty="Medium"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/soundcloud/openapi.yaml"
      openApiGitHubUi="https://github.com/konfig-sdks/openapi-examples/tree/HEAD/soundcloud/openapi.yaml"
      
    />
  );
}
  