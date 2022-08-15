
> sudo mkdir catena-node
> cd catena-
> cd catena-node/
> sudo npm init -y
> sudo npm i express
> sudo npm i body-parser
> sudo mkdir api
> sudo nano package.json 
> cd api/
> sudo node app.js 
> sudo chown -R $USER:$USER .
> sudo npm i --save-dev nodemon
> npm run start
> touch .gitignore

> sudo git checkout -b nodeMysql
> sudo git add .
> sudo git commit -m "1.0.0"
> sudo git remote add origin https://github.com/darleydias/catenaNodeMysql.git
> git push --set-upstream origin nodeMysql

> sudo npm install mysql2
> sudo npm install sequelize sequelize-cli path
> npx sequelize-cli init

### Configurando sequelize para achar os arquivosno path

#### criar o arquvo .sequelizerc na raiz
> sudo touch .sequelizerc

const path = require('path');

module.exports = {
  'config': path.resolve('./api/config', 'config.json'),
  'models-path': path.resolve('./api/models'),
  'seeders-path': path.resolve('./api/seeders'),
  'migrations-path': path.resolve('./api/   migrations'),
};

#### criando model

> npx sequelize-cli model:create --name tiposEvidencia --attributes descri:string,ativo:boolean,dh:date

