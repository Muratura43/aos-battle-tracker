FROM node:20.16

COPY . /aos/

WORKDIR /aos

RUN npm install
RUN npm run build

CMD ["npm", "run", "main"]