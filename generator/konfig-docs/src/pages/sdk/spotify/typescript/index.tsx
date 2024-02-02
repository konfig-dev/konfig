import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function SpotifyTypeScriptSdk() {
  return (
    <Sdk
      sdkName="spotify-typescript-sdk"
      metaDescription="Spotify is a digital music service that gives you access to millions of songs."
      company="Spotify"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/logo.png"
      clientNameCamelCase="spotify"
      homepage="developer.spotify.com"
      lastUpdated={new Date("2024-02-02T23:02:23.295Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/favicon.ico"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/albums",
    "method": "listSeveral",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Get Several Albums\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/albums/{id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Get Album\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/albums/{id}/tracks",
    "method": "getTracksById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Get Album Tracks\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/artists",
    "method": "getCatalogInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artists",
    "typeScriptTag": "artists",
    "description": "Get Several Artists\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/artists/{id}",
    "method": "getCatalogInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artists",
    "typeScriptTag": "artists",
    "description": "Get Artist\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/artists/{id}/albums",
    "method": "getAlbumsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artists",
    "typeScriptTag": "artists",
    "description": "Get Artist's Albums\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "includeGroups",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/artists/{id}/related-artists",
    "method": "getRelatedArtists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artists",
    "typeScriptTag": "artists",
    "description": "Get Artist's Related Artists\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/artists/{id}/top-tracks",
    "method": "getTopTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Artists",
    "typeScriptTag": "artists",
    "description": "Get Artist's Top Tracks\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/audio-analysis/{id}",
    "method": "getAudioAnalysis",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get Track's Audio Analysis\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/audio-features",
    "method": "getMultipleAudioFeatures",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get Tracks' Audio Features\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/audio-features/{id}",
    "method": "getAudioFeaturesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get Track's Audio Features\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/audiobooks",
    "method": "getSeveral",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Get Several Audiobooks\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/audiobooks/{id}",
    "method": "getCatalogInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Get an Audiobook\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
      },
      {
        "statusCode": "403",
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
    "url": "/audiobooks/{id}/chapters",
    "method": "getChaptersById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Get Audiobook Chapters\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/browse/categories",
    "method": "listSeveral",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get Several Browse Categories\n",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/browse/categories/{category_id}",
    "method": "getSingle",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Categories",
    "typeScriptTag": "categories",
    "description": "Get Single Browse Category\n",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/browse/categories/{category_id}/playlists",
    "method": "getCategoryPlaylists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get Category's Playlists\n",
    "parameters": [
      {
        "name": "categoryId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/browse/featured-playlists",
    "method": "getFeatured",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get Featured Playlists\n",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "locale",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "timestamp",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/browse/new-releases",
    "method": "getNewReleases",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Get New Releases\n",
    "parameters": [
      {
        "name": "country",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/chapters",
    "method": "getMultipleByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chapters",
    "typeScriptTag": "chapters",
    "description": "Get Several Chapters\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/chapters/{id}",
    "method": "getChapterInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Chapters",
    "typeScriptTag": "chapters",
    "description": "Get a Chapter\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/episodes",
    "method": "getSeveral",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Episodes",
    "typeScriptTag": "episodes",
    "description": "Get Several Episodes\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/episodes/{id}",
    "method": "getSingleById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Episodes",
    "typeScriptTag": "episodes",
    "description": "Get Episode\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/markets",
    "method": "listAvailable",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Markets",
    "typeScriptTag": "markets",
    "description": "Get Available Markets\n",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me",
    "method": "getCurrentUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get Current User's Profile\n",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums",
    "method": "removeSaved",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Remove Users' Saved Albums\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums",
    "method": "getSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Get User's Saved Albums\n",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums",
    "method": "saveCurrentUserLibrary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Save Albums for Current User\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/albums/contains",
    "method": "checkSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Albums",
    "typeScriptTag": "albums",
    "description": "Check User's Saved Albums\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/audiobooks",
    "method": "removeFromLibrary",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Remove User's Saved Audiobooks\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/audiobooks",
    "method": "listSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Get User's Saved Audiobooks\n",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/audiobooks",
    "method": "saveCurrentUserLibrary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Save Audiobooks for Current User\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/audiobooks/contains",
    "method": "checkUserSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Audiobooks",
    "typeScriptTag": "audiobooks",
    "description": "Check User's Saved Audiobooks\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/episodes",
    "method": "removeFromLibrary",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Episodes",
    "typeScriptTag": "episodes",
    "description": "Remove User's Saved Episodes\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/episodes",
    "method": "getUserSavedEpisodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Episodes",
    "typeScriptTag": "episodes",
    "description": "Get User's Saved Episodes\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/episodes",
    "method": "saveCurrentUserLibrary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Episodes",
    "typeScriptTag": "episodes",
    "description": "Save Episodes for Current User\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/episodes/contains",
    "method": "checkSavedEpisodes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Episodes",
    "typeScriptTag": "episodes",
    "description": "Check User's Saved Episodes\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following",
    "method": "unfollowArtistsUsers",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unfollow Artists or Users\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following",
    "method": "getFollowedArtists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get Followed Artists\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "after",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following",
    "method": "followArtistsOrUsers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Follow Artists or Users\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/following/contains",
    "method": "checkFollowingArtistsUsers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Check If User Follows Artists or Users\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player",
    "method": "getCurrentPlaybackState",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Get Playback State\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTypes",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player",
    "method": "transferPlaybackToNewDevice",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Transfer Playback\n",
    "parameters": [
      {
        "name": "device_ids",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "play",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/currently-playing",
    "method": "getCurrentlyPlayingTrack",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Get Currently Playing Track\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTypes",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/devices",
    "method": "getAvailableDevices",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Get Available Devices\n",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/next",
    "method": "skipToNextTrack",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Skip To Next\n",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/pause",
    "method": "pausePlayback",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Pause Playback\n",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/play",
    "method": "startPlayback",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Start/Resume Playback\n",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "context_uri",
        "schema": "string",
        "description": ""
      },
      {
        "name": "offset",
        "schema": "object",
        "description": ""
      },
      {
        "name": "position_ms",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uris",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/previous",
    "method": "skipToPreviousTrack",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Skip To Previous\n",
    "parameters": [
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/queue",
    "method": "getUserQueue",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Get the User's Queue\n",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/queue",
    "method": "addItemToQueue",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Add Item to Playback Queue\n",
    "parameters": [
      {
        "name": "uri",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/recently-played",
    "method": "getRecentlyPlayedTracks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Get Recently Played Tracks\n",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "after",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "before",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/repeat",
    "method": "setRepeatMode",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Set Repeat Mode\n",
    "parameters": [
      {
        "name": "state",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/seek",
    "method": "seekToPosition",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Seek To Position\n",
    "parameters": [
      {
        "name": "positionMs",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/shuffle",
    "method": "togglePlaybackShuffle",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Toggle Playback Shuffle\n",
    "parameters": [
      {
        "name": "state",
        "schema": "boolean",
        "required": true,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/player/volume",
    "method": "setPlaybackVolume",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Player",
    "typeScriptTag": "player",
    "description": "Set Playback Volume\n",
    "parameters": [
      {
        "name": "volumePercent",
        "schema": "integer",
        "required": true,
        "description": ""
      },
      {
        "name": "deviceId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/playlists",
    "method": "getUserPlaylists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get Current User's Playlists\n",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/shows",
    "method": "removeUserLibrary",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Remove User's Saved Shows\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/shows",
    "method": "getUserSavedShows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Get User's Saved Shows\n",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/shows",
    "method": "saveCurrentUserLibrary",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Save Shows for Current User\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/shows/contains",
    "method": "checkSavedShows",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Check User's Saved Shows\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/top/{type}",
    "method": "getTopItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User's Top Items\n",
    "parameters": [
      {
        "name": "type",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "timeRange",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/tracks",
    "method": "removeFromLibrary",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Remove User's Saved Tracks\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/tracks",
    "method": "getUserSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get User's Saved Tracks\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/tracks",
    "method": "saveForCurrentUser",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Save Tracks for Current User\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "array",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/me/tracks/contains",
    "method": "checkSaved",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Check User's Saved Tracks\n",
    "parameters": [
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}",
    "method": "getPlaylistById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get Playlist\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTypes",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}",
    "method": "updateDetails",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Change Playlist Details\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "collaborative",
        "schema": "boolean",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "public",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/followers",
    "method": "unfollowPlaylist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Unfollow Playlist\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/followers",
    "method": "followPlaylist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Follow Playlist\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "public",
        "schema": "boolean",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/followers/contains",
    "method": "checkIfFollowsPlaylist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Check if Users Follow Playlist\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/images",
    "method": "getCoverImage",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get Playlist Cover Image\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/images",
    "method": "replaceCoverImage",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Add Custom Playlist Cover Image\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/tracks",
    "method": "removeItems",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Remove Playlist Items\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "snapshot_id",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "tracks",
        "schema": "array",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/tracks",
    "method": "getPlaylistItems",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get Playlist Items\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "additionalTypes",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/tracks",
    "method": "addItems",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Add Items to Playlist\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "position",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "uris",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "position",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "uris",
        "schema": "array",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/playlists/{playlist_id}/tracks",
    "method": "updatePlaylistItems",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Update Playlist Items\n",
    "parameters": [
      {
        "name": "playlistId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "uris",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "insert_before",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "range_length",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "range_start",
        "schema": "integer",
        "description": ""
      },
      {
        "name": "snapshot_id",
        "schema": "string",
        "description": ""
      },
      {
        "name": "uris",
        "schema": "array",
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommendations",
    "method": "getRecommendations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get Recommendations\n",
    "parameters": [
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "seedArtists",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "seedGenres",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "seedTracks",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "minAcousticness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxAcousticness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetAcousticness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minDanceability",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxDanceability",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetDanceability",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minDurationMs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "maxDurationMs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targetDurationMs",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "minEnergy",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxEnergy",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetEnergy",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minInstrumentalness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxInstrumentalness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetInstrumentalness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minKey",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "maxKey",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targetKey",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "minLiveness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxLiveness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetLiveness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minLoudness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxLoudness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetLoudness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minMode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "maxMode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targetMode",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "minPopularity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "maxPopularity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targetPopularity",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "minSpeechiness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxSpeechiness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetSpeechiness",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minTempo",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxTempo",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetTempo",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "minTimeSignature",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "maxTimeSignature",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "targetTimeSignature",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "minValence",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "maxValence",
        "schema": "number",
        "required": false,
        "description": ""
      },
      {
        "name": "targetValence",
        "schema": "number",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/recommendations/available-genre-seeds",
    "method": "getAvailableSeeds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Genres",
    "typeScriptTag": "genres",
    "description": "Get Available Genre Seeds\n",
    "parameters": [],
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/search",
    "method": "spotifyCatalogInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Search",
    "typeScriptTag": "search",
    "description": "Search for Item\n",
    "parameters": [
      {
        "name": "q",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "type",
        "schema": "array",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "includeExternal",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shows",
    "method": "getMultipleShowsInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Get Several Shows\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shows/{id}",
    "method": "getInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Get Show\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/shows/{id}/episodes",
    "method": "getEpisodesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Shows",
    "typeScriptTag": "shows",
    "description": "Get Show Episodes\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks",
    "method": "getMultipleByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get Several Tracks\n",
    "parameters": [
      {
        "name": "market",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "ids",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/tracks/{id}",
    "method": "getBySpotifyId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Tracks",
    "typeScriptTag": "tracks",
    "description": "Get Track\n",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "market",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}",
    "method": "getUserProfile",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Users",
    "typeScriptTag": "users",
    "description": "Get User's Profile\n",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
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
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/playlists",
    "method": "getUserPlaylists",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Get User's Playlists\n",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "limit",
        "schema": "integer",
        "required": false,
        "description": ""
      },
      {
        "name": "offset",
        "schema": "integer",
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
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  },
  {
    "url": "/users/{user_id}/playlists",
    "method": "createPlaylist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Playlists",
    "typeScriptTag": "playlists",
    "description": "Create Playlist\n",
    "parameters": [
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "collaborative",
        "schema": "boolean",
        "required": false,
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "public",
        "schema": "boolean",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "201",
        "description": ""
      },
      {
        "statusCode": "401",
        "description": ""
      },
      {
        "statusCode": "403",
        "description": ""
      },
      {
        "statusCode": "429",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Spotify Web API"
      apiBaseUrl="https://api.spotify.com/v1"
      apiVersion="1.0.0"
      endpoints={67}
      sdkMethods={222}
      schemas={91}
      parameters={246}
      difficulty="Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/spotify/openapi.yaml"
    />
  );
}
  