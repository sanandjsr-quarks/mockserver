FROM node:stretch
RUN mkdir /home/appuser
RUN mkdir /app
RUN groupadd -g 999 appuser && useradd -r -u 999 -g appuser appuser
RUN chown -R appuser /home/appuser
RUN chown -R appuser /app
USER appuser
COPY . /app/
COPY package.json /app/
EXPOSE 8989
WORKDIR /app
RUN npm install
CMD npm start