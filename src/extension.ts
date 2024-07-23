// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

const quickPick = async (): Promise<void> => { 
	const items = ['hola', 'adios', 'ciao', 'hello', 'bye', 'hi'].map((label) => ({ label }));
	const selectedItems = [items[0], items[1]];
	const quickPick = vscode.window.createQuickPick();
	quickPick.canSelectMany = true;
	quickPick.placeholder = 'Select items';
	
	quickPick.matchOnDescription = true;
	quickPick.matchOnDetail = true;
  
	quickPick.items = items;
	quickPick.selectedItems = selectedItems;
	quickPick.show();
  
	quickPick.onDidChangeSelection((selection) => { 
	  console.log('Selection changed', selection); 
	});
	
	quickPick.onDidAccept(() => { 
	  console.log('Accept', quickPick.selectedItems); 
	  quickPick.hide(); 
	});
  };
  

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "quickpick-insiders-issue" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	const disposable = vscode.commands.registerCommand('quickpick-insiders-issue.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from Quickpick Insiders Issue!');
	});

	const quickPickCommand = vscode.commands.registerCommand('quickpick-insiders-issue.quickPickTest', async () => { 
		quickPick();
	});

	context.subscriptions.push(disposable, quickPickCommand);
}

// This method is called when your extension is deactivated
export function deactivate() {}
