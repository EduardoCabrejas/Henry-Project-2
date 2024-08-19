const app = require ('./src/server');
const conDb = require ('./src/db/config/conDb');
const PORT = 3000;

conDb().then ((res) => {
    app.listen(PORT, () => console.log (`App is listening on port ${PORT}`));
})
.catch ((err) => console.log (err));

