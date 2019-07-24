# osko-poll

## Test Build with Docker

Build docker image by using next command.

```sh
$ docker build -t poll-nginx .
```

Run docker container by using next command.

```sh
$ docker run -it --name poll-nginx-container -v ${PWD}/dist:/usr/share/nginx/html -p 8080:80 --rm poll-nginx
```

Now you can checkout [localhost:8080](http://localhost:8080).
