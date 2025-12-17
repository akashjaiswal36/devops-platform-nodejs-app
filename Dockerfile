# use the lightweight Node image

FROM node:18-alpine

# create app directory

WORKDIR /app

#Copy dependency file first

COPY package*.json ./

# Install only production dependencis

RUN npm install --only=production

COPY src ./src

EXPOSE 3000

# start the application 

CMD ["node", "src/app.js"]