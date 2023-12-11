Demonstrates an issue with server actions not being bundled properly when imported from a 3rd party node_module

Instead, the action is bundled inside the client code and is executed on the client.

This repro defines a "local" module called "action-lib" which gets copied into node_modules by a postinstall script.
It is done this way because using `npm link` will actually not demonstrate the problem. It seems that symlinked files 
are treated differently.

## Steps to reproduce
1. Install dependencies with `yarn`
2. `yarn dev`
3. visit development page
4. check console logs, see that the server action is executed clientside and the log is logged on the client
