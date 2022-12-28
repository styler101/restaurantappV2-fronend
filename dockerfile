#Imagem de Origem
FROM node:18-alpine3.17

#Configurando a imagem do container
ENV LC_ALL = C.UTF-8

# Diretório de Trabalho
WORKDIR /app

COPY . .

RUN  npm install

EXPOSE 5173

CMD npm run dev
