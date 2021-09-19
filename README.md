

      This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# COMP90082 Software Project - Software Project Databases

This project aims to have a software system that automatically gathers and summarise all aspects of the software engineering activities of CIS (Computing and Information Systems) Software Projects (COMP90082) developed. This will allow course coordinators to monitor and promptly provide meaningful feedback to teams, improve the quality of processes used in development and software systems developed, thus ensuring software deployment at the end of every project.

# Management of branches and releases
In Semester 2, 2021, in order to make it easier to distinguish from the previous work, there is an instruction of branch and release management.

Branch management is composed of the following parts:

- <code>sm2-demo</code> is a demo for running in local environments. It is updated by Yingpeng Tan.

- <code>sm2-jira</code> is the branch of new features on Jira part. It is updated by Yixiao Zhang and Yingpeng Tan.

- <code>sm2-git</code> is the branch of new features on Git part. It is updated by Shisheng Liu and Qiuyuan Huang.

- <code>sm2-confluence</code> is the branch of new features on Confluence part. It is updated by Yang-Han Chen and Yalan Zhao.

# Deployment
## To start a front-end for developing:
<ol>
      <li>install npm, can refer to https://www.npmjs.com/get-npm</li>
      <ul>
       <li>Please ensure the version of <code>nodeJS >= 10</code> <code>npm >= 5</code></li>
       <ul>
           <li>To upgrade your nodeJS: <code>npm cache clean -f</code> <code>npm install -g n</code> <code>n stable</code></li>
             <li>To upgrade your npm: <code>npm update -g</code></li>
       </ul>
      </ul>
      <li>Before Installation, please change the forwarding address of the frontend to work with the backend locally. The files below need to be modified:
            <ul>
                  <li><code>./package.json</code><br><code> “proxy”: “http://127.0.0.1:8000”,</code></li>
                  <li><code>./webpack.config.js</code><br><code>apiUrl: “http://127.0.0.1:8000”,</code></li>
            </ul>      
      <li>Install the front-end project, in CLI:  <code>npm install</code></li>   
      <li>Run the front-end project by <code>npm start</code>.  The front-end is now running on http://127.0.0.1:8000/ </li> 
</ol>
  
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Change Log
## Version 1: (2021.September.19)
### 2021.9.14
* Individual Confluence Pages Contribution
### 2021.9.16
* Activate new features in Process Page and Communication Page
### 2021.9.16
* Add new features in Individual Contribution Page
### 2021.9.19
* Add Git Individual Contribution & Process Quality Feature
