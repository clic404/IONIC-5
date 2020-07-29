### // -- Permisos de acceso a camera location -- //

    Habilitar permisos en el movil de accesso en la app, en el proyecto dentro del config.xml y dentro de platform name="ios"

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

