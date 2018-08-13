Polymer Learning

Steps to run the project
1. Please clone the project and then switch to dev Branch.  
2. Run npm i to download all the required dependencies.
3. Run npm i polymer
4. Run polymer serve --open, this will open http://127.0.0.1:8081/ in your default browser.
5. Click on the "/isbnView/pg1017" link to test isbn-1017 data. 1 more link with "/isbnView/pg1018" is created to test isbn-view component    for runtime data and to test components modular so the isbn can be switched to another book. 

6. Added a simple test case for isbn-view component for checking its props.
    Run polymer test. OR polymer test -l chrome

If running Windows you will need to set the following environment variables:

LAUNCHPAD_BROWSERS
LAUNCHPAD_CHROME
(This kept me awake late night since I was not getting, what I was missing :( )
Read More here daffl/launchpad


Happy Learning
Cheers!
