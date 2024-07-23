# QuickPick Insiders Issue

This is just a demo repository to showcase an issue I found while testing a feature in a extension I'm helping to develop.

The issue seems to be affecting the selection of a `quickpick`.

Check out the [issue in the VS Code repository](https://github.com/microsoft/vscode/issues/223363)

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

---

Version: 1.92.0-insider (user setup)
Commit: 22e3447b4b410dcf8426bf70743c5dd4030d6122
Date: 2024-07-23T05:03:52.385Z
Electron: 30.2.0
ElectronBuildId: 9884022
Chromium: 124.0.6367.243
Node.js: 20.15.0
V8: 12.4.254.20-electron.0
OS: Windows_NT x64 10.0.22631

**(Both with WSL2 and directly with Windows)**

### Steps

1. Debug the extension
1. Execute the `QuickPick Test` command by using the command palette. It should show two selected items. Escape. Do it again. The same items should be selected.
1. Go to the explorer activity. You should see a view named QuickPick Tester. There's a view action (red icon). This should execute the previous command. Just click it several times. You should see the selection switching from none to some selected items.
1. You can check the `Debug Console` in order to get the selection changes.
1. Same happens if you use the tree item contextual command.

## See it in action

<video src="https://github.com/robertohuertasm/quickpick-insiders-issue/raw/master/qp_issue.mp4" controls muted loop autoplay title="QuickPick issue"></video>

https://github.com/user-attachments/assets/3ed020f2-7400-44bd-b518-64f47fedd4b0



