FROM node:10.16.0

WORKDIR /app

COPY package*.json next-env.d.ts tsconfig.json next.config.js ./
RUN npm install

CMD [ "npm", "run", "dev" ]