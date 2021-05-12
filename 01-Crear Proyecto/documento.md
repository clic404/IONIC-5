### Crear proyecto IONIC 5

1- Antes de crear proyecto debes instalar:

```sh
nodejs
cordova
```

2- Instalar IONIC

### Console / Terminal

```sh
npm install -g @ionic/cli
```

3- Crea el Proyecto con el nombre


### Console / Terminal

```sh
ionic start nombre-app
```

- Nos dara opciones para su configuracion inicial: como el lenguaje que puede ser angular, react, vue.
- Tambien si queremos Integrar Capacitor, elegimos las preferncias que mas nos gusten.
- Por Ultimo si prefieres una plantilla personalizada que en nuestro caso selecciono -blank


4- Ingresa al Directorio

### Console / Terminal

```sh
cd nombre-app
```

5- Lanzar Proyecto modo Web

### Console / Terminal

```sh
ionic serve
```

6- Lanzar Aplicacion en Simulador IOS / ANDROID

### Console / Terminal

IOS

```sh
ionic emulate ios
```

ANDROID

```sh
ionic emulate android
```

7- En caso de querer iniciar en modo emulador por cordova deben quitar capacitor y en el proyecto instalar cordova.


### Console / Terminal

```sh
npm i cordova
```

8- Iniciar Modo Cordova

### Console / Terminal

IOS

```sh
ionic cordova emulate ios
```

ANDROID

```sh
ionic cordova emulate android
```
