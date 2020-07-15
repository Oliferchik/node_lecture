
#!/bin/bash

while true; 
do 
    date && curl http://localhost:8080/primes\?n\=$1; 
    echo "\n"; 
    sleep 1; 
done