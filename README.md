Demonstrates an issue with server code not being able to import client code directly from a 3rd party module

The imports all end up being "empty object" rather than the function that was intended.

This repro defines a "local" module called "client-lib" which gets copied into node_modules by a postinstall script.

## Steps to reproduce
1. Install dependencies with `yarn`
2. `yarn dev`
3. visit development page
4. see error about non-existent function from client-lib that definitely exists

If you remove the "use client" directive from the library file, the code works.
