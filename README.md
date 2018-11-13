Welcome to the BU Workshop. 

**INSTRUCTIONS**

By now you should be familiar with how Red Hat’s UXD team uses Github to design and develop PatternFly. The aim of this workshop is to edit and run a simple React application by using PatternFly 4 React components and Github. The goal is to replace the code for the example web page with components from the PatternFly-Next React library. 

**Github Log In**
1. One person in the group should log into their GitHub account. Don’t have one? Sign up for an account at 		https://github.com/

**Forking**
2. Forking is necessary to avoid overriding the original repository when making edits. Navigate to: https://github.com/rh-uxd/bu-workshop. Fork the repository by clicking on the **“FORK”** button in the top right corner. This will create a copy on your own account.


*From this step you can choose to take one of two paths. If you are confident that your computer’s development environment is set up (code editor, npm, node version 8) choose **Continue with Local Development**. If this is your first time setting up a development environment and you would rather skip this step, choose Continue with Remote Development.*


**Continue with local development**
**Continue with remote development**


**LOCAL DEVELOPMENT**


**Cloning**
3. In Github, go to your Profile > Repositories > bu-workshop. Click the green button in the top right corner that says **“Clone or Download”** and use the clipboard icon to copy that link. 
4. Open the Terminal from your local machine (on Macs search for Terminal. Command + space + type in “terminal”). Navigate to a folder that you would like to clone the bu-workshop repository into. Use *“cd <folder name>”* to open a folder, *“cd ..”* to go back and *“ls”* to see what is inside of the current folder. Here is a list of commands for the terminal - https://www.git-tower.com/blog/command-line-cheat-sheet/ 
Once you have found the folder, type *“git clone <the copied link>”*. Now you have the repository copied to your local machine! 
**Note:** If you get an error about installing x-code when you try to git clone:
	a. Run in the terminal: xcode-select --install
	b. In a new terminal window, try to git clone again

**Running the application via NPM**
5. In order to run the application in the web browser, we need to install NPM.
6. NPM is a package manager that is bundled with Node.js. It is needed to download the dependencies for the repository. If you don’t already have it, you can download the installer from https://nodejs.org/en/download/ (you may have to close all open terminals first). Make sure that you are in the folder “bu-workshop” and then run the following command within the repo directory: *npm install*
7.After the dependencies have been installed, you can start the application by running: *npm start*. A new tab should open in your browser, otherwise type http://localhost:3000/ in your browser. When you run it, you should see the webpage on your handout. Ask a representative if you need help.

**Open a Code Editor**
8. Open your code editor. Don’t have one? We suggest downloading Microsoft’s **Visual Studio Code** here: https://code.visualstudio.com/download 
9. Launch VS Code or your code editor.
10. File > Open > navigate to where the repository was cloned. Select the folder **bu-workshop** and click open.
11. This will open the folder and all of its files inside of the code editor. 

**PatternFly-React**
12. Go back to your terminal. To exit out of what is running: (for Macs: Control + C).
13. In order to use PatternFly React in the application you will need to install its dependency. Type this into the command line of your terminal: 
	*npm install @patternfly/react-core --save*
14. Go back to your code editor. Now that you have the dependency installed, add the base css file to the root of the application this would be in your src/index.js file: type:
	*import '@patternfly/react-core/dist/styles/base.css'*;
15. The goal is to swap out the HTML/CSS code for PF-React components. The current react components for PatternFly 4 are here: http://patternfly-react.surge.sh/patternfly-4
	Example: In your src/App.js file, import the Card and CardBody components
		*import { Card, CardBody } from ‘@patternfly/react-core’;*
	Find and replace:
		<div className="card">I am a card</div>
	with
		<Card><CardBody>I am a card</CardBody></Card>
	
16. Can you replace the .cardParent and .cardRow containers with the Gallery and GalleryItem layout components?
17. There should be some space between the cards. Can you find a property for the Gallery that can help with this?
	**Hint:** Each <Card> should be in its own <GalleryItem> container for this to work
18. Can you find a suitable component replacement for the .nav container?
19. Is there a layout that can be used for the entire page that includes a header, sidebar, and main content?
20. Once you finish this, we will give you the link to check how you did. 

**Adding/Commiting Changes**
21. In the terminal in the “bu-workshop” folder type git status to see the files you have modified.
22. *git add .*  stages your files for commit.
23. To commit these type *git commit -m ‘<commit message>’*
24. Type *git push origin master* to push the local changes to your branch


**REMOTE DEVELOPMENT**


**Cloning**
3. Go here: https://codesandbox.io/s/github and import your forked project. The path should look something like https://github.com/<your_username>/bu-workshop. Click on the **“Open Sandbox”** button to proceed.

**PatternFly-React**
4. Click on the **“Add Dependency”** button in the lower left corner.
5. Search for **@patternfly/react-core** and select the first item from the search results.
6. Now that you have the dependency installed, add the base css file to the root of the application this would be in your **src/index.js** file: type:
*import "@patternfly/react-core/dist/styles/base.css";*
(don’t forget to save)
7. The goal is to swap out the HTML/CSS code for PF-React components. The current react components for PatternFly 4 are here: http://patternfly-react.surge.sh/patternfly-4
	a. Example: In your **src/App.js** file, import the Card and CardBody components
		*import { Card, CardBody } from "@patternfly/react-core";*
	b. Find and replace:
		*<div className="card">I am a card</div>*
	with
		*<Card><CardBody>I am a card</CardBody></Card>*
8. Can you replace the *.cardParent* and *.cardRow* containers with the Gallery and GalleryItem layout components?
9. There should be some space between the cards. Can you find a property for the Gallery that can help with this?
	a. **Hint:** Each <Card> should be in its own <GalleryItem> container for this to work
10. Can you find a suitable component replacement for the .nav container?
11. Is there a layout that can be used for the entire page that includes a header, sidebar, and main content?
12. Once you finish this, we will give you the link to check how you did. 


**Adding/Commiting Changes**
13. So far, the changes you’ve made are only visible in codesandbox and not in your forked GitHub repo. To save your changes back to your repo:
	a. Make sure you’re signed in with your GitHub account in the upper right corner
	b. When prompted, allow codesandbox access to your GitHub repos
	c. Once logged in, you should see the GitHub icon appear in the left sidebar. Click it and activate the Sign In button
	d. After signing in, you will see a list of changed files. Simply provide a Subject and optional description, then 	   click the “Commit” button. Your changes will be saved back into your fork!


**Congratulations on completing this task**








