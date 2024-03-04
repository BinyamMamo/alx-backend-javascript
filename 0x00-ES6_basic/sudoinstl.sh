#!/bin/bash

# Function to install a specific version of Node.js using NVM
install_node() {
  echo "Installing Node.js version $1"
  sudo nvm install $1
  sudo nvm alias default $1
  sudo nvm use default
}

# Function to install a specific version of npm
install_npm() {
  echo "Installing npm version $1"
  sudo npm install -g npm@$1
}

# Check if NVM is installed
if ! [ -x "$(command -v nvm)" ]; then
  echo "NVM is not installed. Installing now..."
  sudo curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
  sudo export NVM_DIR="$HOME/.nvm"
  [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
  [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
fi

# Uninstall current versions
sudo nvm deactivate
sudo nvm uninstall node
sudo npm uninstall -g npm

# Install specific versions
install_node "v12.11.1"
install_npm "6.11.3"

echo "Installation complete. Versions installed:"
sudo node -v
sudo npm -v
