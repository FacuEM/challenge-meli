# Challenge Mercado Libre

## Cómo iniciar el proyecto?

```bash
git clone https://github.com/FacuEM/challenge-meli.git
```

### FRONT

```bash
cd challenge-meli/front
npm install
npm run build
```

### BACK

```bash
cd challenge-meli/back
npm install
npm start
```

---

## Tecnologías utilizadas:

- Database: Sqlite3
- ORM: Sequelize
- Back-end:
  - Node.js
  - Express.js
  - Passport.js (validaciones de usuario)
- Front-end;
  - React.js
  - React-redux
- Styles: Material UI

---

## Planificación del proyecto:

1.  Dibujo del flujo de interacciones del usuario con la aplicación.
2.  Diseño de la base de datos:
    1.  Elección de modelos.
    2.  Relaciones entre los mismos.

<img src="database-challenge.png" width="60%">

3.  Estructura de carpetas.

```
front
├── src
│   ├── /assets
│   ├── /aux
│   ├── /components
│   ├── /hooks
│   ├── /redux
│   │   ├── /actions
│   │   ├── /reducers
│   │   └── constants.js
│   ├── store.js
│   └── index.js
├── package.json
└── webpack.config.js
```

```
back
├── api
│   ├── /controllers
│   ├── /models
│   ├── /routes
│   └── db.js
│
│
├── public
│      └── index.html
├── challenge.db
├── index.js
└── package.json
```

4.  División de tareas por sprint (diarios: 4).

---

## Demo:
