---
layout: page
title: Bob Fixes the Board
description: Using IBM Bob to explore 4ga Boards, an open-source kanban app I had never seen, and fix a real bug with tests.
importance: 8
category: software engineering
---

A personal project to learn **IBM Bob**, IBM's AI coding assistant. I started it for AngelHack × IBM's _Building with IBM Bob_ (October 2026) but missed the submission deadline, so I finished it for fun. The idea follows the event's student theme: start with an unfamiliar application, use Bob to understand it, and fix a real issue.

### The app and the bug

[4ga Boards](https://github.com/RARgames/4gaBoards) is an open-source, Trello-style kanban app: React, Redux-Saga and Redux-ORM on the client; Sails.js, PostgreSQL and Socket.IO on the server.

Issue [#279](https://github.com/RARgames/4gaBoards/issues/279) (duplicate [#159](https://github.com/RARgames/4gaBoards/issues/159)): if you open a card and then delete the list it belongs to, the whole board is replaced by **"Card Not Found"**, and the URL stays on the deleted card.

### How Bob fixed it

- **`/init`:** Bob read the monorepo and wrote `AGENTS.md` plus rules for each mode, covering the stack, commands and code style.
- **Root cause:** Bob compared the sagas. Deleting a card checks whether it's the open one and goes back to the board first. Deleting a list never checks, so the route keeps pointing at a card that no longer exists.
- **Fix:** before a list is removed, Bob's change looks up the open card with `selectCardById` and calls `goToBoard` if the card is in that list. This covers your own delete and the real-time socket event when someone else deletes the list. One file, 21 lines added.
- **Tests:** Bob wrote six Jest tests and fixed its own test-setup and lint errors until all six passed with zero lint warnings.
- **Review and commit:** Bob reviewed both files against the project's rules, then committed and pushed them.
- **Pull request:** I opened the fix upstream as [RARgames/4gaBoards#1113](https://github.com/RARgames/4gaBoards/pull/1113), linked to close both issues once it is merged.

The fix run took Bob 47 tool calls in about three minutes. The whole project used about 6 Bobcoins.

### Verification

- **Tests:** 6 of 6 pass with the fix; all 6 fail without it.
- **In the app:** deleting the list of an open card now returns to the board, both in the same tab and when the list is deleted from another tab.

- **Upstream pull request:** [RARgames/4gaBoards#1113](https://github.com/RARgames/4gaBoards/pull/1113)
- **Project write-up and Bob session records:** [hendrosetyawan/4gaBoards, branch ibm-bob-project](https://github.com/hendrosetyawan/4gaBoards/tree/ibm-bob-project)
- **The fix:** [commit 44736daa](https://github.com/hendrosetyawan/4gaBoards/commit/44736daab096e861c755edfa925e0e586d98b1a3)

_IBM Bob · React · Redux-Saga · Jest · Sails.js · PostgreSQL_
