#!/bin/bash
while :
do
    true > logs/latest.log
    info="";
    for server in "$@"
    do  
        result=`curl -o /dev/null -s -w %{size_download}  $server`;
        if [ $result != 0 ];
        then 
            info="`date` SERVER $server: SERVICE RUNNING;"
        else 
            info="`date` SERVER $server: SERVICE DOWN;"
        fi
        echo $info >> logs/history.log
        echo $info >> logs/latest.log
    done
    sleep 3
done