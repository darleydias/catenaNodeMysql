
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

#### criar o arquvo .sequelizerc na raiz (Nao esquecer do "PONTO")
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

### Gravando no banco

> npx sequelize-cli db:migrate

### POpulando

> npx sequelize-cli seed:generate --name demo-tiposEvidencia

#### Mudo o arquivo
'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
await queryInterface.bulkInsert('tiposEvidencias', [
  {
    descri: 'Computador de mesa',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    descri: 'Notebook',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    descri: 'HD Hard Disk',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  },
  {
    descri: 'PenDrive',
    ativo: false,
    createdAt:new Date(),
    updatedAt:new Date()
  }
  ], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('tiposEvidencia', null, {});
  }
};

### Rodando a seed

> npx sequelize-cli db:seed:all

### DESFAZER

npx sequelize-cli db:migrate:undo
npx sequelize db:seed:undo
npx sequelize-cli db:seed:undo --seed 20220815025055-demo-tiposEvidencia
npx sequelize-cli db:seed:undo:all


'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tiposProcedimento extends Model {
    static associate(models) {
      // define association here
    }
  }
  tiposProcedimento.init({
    descri: DataTypes.STRING,
    ativo: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'tiposProcedimento',
  });
  return tiposProcedimento;
};