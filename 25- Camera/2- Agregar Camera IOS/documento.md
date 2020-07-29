### // -- Agregar Camera Android -- //

    Agregamos los plugins por consola

        ionic cordova plugin add cordova-plugin-camera

        npm install @ionic-native/camera

    Si queremos dar soporte para IOS, al momento de instalar el plugin debemos describir la razón para acceder a estos recursos así:

                ionic cordova plugin add cordova-plugin-camera --variable CAMERA_USAGE_DESCRIPTION="the app need the camera" --variable PHOTOLIBRARY_USAGE_DESCRIPTION="the app need the photolibrary" 
    

    Agregar Permisos ejemplo en 0- Tips 2- Permisos IOS

### config.xml

            // ANTES

            <platform name="ios">

            <allow-intent href="itms:*" />

            // DESPUES

            <platform name="ios">
            <edit-config file="*-Info.plist" mode="merge" overwrite="true" target="NSCameraUsageDescription">
            <string>Se necesita acceso a la cámara para tomar fotos</string>
            </edit-config>
            <edit-config file="*-Info.plist" mode="merge" overwrite="true"  target="NSPhotoLibraryUsageDescription">
            <string>Se necesita acceso a la biblioteca de fotos para obtener imágenes desde allí</string>
             </edit-config>
            <edit-config file="*-Info.plist" mode="merge" overwrite="true"  target="NSLocationWhenInUseUsageDescription">
            <string>Se necesita acceso a la ubicación para encontrar cosas cercanas</string>
            </edit-config>
            <edit-config file="*-Info.plist" mode="merge" overwrite="true"  target="NSPhotoLibraryAddUsageDescription">
            <string>Se necesita acceso a la biblioteca de fotos para guardar fotos allí</string>
            </edit-config>
            <allow-intent href="itms:*" />

    Importar el plugin a appModule

### app.module.ts

            // Agregamos el import
            import { Camera } from '@ionic-native/camera/ngx';

            // Agregamos camera en providers

            providers: [
            StatusBar,
            SplashScreen,
            Camera,
            { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
            ],....

