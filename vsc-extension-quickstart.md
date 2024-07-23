# QuickPick Insiders Issue

This is just a demo repository to showcase an issue I found while testing a feature in a extension I'm helping to develop.

The issue seems to be affecting the selection of a `quickpick`.

## How to reproduce it

Tested in:

Version: 1.92.0-insider (Universal)
Commit: 89690b9d76a88fab676d26651134a1ffa4562732
Date: 2024-07-19T05:03:57.939Z
Electron: 30.1.2
ElectronBuildId: 9870757
Chromium: 124.0.6367.243
Node.js: 20.14.0
V8: 12.4.254.20-electron.0
OS: Darwin arm64 23.5.0

### Steps

1. Debug the extension
1. Execute the `QuickPick Test` command by using the command palette. It should show two selected items. Escape. Do it again. The same items should be selected.
1. Go to the explorer activity. You should see a view named QuickPick Tester. There's a view action (red icon). This should execute the previous command. Just click it several times. You should see the selection switching from none to some selected items.
1. You can check the `Debug Console` in order to get the selection changes.

## See it in action

<video src="qp_issue.mp4" controls muted loop autoplay title="QuickPick issue"></video>
