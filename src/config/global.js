export default {
  global: {
    componenteFormativo: 'Conceptos básicos e historia del diseño',
    descripcionCurso:
      'En un sentido amplio, el arte hace referencia a cualquier actividad que desarrolla el ser humano y que recurre a emociones y al intelecto para crear obras con características estéticas y que se expresan en un lenguaje universal. De allí nacen los primeros elementos de la bocetación, que, junto con el color, juega un papel importante en el diseño y la comunicación visual. ',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
    fondoBannerInterno: require('@/assets/curso/interno.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Definición e historia del diseño gráfico',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Arte vs. diseño',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Historia del arte',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Exponentes, movimientos y tendencias del diseño',
            hash: 't_1_3',
          },
          {
            icono: 'Diseño básico',
            numero: '1.4',
            titulo: 'Diseño básico',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Teoría del color',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Definición y fundamentos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Teoría aditiva y sustractiva',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Psicología y armonías de color',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Bocetación ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Definición y tipos',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Técnicas, la bitácora y recursos gráficos ',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Antica-editions (s.f.). Par le paquebot L Atlantique [Figura]. ',
      link:
        'https://www.antica-editions.com/fr/index.php?id_product=166&controller=product',
    },
    {
      referencia:
        'APA Diseño gráfico. (s. f.). La forma y los elementos conceptuales del diseño. ',
      link:
        'https://www.apadisenografico.com/la-forma-elemento-conceptual-del-diseno/',
    },
    {
      referencia:
        'BM Imaginería Taller de Arte. (2013). Historia del Arte Universal Cap 01 [Video]. YouTube. ',
      link: 'https://www.youtube.com/watch?v=I7gIIby02aw&t=8s',
    },
    {
      referencia:
        'Cartwright, M. (2014). La piedra de Rosetta. World History Encyclopedia. ',
      link: 'https://www.ancient.eu/trans/es/1-12408/la-piedra-de-rosetta/',
    },
    {
      referencia:
        'Castro, J. (2014). Urbanismo y arquitectura de Egipto. Slideshare. ',
      link:
        'https://es.slideshare.net/jonathan823/urbanismo-y-arquitectura-de-egipto',
    },
    {
      referencia:
        'Díez, G y Parra, R. (2015). Mucho más sobre la Bauhaus. Issuu.',
      link: 'https://issuu.com/gabrieladiez/docs/bauhause',
    },
    {
      referencia: 'EcuRed (s. f.). Saul Bass. [Figura].',
      link: 'https://www.ecured.cu/Saul_Bass',
    },
    {
      referencia:
        'Enciclopedia Libre Universal en Español. (2010). Arte del antiguo Egipto. ',
      link: 'http://enciclopedia.us.es/index.php/Arte_del_Antiguo_Egipto',
    },
    {
      referencia: 'Etimologías de Chile. (2020). Etimología de imagen.',
      link: 'http://etimologias.dechile.net/?imagen',
    },
    {
      referencia:
        'GCFAprendeLibre. (2019). Fundamentos del diseño: elementos básicos | Conceptos básicos de diseño gráfico [Video]. YouTube.',
      link: 'https://www.youtube.com/watch?v=7N2v0bpNFKA',
    },
    {
      referencia:
        'Godoy, J. (2009a). Cuadernos del diseño básico. Contraste. Universidad de Santander. ',
      link: 'https://issuu.com/azulcero/docs/contraste/4',
    },
    {
      referencia:
        'Godoy, J. (2009b). Cuadernos del diseño básico. La radiación. Universidad de Santander. ',
      link: 'https://issuu.com/azulcero/docs/la_radiacion/2',
    },
    {
      referencia:
        'Hurtado, M. (2019). Qué tipos de bocetos se utilizan en diseño gráfico. Foro Alfa. ',
      link:
        'https://foroalfa.org/articulos/pdf/que-tipos-de-bocetos-se-utilizan-en-diseno-grafico.pdf',
    },
    {
      referencia: 'Lexico. (s. f.). Color. Lexico.com.',
      link: 'https://www.lexico.com/es/definicion/color',
    },
    {
      referencia:
        'Lozano, I (s. f.). Los 5 elementos clave para crear un mensaje efectivo. ',
      link:
        'https://blog.locutora.org/los-5-elementos-clave-para-crear-un-mensaje-efectivo/',
    },
    {
      referencia:
        'Ruiz, L. (2019). El padre del diseño gráfico moderno, Paul Rand. Enfoque Gaussiano. ',
      link:
        'https://www.enfoquegaussiano.com/el-padre-del-diseno-grafico-moderno-paul-rand/',
    },
    {
      referencia: 'Uriarte, J. (2020). Paleolítico. Caracteristicas.co.',
      link: 'https://www.caracteristicas.co/paleolitico/',
    },
    {
      referencia:
        'Whelan, B. (1994). La armonía en el color. Nuevas tendencias. Guía para la combinación creativa de colores. ',
      link: '',
    },
    {
      referencia: 'WikiArt. (s. f.). Cassandre.',
      link: 'https://www.wikiart.org/es/cassandre',
    },
    {
      referencia: 'Wikipedia. (2021). Walter Gropius.',
      link: 'https://es.wikipedia.org/wiki/Walter_Gropius',
    },
    {
      referencia:
        'Wong, W. (1991). Fundamentos del diseño bi- y tri-dimensional. Editorial Gustavo Gili. ',
      link:
        'https://centroculturalhaedo.edu.ar/cch/actualizacion_permanente/Fundamentos%20del%20Diseno%20Bidimensional%20y%20tridimensional,%20Wucius%20Wong.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Axial',
      significado:
        'término utilizado para hacer referencia a la simetría alrededor del eje.',
    },
    {
      termino: 'Escorzo',
      significado:
        'técnica que permite percibir una sensación de profundidad en una obra.',
    },
    {
      termino: '<i>Feedback</i>',
      significado:
        'término que en inglés que significa retroalimentación, y se entiende como la respuesta u opinión que da un interlocutor a partir de la información recibida por parte del emisor. ',
    },
    {
      termino: 'Gárgola',
      significado:
        'son figuras mitológicas, en forma de animales o humanos, utilizadas en iglesias y catedrales como objetos decorativos o también para drenajes de agua, un estilo artístico de la Edad Media, especialmente en el arte gótico. ',
    },
    {
      termino: 'Helenista',
      significado:
        'persona instruida en la lengua, cultura y literatura griega.',
    },
    {
      termino: 'Ortogonal',
      significado:
        'se emplea para hacer referencia a que está en ángulo recto, ángulo de 90º. ',
    },
    {
      termino: '<i>Polis</i>',
      significado:
        'hace referencia a las ciudades-estado en la Antigua Grecia, territorios independientes, gobernados de manera autónoma.',
    },
    {
      termino: 'Rosetta',
      significado:
        '“La piedra Rosetta es una estela incompleta de granodiorita gris y rosa que data del 196 a. C., que presenta un decreto sacerdotal sobre el rey Ptolomeo V de Egipto. El texto está dividido en tres versiones diferentes: jeroglíficos, escritura demótica y griego, cosa que ayudó inmensamente a descifrar por fin los jeroglíficos egipcios” (Cartwright, 2014).',
    },
    {
      termino: 'Simetría',
      significado:
        'Según el diccionario de la Real Academia Española – RAE (s. f.), “es correspondencia exacta en forma, tamaño y posición de las partes de un todo”.',
    },
    {
      termino: '<i>Target</i>',
      significado:
        'término inglés que no forma parte del diccionario de la RAE, se emplea en al campo de la publicidad para designar al público objetivo o nicho de mercado al cual se destinará una campaña, producto o servicio. ',
    },
  ],
  complementario: [
    {
      texto:
        'Wong, W. (1991). Fundamentos del diseño bi- y tri-dimensional. Editorial Gustavo Gili. ',
      tipo: 'PDF',
      descarga: '/downloads/fundamentos.pdf',
    },
    {
      texto:
        'BM Imaginería Taller de Arte. (2013). Historia del Arte Universal Cap 01 [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=I7gIIby02aw&t=8s',
    },
    {
      texto:
        'GCFAprendeLibre. (2019). Fundamentos del diseño: elementos básicos | Conceptos básicos de diseño gráfico [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=7N2v0bpNFKA',
    },
    {
      texto:
        'Juárez, A. (2020). Conceptos de diseño: LA FORMA – Fundamentos del diseño animado (Basados en Wucius',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=dstsb4-2fCc',
    },
    {
      texto:
        'GCFAprendeLibre. (2019). Teoría del color – Conceptos básicos del diseño gráfico [Video].',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=cGglJKvpCEs',
    },
    {
      texto:
        'Tinux V A. (2019). Teoría del color: aditivo, sustractivo y la ley de los complementarios [Video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=UwTicavr21s',
    },
    {
      texto:
        'Marco Creativo. (2016). Psicología del color ¿Qué transmiten los colores? [Video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=X8kbrAzV6BM',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Guillermo Eduardo González Tarazona',
        cargo: 'Instructor',
        centro:
          ' Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Gloria Amparo López escudero',
        cargo: 'Diseñadora y Evaluadora Instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital ',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Revisora metodológica y pedagógica',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital ',
      },
      {
        nombre: 'Darío González',
        cargo: 'Corrección de estilo',
        centro: 'Centro Agropecuario La Granja - Regional Tolima ',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Yuly Andrea Rey Quiñonez'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Camilo Andres Bolaño Rey',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Adriana Marcela Suárez Eljure',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Carmen Alicia Martínez Torres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Laura Gisselle Murcia Pardo',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lady Adriana Ariza Luque',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
