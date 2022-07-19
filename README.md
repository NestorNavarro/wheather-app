# wheather-app

# Iniciar Proyecto
Este proyecto fue arrancado con vite, por lo que se avisa que cuando se lance el proyecto, vite por defecto habilita la url "http://127.0.0.1:4200/" favor de ingresar la url "http://localhost:4200/dashboard/users" para que todo fluya como debería ser. Ya que de otra manera la aplicación no podrá hacer las peticiones al back-end.

## Arrancar
### `yarn`

Para traer las deps. del proyecto.

### `yarn dev`

Para arrancar el proyecto.


## Herramientas
Para este proyecto se utilizaron las siguientes herrmainets: 
* Boostrap5 para tener clases de utilidades.
* Rsuite una librería que provee de componentes.
* redux
* react-redux
* rtk-query

Nota : Se implemento rtk-query con el objetivo de mostras se puede como se puede cachear la información recuperada y así ahorrase peticiónes. Para probar está funcinalidad, solo se debe de ir al network, realizar peticiones y está no debería de hacerse más una vez que ya se haya hecho, el cache persiste por un minuto o cuando la página sea refrescada.
