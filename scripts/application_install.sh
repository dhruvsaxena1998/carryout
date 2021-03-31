#!/bin/bash

# Downloads node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v14.16.0 # latest as of 31-03-2021


# Downloads mongodb
wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | sudo apt-key add -
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list
sudo apt-get update
sudo apt-get install -y mongodb-org


# Create working directory if it doesn't exists already
DIR="/home/ubuntu/carryout"
if [ -d "$DIR" ]; then
  echo "$DIR exists"
else
  echo "Creating $DIR"
  mkdir "$DIR"
fi

