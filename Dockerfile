FROM 172.18.0.52:5000/node
WORKDIR /mydir
COPY . .
EXPOSE 2020
CMD node index.js