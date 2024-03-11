import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";
import { Sdk } from "@site/src/components/Sdk";

export default function FlickrTypeScriptSdk() {
  return (
    <Sdk
      sdkName="flickr-typescript-sdk"
      metaDescription="Flickr is an image hosting and video hosting website, web services suite, and online community platform. It was one of the earliest Web 2.0 applications. Flickr allows users to share and embed personal photographs and videos, and to interact with other members through commenting, groups, and more."
      company="Flickr"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/logo.png"
      clientNameCamelCase="flickr"
      homepage="flickr.com"
      lastUpdated={new Date("2024-03-11T17:20:37.894Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/favicon.png"
      // Missing contactUrl
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      methods={[
  {
    "url": "/oauth/access_token",
    "method": "getAccessToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns an access token",
    "parameters": [
      {
        "name": "oauthConsumerKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthNonce",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthTimestamp",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthSignatureMethod",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthSignature",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthVerifier",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthToken",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/oauth/request_token",
    "method": "getOAuthToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns an oauth token and oauth token secret",
    "parameters": [
      {
        "name": "oauthConsumerKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthNonce",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthTimestamp",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthSignatureMethod",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthVersion",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthSignature",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "oauthCallback",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.favorites.getContext",
    "method": "getFavoritesContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns next and previous favorites for a photo in a user's favorites",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.favorites.getList",
    "method": "getFavoritePhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns a list of the user's favorite photos. Only photos which the calling user has permission to see are returned.",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "minFaveDate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxFaveDate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "page",
        "schema": "number",
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.galleries.getPhotos",
    "method": "getGalleryPhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns a list of photos in a gallery.",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "galleryId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.groups.discuss.replies.getInfo",
    "method": "getGroupTopicRepliesInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Get information on a group topic reply",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "replyId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.groups.discuss.topics.getInfo",
    "method": "getGroupTopicInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Get information about a group discussion topic",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "topicId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.groups.discuss.topics.getList",
    "method": "getGroupDiscussionTopics",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Get a list of discussion topics in a group.",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "page",
        "schema": "number",
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.groups.getInfo",
    "method": "getGroupInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Get information about a group",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "groupPathAlias",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "lang",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.groups.pools.getContext",
    "method": "flickrGroupsPoolsGetContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns next and previous photos for a photo in a group pool",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.groups.pools.getPhotos",
    "method": "getGroupPoolPhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns a list of pool photos for a given group",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "groupId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.people.getInfo",
    "method": "getPersonInformation",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns a person",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.people.getPhotos",
    "method": "getUserPhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Return photos from the given user's photostream",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "safeSearch",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minUploadDate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxUploadDate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "minTakenDate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "maxTakenDate",
        "schema": "number",
        "description": ""
      },
      {
        "name": "contentType",
        "schema": "number",
        "description": ""
      },
      {
        "name": "privacyFilter",
        "schema": "number",
        "description": ""
      },
      {
        "name": "page",
        "schema": "number",
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photolist.getContext",
    "method": "getPhotoListContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns next and previous photos in a photo list",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photolistId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photos.getContext",
    "method": "getPhotostreamContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns next and previous photos for a photo in a photostream",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photos.getExif",
    "method": "getPhotoExif",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Retrieves a list of EXIF/TIFF/GPS tags for a given photo. The calling user must have permission to view the photo.",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "secret",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photos.getInfo",
    "method": "getPhotoInfo",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns a photo",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photos.getSizes",
    "method": "getPhotoSizes",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns photo sizes",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photos.licenses.getInfo",
    "method": "getPhotoLicenses",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Fetches a list of available photo licenses for Flickr",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photos.search",
    "method": "searchPhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Return a list of photos matching some criteria.",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "text",
        "schema": "string",
        "description": "A free text search. Photos who's title, description or tags contain the text will be returned. You can exclude results that match a term by prepending it with a - character."
      },
      {
        "name": "tags",
        "schema": "string",
        "description": "A comma-delimited list of tags. Photos with one or more of the tags listed will be returned. You can exclude results that match a term by prepending it with a - character."
      },
      {
        "name": "userId",
        "schema": "string",
        "description": "The NSID of the user who's photo to search. If this parameter isn't passed then everybody's public photos will be searched. A value of \"me\" will search against the calling user's photos for authenticated calls."
      },
      {
        "name": "minUploadDate",
        "schema": "string",
        "description": "Minimum upload date. Photos with an upload date greater than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime."
      },
      {
        "name": "maxUploadDate",
        "schema": "string",
        "description": "Maximum upload date. Photos with an upload date less than or equal to this value will be returned. The date can be in the form of a unix timestamp or mysql datetime."
      },
      {
        "name": "minTakenDate",
        "schema": "string",
        "description": "Minimum taken date. Photos with an taken date greater than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp."
      },
      {
        "name": "maxTakenDate",
        "schema": "string",
        "description": "Maximum taken date. Photos with an taken date less than or equal to this value will be returned. The date can be in the form of a mysql datetime or unix timestamp."
      },
      {
        "name": "license",
        "schema": "string",
        "description": "The license id for photos (for possible values see the flickr.photos.licenses.getInfo method). Multiple licenses may be comma-separated."
      },
      {
        "name": "sort",
        "schema": "string",
        "description": "The order in which to sort returned photos. Deafults to date-posted-desc (unless you are doing a radial geo query, in which case the default sorting is by ascending distance from the point specified). The possible values are:\n  date-posted-asc,\n  date-posted-desc,\n  date-taken-asc,\n  date-taken-desc,\n  interestingness-desc,\n  interestingness-asc, and\n  relevance.\n"
      },
      {
        "name": "privacyFilter",
        "schema": "number",
        "description": "Return photos only matching a certain privacy level. This only applies when making an authenticated call to view photos you own. Valid values are:,\n  1: public photos,\n  2: private photos visible to friends,\n  3: private photos visible to family,\n  4: private photos visible to friends & family,\n  5: completely private photos\n"
      },
      {
        "name": "bbox",
        "schema": "string",
        "description": "A comma-delimited list of 4 values defining the Bounding Box of the area that will be searched."
      },
      {
        "name": "accuracy",
        "schema": "string",
        "description": "Recorded accuracy level of the location information. Current range is 1-16:\n  World level is 1\n  Country is ~3\n  Region is ~6\n  City is ~11\n  Street is ~16\n"
      },
      {
        "name": "safeSearch",
        "schema": "number",
        "description": "Safe search setting:\n  1: for safe,\n  2: for moderate,\n  3: for restricted\n"
      },
      {
        "name": "contentType",
        "schema": "number",
        "description": "Content Type setting:\n  1: photos only.\n  2: screenshots only.\n  3: 'other' only.\n  4: photos and screenshots.\n  5: screenshots and 'other'.\n  6: photos and 'other'.\n  7: photos, screenshots, and 'other' (all).\n"
      },
      {
        "name": "machineTags",
        "schema": "string",
        "description": "Aside from passing in a fully formed machine tag, there is a special syntax for searching on specific properties : Find photos using the 'dc' namespace : \"machine_tags\" => \"dc:\" Find photos with a title in the 'dc' namespace : \"machine_tags\" => \"dc:title=\" Find photos titled \"mr. camera\" in the 'dc' namespace : \"machine_tags\" => \"dc:title=\\\"mr. camera\\\" Find photos whose value is \"mr. camera\" : \"machine_tags\" => \"*:*=\\\"mr. camera\\\"\" Find photos that have a title, in any namespace : \"machine_tags\" => \"*:title=\" Find photos that have a title, in any namespace, whose value is \"mr. camera\" : \"machine_tags\" => \"*:title=\\\"mr. camera\\\"\" Find photos, in the 'dc' namespace whose value is \"mr. camera\" : \"machine_tags\" => \"dc:*=\\\"mr. camera\\\"\" Multiple machine tags may be queried by passing a comma-separated list. The number of machine tags you can pass in a single query depends on the tag mode (AND or OR) that you are querying with. \"AND\" queries are limited to (16) machine tags. \"OR\" queries are limited to (8).\n"
      },
      {
        "name": "machineTagMode",
        "schema": "string",
        "description": "Either 'any' for an OR combination of tags, or 'all' for an AND combination. Defaults to 'any' if not specified."
      },
      {
        "name": "groupId",
        "schema": "string",
        "description": "The id of a group who's pool to search. If specified, only matching photos posted to the group's pool will be returned."
      },
      {
        "name": "contacts",
        "schema": "string",
        "description": "Search your contacts. Either 'all' or 'ff' for just friends and family. (Experimental)"
      },
      {
        "name": "woeId",
        "schema": "string",
        "description": "A 32-bit identifier that uniquely represents spatial entities. (not used if bbox argument is present)."
      },
      {
        "name": "placeId",
        "schema": "string",
        "description": "A Flickr place id. (not used if bbox argument is present). Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n"
      },
      {
        "name": "media",
        "schema": "string",
        "description": "Filter results by media type. Possible values are all (default), photos or videos"
      },
      {
        "name": "hasGeo",
        "schema": "string",
        "description": "Any photo that has been geotagged, or if the value is \"0\" any photo that has not been geotagged. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n"
      },
      {
        "name": "geoContext",
        "schema": "string",
        "description": "Geo context is a numeric value representing the photo's geotagginess beyond latitude and longitude. For example, you may wish to search for photos that were taken \"indoors\" or \"outdoors\". The current list of context IDs is: 0, not defined. 1, indoors. 2, outdoors. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n"
      },
      {
        "name": "lat",
        "schema": "string",
        "description": "A valid latitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n"
      },
      {
        "name": "lon",
        "schema": "string",
        "description": "A valid longitude, in decimal format, for doing radial geo queries. Geo queries require some sort of limiting agent in order to prevent the database from crying. This is basically like the check against \"parameterless searches\" for queries without a geo component. A tag, for instance, is considered a limiting agent as are user defined min_date_taken and min_date_upload parameters — If no limiting factor is passed we return only photos added in the last 12 hours (though we may extend the limit in the future).\n"
      },
      {
        "name": "radius",
        "schema": "number",
        "description": "A valid radius used for geo queries, greater than zero and less than 20 miles (or 32 kilometers), for use with point-based geo queries. The default value is 5 (km)."
      },
      {
        "name": "radiusUnits",
        "schema": "string",
        "description": "The unit of measure when doing radial geo queries. Valid options are \"mi\" (miles) and \"km\" (kilometers). The default is \"km\"."
      },
      {
        "name": "isCommons",
        "schema": "boolean",
        "description": "Limit the scope of the search to only photos that are part of the Flickr Commons project. Default is false."
      },
      {
        "name": "inGallery",
        "schema": "boolean",
        "description": "Limit the scope of the search to only photos that are in a gallery? Default is false, search all photos."
      },
      {
        "name": "isGetty",
        "schema": "boolean",
        "description": "Limit the scope of the search to only photos that are for sale on Getty. Default is false."
      },
      {
        "name": "perPage",
        "schema": "number",
        "description": "Number of photos to return per page. If this argument is omitted, it defaults to 100. The maximum allowed value is 500."
      },
      {
        "name": "page",
        "schema": "number",
        "description": "The page of results to return. If this argument is omitted, it defaults to 1."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photosets.getContext",
    "method": "getPhotoSetContext",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns next and previous photos for a photo in a set",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photoId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photosetId",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photosets.getList",
    "method": "getUserAlbums",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns the albums belonging to the specified user",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "userId",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "page",
        "schema": "number",
        "description": ""
      },
      {
        "name": "perPage",
        "schema": "number",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.photosets.getPhotos",
    "method": "getAlbumPhotos",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Returns a list of photos in an album.",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "photosetId",
        "schema": "string",
        "required": true,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/rest?method=flickr.test.echo",
    "method": "getFlickrTestEcho",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Echos the input parameters back in the response",
    "parameters": [
      {
        "name": "apiKey",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "echo",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  },
  {
    "url": "/upload",
    "method": "uploadPhoto",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "Public",
    "typeScriptTag": "public",
    "description": "Uploads a new photo to Flickr",
    "parameters": [
      {
        "name": "tags",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "title",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "description",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "api_key",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "content_type",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "hidden",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_family",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_friend",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "is_public",
        "schema": "string",
        "required": false,
        "description": ""
      },
      {
        "name": "photo",
        "schema": "string",
        "required": true,
        "description": ""
      },
      {
        "name": "safety_level",
        "schema": "string",
        "required": false,
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": ""
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Flickr API Schema"
      apiBaseUrl="https://api.flickr.com/services"
      apiVersion="1.0.0"
      endpoints={25}
      sdkMethods={25}
      schemas={42}
      parameters={127}
      difficulty="Easy"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/flickr/openapi.yaml"
    />
  );
}
  