<!-- # natours1 -->

March 28, 2020- start at #64

node.js and mongoDB project from udemy

check on ports for 5000 || 3000;
changes port to 5000 on both js files and the config file

**Catalina not allowing to mkdir data/db in usr/local/bin **
https://zellwk.com/blog/install-mongodb/
start mongodb community: brew services run mongodb-community
check is db is running: brew services list
to access the mongo shell: mongo
to stop mongodb-community running: brew services stop mongodb-community

create alias to make using mongodb community easier:
alias mongod='brew services run mongodb-community'
alias mongod-status='brew services list'
alias mongod-stop='brew services stop mongodb-community'

Keep local mongo shell running for local DB use
if issues connecting shell to cloud go to command line tools and choose have shell installed
mongo shell to mongo cloud: mongo "mongodb+srv://cluster0-8ql3d.mongodb.net/test" --username william
