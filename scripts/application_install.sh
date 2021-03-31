#!/bin/bash

# Downloads node and npm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install v14.16.0 # latest as of 31-03-2021

# Create working directory if it doesn't exists already
DIR="/home/ubuntu/carryout"
if [ -d "$DIR" ]; then
  echo "$DIR exists"
else
  echo "Creating $DIR"
  mkdir "$DIR"
fi

