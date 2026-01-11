# Welcome to the Anythink Market repo (powered by [Wilco](https://www.trywilco.com))

To start the app use Docker. It will start both frontend and backend, including all the relevant dependencies, and the db.

Please find more info about each part in the relevant Readme file ([frontend](frontend/readme.md) and [backend](backend/README.md)).

## Development

When implementing a new feature or fixing a bug, please create a new pull request against `main` from a feature/bug branch and add `@vanessa-cooper` as reviewer.

<!-- HOW TO CREATE A PULL REQUEST (FEATURE / BUG FIX)

Steps to follow when implementing a new feature or fixing a bug:

1. Switch to main branch and update it
   main
git checkout main
   git pull origin 
2. Create a new branch from main
   For a feature:
   git checkout -b feature/your-feature-name

   For a bug fix:
   git checkout -b bugfix/your-bug-name

3. Make the required code changes
   - Implement the feature OR
   - Fix the bug

4. Stage and commit your changes
   git add .
   git commit -m "Brief description of changes"

5. Push the branch to GitHub
   git push origin your-branch-name

6. Create a Pull Request on GitHub
   - Base branch: main
   - Compare branch: feature/bug branch
   - Add a clear title and description

7. Add reviewer
   - Assign @vanessa-cooper as reviewer

8. Wait for review and make changes if requested
   - Push updates to the same branch
   - PR will update automatically -->


## How to run in dev mode?

### Using Codespace
1.  run `docker compose up`

## Tests
Documentation about running the End to End test can be found under the `/tests` directory
