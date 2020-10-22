FROM node:8.15.0-alpine
RUN npm install -g angular-http-server
WORKDIR /app
COPY dist/. dist/.
EXPOSE 8080
WORKDIR /app/dist/leon-angular-learn/browser
CMD angular-http-server -p 8080 -o 
# CMD angular-http-server --https --key ./assets/keys/production.key --cert ./assets/keys/production.crt -p 8080 -o 