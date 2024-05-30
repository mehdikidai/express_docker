## Containerize a Node.js (express js) application

#### Build Docker Image

```sh
docker build -t my-express-app .
```
#### Run a Docker Image as a Container
```sh
docker run -p 3000:3000 my-express-app
```

