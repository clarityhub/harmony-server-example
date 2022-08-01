FROM node:8.2

WORKDIR /app

EXPOSE 4000

COPY ./init /usr/local/bin/
RUN chmod +x /usr/local/bin/init
RUN ln -s usr/local/bin/init /app

ENTRYPOINT ["init"]
