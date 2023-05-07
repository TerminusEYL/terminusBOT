## Requirements
- nvm
- pm2

## nvm installation and node setup
Go to directory that repo has been downloaded to and run those commands:
```
sudo apt update
https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm use
```

## Running bot for the first time
- Be sure to have `.env` file copied from `.env.example` and populated with proper variables,
- run `npm install && npm run start`.

## Checking script status
- `pm2 [status|ls|list]`
- `pm2 logs`
- `pm2 monit`