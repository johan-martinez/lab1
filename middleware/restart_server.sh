pm2 stop index
pm2 delete index
rmdir lab1
git clone https://github.com/johan-martinez/lab1.git
cd lab1/server
npm install
pm2 start index.js