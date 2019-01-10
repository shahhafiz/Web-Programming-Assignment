# WIF2003_Group7

This repo contains: 
Web Programming Assignment built using Node.js, Express framework and MongoLab.

To export MongoDB collections, enter the following line into command prompt

### users collection
mongoexport -h ds245238.mlab.com:45238 -d obbank -c users -u shahhafiz -p shah -o users.csv --csv -f fullname,nric,address,email,username,password,job,sector,salary,currentSaving,monthlySaving,savingGoal,transactions

### transactions collection
mongoexport -h ds245238.mlab.com:45238 -d obbank -c transactions -u shahhafiz -p shah -o transactions.csv --csv -f date,amount,type
