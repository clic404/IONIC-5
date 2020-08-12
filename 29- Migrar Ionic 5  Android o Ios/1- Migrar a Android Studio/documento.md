### // -- Migrar Ionic 5 a Android Studio -- //


    1- En el config.xml agregar version sdk que al dia de la fecha es version 29

### Ejemplo 

            <preference name="android-targetSdkVersion" value="29" />


    2- Compilar en ionic

### Ejemplo

            ionic cordova build android

    3- Habilitar los sdk 27 28 29 30

    4- Habilitar sdk tools

        Android SDK Build-Tools
        NDK
        Android Auto API Simulators
        Android Auto Desktop Head Unit emulator
        android SDK Platform-Tools
        Google Play APK Expansion library
        Google Play INstant Development SDK
        Google Play Licensing Library
        Google Play services
        Google Web Driver
        Intel x86 Emulator Accelerator 

    
    
    3- Abrir projecto en Android Studio en la ruta platforms/android

    4- En Android Studio update Gradle

    5- Android Studio -> Build -> Generate Bundle APK

    6- Seleccionamos APK

    7- Agregamos la firma o creamos la firma

    8- Quitamos error build.gradle: The option 'android.useDeprecatedNdk' is deprecated.

### Pasos

            Dentro del Proyecto vamos Gradle Scripts 
            Gradle.properties
            Quitar android.useDeprecatedNdk=true


    8- Seleccionamos release ya que play store no permite app

    9- Seleccionamos signature version v1 y v2

    Para subir a la tienda debe realizarlo en bundle con formato .aab