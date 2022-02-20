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

# create production builds, and installs server
RUN npm run build
RUN npm install -g serve

# start app
EXPOSE 8000
CMD ["serve", "-s", "build", "-p", "8000"]

# docker build . -t tiukenywil11/reactjs-crash-course
# docker run -p 8000:8000 -d tiukenywil11/reactjs-crash-course