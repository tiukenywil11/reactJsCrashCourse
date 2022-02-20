# pull official base image
FROM node:16

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY package*.json ./
RUN npm install
RUN npm install react-scripts -g

# add app
COPY . ./

# start app
EXPOSE 3000
CMD ["npm", "start"]

# docker build . -t tiukenywil11/reactjs-crash-course
# docker run -p 3000:3000 -d tiukenywil11/reactjs-crash-course