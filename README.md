This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Inicialización del proyecto 

` npx create react-app 2021 netflix --template redux `

### Proceso de Limpieza

### Importar las librerías

material-ui/core, axios, firebase, react-router-dom, react-uuid, styled-components.

### App.js - layout inicial

- Creamos las rutas.
- Renderizamos Login o App condicional a la existencia de un usuario.

### Estilos

-utilizamos useStyles para crear una infrasestructura que nos permita asignar estilos a cada uno de los componentes.

### Crear las carpetas de componentes : components, Pages

- Creamos la infraestructura básica de los componentes que representan una página: Home, Login, Paypal, Signup , Profile.

### Estilos en los componentes de Pages

- Patrón para añadir la infraestructura de estilos a todos los components de la página: Banner, Header , Plans , Row.

### Estilos en los componentes secundarios

- Creamos la infraestructura básica del resto los componentes

### Comenzamos a trabajar en el Header

- Importar logo
- Añadimos al navbar una clase transparent condicional, Esta clase se activa si la variable show=true.
- La variable Show se convierte en true al hacer un scroll vertical d emás de 100 pixeles.
- Para escuchar cuando el usuario hace scroll añadimos un eventlistener a window.
- El eventlistener está activo una sola vez cada vez que refrescamnos la página (UseEffect con []).
- Una vez montado el componente, hay que limpiarlo para que no nos quede colgado el eventListener.
- Añadimos las rutas al logo y al avatar.

### Comezamos a trabajar en el banner

- importar imagen banner como bgImage
- En react, tenemos que acompañar las bgImgs con estilos como object-fit, background-size y background-position.
- Hemos posicionado eñ tituñp de la peli, unos botones y la descripción.ç
- Como la descripcion  viene de la api, tenemos que truncarla para asegurarnos de que nos cabe. para ellos hemos declarado la función trucate.
- Hemos añadido un div vacío, que oscurece la imagen hasta fusionarla con el resto del UI, que es oscuro.

### Comenzamos a trabajar en el login

- Hemos creado un botón con styledComponents y le hemos llamada NetflizButton, este botón está totalmente customizado y podremos varias su longitud y otros estilos, pasándole props.
- StyledComponents para variar los estilos del input o del botón, pero para su posicionamiento, le damos una clase normal.
- Hemos creado un input personalizado en Styled components. Le hemos llamado NetflixInput. Como InputBase era ya un componente de material ui, simplemente lo hemos llamado styled(InputBase). Si hubiera sido un input de base hubieramos usado styled.input``.

### Comenzamos a trabajar en el profile

- Hemos trabajado en la distribución.
- <Plans>Texto</Plans>
` Const Plans = ({children}) => {
    return ()
}`
- Pasar props a los styled components.
- En el caso de que el componente no sea binario, p.ej que el tamaño sea pequeño, grande, o mediano, entonces lo solucionamos con una función y un switch

### Comenzamos a trabajar en signup

- Renderizado condicional. Hemos creado una variable sigin.
- Si la variable es falsa, desplegamos el formulario.

### Proceso de registro / signIn

- Hemos habilitado una cuenta en firebase e inicializado el objeto auth.
- Hemos capturado los datos tecleados por el usuario dentro del formulario.
- Hemos registrado email y password con auth.create...
- sinin con auth.signin...

### Redux

- Habilitamos el slice userSlice para manejar el usuario en el componente que queramos


### Persistencia

- Hemos añadido un eventListenner rn app.js.
- Este eventListener lo tare el onjeto auth, escucha cada vez que cambia el usuario en firebase.
- Cada vez que cambia vuelve a inyectar el usuario en la capa de datos de userSlice(Redux).
- De esta manera recordamos que ya estamos dentro aunque refresquemos.


### Request

- Vamos a construir el componente row
- Hemos habilitado todo los endpoints para acceder a themovie db y extraer los distintos objetos con toda la información clasificada por género.

### Hemos hecho todas las llamadas al API de themovieDB 

- Con useeffect hacemos llamadas asíncronas mediante una función a la que hemos llamada fetchData.
- Esta función devuelve  request.result.data, que es un array con todas las películas. 