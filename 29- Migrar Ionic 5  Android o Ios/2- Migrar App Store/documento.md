### // -- Migrar a App Store -- //

    1- Crear app ionic 

            ionic cordova build ios --release

    2- Activar archive release cambiar parametro

                project/resources/config/build-release.xcconfig

                //Antes

                CODE_SIGN_IDENTITY = iPhone Distribution
                CODE_SIGN_IDENTITY[sdk=iphoneos*] = iPhone Distribution

                //Despues

                CODE_SIGN_IDENTITY = iPhone Developer
                CODE_SIGN_IDENTITY[sdk=iphoneos*] = iPhone Developer

    3- Seleccionar Generic IOS Device

    4- 


        
    