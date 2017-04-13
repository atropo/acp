#!/bin/bash
echo "Syncing with remote..."
rsync --delete-after -vaz -e ssh --exclude ".git" ../app/ faula:acp/

