# App Build Instructions

## Ensure `yarn` (and not `cmdtest`) **version 1.9.2** is installed:

- `sudo apt remove cmdtest` (if necessary)
- `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`
- `sudo apt update && sudo apt install yarn`

## Install nvm

- `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash`
- Close and reopen terminal

## Install latest version of Node

- `nvm install node`
- `nvm use node`

## Install project dependencies

`$ yarn`

## Start local server

`npm start`
