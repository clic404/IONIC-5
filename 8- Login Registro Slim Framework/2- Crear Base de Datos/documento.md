//- Crear Base de Datos --//

* Crearemos una base de datos en MYSQL para nuestro registro.

* Dentro del PHPADMIN en el area de conulta sql ingresamos:

*** SQL ***

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `imagen` varchar(100) NOT NULL DEFAULT 'demo.jpg',
  `fname` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(200) NOT NULL,
  `mobile` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

*** fin SQL ***

NOTA: La tabla puede cambiar segun sus requrimientos del proyecto