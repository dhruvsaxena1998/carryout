#!/bin/bash

# Give permissions
sudo chmod -R 777 /home/ubuntu/carryout/express-server

# Navigate to working directory
cd /home/ubuntu/carryout/express-server

# Add npm and node to PATH
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # Loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion" # Loads bash completion (node is available in PATH now)


# Start MongoDB Server
sudo systemctl start mongod

# Install globall packages
npm i -g yarn@latest pm2 serve

source ~/.bashrc


# Install packages
yarn install

# Build
yarn build
pm2 stop server
# Start production env. in background
pm2 start npm --name "express" -- run start:dev