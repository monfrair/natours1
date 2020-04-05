<!-- # natours1 -->

March 28, 2020- start at #64

node.js and mongoDB project from udemy

check on ports for 5000 || 3000;
changes port to 5000 on both js files and the config file

**Catalina not allowing to mkdir data/db in usr/local/bin **
mongo community
usr/local/bin

Alternative method

An alternative method is to follow the instructions at Install MongoDB Community Edition on macOS by leveraging brew:

brew tap mongodb/brew
brew install mongodb-community
This will create some additional files by default:

the configuration file (/usr/local/etc/mongod.conf)
the log directory path (/usr/local/var/log/mongodb)
the data directory path (/usr/local/var/mongodb)

To run mongod you can either:

Run the command manually from the command line (this can be aliased for convenience):
mongod --config /usr/local/etc/mongod.conf
Run MongoDB as a service using brew services. Note that this will run MongoDB as a standalone node (not a replica set), so features that depends on the oplog e.g. changestreams will not work unless you modify the mongod configuration file:
brew services start mongodb-community

brew tap mongodb/brew
brew install mongodb-community
