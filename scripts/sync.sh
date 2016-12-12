#!/bin/bash
echo "Syncing with remote..."
echo "*************************************************************************"
echo "*                              ATTENZIONE                               *"
echo "* Eventuali file caricati non via rsync potrebbero essere cancellati.   *"
echo "*                                                                       *"
echo "************************************************************************"
rsync --delete-after -vaz -e ssh --exclude ".git" ../app/ faula:acp/
#nonino77
