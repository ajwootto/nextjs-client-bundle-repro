#!/bin/bash
# move the local lib to node_modules to simulate a package that was installed from npm
# using "link" seems to avoid the bug
mkdir -p node_modules/client-lib
cp -r client-lib-local/** node_modules/client-lib
