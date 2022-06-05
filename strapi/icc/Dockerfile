FROM node:16
WORKDIR /app
COPY . .
RUN yarn && yarn build
CMD ["yarn", "start"]
EXPOSE 1337