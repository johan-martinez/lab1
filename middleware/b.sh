#!/bin/bash
while :
do
	
    s1=`curl -o /dev/null -s -w %{size_download}  $1`
    if [ $s1 !=  0 ];
    then 
        info="`date` SERVER 1: SERVICE RUNNING."
        `echo $info >> logs/history.log`
        `echo $info > logs/latest.log`
    else 
        info="`date` SERVER 1: SERVICE DOWN."
        `echo $info >> logs/history.log`
        `echo $info > logs/latest.log`
    fi

    s2=`curl -o /dev/null -s -w %{size_download}  $2`
    if [ $s2 !=  0 ];
    then 
        info="`date` SERVER 2: SERVICE RUNNING."
        `echo $info >> logs/history.log`
        `echo $info >> logs/latest.log`
    else 
        info="`date` SERVER 2: SERVICE DOWN."
        `echo $info >> logs/history.log`
        `echo $info >> logs/latest.log`
    fi

    sleep 2
done