## Requirements
- nvm
- pm2

## nvm installation and node setup
Go to directory that repo has been downloaded to and run those commands:
```
sudo apt update
https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

## Running bot for the first time
In the project directory run:
- `nvm use`
- `npm install pm2 -g`
- `cp .env.example .env` (don't forget to paste valid TOKEN inside `.env`)
- `npm install && npm run start`.

## Checking script status
- `pm2 [status|ls|list]`
- `pm2 logs`
- `pm2 monit`