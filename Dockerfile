# Usa una imagen base de Node.js
FROM node:20

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias (incluyendo las de desarrollo)
RUN npm install

# Instala PM2 globalmente
RUN npm install -g pm2

# Copia el resto de la aplicación
COPY . .

# Expone el puerto 3000 (puerto de Next.js)
EXPOSE 3000

# Archivo de configuración de PM2
COPY ecosystem.config.js .

# Comando para iniciar la aplicación con PM2 en modo desarrollo
CMD ["pm2-runtime", "start", "ecosystem.config.js"]