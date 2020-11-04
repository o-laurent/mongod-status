# mongod-status

## Objective

This package has been thought for monitoring. It can be used to open a route and thus monitor mongod service's state.

## Details

Its function, isActive(), returns true if mongod service is active and false if it is not.

This function is asynchronous and is quite fast (12ms average).

## Tests

Tested on ubuntu 18.04, npm 6.14.8 and node 12.18.2.
