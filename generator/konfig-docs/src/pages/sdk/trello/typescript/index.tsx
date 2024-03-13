import React from "react";
import { HttpMethodsEnum } from "konfig-lib/dist/forEachOperation";
// @ts-ignore
import Description from "./_description.mdx";
// @ts-ignore
import GettingStarted from "./_getting-started.mdx";

import { Sdk } from "@site/src/components/Sdk";

export default function TrelloTypeScriptSdk() {
  return (
    <Sdk
      sdkName="trello-typescript-sdk"
      metaDescription="Trello is a collaboration tool that organizes your projects into boards. In one glance, Trello tells you what's being worked on, who's working on what, and where something is in a process."
      company="Trello"
      // Missing serviceName
      logo="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/logo.png"
      clientNameCamelCase="trello"
      homepage="developer.atlassian.com/cloud/trello"
      lastUpdated={new Date("2024-03-13T01:59:29.812Z")}
      faviconUrl="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/favicon.ico"
      contactUrl="https://trello.com/home"
      // Missing contactEmail
      previewLinkImage="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/imagePreview.png"
      GettingStarted={GettingStarted}
      Description={Description}
      
      categories={["collaboration"]}
      methods={[
  {
    "url": "/actions/{idAction}",
    "method": "removeByIdAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "deleteActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}",
    "method": "updateByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "updateActionsByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/board",
    "method": "getBoardByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsBoardByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/board/{field}",
    "method": "getBoardByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsBoardByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/card",
    "method": "getCardByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsCardByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/card/{field}",
    "method": "getCardByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsCardByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/display",
    "method": "getDisplayByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsDisplayByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/entities",
    "method": "getEntitiesByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsEntitiesByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/list",
    "method": "getListByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsListByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/list/{field}",
    "method": "getListByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsListByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/member",
    "method": "getMemberByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/member/{field}",
    "method": "getMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/memberCreator",
    "method": "getMemberCreatorByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberCreatorByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/memberCreator/{field}",
    "method": "getMemberByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsMemberCreatorByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/organization",
    "method": "getOrganizationByIdAction",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsOrganizationByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/organization/{field}",
    "method": "getOrgByIdActionByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsOrganizationByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/text",
    "method": "updateTextByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "updateActionsTextByIdAction()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/actions/{idAction}/{field}",
    "method": "getByIdActionField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "action",
    "typeScriptTag": "action",
    "description": "getActionsByIdActionByField()",
    "parameters": [
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/batch",
    "method": "getData",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "batch",
    "typeScriptTag": "batch",
    "description": "getBatch()",
    "parameters": [
      {
        "name": "urls",
        "schema": "string",
        "required": true,
        "description": "list of API v1 GET routes, not including the version prefix",
        "example": "URLS"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards",
    "method": "createBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoards()",
    "parameters": [
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/blue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/green",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/orange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/purple",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/red",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/yellow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerUps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/calendarFeedEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "actionMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "actionMemberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "cardAttachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "cardChecklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardStars",
        "schema": "string",
        "required": false,
        "description": "One of: mine or none",
        "default": "none"
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "labelFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses",
        "default": "all"
      },
      {
        "name": "labelsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "none"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "none"
      },
      {
        "name": "membershipsMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "membershipsMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners",
        "default": "none"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, initials, fullName, username and confirmed"
      },
      {
        "name": "membersInvited",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners",
        "default": "none"
      },
      {
        "name": "membersInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, initials, fullName and username"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos",
        "default": "all"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "name and displayName"
      },
      {
        "name": "organizationMemberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "none"
      },
      {
        "name": "myPrefs",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, desc, descData, closed, idOrganization, pinned, url, shortUrl, prefs and labelNames"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}",
    "method": "updateById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/blue",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/green",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/orange",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/purple",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/red",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labelNames/yellow",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "powerUps",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/calendarFeedEnabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_background",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardAging",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_cardCovers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_comments",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_invitations",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_selfJoin",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs_voting",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/actions",
    "method": "listActionsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsActionsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000",
        "default": "0"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/boardStars",
    "method": "getBoardStarsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsBoardStarsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: mine or none",
        "default": "mine"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/calendarKey/generate",
    "method": "generateCalendarKeyById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsCalendarKeyGenerateByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/cards",
    "method": "getCardsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/cards/{filter}",
    "method": "filterCardsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/cards/{idCard}",
    "method": "getCardsByIdBoardByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsCardsByIdBoardByIdCard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "idCard",
        "example": "IDCARD"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, initials, fullName and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checkItemStateFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state",
        "default": "all"
      },
      {
        "name": "labels",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/checklists",
    "method": "getChecklistsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsChecklistsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type",
        "default": "name, nameData, pos and state"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/checklists",
    "method": "addChecklists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsChecklistsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/closed",
    "method": "updateClosedById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsClosedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/deltas",
    "method": "getDeltasByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsDeltasByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing",
        "example": "TAGS"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity",
        "example": "IXLASTUPDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/desc",
    "method": "updateDescriptionByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsDescByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/emailKey/generate",
    "method": "generateEmailKey",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsEmailKeyGenerateByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/idOrganization",
    "method": "updateOrganizationByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsIdOrganizationByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labelNames/blue",
    "method": "updateLabelNamesBlueById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesBlueByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labelNames/green",
    "method": "updateLabelNamesGreenByIdBoardPut",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesGreenByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labelNames/orange",
    "method": "updateLabelNamesOrangeByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesOrangeByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labelNames/purple",
    "method": "updateLabelNamesPurpleByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesPurpleByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labelNames/red",
    "method": "updateLabelNamesRed",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesRedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labelNames/yellow",
    "method": "updateLabelNamesYellowByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsLabelNamesYellowByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labels",
    "method": "listLabelsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsLabelsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labels",
    "method": "addLabelsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsLabelsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/labels/{idLabel}",
    "method": "getLabelsByIdBoardByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsLabelsByIdBoardByIdLabel()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/lists",
    "method": "getListsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsListsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/lists",
    "method": "createListsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsListsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/lists/{filter}",
    "method": "getListsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsListsByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/markAsViewed",
    "method": "markAsViewedByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsMarkAsViewedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/members",
    "method": "getMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/members",
    "method": "updateMembersByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/members/{filter}",
    "method": "getMembersByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersByIdBoardByFilter()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}",
    "method": "removeMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "deleteBoardsMembersByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}",
    "method": "updateMembersByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembersByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/members/{idMember}/cards",
    "method": "getMembersCardsByIdBoardByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersCardsByIdBoardByIdMember()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, desc, closed, idOrganization, pinned, url and prefs"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/membersInvited",
    "method": "getMembersInvitedByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersInvitedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/membersInvited/{field}",
    "method": "getMembersInvitedByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembersInvitedByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/memberships",
    "method": "getMembershipsByIdBoard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembershipsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "all"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/memberships/{idMembership}",
    "method": "getMembershipsByIdBoardByIdMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMembershipsByIdBoardByIdMembership()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership",
        "example": "IDMEMBERSHIP"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/memberships/{idMembership}",
    "method": "updateMembershipsByIdBoardByIdMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMembershipsByIdBoardByIdMembership()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership",
        "example": "IDMEMBERSHIP"
      },
      {
        "name": "member_fields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs",
    "method": "getMyPrefsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsMyPrefsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/emailPosition",
    "method": "updateMyPrefsEmailPositionByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsEmailPositionByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/idEmailList",
    "method": "updateMyPrefsEmailListByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsIdEmailListByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showListGuide",
    "method": "updateMyPrefsShowListGuideByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowListGuideByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebar",
    "method": "updateMyPrefsShowSidebar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarActivity",
    "method": "updateMyPrefsShowSidebarActivityByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarActivityByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarBoardActions",
    "method": "updateMyPrefsShowSidebarActionsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/myPrefs/showSidebarMembers",
    "method": "updatePrefsShowSidebarMembersById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsMyPrefsShowSidebarMembersByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/name",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsNameByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/organization",
    "method": "getOrganizationById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsOrganizationByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/organization/{field}",
    "method": "getOrganizationByIdBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsOrganizationByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/powerUps",
    "method": "addPowerUpsByIdBoard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "addBoardsPowerUpsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/powerUps/{powerUp}",
    "method": "removePowerUp",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "deleteBoardsPowerUpsByIdBoardByPowerUp()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "powerUp",
        "schema": "string",
        "required": true,
        "description": "powerUp",
        "example": "POWERUP"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/background",
    "method": "updatePrefsBackgroundByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsBackgroundByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/calendarFeedEnabled",
    "method": "updatePrefsCalendarFeedEnabledById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCalendarFeedEnabledByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/cardAging",
    "method": "updatePrefsCardAgingByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCardAgingByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/cardCovers",
    "method": "updatePrefsCardCoversByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCardCoversByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/comments",
    "method": "updatePrefsCommentsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsCommentsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/invitations",
    "method": "updatePrefsInvitationsByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsInvitationsByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/permissionLevel",
    "method": "updatePrefsPermissionLevelById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsPermissionLevelByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/selfJoin",
    "method": "updatePrefsSelfJoinByIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsSelfJoinByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/prefs/voting",
    "method": "updateVotingPrefsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsPrefsVotingByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/subscribed",
    "method": "updateSubscribedById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "updateBoardsSubscribedByIdBoard()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/boards/{idBoard}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "board",
    "typeScriptTag": "board",
    "description": "getBoardsByIdBoardByField()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "required": true,
        "description": "board_id",
        "example": "IDBOARD"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards",
    "method": "createAndUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCards()",
    "parameters": [
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idAttachmentCover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idLabels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlSource",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}",
    "method": "removeByIdCard",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "actionMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "membersVoted",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberVotedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checkItemStateFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state",
        "default": "all"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "checklistFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos",
        "default": "all"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, desc, descData, closed, idOrganization, pinned, url and prefs"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "stickerFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idBoard, idChecklists, idLabels, idList, idMembers, idShort, idAttachmentCover, manualCoverAttachment, labels, name, pos, shortUrl and url"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}",
    "method": "updateByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fileSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idAttachmentCover",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCardSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idLabels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "keepFromSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "urlSource",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/actions",
    "method": "listCardActionsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsActionsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization",
        "default": "commentCard and updateCard:idList"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000",
        "default": "0"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/actions/comments",
    "method": "addActionsCommentsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsActionsCommentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/actions/{idAction}/comments",
    "method": "removeActionCommentByIdCardByIdAction",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsActionsCommentsByIdCardByIdAction()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/actions/{idAction}/comments",
    "method": "updateActionCommentByIdCardByIdAction",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsActionsCommentsByIdCardByIdAction()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idAction",
        "schema": "string",
        "required": true,
        "description": "idAction",
        "example": "IDACTION"
      },
      {
        "name": "text",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/attachments",
    "method": "getAttachmentsByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsAttachmentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/attachments",
    "method": "addAttachmentsByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsAttachmentsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "mimeType",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "url",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/attachments/{idAttachment}",
    "method": "deleteAttachmentsByIdCardByIdAttachment",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsAttachmentsByIdCardByIdAttachment()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idAttachment",
        "schema": "string",
        "required": true,
        "description": "idAttachment",
        "example": "IDATTACHMENT"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/attachments/{idAttachment}",
    "method": "getAttachmentsByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsAttachmentsByIdCardByIdAttachment()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idAttachment",
        "schema": "string",
        "required": true,
        "description": "idAttachment",
        "example": "IDATTACHMENT"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/board",
    "method": "getBoardById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsBoardByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/board/{field}",
    "method": "getBoardByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsBoardByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checkItemStates",
    "method": "getCheckItemStatesById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsCheckItemStatesByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idCheckItem or state",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklistCurrent}/checkItem/{idCheckItem}",
    "method": "updateChecklistCheckItem",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklistCurrent",
        "schema": "string",
        "required": true,
        "description": "idChecklistCurrent",
        "example": "IDCHECKLISTCURRENT"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "state",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem",
    "method": "addChecklistCheckItem",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistCheckItemByIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}",
    "method": "removeChecklistCheckItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard",
    "method": "convertCheckItemToCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/name",
    "method": "updateChecklistCheckItemNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/pos",
    "method": "updateCheckItemPosById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/state",
    "method": "updateChecklistCheckItemState",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklists",
    "method": "getChecklistsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsChecklistsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type",
        "default": "name, nameData, pos and state"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklists",
    "method": "addChecklists",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsChecklistsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/checklists/{idChecklist}",
    "method": "deleteChecklistByIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsChecklistsByIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/closed",
    "method": "updateClosedById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsClosedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/desc",
    "method": "updateDescriptionByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsDescByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/due",
    "method": "updateDueById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsDueByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idAttachmentCover",
    "method": "updateAttachmentCoverByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdAttachmentCoverByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idBoard",
    "method": "updateBoardByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdBoardByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idList",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idLabels",
    "method": "addIdLabelsToCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsIdLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idLabels/{idLabel}",
    "method": "removeLabelByIdCardByIdLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsIdLabelsByIdCardByIdLabel()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idList",
    "method": "updateIdListByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdListByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idMembers",
    "method": "addMembers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsIdMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idMembers",
    "method": "updateIdMembers",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsIdMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/idMembers/{idMember}",
    "method": "removeMemberByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsIdMembersByIdCardByIdMember()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/labels",
    "method": "addLabels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/labels",
    "method": "updateLabels",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsLabelsByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/labels/{color}",
    "method": "removeLabelsByIdCardByColor",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsLabelsByIdCardByColor()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "color",
        "schema": "string",
        "required": true,
        "description": "color",
        "example": "COLOR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/list",
    "method": "getListById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsListByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/list/{field}",
    "method": "getCardsListByIdCardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsListByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/markAssociatedNotificationsRead",
    "method": "markAssociatedNotificationsRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsMarkAssociatedNotificationsReadByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/members",
    "method": "listMembersByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsMembersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/membersVoted",
    "method": "getMembersVotedByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsMembersVotedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/membersVoted",
    "method": "addMembersVoted",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsMembersVotedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/membersVoted/{idMember}",
    "method": "removeMembersVotedByIdCardByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsMembersVotedByIdCardByIdMember()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/name",
    "method": "updateNameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsNameByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/pos",
    "method": "updatePosByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsPosByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/stickers",
    "method": "getStickersByIdCard",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsStickersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/stickers",
    "method": "addStickersByIdCard",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "addCardsStickersByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "left",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "top",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zIndex",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "removeStickerByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "deleteCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker",
        "example": "IDSTICKER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "getStickerByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker",
        "example": "IDSTICKER"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: image, imageScaled, imageUrl, left, rotate, top or zIndex",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/stickers/{idSticker}",
    "method": "updateStickersByIdCardByIdSticker",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsStickersByIdCardByIdSticker()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "idSticker",
        "schema": "string",
        "required": true,
        "description": "idSticker",
        "example": "IDSTICKER"
      },
      {
        "name": "image",
        "schema": "string",
        "description": ""
      },
      {
        "name": "left",
        "schema": "string",
        "description": ""
      },
      {
        "name": "rotate",
        "schema": "string",
        "description": ""
      },
      {
        "name": "top",
        "schema": "string",
        "description": ""
      },
      {
        "name": "zIndex",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/subscribed",
    "method": "updateSubscribedByIdCard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "updateCardsSubscribedByIdCard()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/cards/{idCard}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "card",
    "typeScriptTag": "card",
    "description": "getCardsByIdCardByField()",
    "parameters": [
      {
        "name": "idCard",
        "schema": "string",
        "required": true,
        "description": "card id or shortlink",
        "example": "IDCARD"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "addChecklists()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "deleteChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "checkItems",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      },
      {
        "name": "checkItemFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type",
        "default": "name, nameData, pos and state"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: idBoard, idCard, name or pos",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}",
    "method": "updateByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idCard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idChecklistSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/board",
    "method": "getBoardByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsBoardByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/board/{field}",
    "method": "getBoardByIdChecklistByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsBoardByIdChecklistByField()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/cards",
    "method": "listCardsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCardsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/cards/{filter}",
    "method": "getCardsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCardsByIdChecklistByFilter()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/checkItems",
    "method": "getCheckItemsByIdChecklist",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCheckItemsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type",
        "default": "name, nameData, pos and state"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/checkItems",
    "method": "addCheckItemsByIdChecklist",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "addChecklistsCheckItemsByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "checked",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/checkItems/{idCheckItem}",
    "method": "removeByIdCheckItem",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/checkItems/{idCheckItem}",
    "method": "getCheckItemsByIdChecklistByIdCheckItem",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsCheckItemsByIdChecklistByIdCheckItem()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "idCheckItem",
        "schema": "string",
        "required": true,
        "description": "idCheckItem",
        "example": "IDCHECKITEM"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name, nameData, pos, state or type",
        "default": "name, nameData, pos and state"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/idCard",
    "method": "updateIdCardByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsIdCardByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/name",
    "method": "updateNameByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsNameByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/pos",
    "method": "updatePosByIdChecklist",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "updateChecklistsPosByIdChecklist()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/checklists/{idChecklist}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "checklist",
    "typeScriptTag": "checklist",
    "description": "getChecklistsByIdChecklistByField()",
    "parameters": [
      {
        "name": "idChecklist",
        "schema": "string",
        "required": true,
        "description": "idChecklist",
        "example": "IDCHECKLIST"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels",
    "method": "createLabels",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "addLabels()",
    "parameters": [
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}",
    "method": "removeByIdLabel",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "deleteLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}",
    "method": "getByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: color, idBoard, name or uses",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}",
    "method": "updateByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "color",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}/board",
    "method": "getBoardByIdLabel",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsBoardByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}/board/{field}",
    "method": "getBoardByIdLabelByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "getLabelsBoardByIdLabelByField()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}/color",
    "method": "updateColorByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsColorByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/labels/{idLabel}/name",
    "method": "updateNameByIdLabel",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "label",
    "typeScriptTag": "label",
    "description": "updateLabelsNameByIdLabel()",
    "parameters": [
      {
        "name": "idLabel",
        "schema": "string",
        "required": true,
        "description": "idLabel",
        "example": "IDLABEL"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists",
    "method": "createList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addLists()",
    "parameters": [
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idListSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}",
    "method": "getByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, desc, descData, closed, idOrganization, pinned, url and prefs"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "name, closed, idBoard and pos"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}",
    "method": "updateByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "closed",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idListSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "subscribed",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/actions",
    "method": "getActionsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsActionsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000",
        "default": "0"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/archiveAllCards",
    "method": "archiveAllCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsArchiveAllCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/board",
    "method": "idBoardGet",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsBoardByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/board/{field}",
    "method": "getBoardByIdListByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsBoardByIdListByField()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/cards",
    "method": "getCardsByIdList",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "open"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/cards",
    "method": "createCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "due",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idMembers",
        "schema": "string",
        "description": ""
      },
      {
        "name": "labels",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/cards/{filter}",
    "method": "getCardsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsCardsByIdListByFilter()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/closed",
    "method": "updateClosedByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsClosedByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/idBoard",
    "method": "updateIdBoardByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsIdBoardByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/moveAllCards",
    "method": "moveAllCardsByIdList",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "addListsMoveAllCardsByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/name",
    "method": "updateNameByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsNameByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/pos",
    "method": "updatePosByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsPosByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/subscribed",
    "method": "updateSubscribedByIdList",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "updateListsSubscribedByIdList()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/lists/{idList}/{field}",
    "method": "getByIdListByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "list",
    "typeScriptTag": "list",
    "description": "getListsByIdListByField()",
    "parameters": [
      {
        "name": "idList",
        "schema": "string",
        "required": true,
        "description": "idList",
        "example": "IDLIST"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "actionSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionBefore",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "cards",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "none"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "cardMembers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "cardAttachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "url and previews"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boards",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, closed, idOrganization and pinned"
      },
      {
        "name": "boardActions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "boardActionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "boardActionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "boardActionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "boardActionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "boardLists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "none"
      },
      {
        "name": "boardMemberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "none"
      },
      {
        "name": "boardOrganization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardOrganizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "name and displayName"
      },
      {
        "name": "boardsInvited",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned"
      },
      {
        "name": "boardsInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, closed, idOrganization and pinned"
      },
      {
        "name": "boardStars",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "savedSearches",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizations",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public",
        "default": "none"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      },
      {
        "name": "organizationPaidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationsInvited",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public",
        "default": "none"
      },
      {
        "name": "organizationsInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      },
      {
        "name": "notifications",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard"
      },
      {
        "name": "notificationsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000",
        "default": "50"
      },
      {
        "name": "notificationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread",
        "default": "all"
      },
      {
        "name": "notificationMemberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "notificationMemberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "notificationBefore",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "notificationSince",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "tokens",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardBackgrounds",
        "schema": "string",
        "required": false,
        "description": "One of: all, custom, default, none or premium",
        "default": "none"
      },
      {
        "name": "customBoardBackgrounds",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "customStickers",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "customEmoji",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}",
    "method": "updateByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "avatarSource",
        "schema": "string",
        "description": ""
      },
      {
        "name": "bio",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "initials",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/colorBlind",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/locale",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/minutesBetweenSummaries",
        "schema": "string",
        "description": ""
      },
      {
        "name": "username",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/actions",
    "method": "listActionsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersActionsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000",
        "default": "0"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/avatar",
    "method": "uploadAvatarById",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersAvatarByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/avatarSource",
    "method": "updateAvatarSource",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersAvatarSourceByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/bio",
    "method": "updateBioById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBioByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardBackgrounds",
    "method": "getBoardBackgroundsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, custom, default, none or premium",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardBackgrounds",
    "method": "addBoardBackgrounds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "deleteBoardBackground",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground",
        "example": "IDBOARDBACKGROUND"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "getBoardBackgroundByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground",
        "example": "IDBOARDBACKGROUND"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardBackgrounds/{idBoardBackground}",
    "method": "updateBoardBackgroundsById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground",
        "example": "IDBOARDBACKGROUND"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars",
    "method": "getBoardStarsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardStarsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars",
    "method": "addBoardStarsByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersBoardStarsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "removeBoardStarByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar",
        "example": "IDBOARDSTAR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "getBoardStarByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar",
        "example": "IDBOARDSTAR"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}",
    "method": "updateBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar",
        "example": "IDBOARDSTAR"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}/idBoard",
    "method": "updateBoardStarsIdBoard",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar",
        "example": "IDBOARDSTAR"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardStars/{idBoardStar}/pos",
    "method": "updateBoardStarPosByIdMemberByIdBoardStar",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersBoardStarsPosByIdMemberByIdBoardStar()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardStar",
        "schema": "string",
        "required": true,
        "description": "idBoardStar",
        "example": "IDBOARDSTAR"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boards",
    "method": "getBoardsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "none"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "name and displayName"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "none"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boards/{filter}",
    "method": "getBoards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardsInvited",
    "method": "getInvitedBoards",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsInvitedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/boardsInvited/{field}",
    "method": "getBoardsInvitedByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersBoardsInvitedByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/cards",
    "method": "getCardsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCardsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "stickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/cards/{filter}",
    "method": "getCardsByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCardsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds",
    "method": "getCustomBoardBackgroundsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds",
    "method": "addCustomBoardBackgrounds",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomBoardBackgroundsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "removeCustomBoardBackgroundById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground",
        "example": "IDBOARDBACKGROUND"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "getCustomBoardBackgroundByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground",
        "example": "IDBOARDBACKGROUND"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: brightness, fullSizeUrl, scaled or tile",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customBoardBackgrounds/{idBoardBackground}",
    "method": "updateCustomBoardBackgrounds",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idBoardBackground",
        "schema": "string",
        "required": true,
        "description": "idBoardBackground",
        "example": "IDBOARDBACKGROUND"
      },
      {
        "name": "brightness",
        "schema": "string",
        "description": ""
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "tile",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customEmoji",
    "method": "listCustomEmojiByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomEmojiByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customEmoji",
    "method": "addCustomEmojiByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomEmojiByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customEmoji/{idCustomEmoji}",
    "method": "getCustomEmojiByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomEmojiByIdMemberByIdCustomEmoji()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idCustomEmoji",
        "schema": "string",
        "required": true,
        "description": "idCustomEmoji",
        "example": "IDCUSTOMEMOJI"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: name or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customStickers",
    "method": "getCustomStickersByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomStickersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customStickers",
    "method": "addCustomStickers",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersCustomStickersByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customStickers/{idCustomSticker}",
    "method": "removeCustomStickerByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersCustomStickersByIdMemberByIdCustomSticker()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idCustomSticker",
        "schema": "string",
        "required": true,
        "description": "idCustomSticker",
        "example": "IDCUSTOMSTICKER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/customStickers/{idCustomSticker}",
    "method": "getCustomStickerByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersCustomStickersByIdMemberByIdCustomSticker()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idCustomSticker",
        "schema": "string",
        "required": true,
        "description": "idCustomSticker",
        "example": "IDCUSTOMSTICKER"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: scaled or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/deltas",
    "method": "getDeltasByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersDeltasByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing",
        "example": "TAGS"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity",
        "example": "IXLASTUPDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/fullName",
    "method": "updateFullName",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersFullNameByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/initials",
    "method": "updateInitialsByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersInitialsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/notifications",
    "method": "getNotificationsByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersNotificationsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAdminToBoard, addAdminToOrganization, addedAttachmentToCard, addedMemberToCard, addedToBoard, addedToCard, addedToOrganization, cardDueSoon, changeCard, closeBoard, commentCard, createdCard, declinedInvitationToBoard, declinedInvitationToOrganization, invitedToBoard, invitedToOrganization, makeAdminOfBoard, makeAdminOfOrganization, memberJoinedTrello, mentionedOnCard, removedFromBoard, removedFromCard, removedFromOrganization, removedMemberFromCard, unconfirmedInvitedToBoard, unconfirmedInvitedToOrganization or updateCheckItemStateOnCard",
        "default": "all"
      },
      {
        "name": "readFilter",
        "schema": "string",
        "required": false,
        "description": "One of: all, read or unread",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000",
        "default": "50"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 100",
        "default": "0"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/notifications/{filter}",
    "method": "getNotificationsByIdMemberByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersNotificationsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/oneTimeMessagesDismissed",
    "method": "addOneTimeMessagesDismissedByIdMember",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersOneTimeMessagesDismissedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/organizations",
    "method": "listOrganizationsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, members, none or public",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/organizations/{filter}",
    "method": "getOrganizations",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsByIdMemberByFilter()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/organizationsInvited",
    "method": "listInvitedOrganizationsById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsInvitedByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/organizationsInvited/{field}",
    "method": "listOrganizationsInvitedByIdMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersOrganizationsInvitedByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/prefs/colorBlind",
    "method": "updatePrefsColorBlindByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsColorBlindByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/prefs/locale",
    "method": "updatePrefsLocaleByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsLocaleByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/prefs/minutesBetweenSummaries",
    "method": "updatePrefsMinutesBetweenSummariesById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersPrefsMinutesBetweenSummariesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches",
    "method": "getSavedSearchesByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersSavedSearchesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches",
    "method": "createSavedSearch",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "addMembersSavedSearchesByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "removeSavedSearchByIds",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "deleteMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch",
        "example": "IDSAVEDSEARCH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "getSavedSearchByIds",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch",
        "example": "IDSAVEDSEARCH"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}",
    "method": "updateSavedSearchesByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch",
        "example": "IDSAVEDSEARCH"
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "pos",
        "schema": "string",
        "description": ""
      },
      {
        "name": "query",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/name",
    "method": "updateSavedSearchesNameByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch",
        "example": "IDSAVEDSEARCH"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/pos",
    "method": "updateSavedSearchesPosByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesPosByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch",
        "example": "IDSAVEDSEARCH"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/savedSearches/{idSavedSearch}/query",
    "method": "updateSavedSearchQueryByIdMemberByIdSavedSearch",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "idSavedSearch",
        "schema": "string",
        "required": true,
        "description": "idSavedSearch",
        "example": "IDSAVEDSEARCH"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/tokens",
    "method": "getTokensByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersTokensByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/username",
    "method": "updateUsernameById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "updateMembersUsernameByIdMember()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/members/{idMember}/{field}",
    "method": "getByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "member",
    "typeScriptTag": "member",
    "description": "getMembersByIdMemberByField()",
    "parameters": [
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember or username",
        "example": "IDMEMBER"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/all/read",
    "method": "markAllAsRead",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "addNotificationsAllRead()",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator, type or unread",
        "default": "all"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "card",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "name"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "displayName"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}",
    "method": "updateByIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "updateNotificationsByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "unread",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/board",
    "method": "getBoardById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsBoardByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/board/{field}",
    "method": "getBoardByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsBoardByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/card",
    "method": "getCardById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsCardByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/card/{field}",
    "method": "getCardByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsCardByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/display",
    "method": "getDisplayByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsDisplayByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/entities",
    "method": "getEntitiesByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsEntitiesByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/list",
    "method": "getListByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsListByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/list/{field}",
    "method": "getListByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsListByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/member",
    "method": "getMemberByNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/member/{field}",
    "method": "getMemberByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/memberCreator",
    "method": "getMemberCreatorById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberCreatorByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/memberCreator/{field}",
    "method": "getMemberByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsMemberCreatorByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/organization",
    "method": "getOrganizationByIdNotification",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsOrganizationByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/organization/{field}",
    "method": "getOrganizationByIdNotificationByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsOrganizationByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/unread",
    "method": "updateUnreadByIdNotification",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "updateNotificationsUnreadByIdNotification()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/notifications/{idNotification}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "notification",
    "typeScriptTag": "notification",
    "description": "getNotificationsByIdNotificationByField()",
    "parameters": [
      {
        "name": "idNotification",
        "schema": "string",
        "required": true,
        "description": "idNotification",
        "example": "IDNOTIFICATION"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations",
    "method": "create",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "addOrganizations()",
    "parameters": [
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/associatedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/org",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/private",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/public",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/externalMembersDisabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/googleAppsVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/orgInviteRestrict",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "removeByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "getByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "none"
      },
      {
        "name": "membershipsMember",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "membershipsMemberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners",
        "default": "none"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials, username and confirmed"
      },
      {
        "name": "memberActivity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      },
      {
        "name": "membersInvited",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners",
        "default": "none"
      },
      {
        "name": "membersInvitedFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, initials, fullName and username"
      },
      {
        "name": "boards",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned",
        "default": "none"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      },
      {
        "name": "boardActions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "boardActionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsDisplay",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardActionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "boardActionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "boardActionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "boardActionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "boardLists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "none"
      },
      {
        "name": "paidAccount",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "name, displayName, desc, descData, url, website, logoHash, products and powerUps"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}",
    "method": "updateByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "desc",
        "schema": "string",
        "description": ""
      },
      {
        "name": "displayName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "name",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/associatedDomain",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/org",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/private",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/boardVisibilityRestrict/public",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/externalMembersDisabled",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/googleAppsVersion",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/orgInviteRestrict",
        "schema": "string",
        "description": ""
      },
      {
        "name": "prefs/permissionLevel",
        "schema": "string",
        "description": ""
      },
      {
        "name": "website",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/actions",
    "method": "getActionsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsActionsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "entities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "display",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "format",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "since",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "before",
        "schema": "string",
        "required": false,
        "description": "A date, or null"
      },
      {
        "name": "page",
        "schema": "string",
        "required": false,
        "description": "Page * limit must be less than 1000",
        "default": "0"
      },
      {
        "name": "idModels",
        "schema": "string",
        "required": false,
        "description": "Only return actions related to these model ids"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "memberCreator",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberCreatorFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/boards",
    "method": "getBoardsByOrgId",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsBoardsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, members, open, organization, pinned, public, starred or unpinned",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "all"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "actionsEntities",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "actionsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 1000",
        "default": "50"
      },
      {
        "name": "actionsFormat",
        "schema": "string",
        "required": false,
        "description": "One of: count, list or minimal",
        "default": "list"
      },
      {
        "name": "actionsSince",
        "schema": "string",
        "required": false,
        "description": "A date, null or lastView"
      },
      {
        "name": "actionFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: data, date, idMemberCreator or type",
        "default": "all"
      },
      {
        "name": "memberships",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "none"
      },
      {
        "name": "organization",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "name and displayName"
      },
      {
        "name": "lists",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none or open",
        "default": "none"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/boards/{filter}",
    "method": "getBoardsByIdOrgByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsBoardsByIdOrgByFilter()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/deltas",
    "method": "getOrganizationDeltas",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsDeltasByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "tags",
        "schema": "string",
        "required": true,
        "description": "A valid tag for subscribing",
        "example": "TAGS"
      },
      {
        "name": "ixLastUpdate",
        "schema": "string",
        "required": true,
        "description": "a number from -1 to Infinity",
        "example": "IXLASTUPDATE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/desc",
    "method": "updateDescriptionByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsDescByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/displayName",
    "method": "updateDisplayNameByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsDisplayNameByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/logo",
    "method": "removeLogoByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsLogoByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/logo",
    "method": "uploadLogoByIdOrg",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "addOrganizationsLogoByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "file",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members",
    "method": "getMembersByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: admins, all, none, normal or owners",
        "default": "all"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      },
      {
        "name": "activity",
        "schema": "string",
        "required": false,
        "description": "true or false ; works for premium organizations only."
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members",
    "method": "updateMembersByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members/{filter}",
    "method": "listMembersByIdOrgByFilter",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersByIdOrgByFilter()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": true,
        "description": "filter",
        "example": "FILTER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}",
    "method": "removeMemberByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsMembersByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}",
    "method": "updateMembersByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      },
      {
        "name": "email",
        "schema": "string",
        "description": ""
      },
      {
        "name": "fullName",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/all",
    "method": "removeMemberAll",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsMembersAllByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/cards",
    "method": "listMembersCardsByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersCardsByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      },
      {
        "name": "actions",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: addAttachmentToCard, addChecklistToCard, addMemberToBoard, addMemberToCard, addMemberToOrganization, addToOrganizationBoard, commentCard, convertToCardFromCheckItem, copyBoard, copyCard, copyCommentCard, createBoard, createCard, createList, createOrganization, deleteAttachmentFromCard, deleteBoardInvitation, deleteCard, deleteOrganizationInvitation, disablePowerUp, emailCard, enablePowerUp, makeAdminOfBoard, makeNormalMemberOfBoard, makeNormalMemberOfOrganization, makeObserverOfBoard, memberJoinedTrello, moveCardFromBoard, moveCardToBoard, moveListFromBoard, moveListToBoard, removeChecklistFromCard, removeFromOrganizationBoard, removeMemberFromCard, unconfirmedBoardInvitation, unconfirmedOrganizationInvitation, updateBoard, updateCard, updateCard:closed, updateCard:desc, updateCard:idList, updateCard:name, updateCheckItemStateOnCard, updateChecklist, updateList, updateList:closed, updateList:name, updateMember or updateOrganization"
      },
      {
        "name": "attachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "attachmentFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: bytes, date, edgeColor, idMember, isUpload, mimeType, name, previews or url",
        "default": "all"
      },
      {
        "name": "members",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials and username"
      },
      {
        "name": "checkItemStates",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "checklists",
        "schema": "string",
        "required": false,
        "description": "One of: all or none",
        "default": "none"
      },
      {
        "name": "board",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name, desc, closed, idOrganization, pinned, url and prefs"
      },
      {
        "name": "list",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "listFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, idBoard, name, pos or subscribed",
        "default": "all"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "One of: all, closed, none, open or visible",
        "default": "visible"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/members/{idMember}/deactivated",
    "method": "updateMembersDeactivatedByIdOrgByIdMember",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembersDeactivatedByIdOrgByIdMember()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMember",
        "schema": "string",
        "required": true,
        "description": "idMember",
        "example": "IDMEMBER"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/membersInvited",
    "method": "getMembersInvitedByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersInvitedByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/membersInvited/{field}",
    "method": "getMembersInvitedByIdOrgByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembersInvitedByIdOrgByField()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/memberships",
    "method": "listMembershipsByIdOrg",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembershipsByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "filter",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: active, admin, deactivated, me or normal",
        "default": "all"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/memberships/{idMembership}",
    "method": "getMembershipsByIdOrgByIdMembership",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsMembershipsByIdOrgByIdMembership()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership",
        "example": "IDMEMBERSHIP"
      },
      {
        "name": "member",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "fullName and username"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/memberships/{idMembership}",
    "method": "updateMembershipByIdOrgByIdMembership",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsMembershipsByIdOrgByIdMembership()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "idMembership",
        "schema": "string",
        "required": true,
        "description": "idMembership",
        "example": "IDMEMBERSHIP"
      },
      {
        "name": "member_fields",
        "schema": "string",
        "description": ""
      },
      {
        "name": "type",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/name",
    "method": "updateNameByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsNameByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/associatedDomain",
    "method": "deletePrefsAssociatedDomainByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsPrefsAssociatedDomainByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/associatedDomain",
    "method": "updatePrefsAssociatedDomainByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsAssociatedDomainByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/org",
    "method": "updatePrefsBoardVisibilityRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/private",
    "method": "updatePrefsVisibilityByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictPrivateByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/boardVisibilityRestrict/public",
    "method": "updatePrefsBoardVisibilityRestrictPublicByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsBoardVisibilityRestrictPublicByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/externalMembersDisabled",
    "method": "updatePrefsExternalMembersDisabledByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsExternalMembersDisabledByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/googleAppsVersion",
    "method": "updatePrefsGoogleAppsVersionByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsGoogleAppsVersionByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/orgInviteRestrict",
    "method": "removeInviteRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "required": true,
        "description": "An email address with optional expansion tokens",
        "example": "VALUE"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/orgInviteRestrict",
    "method": "updatePrefsOrgInviteRestrictByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsOrgInviteRestrictByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/prefs/permissionLevel",
    "method": "updatePrefsPermissionLevelByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsPrefsPermissionLevelByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/website",
    "method": "updateWebsiteByIdOrg",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "updateOrganizationsWebsiteByIdOrg()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/organizations/{idOrg}/{field}",
    "method": "getByIdAndField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "organization",
    "typeScriptTag": "organization",
    "description": "getOrganizationsByIdOrgByField()",
    "parameters": [
      {
        "name": "idOrg",
        "schema": "string",
        "required": true,
        "description": "idOrg or name",
        "example": "IDORG"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/search",
    "method": "getResults",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "getSearch()",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "a string with a length from 1 to 16384",
        "example": "QUERY"
      },
      {
        "name": "idBoards",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of objectIds, 24-character hex strings",
        "default": "mine"
      },
      {
        "name": "idOrganizations",
        "schema": "string",
        "required": true,
        "description": "A comma-separated list of objectIds, 24-character hex strings",
        "example": "IDORGANIZATIONS"
      },
      {
        "name": "idCards",
        "schema": "string",
        "required": false,
        "description": "A comma-separated list of objectIds, 24-character hex strings"
      },
      {
        "name": "modelTypes",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: actions, boards, cards, members or organizations",
        "default": "all"
      },
      {
        "name": "boardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: closed, dateLastActivity, dateLastView, desc, descData, idOrganization, invitations, invited, labelNames, memberships, name, pinned, powerUps, prefs, shortLink, shortUrl, starred, subscribed or url",
        "default": "name and idOrganization"
      },
      {
        "name": "boardsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000",
        "default": "10"
      },
      {
        "name": "cardFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: badges, checkItemStates, closed, dateLastActivity, desc, descData, due, email, idAttachmentCover, idBoard, idChecklists, idLabels, idList, idMembers, idMembersVoted, idShort, labels, manualCoverAttachment, name, pos, shortLink, shortUrl, subscribed or url",
        "default": "all"
      },
      {
        "name": "cardsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000",
        "default": "10"
      },
      {
        "name": "cardsPage",
        "schema": "string",
        "required": false,
        "description": "a number from 0 to 100",
        "default": "0"
      },
      {
        "name": "cardBoard",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardList",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardMembers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardStickers",
        "schema": "string",
        "required": false,
        "description": " true or false"
      },
      {
        "name": "cardAttachments",
        "schema": "string",
        "required": false,
        "description": "A boolean value or &quot;cover&quot; for only card cover attachments"
      },
      {
        "name": "organizationFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: billableMemberCount, desc, descData, displayName, idBoards, invitations, invited, logoHash, memberships, name, powerUps, prefs, premiumFeatures, products, url or website",
        "default": "name and displayName"
      },
      {
        "name": "organizationsLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000",
        "default": "10"
      },
      {
        "name": "memberFields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, bio, bioData, confirmed, fullName, idPremOrgsAdmin, initials, memberType, products, status, url or username",
        "default": "avatarHash, fullName, initials, username and confirmed"
      },
      {
        "name": "membersLimit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 1000",
        "default": "10"
      },
      {
        "name": "partial",
        "schema": "string",
        "required": false,
        "description": " true or false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/search/members",
    "method": "findMembers",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "search",
    "typeScriptTag": "search",
    "description": "getSearchMembers()",
    "parameters": [
      {
        "name": "query",
        "schema": "string",
        "required": true,
        "description": "a string with a length from 1 to 16384",
        "example": "QUERY"
      },
      {
        "name": "limit",
        "schema": "string",
        "required": false,
        "description": "a number from 1 to 20",
        "default": "8"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "idOrganization",
        "schema": "string",
        "required": false,
        "description": "An id, or null"
      },
      {
        "name": "onlyOrgMembers",
        "schema": "string",
        "required": false,
        "description": "A boolean"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/sessions",
    "method": "createAndUpdate",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "addSessions()",
    "parameters": [
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/sessions/socket",
    "method": "getSocketSessions",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "getSessionsSocket()",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/sessions/{idSession}",
    "method": "updateStatusByIdSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "updateSessionsByIdSession()",
    "parameters": [
      {
        "name": "idSession",
        "schema": "string",
        "required": true,
        "description": "idSession",
        "example": "IDSESSION"
      },
      {
        "name": "idBoard",
        "schema": "string",
        "description": ""
      },
      {
        "name": "status",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/sessions/{idSession}/status",
    "method": "updateStatusByIdSession",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "session",
    "typeScriptTag": "session",
    "description": "updateSessionsStatusByIdSession()",
    "parameters": [
      {
        "name": "idSession",
        "schema": "string",
        "required": true,
        "description": "idSession",
        "example": "IDSESSION"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}",
    "method": "deleteByToken",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "deleteTokensByToken()",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}",
    "method": "getByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensByToken()",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: dateCreated, dateExpires, idMember, identifier or permissions",
        "default": "all"
      },
      {
        "name": "webhooks",
        "schema": "string",
        "required": false,
        "description": " true or false"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/member",
    "method": "getMemberByToken",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensMemberByToken()",
    "parameters": [
      {
        "name": "fields",
        "schema": "string",
        "required": false,
        "description": "all or a comma-separated list of: avatarHash, avatarSource, bio, bioData, confirmed, email, fullName, gravatarHash, idBoards, idBoardsPinned, idOrganizations, idPremOrgsAdmin, initials, loginTypes, memberType, oneTimeMessagesDismissed, prefs, premiumFeatures, products, status, status, trophies, uploadedAvatarHash, url or username",
        "default": "all"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/member/{field}",
    "method": "getMemberByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensMemberByTokenByField()",
    "parameters": [
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "getWebhooks",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensWebhooksByToken()",
    "parameters": [],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "registerWebhook",
    "httpMethod": HttpMethodsEnum.POST,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "addTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/webhooks",
    "method": "updateWebhooksByToken",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "updateTokensWebhooksByToken()",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/webhooks/{idWebhook}",
    "method": "removeByTokenByIdWebhook",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "deleteTokensWebhooksByTokenByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/webhooks/{idWebhook}",
    "method": "getWebhookById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensWebhooksByTokenByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/tokens/{token}/{field}",
    "method": "getByTokenByField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "token",
    "typeScriptTag": "token",
    "description": "getTokensByTokenByField()",
    "parameters": [
      {
        "name": "token",
        "schema": "string",
        "required": true,
        "description": "token",
        "example": "TOKEN"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/types/{id}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "type",
    "typeScriptTag": "type",
    "description": "getTypesById()",
    "parameters": [
      {
        "name": "id",
        "schema": "string",
        "required": true,
        "description": "id",
        "example": "ID"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks",
    "method": "update",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooks()",
    "parameters": [
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "removeById",
    "httpMethod": HttpMethodsEnum.DELETE,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "deleteWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "getById",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "getWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}",
    "method": "updateByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      },
      {
        "name": "description",
        "schema": "string",
        "description": ""
      },
      {
        "name": "active",
        "schema": "string",
        "description": ""
      },
      {
        "name": "callbackURL",
        "schema": "string",
        "description": ""
      },
      {
        "name": "idModel",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}/active",
    "method": "updateActiveById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksActiveByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}/callbackURL",
    "method": "updateCallbackUrlById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksCallbackURLByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}/description",
    "method": "updateDescriptionByIdWebhook",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksDescriptionByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}/idModel",
    "method": "updateModelById",
    "httpMethod": HttpMethodsEnum.PUT,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "updateWebhooksIdModelByIdWebhook()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      },
      {
        "name": "value",
        "schema": "string",
        "description": ""
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  },
  {
    "url": "/webhooks/{idWebhook}/{field}",
    "method": "getByIdField",
    "httpMethod": HttpMethodsEnum.GET,
    "tag": "webhook",
    "typeScriptTag": "webhook",
    "description": "getWebhooksByIdWebhookByField()",
    "parameters": [
      {
        "name": "idWebhook",
        "schema": "string",
        "required": true,
        "description": "idWebhook",
        "example": "IDWEBHOOK"
      },
      {
        "name": "field",
        "schema": "string",
        "required": true,
        "description": "field",
        "example": "FIELD"
      }
    ],
    "responses": [
      {
        "statusCode": "200",
        "description": "Success"
      },
      {
        "statusCode": "400",
        "description": "Server rejection"
      }
    ]
  }
]
    }
      language="TypeScript"
      apiTitle="Trello"
      apiBaseUrl="https://trello.com/1"
      apiVersion="1.0"
      endpoints={264}
      sdkMethods={324}
      schemas={122}
      parameters={1907}
      difficulty="Very Hard"
      openApiRaw="https://raw.githubusercontent.com/konfig-sdks/openapi-examples/HEAD/trello/openapi.yaml"
    />
  );
}
  