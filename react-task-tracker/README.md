# Deploy react app with dummy server

## Deploy applications using the following command
```bash
docker-compose up -d
```

## Access the following URLs
Front End (ReactJS)
- http://localhost:8000

Server
- http://localhost:5000/tasks

APIs
- [GET] http://localhost:5000/tasks
- [GET] http://localhost:5000/tasks/:id
- [POST] http://localhost:5000/tasks
- [PUT] http://localhost:5000/tasks/:id
- [DELETE] http://localhost:5000/tasks/:id

## Stop applications using the following command
```bash
docker-compose down
```

## Clean container instances on local machine using the following command
```bash
docker rmi react-crash-course react-server-crash-course
```
