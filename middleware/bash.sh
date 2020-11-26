s1=`curl -o /dev/null -s -w %{size_download}  http://localhost:8000/`
if [ $s1 !=  0 ];
then echo "`date` SERVER 1. SERVICE RUNNING"
else echo "`date` SERVER 1. SERVICE DOWN"
fi

s1=`curl -o /dev/null -s -w %{size_download}  http://localhost:8000/`
if [ $s1 !=  0 ];
then echo "`date` SERVER 2. SERVICE RUNNING"
else echo "`date` SERVER 2. SERVICE DOWN"
fi
