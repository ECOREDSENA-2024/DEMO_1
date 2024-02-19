<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Definición e historia del diseño gráfico
    p.mb-5 El diseño gráfico puede definirse como una disciplina que interactúa, por lo general, con muchas otras disciplinas en diversos ámbitos y que busca la solución a problemas de comunicación visual, para dar a conocer, exponer y publicitar diversos productos, bienes y servicios, por medio de diferentes piezas gráficas que pretenden transmitir un mensaje específico.
    p.mb-5 A continuación, observe el video "Historia del diseño" para una mejor contextualización sobre la historia de diseño gráfico. 

    //todo PENDIENTE VIDEO POR VINCULAR 
    .tarjeta.bg--4-claro2.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/00.svg")

        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido
            h2 Historia del diseño
          p.mb-4 A continuación, observe el video “Historia del diseño” para una mejor contextualización sobre la historia del diseño gráfico.
          
          a.boton.color-acento-botones(href='https://youtu.be/MZaLzNdNcOk' target="_blank" type="application/pdf")
            span Enlace
            i.fas.fa-link
    //todo PENDIENTE VIDEO POR VINCULAR 
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Es así como se produjeron numerosos inventos que transformaron la sociedad y, junto con otros avances técnicos, potenciaron la prensa como fenómeno de masas y clases sociales. Se crearon espacios de ocio, como clubes, teatros y salones de reunión, donde se necesitaron piezas gráficas y publicidad. La invención de estos medios de comunicación, sumada a inventos como el de Joseph Niepce, quien, en 1826, fijó una imagen en una cámara oscura, invento que posteriormente Louis Daguerre perfeccionó en los llamados daguerrotipos (primer procedimiento fotográfico), fueron el inicio de una época que revolucionaría a la humanidad.
        .bg--4-claro.p-3.px-5
          p.mb-0 El diseño sigue su avance tanto en Europa como en Estados Unidos, ejes importantes y vitales en su desarrollo. En Europa, se sigue una línea clásica y muy estructurada, mientras, en Estados Unidos, el diseño se vuelve moderno y novedoso en los conceptos, tratando de dar solución a diversas necesidades. De los más conocidos diseñadores por su trabajo están Paul Rand y Saul Bass.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/1.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 Pasadas las décadas, surgieron movimientos juveniles y opositores del sistema. El diseño toma un rumbo de tintes rebeldes, que, unido a medios como la televisión, la fotografía, la fotocomposición realizada en los nuevos programas de cómputo, gana forma y se plasma de maneras diferentes. Nace entonces la era digital, donde se desarrollan múltiples programas, herramientas y artefactos, que nos permiten trabajar con mayor agilidad y libertad las herramientas del diseño. 
      br
      br
      | Algunos representantes en la historia del diseño gráfico son: 
    .infografia-autores.p-5
      img(src="@/assets/curso/2.svg" alt="Adornos flotantes")
      .infografia-autores__img(@mouseover="mostrarIndicador = false")
        img(src="@/assets/curso/3.png" style="left: 44.3% ; right:  ; top: 13.5% ; bottom:  ; width: 14.6% ")
        .indicador--hover(v-if="mostrarIndicador" style=" top: 19% ")
      .infografia-autores__img: img(src="@/assets/curso/4.png" style="left: 22% ; right:  ; top: 25% ; bottom:  ; width: 14.6% ")
      .infografia-autores__img: img(src="@/assets/curso/5.png" style="left: 66.9% ; right:  ; top: 25% ; bottom:  ; width: 14.6% ")
      .infografia-autores__img: img(src="@/assets/curso/6.png" style="left: 16.2% ; right:  ; top: 50% ; bottom:  ; width: 14.6% ")
      .infografia-autores__img: img(src="@/assets/curso/7.png" style="left: 72.2% ; right:  ; top: 50% ; bottom:  ; width: 14.6% ")
      .infografia-autores__img: img(src="@/assets/curso/8.png" style="left: 31.7% ; right:  ; top: 70.9% ; bottom:  ; width: 14.6% ")
      .infografia-autores__img: img(src="@/assets/curso/9.png" style="left: 57.1% ; right:  ; top: 70.9% ; bottom:  ; width: 14.6% ")
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Arte vs. diseño
    p.mb-5 Tanto el arte como el diseño hacen parte del mundo circundante y suelen ser confundidos, pues aparentemente son muy similares. La siguiente tabla busca mostrar especialmente sus diferencias.
    .titulo-sexto.color-acento-contenido
      h5 Tabla 1
      span Diferencias entre arte y diseño
    .tarjeta.bg--2.p-5.mb-5
      .row.mb-5.justify-content-between.g-0
        .col-lg-6
          h3.m-auto.text-center.mb-3 Arte
          SlyderF.tarjeta-h(columnas=" col-xxl-12" style='width: 400px; margin: 0 auto')
            .tarjeta.bg-white.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/10.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El arte es espontáneo y se genera a partir de expresar un sentimiento, una idea o un pensamiento; es la solución a una inquietud o pregunta interior del artista.  
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/10.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El artista genera su propia historia.
            .tarjeta.bg-white.p-4.h-100 
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/10.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center Requiere de la aprobación del autor. 
            .tarjeta.bg-white.p-4.h-100 
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/10.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center Cada persona interpreta el arte desde su propia óptica.
            .tarjeta.bg-white.p-4.h-100 
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/10.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El mensaje es libre de interpretaciones.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/10.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El uso de materiales es muy libre, se pueden utilizar a selección del autor.
        .col-lg-6
          h3.text-center.mb-3 Diseño
          SlyderF.tarjeta-h(columnas=" col-xxl-12" style='width: 400px; margin: 0 auto')
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El diseño busca la solución a un problema o necesidad, tiene un objetivo específico.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El diseñador basa su trabajo en elementos consignados generalmente en un <i>brief</i>, el cual es un documento informativo donde se encuentran instrucciones específicas para llevar a cabo su labor. 
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El diseñador parte de la necesidad de un cliente, que tiene un producto, marca o empresa ya existente; y hace su aporte para crear, mejorar o exaltar los atributos de este.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center Requiere de la aceptación por parte de un grupo, cliente, empresa o entidad.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center Hay un público objetivo a quien va dirigido el mensaje, por eso se estudia muy bien al receptor.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center Busca generar en la población un mensaje particular, implantar una idea o concepto, lo cual genera en el diseñador una responsabilidad tanto ética como moral.
            .tarjeta.bg-white.p-4.h-100
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/11.svg' alt='AvatarTop' style='width: 190px').m-auto
              p.text-center El diseñador está sujeto a la funcionalidad, utilidad y practicidad de los materiales que utiliza.
      .row.justify-content-center.mb-3.g-0
        .col-lg-4
          .bg--4.p-4.text-center.h-100.d-flex.align-items-center.linea-azul
            h5.text-center.mb-3 El arte y el diseño poseen varias orientaciones disciplinarias.  
        .col-lg-4
          .bg--4.p-4.text-center.h-100.d-flex.align-items-center
            h5.text-center.mb-3 En los dos, influye la creatividad, la capacidad para crear o inventar algo.
        .col-lg-4
          .bg--4.p-4.text-center.h-100.d-flex.align-items-center.linea-azul2
            h5.text-center.mb-3 Sus aportes perduran en el tiempo.
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Historia del arte
    p.mb-5 La historia del arte <b>es la disciplina de las ciencias sociales encargada de estudiar la evolución del arte a través de cada etapa del tiempo</b>, basando sus estudios en la clasificación y observación de culturas, pueblos y civilizaciones. Su campo de exploración permite identificar cómo el hombre ha evolucionado a través de los tiempos y cuál era su visión respecto al mundo que lo rodeaba en cada etapa desde su existencia. Su estudio requiere ayuda de otras múltiples disciplinas, como arqueología, antropología, geografía, historia y otras más. 
      br
      br
      |Por medio de la historia, se pueden identificar aspectos importantes en las sociedades, como cultura, creencias, política, costumbres, agricultura, vestimenta y muchas más.
      br
      br
      b Las principales etapas de la historia del arte las podrá ver de una manera más detallada a continuación: 
    .row.justify-content-center.mb-3.g-0
      .col-lg-10     
        figure.mb-5(data-aos="zoom-in-up")
          img(src='@/assets/curso/12.svg' alt='AvatarTop').m-auto
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Prehistoria
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p 
          b Paleolítico (2,5 millones a 10.000 a. C.)
          br
          br
          |La palabra paleolítico significa “piedra antigua”, es un periodo que empieza con la vida misma del ser humano. Durante este periodo, el hombre empieza a desarrollar herramientas útiles con diversos materiales, como piedras, maderas, huesos tallados y demás elementos que encontraba en la naturaleza. Aparecen varias técnicas agrícolas y se dice que durante este periodo se hace el descubrimiento del fuego, descubrimiento de gran importancia para todos los periodos venideros.
      .col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/14.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 El periodo se divide en tres fases: <b>paleolítico inferior, paleolítico medio, paleolítico superior</b>. A continuación podrá profundizar estas fases con mayor detenimiento:
    SlyderD.mb-5(:datos="datosSlyder")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Edad Antigua
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p Esta parte de la historia se caracteriza por varios avances que, al igual que en el periodo neolítico, son fundamentales en el desarrollo y trascender de la humanidad. Si bien es cierto que el hombre desde el paleolítico ya dejaba su huella en las cuevas de Altamira, la escritura no se había desarrollado hasta ese momento. El desarrollo de los pueblos y la necesidad de comunicarse hacen que se manifiesten otras formas de comunicación diferentes a la expresión oral. 
        .tarjeta.color-acento-botones.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-around.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/21.svg" alt="Adornos flotantes" style="width: 75px ; left: 3% ; top: -80% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.text-white.mb-0 A través del siguiente video, podrá revisar todo lo que compone esta parte de la historia para el diseño gráfico:
                .col-sm-auto
                  a.boton.color-acento-contenido.tb(href="https://www.youtube.com/watch?v=YYBR2atwo0o" target="_blank")
                    span Enlace
                    i.fas.fa-file-link.tb
      .col-lg-5(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/20.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 30% ; right: ; top:-10% ; bottom: ; width: 40px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Edad Media 
    p.mb-5 Esta edad se compone de diversos tipos de arte:
    .row.mb-5.justify-content-center.g-4
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.rounded-0(@mouseover="indicadorTarjetaSlide = false" style=' height: 275px')
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.m-auto
              img(src="@/assets/curso/26.svg" style="width: 130px").m-auto.mb-3
              h4.text-center El arte bizantino
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/22.jpg')})`}")    
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario.rounded-0( style=' height: 275px')
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.m-auto
              img(src="@/assets/curso/27.svg" style="width: 130px").m-auto.mb-3
              h4.text-center El arte románico
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/23.jpg')})`}")    
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario.rounded-0(style=' height: 275px')
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5.m-auto
              img(src="@/assets/curso/28.svg" style="width: 130px").m-auto.mb-3
              h4.text-center El arte gótico 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/24.jpg')})`}")
    p.mb-5 Conozca más acerca de estos tipos de arte a continuación:   
    SlyderE(indicadores="izquierda").mb-5 
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte bizantino
          p La palabra bizantino corresponde al Imperio Romano de oriente, cuya capital era Bizancio, en el periodo comprendido entre el 395 y el 1454, año en que Constantinopla fue tomada por los turcos. El emperador Constantino pretendió consolidar la unidad política, trasladando la capital imperial de Roma a Bizancio, que era una ciudad griega en los límites entre Europa y Asia. Hoy se conoce como Estambul. Pero en el año 395, el emperador Teodosio dividió el imperio, separando el mundo latino del griego. Luego de enfrentar la invasión germánica, solamente las provincias de oriente continuaron el legado cultural romano, fundiéndose con la cultura helenística. En ese momento, el imperio era teocrático, con un solo Dios y una sola autoridad, el emperador, quien estaba encargado de defender y propagar la fe; sin embargo, la división del imperio produjo también la división religiosa: en oriente, eran ortodoxos y en occidente, cristianos. Esta situación produjo también cambios en el arte, debido a su ubicación privilegiada entre Europa y Oriente.
      
        .col-md-6
          figure
            img(src='@/assets/curso/29.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte bizantino
          p La pintura en este periodo representa el absoluto influjo de la religión en la vida social y política del Imperio Oriental, pero a comienzos del año 730, bajo la autoridad del emperador León III, surgió una crisis iconoclasta que duró hasta el siglo IX, cuando se prohíbe la elaboración de imágenes religiosas en el Imperio, ya que se consideró que dichas imágenes conducían a la idolatría, porque en la materia estaba lo maligno y, por lo tanto, no contribuían en el propósito de seguir el camino a lo divino. Por esa razón, los mosaicos fueron cubiertos dentro de los templos, los motivos religiosos se reemplazaron por retratos del emperador, escenas de guerra, de carreras de caballos o de caza, vegetales o animales.
            br
            br
            |Luego vino el cisma entre las iglesias de Constantinopla y Roma, entonces las imágenes volvieron a ser admitidas en los templos, pero con un valor sagrado, rindiendo culto a Dios por medio de ellas.
      
        .col-md-6
          figure
            img(src='@/assets/curso/30.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte románico
          p Surge en el siglo X y se extiende hasta el XII. En el siglo X, el emperador Otón, junto con Carlomagno, quien gobernó en el siglo IX, fijó las bases de la Europa feudal, caracterizada por el feudo y la dependencia de los vasallos respecto a su señor. En el centro de la propiedad, que era una enorme extensión de tierra, estaba el castillo, la catedral o la abadía. El poder dependía de la cantidad de tierras que se poseyera, y en la cúspide social estaba el rey. En esa época, la iglesia católica logró la unidad de Europa; pero la Iglesia estaba manejada por el poder civil, pues los obispos eran nobles a quienes los reyes u otros nobles les entregaban sus diócesis; en correspondencia, la institución del papado se fortaleció. Los monjes se dedicaron a realizar trabajos manuales, tareas agrícolas y artesanales, convirtiéndose los monasterios benedictinos en centros económicos independientes y en focos culturales de primera importancia, ya que copiaban manuscritos antiguos, realizaban pinturas de miniaturas y redactaban crónicas históricas. 
      
        .col-md-6
          figure
            img(src='@/assets/curso/31.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte románico
          p En cuanto a la arquitectura románica, se caracteriza por las iglesias en forma de cruz latina; usualmente, tienen una cripta en la que se depositaban los cuerpos de los santos. En esta época, se retomaron materiales y técnicas de construcción de los romanos, también se construyeron campanarios. La arquitectura tenía un significado religioso, por eso la escultura románica es monumental, y estas obras, como iban dirigidas a los fieles y los peregrinos, se ubicaban en las portadas de las iglesias, dentro de ellas y en los conventos. Las imágenes tienen como protagonista a Cristo. Utilizaron la decoración geométrica, vegetal, humana o animal, dispuesta en sentido radial. En las columnas también esculpieron estatuas; las representaciones, en general, eran religiosas, relacionadas con diferentes pasajes de la Biblia, por ejemplo, los cuatro evangelistas, el juicio final y otros. La ubicación de las imágenes dentro de las iglesias se hacía por orden jerárquico y de importancia, por ejemplo, en el norte está el antiguo testamento, el sur es el nuevo y el oeste el juicio final. Las pinturas murales se ubicaron en el ábside o parte posterior del altar. 
      
        .col-md-6
          figure
            img(src='@/assets/curso/32.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte gótico
          p Se inició en el siglo XII, alcanzando su esplendor en los siglos XIII al XV. Los cambios en la sociedad produjeron el desplazamiento de los campos hacia las regiones urbanas, donde dominó la burguesía, clase fundamentalmente comerciante, que propendió por el sentido comunal, la defensa de los intereses de sus habitantes y la autonomía municipal. Por esa razón, al lado del poder religioso representado en las catedrales, se construyeron los ayuntamientos. Los artesanos y los artistas se organizaron en gremios que buscaban evitar la competencia y el monopolio. Los gremios se encargaron de realizar numerosas obras artísticas, siendo la ciudad un polo de desarrollo cultural, sobre todo por el surgimiento de las universidades, que desplazaron a los monasterios. en la arquitectura gótica se utilizó el vidrio con tonos preferencialmente azules y rojos, y la piedra en forma de sillares, por cuanto lo estructural tuvo para la época enorme valor estético.
      
        .col-md-6
          figure
            img(src='@/assets/curso/33.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte gótico
          p Hasta el siglo XIV en Italia y en el siglo XV en Flandes, la pintura se desarrolló más tarde que la arquitectura y la escultura. En Italia, la pintura tenía influencia bizantina, manteniendo un estilo idealista, con curvas delicadas, fondos dorados y cuerpos alargados, conservando la mayor parte de los descubrimientos helenísticos que pasaron a la edad media. Pero las demandas de la burguesía adinerada exigían más obras pictóricas realistas, en las que se reprodujera el mundo visible aplicando el naturalismo de los escultores góticos. Pintaron especialmente figuras en un espacio que representara profundidad. Giotto utilizó el fresco con dominio completo, introdujo la tercera dimensión, lo que consiguió a través del escorzo y el juego entre luces y sombras, y el fondo antes dorado lo sustituyó por el cielo y el paisaje. Giotto se hizo famoso, hecho que era nuevo, pues hasta el momento las obras de arte eran anónimas, y se convirtió en el precedente de la perspectiva, que fue la gran conquista del Renacimiento. 
      
        .col-md-6
          figure
            img(src='@/assets/curso/34.jpg', alt='Texto que describa la imagen')
      .row
        .col-md-6.mb-4.mb-md-0
          h4 El arte gótico
          p En cuanto a Flandes, se produjo una renovación en la pintura, inclinándose hacia la realidad partiendo de la observación, incorporando todos los detalles posibles, utilizando el claroscuro, lo cual hizo ganar en profundidad y volumen a las obras, dando mayor apariencia de vida. Utilizaron el óleo, cubierto al final con una capa de barniz. Esta técnica pictórica permite desarrollar el estilo flamenco, pintando imágenes religiosas y el retrato de los burgueses flamencos, quienes preferían pinturas en caballete por ser más fáciles de transportar. En ese momento histórico, Italia ya se encaminaba al Renacimiento.
      
        .col-md-6
          figure
            img(src='@/assets/curso/35.jpg', alt='Texto que describa la imagen')
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Edad Moderna
    h5(data-aos="fade-right") Renacimiento
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5(data-aos="zoom-in-up")
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/36.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Fue el nombre que se le dio a un importante movimiento filosófico y artístico que se produjo en Europa desde finales del siglo XIV hasta el siglo XVI, y fue una etapa de transición de la Edad Media a la Era Moderna. Su principal desarrollo se produjo en Italia. Su denominación se debe a que en esta época se redescubrieron la cultura greco-romana y la filosofía clásica. Se inspiró en la olvidada cultura de la Edad Media, el racionalismo, la experimentación, y también en la exaltación de la naturaleza humana, pues el hombre fue el centro del universo, la medida de todas las cosas. 
    p.mb-5 A medida que más personas aprendían a leer y que los libros se imprimieron y llegaron a sitios geográficos diversos, gracias al invento de la <b>imprenta, creación de Johannes Gutenberg,</b> la capacidad de raciocinio generó una revolución intelectual en la búsqueda del conocimiento, pues la difusión de textos propendía por la renovación cultural y por la reinterpretación de los valores tradicionales greco-romanos. Los cambios se dieron gradualmente y afectaron a toda la sociedad en todos los aspectos. 
      br
      br
      |Durante el Renacimiento, los artistas firmaron sus obras y la burguesía compraba imágenes o estatuas de sí mismos, formando parte del hedonismo que caracterizó la época. Los artistas eran realistas, porque integraban al hombre con la naturaleza, la creación y el universo, y dependían económicamente de mecenas (patrocinio que se otorgaba a los artistas), quienes eran comerciantes, banqueros, aristócratas, incluso Papas.
    .row.mb-5.justify-content-center.g-0.align-items-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/37.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p.ms-5 El auge de El Renacimiento fue entre 1490 y 1527, y en cuanto a la arquitectura, Filippo di Ser Brunellesco Lapi fue el más destacado, también fue escultor y orfebre. Otro destacado representante del Renacimiento fue Michelangelo Buonarroti, quien era arquitecto, escultor y pintor, caracterizado por su perfeccionismo en la escultura y en la pintura (realizó la obra excepcional de la bóveda de la Capilla Sixtina por imposición del Papa Julio II), elaboró esculturas muy importantes, como La Piedad y El David. Asimismo, <b>Leonardo Da Vinci fue considerado el último hombre de El Renacimiento</b>, fue un gran polímata (persona que se destaca en diferentes disciplinas), tuvo creaciones relacionadas con el helicóptero, el submarino, entre otras. Sus obras más representativas son La Gioconda y La Última Cena.
        .bg--1-claro.p-3.ps-5
          p.mb-0 <b>Retrato de Lisa Gherardini</b>, esposa de Francesco del Giocondo, obra conocida como La Gioconda o La Mona Lisa. Actualmente, expuesta en el Museo del Louvre en París.
    h4(data-aos="fade-right") El Barroco
    .row.mb-5.justify-content-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/38.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p Expresaba una sensibilidad desengañada, crítica, compleja y pesimista. El término fue utilizado inicialmente para referirse a algo engañoso o recargado, en forma despectiva, pero desde el siglo XIX, el término se utilizó para referirse no sólo al periodo, sino a las manifestaciones artísticas que contradijeron los valores del clasicismo, mediante una negación simbólica y artística de lo clásico, por eso fue femenino, irracional y dionisíaco. El Barroco enfatizó lo cotidiano y efímero de la vida, lo cual produjo una vulgarización del imaginario religioso; consideró que lo nacional y religioso eran expresiones de poder político, por eso se elaboraron obras monumentales y recargadas, que propendían por hacer resaltar el poder dominante, pero mediante engaños y artificios.
    .row.mb-5
      .col-lg-8(data-aos="fade-right")
        .bg--1-claro.p-4.mb-4
          p.mb-0 La pintura fue una expresión artística de El Barroco. Se distinguen dos vertientes, una naturalista, cuyo estilo se basa en la observación de la naturaleza, y la otra es el clasicismo, que es opuesta a la anterior, con un estilo más realista y racional, predominando el dibujo sobre el color; vertientes caracterizadas por el realismo superficial, los colores ricos, y el contraste entre las luces y las sombras. Exponentes de este período son Rembrandt, Rubens, Velásquez, Poussin, Vermeer y Caravaggio, quien realizaba una minuciosa observación anatómica con el uso del claroscuro, lo que otorgaba dramatismo a su obra y que llegó a conocerse como tenebrismo. Caravaggio plasmó vívidos momentos y escenas relacionadas con luchas violentas, muerte o tortura.
      .col-lg-4(data-aos="fade-left"): img(src="@/assets/curso/39.jpg" alt="Adornos flotantes")
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/40.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p La escultura barroca estuvo vinculada con la religión y con la arquitectura, porque decoraban los espacios públicos, los palacios y las locaciones religiosas. Eran dinámicas, expresivas y ornamentadas; expresaban pasiones y estaban recargadas de detalles. Se expresó en dos vertientes, una, la gótica, y otra, la renacentista. En términos generales, durante el período barroco, se siguieron trabajando los temas de historia, mitología y religión, aunque preferían las obras llenas de dramatismo. La Iglesia Católica prefirió los temas como la inmaculada concepción, la virgen, la eucaristía, los santos, asuntos claves en la disputa del protestantismo.
    .texto-adorno.bg--2.px-4.py-2.mb-5(data-aos="fade-right")
      h4.mb-0.me-3 Edad Contemporánea
    p.mb-5 Los avances tecnológicos que se aportaron en este época fueron de mucha trascendencia para la industria gráfica; los diferentes movimientos artísticos junto a sus representantes generaron la ruptura con la pintura tradicional, por lo que es importante que revise el siguiente video, pues le permitirá profundizar sobre el diseño gráfico que se marcó en esta época.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/42.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p Adicionalmente, es importante que sepa que el cubismo también se desarrolló en la escultura, con técnicas parecidas al collage del cubismo sintético, que integró señales y fragmentos de cosas reales. Se elaboró con materiales de desecho, compuestas de diversas piezas, con huecos y vacíos en la superficie. En la arquitectura, el cubismo no tuvo casi representación, se realizó sobre todo en Checoslovaquia, como en la Casa de la Virgen Negra de Praga.
    h4(data-aos="fade-right") Impresionismo
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/43.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p Este movimiento artístico se desarrolló a partir de la segunda mitad del siglo XIX en Europa, especialmente en Normandía. Propendía por plasmar la luz con la impresión visual en un instante determinado, gracias a la evolución y creación de nuevos pigmentos, que generaron gran variedad de colores, y como, además, los óleos venían en tubos, eso impedía que se secaran cuando pintaban al aire libre. Los pintores usaron colores puros, dando origen a la ley del contraste cromático, ya que todo color es relativo a los colores que le rodean, y a la ley de los colores complementarios. Contrastaron la luz con la oscuridad, generando la ilusión de profundidad por medio del modelado de color, que consiste en que por medio del color se crea volumen, con una zona de luz, de media sombra y sombra más profunda, agregando blanco para la luz y negro para la sombra.
    .bg--4-claro.p-4(data-aos="zoom-in-up").mb-5
      .row.justify-content-center.align-items-center
        .col-lg-2.d-none.d-xl-block: img(src="@/assets/curso/44.svg") 
        .col-lg-8: p.mb-0 Para los pintores impresionistas, el dibujo y la forma pasaban a un segundo plano, siendo el reto más importante plasmar la iluminación y el color sobre el cuerpo o el objeto. Por eso, muchas imágenes se ven como diluidas o mezcladas. Buscaron iluminación interior, exterior, iluminación natural filtrada o al aire libre, con los reflejos sobre el agua, o la luz del sol a través de las hojas de los árboles.  
    h4(data-aos="fade-right") Neoclasicismo
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/45.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p Movimiento artístico con raíces filosóficas y estéticas de la antigüedad clásica, movimiento moralizante, social e intelectual, para adaptarse a la modernidad y reinterpretar sus formas, que surgió a mediados del siglo XVIII y se extendió hasta el XIX. Su furor se produjo debido al descubrimiento de Pompeya y Herculano, por lo que se realizaron numerosas expediciones para conocer las obras antiguas en sus lugares de origen. Además, apareció la Ilustración o el Iluminismo, que defendía la razón y el conocimiento para fomentar el progreso. Igualmente, tuvo lugar la Revolución Industrial, que modificó los modos de producción y organización social, y la Revolución Francesa, con sus proclamas de igualdad, libertad y fraternidad. 
    .bg--4-claro.p-4(data-aos="zoom-in-up").mb-5
      p.mb-0 El arte de este periodo tomó como temas modelos ideas morales de la historia grecolatina, la historia de las repúblicas y de la Revolución Francesa; elaboraron retratos y algunas pinturas religiosas. En cuanto a la pintura, el dibujo era de vital importancia, se usó el fresco, pero primordialmente el óleo; supresión de objetos decorativos. En cuanto a la anatomía, se utilizó lo impuesto por los clásicos antiguos, las pinceladas no se distinguen en las obras, la luz es clara y fría.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/46.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
      .col-lg-7(data-aos="fade-left")
        p En cuanto a la escultura, se prefirió el mármol, el alabastro y el cobre, exaltando la belleza ideal y el equilibrio conforme a los clásicos antiguos; se dejó a un lado la policromía, que consistía en el arte de pintar o decorar con varios colores las obras; la representación de las emociones era sutil; las esculturas no son dinámicas.
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-around.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/47.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 Para  reforzar sus conceptos en este tema, se le invita a ver el video <b>Historia del Arte Universal</b> que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-contenido.tb(href='https://www.youtube.com/watch?v=I7gIIby02aw&t=8s' target='_blank')
                    span Enlace
                    i.fas.fa-link
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Exponentes, movimientos y tendencias del diseño
    p.mb-5 Existen diversas tendencias y exponentes de cada periodo. Es importante aclarar que un mismo artista puede pertenecer a varias tendencias, ya que muchas de ellas se han dado en cortos periodos de tiempo.
      br
      br
      |Algunos de las tendencias del diseño son: 
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta bg--4-claro")
      .row(titulo="Art Nouveau").p-3
        .col-md-8.mb-4.mb-md-0
          p <b>Finales del siglo XIX, principios del siglo XX</b>
            br
            br
            | Este movimiento se caracteriza por tener grandes artistas en su lista. Uno de sus mayores expositores es Alfons Mucha, quien revolucionó con <b>su obra, la cual representaba la belleza y erotismo de la mujer, con gran delicadeza y sofisticación</b>. Mucha salta a la fama con la invención de un cartel para la obra Gismonda, protagonizada por la actriz Sarah Bernhardt, actriz de cine y teatro, muy importante en la movida parisina. Sarah fue la musa de varios de sus trabajos.
            br
            br
            |Este movimiento nace bajo las formas poéticas de la naturaleza, el manejo enriquecido de la línea, las curvas, fuerza y movimiento que pueden aportar, adaptándose a la vida moderna. Al igual que muchos otros movimientos, el Art Nouveau imprime su sello en todas las áreas artísticas de la época.
            br
            br
          h4 Características
          ol.lista-ol--cuadro--color
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Énfasis en elementos de la naturaleza, un estilo joven y moderno.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Manejo de la línea y las formas naturales.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Es el primer movimiento que trata de no parecerse a otro.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Se utilizaron gran cantidad de materiales, sobre todo en la arquitectura y el diseño industrial.
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Énfasis rico en el color.
        .col-md-4
          figure
            img(src='@/assets/curso/48.jpg', alt='Texto que describa la imagen')
      .row(titulo="Constructivismo").p-3
        .col-md-8.mb-4.mb-md-0
          p <b>(1914) Rusia</b>
            br
            | El Constructivismo nace en Rusia, en 1914. En el año 1917, Malevich empleó el término 
            br
            |<b><em>construction art</em></b> (en español, arte para construcción), haciendo referencia al trabajo de Ródchenko, 
            br
            |bajo una connotación negativa.
            br
            br
            |Una de las obras más icónicas de este periodo es realizada por Vladimir Tatlin, pintor y escultor, al 
            br
            |cual se asocia con el nacimiento del Constructivismo. Diseño del Monumento a la Tercera 
            br
            |Internacional, o también llamada Torre de Tatlin, que es un edificio habitable, más alto que la propia 
            br
            |Torre Eiffel, el cual no se edificó.
            br
            br
            |Entre sus principales exponentes, además de Vladimir Tatlin, están: Aleksandr Ródchenko, 
            br
            |Aleksandra Ekster, János Máttis-Teutsch, Lajos Kassák, El Lissitzky, entre otros. 
          h4 Características
          ol.lista-ol--cuadro--color
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Se basa en la abstracción geométrica y funcional.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Sus fuentes de inspiración son el cubismo y el dadaísmo.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Se utilizan colores como rojo, naranja, azul, blanco, negro y amarillo.
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Rechaza el arte burgués de la época. 
            li 
              .lista-ol--cuadro__vineta
                span 5
              | Se asocia a la producción industrial.
          p Se utilizan tipografías en negritas en los carteles, sobre todo en la propaganda política.
        .col-md-4
          figure
            img(src='@/assets/curso/49.jpg', alt='Texto que describa la imagen')
      .row(titulo="Bauhaus").p-3
        .col-md-8.mb-4.mb-md-0
          p <b>Casa de la construcción estatal, 1919, Alemania.</b>
            br
            br
            |Fundada en 1919 por Walter Gropius, en Weimar, Alemania. La primera fase (1919-1923) fue idealista y romántica; la segunda (1923-1925), mucho más racionalista; y en la tercera (1925-1929), alcanzó su mayor reconocimiento, coincidiendo con su traslado de la ciudad de Weimar a Dessau (Díez y Parra, 2015).
            br
            br
            |Su característica principal de diseño es la sustracción de ornamentos como los utilizados en el Art Nouveau, de formas limpias y geométricas, colores primarios que buscan la funcionalidad con la menor cantidad de elementos. Esta escuela es cerrada por el Partido Nacional Socialista, bajo el mandato de Hitler.
            br
            br
            |Sus principales exponentes son: Walter Gropius, Paul Josef Albers, Lyonel Feininger, Alfred Arndt, Herbert Bayer, Ludwig Hilberseimer, Marianne Brandt, Johannes Itten, Marcel Breuer, Wassily Kandinsky.
          h4 Características
          ol.lista-ol--cuadro--color
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Su principal función es la innovación en el pensamiento, dejando atrás los convencionalismos del momento, la forma sigue a la función.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | La Bauhaus hizo aportes importantes al diseño gráfico e industrial que se utilizan hasta el día de hoy, basados en las tendencias modernistas del uso y relación entre el diseño, materiales funcionales y minimalistas.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | El diseño tipográfico se enriquece con el aporte de nuevos estilos, que apuestan por la funcionalidad más que por la estética.
            li 
              .lista-ol--cuadro__vineta
                span 4
              |  Los colores predominantes son los primarios: amarillo, azul y rojo, en contraste con formas básicas como el triángulo, el círculo y el cuadrado.
            li 
              .lista-ol--cuadro__vineta
                span 5
              |  Las formas geométricas y abstractas se utilizan para simplificar los elementos.
        .col-md-4
          figure
            img(src='@/assets/curso/50.png', alt='Texto que describa la imagen')
      .row(titulo="Art Déco").p-3
        .col-md-8.mb-4.mb-md-0
          p <b>Europa 1920 – 1939</b>
            br
            br
            |A la par que en Alemania se desarrolla la escuela de la Bauhaus, Francia y otros países adoptan un movimiento diferente, llamado Art Déco, movimiento modernista, que se sitúa con una visión influenciada por diversas estéticas, como la del constructivismo ruso, del cual toma las líneas duras y la solidez de las formas.
            br
            br
            |Materiales como aluminio, acero inoxidable, piel de animales, maderas y otros son los mayormente utilizados. En arquitectura, uno de los mejores ejemplos de este estilo es la cúpula del edificio Chrysler, en la ciudad de Nueva York, construido entre 1928 y 1930; en este, se observan el uso de las líneas, la repetición, y formas características del movimiento, los diversos materiales enfocados hacia un concepto industrializado.
            br
            br
            |Esta corriente busca un nuevo optimismo después de vivir la Primera Guerra Mundial, sus diseños imprimen un toque elegante y suntuoso, encaminado hacia un futuro esperanzador. Los colores son vibrantes e irradian mucho brillo, esto como influencia del Fauvismo, las tipografías realizadas en el Art Déco, eran revestidas en muchos casos por una capa de oro, lo cual imprimía un toque de suntuosidad.
          h4 Características
          ol.lista-ol--cuadro--color
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Es un movimiento de posguerra, basado en el lujo y la suntuosidad, que desea dejar atrás las carencias de la época. 
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Las piezas de este movimiento son puramente decorativas, en la mayoría de los casos.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Gira alrededor del progreso, el urbanismo, la ciudad y la maquinaria. 
            li 
              .lista-ol--cuadro__vineta
                span 4
              | Uso continuo de colores, brillos, líneas y formas aerodinámicas. 
        .col-md-4
          figure
            img(src='@/assets/curso/51.jpg', alt='Texto que describa la imagen')
      .row(titulo="El diseño gráfico en los años 30").p-3
        .col-md-8.mb-4.mb-md-0
          p La década de los años 30 se caracterizó por dejar atrás los excesos del Art Déco, esto, sumado a la gran depresión de 1928, generó un cambio en el diseño y las artes. Con formas restringidas tomadas del Art Decó y colores tenues, el cartel se vuelve sombrío. 
            br
            br
            |Tschichold, tipógrafo alemán, hace grandes aportes a la tipografía, el arte y la arquitectura, con la aplicación de conceptos constructivistas. En su libro <b>La nueva tipografía</b>, da a conocer tipografías asimétricas y conceptos del diseño asimétrico, que poco se utilizaba en ese momento. 
            br
            br
            |Los avances tecnológicos y el diseño van a la par, esto se refleja en los trabajos realizados, que buscan dar un falso movimiento a las piezas. Se destacan en esta década: Herbert Matter, Piet Zwart, y Lester Beall.
          h4 Características
          ol.lista-ol--cuadro--color
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Diseños sobrios.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Colores tenues, poco cálidos. 
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Formas no simétricas.
        .col-md-4
          figure
            img(src='@/assets/curso/52.jpg', alt='Texto que describa la imagen')
      .row(titulo="El diseño durante la II Guerra Mundial (cartel bélico)").p-3
        .col-md-8.mb-4.mb-md-0
          p En 1939, comienza la Segunda Guerra Mundial, conflicto que durará hasta el año 1945, dividiendo al mundo entre el bloque occidental y el comunista.  La noción de la guerra y las revoluciones hace que el diseño sea un arma política, capaz de transmitir un mensaje claro y efectivo, ya que es utilizado por los gobiernos para impulsar sus ideologías, infundir miedo y como propaganda política.
            br
            br
            |Se utilizan colores de gamas grisáceas y en otros colores primarios, sobre todo para exaltar al Gobierno y el servicio a la patria, al cual estaban destinados los hombres.
            br
            br
            |En Estados Unidos, sobresale el trabajo de James Montgomery Flagg, del famoso cartel del <b>tío Sam</b>; J. Howard Miller, creador del cartel ¡<b>Podemos hacerlo</b>!, que se muestra en la imagen; y en Alemania, Joseph Goebbels, con un cartel icónico citando <b>la victoria será nuestra</b>, el cual muestra un soldado frente a la bandera del partido Nazi.
          h4 Características
          ol.lista-ol--cuadro--color
            li 
              .lista-ol--cuadro__vineta
                span 1
              | Uso político.
            li 
              .lista-ol--cuadro__vineta
                span 2
              | Se utiliza la manipulación mediante el cartel.
            li 
              .lista-ol--cuadro__vineta
                span 3
              | Utilización de colores primarios y neutros. 
        .col-md-4
          figure
            img(src='@/assets/curso/podemos.png', alt='Texto que describa la imagen')
    #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.4 Diseño básico
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-7(data-aos="fade-left")
        p El diseño visual, base de la creación del diseño, es considerado hoy un eje fundamental de la vida cotidiana de los individuos, puesto que se vive en un mundo cada vez más globalizado, donde existe saturación por miles de imágenes que a diario se distribuyen a través de diversos medios. Es así como la comunicación se logra por medio del lenguaje escrito, verbal y visual, cada uno con un código particular, utilizados en diversos campos y ámbitos de la vida cotidiana. Para referirse al lenguaje visual, se puede decir entonces que es la capacidad de comunicación mediante imágenes, utilizadas como medio de expresión en todas sus formas y posibilidades, para dar a conocer sensaciones, pensamientos, emociones y sentimientos, que se pueden expresar en representaciones gráficas. 
        .bg--4-claro.p-4.mb-3
          p.mb-0 Según el diccionario etimológico (Etimologías de Chile, 2020), la palabra imagen proviene del latín “<i>imago</i>”, la cual significa retrato, copia o imitación. A pesar de esto, la imagen, a diferencia de la escritura o el lenguaje, suele tener un grado de dificultad en cuanto a su lectura, ya que cada individuo puede realizar su propia interpretación de la misma, lo cual no sucede con las palabras; por ejemplo, al decir perro, la asociación que generalmente se hace es con un animal de 4 patas, indiferente de su raza.
        p No siempre una imagen vale más que mil palabras; por ejemplo, esta señal que se expone significa circulación prohibida, y es probable que pocos asocien la imagen a este concepto.
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/53.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-around.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/54.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 Para  reforzar sus conceptos sobre este tema, se le invita a ver el video <b>Fundamentos del diseño</b>, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-contenido.tb(href='https://www.youtube.com/watch?v=7N2v0bpNFKA' target='_blank')
                    span Enlace
                    i.fas.fa-link
    h3(data-aos="fade-right") Herramientas del lenguaje visual
    p.mb-5 El lenguaje visual se organiza a partir de dos tipos de herramientas
    h4(data-aos="fade-right") A. Herramienta de configuración: 
    p.mb-5 Dentro de las herramientas de configuración, se pueden resaltar las siguientes: tamaño, forma, color, textura e iluminación; detállelas a continuación.
    .row.mb-5
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="height: 427px ")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.py-4.p-xl-5.px-2
              img(src="@/assets/curso/59.svg" alt="Adornos flotantes" style="width: 70px ").m-auto.mb-3
              .text-center.text-small
                h3 Tamaño
                p  Hace referencia a la dimensión adecuada con la cual trabajar una imagen de acuerdo con los criterios requeridos, para conseguir los mejores resultados.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/55.jpg')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="height: 427px ")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.py-4.p-xl-5.px-2
              img(src="@/assets/curso/60.svg" alt="Adornos flotantes" style="width: 70px ").m-auto.mb-3
              .text-center.text-small
                h3 Forma
                p  Todo aquello que nos rodea tiene una forma, se podría definir como el aspecto exterior de las cosas, que presentan un contorno, textura, tamaño y color. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/56.jpg')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="height: 427px ")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.py-4.p-xl-5.px-2
              img(src="@/assets/curso/61.svg" alt="Adornos flotantes" style="width: 70px ").m-auto.mb-3
              .text-center.text-small
                h3 Color
                p  El lenguaje visual tiene como gran recurso la utilización del color, el cual puede aportar mucha fuerza, carácter e información que enriquece la imagen. Mediante el color, se pueden afianzar los conceptos frío, calor, primavera, invierno, entre otros. De igual manera, ofrece una gama ilimitada de posibilidades en su tratamiento. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/57.jpg')})`}")
      .col-sm-6.col-xl-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="height: 427px ")
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.py-4.p-xl-5.px-2
              img(src="@/assets/curso/62.svg" alt="Adornos flotantes" style="width: 70px ").m-auto.mb-3
              .text-center.text-small
                h3 Textura
                p  Toda figura tiene una superficie, esta puede tener diferentes características, unas suaves, otras ásperas, arrugadas, lisas o abultadas. Existen la textura visual y la textura táctil.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/58.jpg')})`}")
    h4(data-aos="fade-right") B. Herramientas de organización: 
    p.mb-5 Dentro de estas, se encuentran la composición y la retórica visual. Es necesario conocer más sobre ellas, por lo tanto, observe lo siguiente:
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        .tarjeta.bg--3-claro.p-5.h-100
          img(src="@/assets/curso/63.svg" alt="Adornos flotantes" style="width: 70px ").mb-3
          h5 La composición: 
          p.mb-3 La composición de una imagen se hace ordenando las herramientas y elementos que integran la obra en pro de la intencionalidad y el mensaje a transmitir.
          img(src="@/assets/curso/65.jpg" alt="Adornos flotantes" ).m-auto.mb-3 
      .col-lg-6(data-aos="fade-right")
        .tarjeta.bg--4-claro.p-5.h-100
          img(src="@/assets/curso/64.svg" alt="Adornos flotantes" style="width: 70px ").mb-3
          h5 La retórica visual:
          p.mb-3 Reconecta los significados de los componentes del producto visual, para transmitir mensajes y sensaciones más allá del sentido literal.  Los tres componentes de la retórica visual son:
          .bg-white.p-3
            #carouselExampleIndicators.carousel.slide(data-bs-ride='carousel').px-5
              .carousel-indicators
                button.active(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2')
                button(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3')
              .carousel-inner
                .carousel-item.active
                  .row.align-items-center
                    .col-lg-3: img(src="@/assets/curso/66.svg")
                    .col-lg-9
                      h4 Metáfora:
                      p Comparación implícita de dos términos a partir de la semejanza de sus significados, estableciendo una relación. Ejemplo, el sueño eterno, para referirse a la muerte.

                .carousel-item
                  .row.align-items-center
                    .col-lg-3: img(src="@/assets/curso/67.svg")
                    .col-lg-9
                      h4 Alegoría:
                      p Metáfora extendida o sucesión de metáforas para expresar algo diferente a lo dicho. Ejemplo: Ella gira dentro de mi cabeza.
                .carousel-item
                  .row.align-items-center
                    .col-lg-3: img(src="@/assets/curso/68.svg")
                    .col-lg-9
                      h4 Metonimia:
                      p Reemplazar el nombre de un elemento por otro con el que se relaciona o existe una relación de dependencia causa – efecto. Ejemplo: le hizo daño el sol, para referirse al calor del sol. 
              .slyder-1
              button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev')
                span.carousel-control-prev-icon(aria-hidden='true')
                span.visually-hidden Previous
              button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next')
                span.carousel-control-next-icon(aria-hidden='true')
                span.visually-hidden Next
    h3(data-aos="fade-right") Gramática del lenguaje visual
    p.mb-5 Así como el lenguaje escrito necesita de un abecedario, signos y símbolos para poder llegar a manifestar de forma asertiva un mensaje, el lenguaje visual también necesita de ciertos recursos gráficos para comunicar de manera correcta aquello que desea expresar, ordenando para ello los elementos que hacen parte de la comunicación gráfica, desde el punto y la línea. No obstante, no se puede negar que el proceso visual es una síntesis de conocimientos perceptivos que acompañan al individuo, por lo que su lectura, respecto a la imagen, es individual. <b>En resumen, la gramática visual ordena los elementos que hacen parte de sí misma, los procesos que lleva a cabo y las relaciones que se producen.</b>
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-around.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/54.svg" alt="Adornos flotantes" style="width: 117px ; left: 3% ; top: -80% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-10
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 Para  reforzar sus conceptos sobre este tema, se le invita a ver el video <b>Conceptos de diseño: la forma</b>, que se encuentra en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-contenido.tb(href='https://www.youtube.com/watch?v=dstsb4-2fCc' target='_blank')
                    span Enlace
                    i.fas.fa-link
    h4(data-aos="fade-right") Forma, repetición, estructura, contraste y textura
    p.mb-5 Cuando se habla de elementos del diseño, se dice que existen:
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        .tarjeta.tarjetas-text
          img(src="@/assets/curso/69.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.p-5
            h3 Elementos conceptuales
            p Son aquellos elementos que, aunque no son visibles, están en la mente por asociación; por ejemplo, cuando dibuja un cubo por medio de líneas, implícitamente le da una tridimensionalidad que no es real, pero que se forma como reflejo de la imagen y la asociación.
      .col-lg-6(data-aos="fade-left")
        .tarjeta.tarjetas-text
          img(src="@/assets/curso/70.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text__contenido.p-5
            h3 Elementos visuales
            p Hacen destacar las características de una imagen, como su color, textura, ancho y alto. Un concepto muy utilizado dentro del diseño es el módulo, elemento tomado como unidad de medida utilizada dentro de una composición gráfica, la cual suele repetirse sistemáticamente. 
    p.mb-5 Se le invita a revisar la siguiente presentación, que le ayudará a profundizar sobre el tema:
    .tarjeta.tarjeta--azul.p-4.mb-5
      SlyderA.p-5
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Forma
            p Los elementos conceptuales no son visibles, así el punto, la línea o el plano, cuando son visibles, pasan a ser una forma. Un punto sobre el papel, por pequeño que sea, debe tener una figura, un tamaño, un color y una textura si se pretende que sea visto. También debe señalarse lo mismo de una línea o de un plano. En un diseño bidimensional, el volumen es imaginario.
              br
              br
              |Dentro de la forma encontramos:
            .row.justify-content-center
              .col-auto(@mouseover="mostrarIndicador = false").mb-3
                a.boton.color-acento-botones.indicador__container(@click="modal1 = true")
                  span.fw-bold.text-white La forma como punto
                  .indicador--click(v-if="mostrarIndicador")
              .col-auto.mb-3
                a.boton.color-acento-botones.indicador__container(@click="modal2 = true")
                  span.fw-bold.text-white La forma como línea
              .col-auto.mb-3
                a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                  span.fw-bold.text-white La forma como plano
          .col-md-5
            figure
              img(src='@/assets/curso/71.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Repetición
            p La repetición tiene como función unificar el diseño, se da como resultado de la repetición continua de un mismo elemento dentro de un espacio, lo cual permite igualdad, ritmo y equilibrio a nivel visual.
          .col-md-5
            figure
              img(src='@/assets/curso/72.jpg', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Estructura
            p La estructura sugiere un orden y predefine las relaciones internas de las formas en un diseño, es decir la posición. Es posible haber creado un diseño sin haber pensado conscientemente en la estructura, pero la estructura está siempre presente cuando hay una organización (Wong, 1991). 
          .col-md-5
            figure
              img(src='@/assets/curso/73.svg', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Radiación
            p Puede ser descrita como un caso especial de repetición. Se trata de los módulos repetidos o las subdivisiones estructurales que giran regularmente alrededor de un centro común, produciendo un efecto de radiación. La radiación es un fenómeno común en la naturaleza; por ejemplo, lanzar una piedra a un lago genera ondas concéntricas, provocando una gradación, serie ordenada gradualmente (Godoy, 2009b).
          .col-md-5
            figure
              img(src='@/assets/curso/74.svg', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Contraste
            p El contraste ocurre siempre, aunque su presencia pueda no ser advertida. Se presenta el contraste cuando una forma está rodeada de un espacio blanco; cuando una línea recta se cruza con una curva; cuando una forma es mucho mayor que otra; cuando coexisten direcciones verticales y horizontales. El contraste es solo una clase de comparación, por la cual las diferencias se hacen claras.
              br
              br
              | Dos formas pueden ser similares en algunos aspectos y diferentes en otros. Sus diferencias quedan enfatizadas cuando hay un contraste. Una forma puede no parecer grande si es vista de forma aislada, pero puede parecer gigantesca junto a formas diminutas.
          .col-md-5
            figure
              img(src='@/assets/curso/75.svg', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Contraste
            p La regularidad no produce necesariamente un buen diseño, aunque puede garantizar cierto grado de armonía. El mismo grupo de módulos, utilizados en una estructura de repetición, pueden derivar en un diseño opaco en las manos de un diseñador y en un diseño llamativo en manos de otro. El debido uso del contraste en los elementos de relación puede explicar esa diferencia.  El contraste puede ser derivado de elementos como la figura, el tamaño, el color, la textura, la dirección de los elementos, la posición, el espacio y la gravedad (Godoy, 2009a). 
          .col-md-5
            figure
              img(src='@/assets/curso/76.svg', alt='Texto que describa la imagen')
        .row
          .col-md-7.mb-4.mb-md-0
            h4 Textura
            p De acuerdo con Wong (1991), la textura se refiere a las características de una superficie de una figura. Toda figura tiene una superficie y toda superficie debe tener ciertas características, que pueden ser descritas como suave, rugosa, lisa o decorada, opaca o brillante, blanda o dura. Aunque, generalmente, se supone que una superficie plana y pintada no tiene textura alguna, en realidad, la capa de pintura es ya una textura; como, también, la textura del material sobre el que fue creada la figura. La textura apropiada añade riqueza a un diseño. 
              br
              br
              |La textura puede ser clasificada en dos importantes categorías: textura visual y textura táctil.
            .row.justify-content-center
              .col-auto(@mouseover="mostrarIndicador = false")
                a.boton.color-acento-botones.indicador__container(@click="modal4 = true")
                  span.fw-bold.text-white Textura visual
                  .indicador--click(v-if="mostrarIndicador")
              .col-auto
                a.boton.color-acento-botones.indicador__container(@click="modal5 = true")
                  span.fw-bold.text-white Textura táctil
          .col-md-5
            figure
              img(src='@/assets/curso/77.jpg', alt='Texto que describa la imagen')
    h4(data-aos="fade-right") Composición, percepción y equilibrio visual
    p.mb-5 En diseño, la composición es el ordenamiento y disposición de los distintos elementos dentro del espacio visual de manera ordenada, con el fin de transmitir un mensaje objetivo al público. El éxito de cualquier proyecto gráfico reside en la composición, que sea clara, concisa, sencilla y directa, esto posibilita una mejor lectura de esta.
      br
      br
      |La composición consiste en jugar con los elementos, rotarlos, cambiarlos de posición, ubicarlos por grupos, por colores, etc.; observe más, a continuación, sobre este importante tema:
    #carouselExampleIndicators2.carousel.slide(data-bs-ride='carousel2').mb-5
      .carousel-indicators
        button.active(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='0' aria-current='true' aria-label='Slide 1')
        button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='1' aria-label='Slide 2')
        button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='2' aria-label='Slide 3')
        button(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide-to='3' aria-label='Slide 4')
      .carousel-inner
        .carousel-item.active
          div.position-relative
            img(src='@/assets/curso/90.jpg', alt='Texto que describa la imagen')
            .tarjeta-c.bg-white.p-3(style='bottom: 10%; left: 85px')
              p Existen algunas reglas que pueden ser de gran ayuda a la hora de emprender cualquier proyecto:
              ul.lista-ul--color
                li 
                  i.fas.fa-angle-right
                  | Elementos ubicados a la derecha o en la parte de la margen inferior, tiene mayor fuerza a nivel visual.

                li 
                  i.fas.fa-angle-right
                  | Formas largas y angulares amplían el campo de visión.

                li 
                  i.fas.fa-angle-right
                  | Las formas simétricas, sencillas y regulares son más fáciles de recordar.

                li 
                  i.fas.fa-angle-right
                  | Las imágenes de gran tamaño producen el efecto de fortaleza, lo contrario sucede con las imágenes pequeñas. 
                li 
                  i.fas.fa-angle-right
                  | Los colores vibrantes tienen un mayor efecto visual.
        .carousel-item
          div.position-relative
            img(src='@/assets/curso/91.jpg', alt='Texto que describa la imagen')
            .tarjeta-c.bg-white.p-3(style='bottom: 10%; left: 85px')
              p La percepción se define como la capacidad de construir, interpretar y hasta corregir un esquema de información recibido por medio de los órganos sensoriales. Suele estar condicionada a patrones o aprendizajes memorizados con anterioridad. En el caso de la percepción visual, es la capacidad de procesar e interpretar la información recibida por medio del ojo como órgano principal; se hace uso de ciertos principios de la percepción, basados en las leyes de la Gestalt, teoría de la psicología que permite estudiar los modos de cómo se percibe lo que vemos.
        .carousel-item
          div.position-relative
            img(src='@/assets/curso/92.jpg', alt='Texto que describa la imagen')
            .tarjeta-c.bg-white.p-3(style='bottom: 10%; left: 85px')
              h5 Diseño bidimensional
              p Un elemento bidimensional es aquel que representa su altura y anchura sin manifestar su profundidad, ya que se realiza en un espacio plano, el cual solo tiene estas 2 dimensiones. <b>Ejemplo de esto, un dibujo de un rectángulo en una hoja de papel</b>. 
                br
                br
                |Es así como, al referirse al diseño bidimensional, se está hablando de aquel diseño que puede ser expresado por medio de dibujos, planos, ilustraciones, tipografías, fotografías, imágenes, etc. Se encuentra en diversas corrientes, como las artes visuales, el diseño gráfico, el arte, la pintura, el grafiti, entre otros. A diferencia del diseño tridimensional, sólo puede ser observado de manera frontal, un ejemplo claro de esto se da al mirar una revista, solo se aprecia lo que está frente a los ojos; situación contraria cuando se observa una escultura en un museo, tiene muchos puntos de vista. 
                br
                br
                |En pocas palabras, “el diseño es la mejor expresión visual de la esencia de algo” (Wong,1991).
        .carousel-item
          div.position-relative
            img(src='@/assets/curso/93.jpg', alt='Texto que describa la imagen')
            .tarjeta-c.bg-white.p-3(style='bottom: 10%; left: 85px')
              h5 Diseño tridimensional
              p Un elemento tridimensional posee un volumen dado por altura, anchura y profundidad. La percepción de un elemento tridimensional no puede darse a primera vista, tiene que observarse desde diferentes ángulos, posiciones y distancias, para hacer una mejor lectura de este. Así, el diseño tridimensional presenta muchos retos adicionales al bidimensional, precisamente por todas las aristas de observación. El diseñador tiene que ser muy observador e imaginar el elemento en diversas posiciones y tamaños, teniendo gran importancia el volumen y la ubicación dentro de un espacio; para dicho propósito, se deben asimilar sus medidas de manera transversal, vertical y horizontal.
      .slyder-2
        button.carousel-control-prev(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='prev')
          span.carousel-control-prev-icon(aria-hidden='true')
          span.visually-hidden Previous
        button.carousel-control-next(type='button' data-bs-target='#carouselExampleIndicators2' data-bs-slide='next')
          span.carousel-control-next-icon(aria-hidden='true')
          span.visually-hidden Next
    h3(data-aos="fade-right") Lenguaje publicitario: características
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/7fQpAnZpEbk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-7(data-aos="fade-left")
        p La publicidad es un fenómeno de la Era Industrial. El mundo ha cambiado a pasos agigantados, especialmente, en los últimos siglos. Después de la Primera y Segunda Revolución Industrial, crecen la oferta y la demanda de miles de productos, en la llamada <b>“sociedad de consumo”; la función principal de la publicidad es fomentar técnicas de consumo pertinentes y asertivas</b>, llegar a todas partes, a través de los diferentes medios de comunicación (radio, prensa, cine, televisión), medios de sentido unidireccional, que van directamente al emisor. 
          br
          br
          |Un ejemplo representativo son las televentas, las 24 horas del día vendiendo. Más acorde con estos días, las aplicaciones móviles donde se puede comprar lo que se quiera, 365 días del año, sin cierre. 
      .col-lg-5(data-aos="fade-right")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/94.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    p.mb-5 El proceso de lenguaje publicitario presenta una serie de características con respecto a los otros actos de comunicación, ya que el mensaje es escrito por varios emisores; sus características son: 
    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        .bg--4-claro.p-4.h-100
          .d-flex.align-items-center
            img(src='@/assets/curso/95.jpg' style='width: 191px').mx-3
            ol.lista-ol--cuadro--color
              li 
                .lista-ol--cuadro__vineta.text-system.p-3.bg--1
                  span.h2 1
              p El canal de difusión es múltiple, ya que se desea llegar a la mayor cantidad de receptores posible, a través de medios como prensa, vallas publicitarias, pautas en la radio, Internet, revistas, rótulos, etc.
      .col-lg-6(data-aos="fade-left")
        .bg--4-claro.p-4.h-100
          .d-flex.align-items-center
            img(src='@/assets/curso/96.jpg' style='width: 191px').mx-3
            ol.lista-ol--cuadro--color
              li 
                .lista-ol--cuadro__vineta.text-system.p-3.bg--1
                  span.h2 2
              p Debe cumplir con las siguientes características básicas, las cuales suelen ser muy efectivas (Lozano, s. f.).
    BotonesC.mb-5
    h3(data-aos="fade-right") Estructura y funciones del lenguaje publicitario
    p.mb-5 El lenguaje publicitario tiene la siguiente estructura: 
    figure.mb-5
      img(src='@/assets/curso/98.svg' alt='Estructura del lenguaje publicitario')
    p.mb-5 Las funciones del lenguaje publicitario son:
    .d-flex.flex-wrap.mb-5.justify-content-center
      .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="height: 350px; width: 235px").mx-1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src='@/assets/curso/99.svg' alt='Estructura del lenguaje publicitario' style='width: 123px').mb-3
              h5 Función informativa:
              p Permite dar una información por medio de la imagen. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/100.svg')})`}")
      .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="height: 350px; width: 235px").mx-1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src='@/assets/curso/99.svg' alt='Estructura del lenguaje publicitario' style='width: 123px').mb-3
              h5 Función apelativa: 
              p Recurre a ciertas herramientas para influir su decisión.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/100.svg')})`}")
      .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="height: 350px; width: 235px").mx-1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src='@/assets/curso/99.svg' alt='Estructura del lenguaje publicitario' style='width: 123px').mb-3
              h5 Función referencial: 
              p  Las imágenes utilizadas hacen referencia al producto.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/100.svg')})`}")
      .tarjeta.tarjeta-slide.arriba.color-secundario(@mouseover="indicadorTarjetaSlide = false" style="height: 350px; width: 235px").mx-1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src='@/assets/curso/99.svg' alt='Estructura del lenguaje publicitario' style='width: 123px').mb-3
              h5 Función fática:
              p  Procura iniciar y capturar la atención del consumidor.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/100.svg')})`}")
      .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style="height: 350px; width: 235px").mx-1
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-3
              img(src='@/assets/curso/99.svg' alt='Estructura del lenguaje publicitario' style='width: 123px').mb-3
              h5 Función emotiva:
              p Recurre a la evocación para provocar sentimientos y emociones. 
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/100.svg')})`}")





















    //----------------------------------- MODALES -----------------------------------//
    ModalA(:abrir-modal.sync="modal1")
      .p-2
        img.mb-3(src="@/assets/curso/78.svg" alt="Adornos flotantes" style="width: 55px ")
        h5 La forma como punto:
        p Una forma es reconocida como un punto porque es pequeña. El tamaño desde luego es relativo. Una forma puede parecer bastante grande cuando está contenida dentro de un marco pequeño, pero la misma forma puede parecer muy pequeña si se coloca dentro de un marco mucho más amplio.
        img(src="@/assets/curso/79.svg" alt="Adornos flotantes" )
        p Al ver el ejemplo, pareciera que los círculos tienen un tamaño diferente, aunque son iguales.
    ModalA(:abrir-modal.sync="modal2")
      .p-2
        img.mb-3(src="@/assets/curso/78.svg" alt="Adornos flotantes" style="width: 55px ")
        h5 La forma como línea: 
        p Una forma es reconocida como una línea por dos razones:
        ol.lista-ol--cuadro--color
          li 
            .lista-ol--cuadro__vineta.bg--2.text-system
              span 1
            | Su ancho es extremadamente reducido. 
          li 
            .lista-ol--cuadro__vineta.bg--2.text-system
              span 2
            | Su longitud es sobresaliente.
        p Una línea, por lo general, transmite la sensación de delgadez. La delgadez, igual que el tamaño, es relativo.
        img(src="@/assets/curso/80.svg" alt="Adornos flotantes" )
    ModalA(:abrir-modal.sync="modal3")
      .p-2
        img.mb-3(src="@/assets/curso/78.svg" alt="Adornos flotantes" style="width: 55px ")
        h5 La forma como plano: 
        p Es una superficie bidimensional, todas las formas lisas que comúnmente no sean reconocidas como puntos o líneas son planos. Una forma plana es limitada por líneas conceptuales que constituyen los bordes de la forma. Las características de estas líneas conceptuales y sus interrelaciones determinan la figura de la forma plana (APA Diseño Gráfico, s. f.). Algunas de sus clasificaciones son:
        .bg-white.d-flex.flex-wrap.p-3.justify-content-center.px-5
          img.mb-3.mx-3(src="@/assets/curso/81.svg" alt="Adornos flotantes" style="width: 173px ")
          img.mb-3.mx-3(src="@/assets/curso/82.svg" alt="Adornos flotantes" style="width: 173px ")
          img.mb-3.mx-3(src="@/assets/curso/83.svg" alt="Adornos flotantes" style="width: 173px ")
          img.mb-3.mx-3(src="@/assets/curso/84.svg" alt="Adornos flotantes" style="width: 173px ")
    ModalA(:abrir-modal.sync="modal4")
      .p-2
        img.mb-3(src="@/assets/curso/85.svg" alt="Adornos flotantes" style="width: 55px ")
        h5 Textura visual: 
        p Es bidimensional, se puede apreciar a través de la vista, aunque pueda evocar también sensaciones táctiles. Se distinguen tres clases de textura visual:
        .row
          .col-lg-4
            .tarjeta.bg-white.p-4.h-100
              img(src="@/assets/curso/86.jpg" alt="Adornos flotantes" style="width: 100% ")
              h5 Textura decorativa:
              p Decora una superficie y queda subordinada a la figura. En otras palabras, la textura misma es solo un agregado que puede ser quitado sin afectar mucho las figuras.
          .col-lg-4
            .tarjeta.bg-white.p-4.h-100
              img(src="@/assets/curso/87.jpg" alt="Adornos flotantes" style="width: 100% ")
              h5 Textura espontánea:
              p No decora una superficie, sino que es parte del proceso de creación visual. La figura y la textura no pueden ser separadas, porque las marcas de la textura en una superficie son al mismo tiempo las figuras. Las formas dibujadas a mano y las accidentales contienen frecuentemente una textura espontánea. 
          .col-lg-4
            .tarjeta.bg-white.p-4.h-100
              img(src="@/assets/curso/88.jpg" alt="Adornos flotantes" style="width: 100% ")
              h5 Textura mecánica: 
              p Textura obtenida por medios mecánicos especiales y, en consecuencia, no está necesariamente subordinada a la figura. Un ejemplo es el granulado fotográfico o la retícula que se encuentra a menudo en los impresos. La textura mecánica puede encontrarse, asimismo, en los diseños creados por la tipografía y en los gráficos de computadoras. 
    ModalA(:abrir-modal.sync="modal5")
      .p-2
        img.mb-3(src="@/assets/curso/85.svg" alt="Adornos flotantes" style="width: 55px ")
        h5 Textura táctil
        p Se percibe a través del tacto, generando una sensación que puede describirse como una superficie lisa o con relieve; la textura puede ser propia del material; modificada, cuando se ha agregado una textura adicional a la natural; y organizada, cuando se unen o sobreponen materiales generando una nueva textura
        img(src="@/assets/curso/89.jpg" alt="Adornos flotantes" style="width: 100% ")

    //----------------------------------- MODALES -----------------------------------//











</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import BotonesC from '../components/BotonesC.vue'

export default {
  name: 'Tema1',
  components: {
    BannerInterno,
    BotonesC,
  },
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false,
    modal6: false,
    modal7: false,
    datosSlyder: [
      {
        titulo: 'Paleolítico inferior',
        texto:
          'Es la etapa inicial de la historia de la humanidad, abarcó desde 3 millones de años atrás hasta el 250.000 a. C., tiene lugar en diferentes momentos y en diversas partes del mundo. Los humanos eran nómadas, cazadores y depredadores, se refugiaban en cavernas para protegerse del frío y de los animales salvajes. El gran aporte para la humanidad fue la utilización del fuego, para preparar alimentos, mantener el calor corporal y alejar animales.',
        imagen: require('@/assets/curso/15.svg'),
      },
      {
        titulo: 'Paleolítico medio',
        texto:
          'Esta segunda etapa abarcó aproximadamente desde el 250.000 a. C. hasta el 30.000 a. C. La especie humana en continua evolución alcanza la fase de hombre de Neandertal, que se caracterizó por una complexión robusta, sofisticada inteligencia, conciencia de grupo y parentesco, y capacidad para mejorar las armas que utilizaban para la caza.',
        imagen: require('@/assets/curso/16.svg'),
      },
      {
        titulo: 'Paleolítico superior',
        texto:
          'Esta tercera etapa abarcó desde 30.000 a. C. hasta el 10.000 a. C., y supone la etapa final de paleolítico. Se destaca en esta etapa el dominio del fuego, el perfeccionamiento de herramientas de caza, y se encontró la mayor cantidad de evidencias de desarrollo artístico (pinturas rupestres encontradas en las cuevas de Altamira, ubicadas en la región española de Cantabria, y pequeñas esculturas de arcilla o de hueso, que escenifican rituales de caza a través de la representación de dibujos humanos y animales). La evolución del humano alcanzó la fase de hombre de Cromañón, con una mayor capacidad para comunicarse (Uriarte, 2020).',
        imagen: require('@/assets/curso/17.svg'),
      },
      {
        titulo: 'Neolítico, nueva piedra (12.000 - 5.000 a. C.)',
        texto:
          'El periodo neolítico es el último denominado dentro de la Edad de Piedra. Este periodo presenta especial importancia, ya que el hombre tiene un gran desarrollo cultural y agrícola, doméstica algunos animales y por primera vez deja de ser nómada. Este es uno de los periodos con mayores cambios, especialmente a nivel social, ya que se empiezan a formar los primeros asentamientos y con ello a construir lo que conocemos hoy en día como las grandes sociedades. ',
        imagen: require('@/assets/curso/18.svg'),
      },
      {
        titulo: '',
        texto:
          'El hombre aprende nuevas técnicas de siembra, cultiva arroz, maíz y trigo, lleva a cabo avances en agricultura, recoge frutos, empieza la domesticación de animales destinados a la ganadería, y adapta el medio ambiente a sus necesidades. A pesar de esto, con el crecimiento de la población, se empiezan a magnificar los problemas, se presentan las primeras guerras y se enfrentan muchos problemas de corte social. Continúa elaborando herramientas y elementos en piedra, madera y otros materiales. ',
        imagen: require('@/assets/curso/19.svg'),
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass">
.infografia-autores
  position: relative
  &__img
    img
      position: absolute
      transition: opacity 0.3s ease-in-out
      opacity: 0
      &:hover
        opacity: 1
.slyder-1
  .carousel-control-prev, .carousel-control-next
    background-color: transparent !important
    justify-content: start !important
    padding: 0 !important

  .carousel-control-prev-icon
    background-image: url(../assets/curso/prev.svg) !important
    width: 20px !important
  .carousel-control-next-icon
    background-image: url(../assets/curso/next.svg) !important
    width: 20px !important
.slyder-2
  .carousel-control-prev, .carousel-control-next
    background-color: $color-secundario !important
    padding: 0 !important
    width: 85px
    opacity: 1

  .carousel-control-prev-icon
    background-image: url(../assets/curso/prev2.svg) !important
    span
      color: $color-sistema-texto
  .carousel-control-next-icon
    background-image: url(../assets/curso/next2.svg) !important
    span
      color: $color-sistema-texto
.carousel-indicators
  display: none
.tarjetas-text
  position: relative
  overflow: hidden
  &__contenido
    transition: bottom 0.3s ease-in-out
    border-radius: 10px
    position: absolute
    background-color: #F6F6F6 !important
    bottom: -28%
    p
      transition: opacity 0.3s ease-in-out
      opacity: 0
  &:hover
    .tarjetas-text__contenido
      bottom: 0
      p
        opacity: 1
.modal-a__content
  background-color: $color-acento-botones
.linea-azul
  position: relative
  &:before
    content: ""
    position: absolute
    width: 5px
    top: -20%
    left: 70%
    height: 25px
    background-color: $color-acento-botones
    @media (max-width: 991px)
      display: none
.linea-azul2
  position: relative
  &:before
    content: ""
    position: absolute
    width: 5px
    top: -20%
    right: 70%
    height: 25px
    background-color: $color-acento-botones
    @media (max-width: 991px)
      display: none
.tarjeta-c
  position: absolute
  max-width: 60%
  @media (max-width: $bp-max-md)
    max-width: 60% !important
    position: relative
</style>
