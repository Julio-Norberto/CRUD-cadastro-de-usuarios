
# CRUD - Cadastro de usuários

Esse projeto é um CRUD feito por mim. Foi feito na forma de cadastro de usuários, nele você pode cadastrar usuários novos, consultar as informações de cada um separadamente, atualizar os dados desses usuários e deletar os usuários.

## Stack
![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)

![](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white)

![](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)

## Instalação

Antes de tudo abra a pasta baixada dentro do terminal e rode o comando `npm install`

Para utilizar esse programa você precisa intalar o MySQL na sua máquina e criar um banco de dados com a tabela `users` e as colunas `name`, `number` e `occupation`.

Comando para criar a tabela e as colunas:
```sql 
CREATE TABLE users (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(20),
    number INT,
    occupation VARCHAR(20)
)
```

Após criar o seu banco de dados com a tabela e colunas informadas vá na pasta server, depois entre em db e no arquivo `conn.js` faça as seguintes alterações:

```bash
  const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'SEU USUÁRIO', 
    password: 'SUA SENHA', 
    database: 'NOME DO SEU BANCO', 
})
```
Dentro das aspas defina as informações definidas por você durante a Instalação. Com o seu banco de dados devidamente configurado basta rodar tanto na pasta client quanto na pasta server o comando `npm start` e acessar o seu `http://localhost:3000/register` para utilizar a aplicação.

## Screenshots

![home](https://user-images.githubusercontent.com/60331328/192127577-ce66d6ac-2134-4999-9b06-418c820fbf28.png)


![users](https://user-images.githubusercontent.com/60331328/192127579-d0d9820b-4516-4509-803a-61d62d0731cb.png)


![usersedit](https://user-images.githubusercontent.com/60331328/192127580-6365129b-cc0e-4d5d-9e8a-920794691399.png)


![update](https://user-images.githubusercontent.com/60331328/192127578-a5d8baf0-5e56-43c8-875c-8111354d2da3.png)