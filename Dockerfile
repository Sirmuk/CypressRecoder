FROM cypress/base:20.11.1

RUN mkdir /app
WORKDIR /app

COPY . /app

RUN npm install

RUN npx cypress verify

RUN npx cypress
