Getting started with Chromatic

We start by accessing the Get started now page from Chromatic and following the steps:

Sign in with GitHub

Authorize Chromatic

Select "Choose from GitHub" then "Storybook for react apps" from your GitHub projects

Cool! We now have a new project on chromatic.com. 

The next step is to integrate the Chromatic library into our project. In the next screen, you will see your project token:

Now it's time to install Chromatic in the project:

Important:

If you have uncommitted changes in your repository, now it's time to commit them. This way we have a clean git status for the upcoming commits we'll be making.

yarn add -D chromatic

Let's get the project token provided in that screen and save it as a CHROMATIC_PROJECT_TOKEN environment variable in the .env file, and Chromatic will identify it automatically when we run its command. Go ahead and store the token in the .env file at the root level of your repository:

// .env
CHROMATIC_PROJECT_TOKEN=your-token-here

An add a chromatic command to your package.json:

// package.json
{
  "scripts": {
    "chromatic": "chromatic --exit-zero-on-changes"
  }
}

Note:

Foreshadowing 