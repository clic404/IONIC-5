### // -- Agregar File Transfer -- //

    Pasamos a agregar file transfer el cual nos permite subir archivos a nuestro servidor, en nuestr terminal instalaremos los plugins correspondientes.

### Terminal 

            ionic cordova plugin add cordova-plugin-file-transfer
            npm install @ionic-native/file-transfer


    En nuestro app.module.ts agregamos la libreria.

### app.module.ts

            import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer/ngx';

            // En el providers agregamos la libreria

            providers: [
                FileTransfer,
                FileTransferObject,
                ....

