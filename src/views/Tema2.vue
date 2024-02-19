<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Teoría del color
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 La teoría del color <b>se basa en un conjunto de reglas o elementos esenciales que rigen los parámetros de combinación de diferentes colores</b>, definiciones, divisiones y categorías en las que se pueden estandarizar.
          br
          br
          |Dentro de esta estandarización, se encuentran inmersas algunas reglas específicas de uso en diseño y publicidad; se utiliza para captar, en menos de un segundo, la atención del cliente, para bien o para mal. Un ejemplo claro del uso del color en grandes marcas de cadenas de comidas rápidas, es el uso de colores cálidos, como el amarillo, rojo y naranja, estos colores se relacionan con el poder evocado por el sol, la abundancia de alimentos, la energía, el poder, la fuerza, el brillo, el calor, la alegría, e incluso son colores que llaman de inmediato la atención del consumidor. Estos colores elevan el ritmo respiratorio y elevan el apetito, incluso la sensación de sed, por eso tantas marcas exitosas los utilizan como recurso gráfico.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/101.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rlGfZoeO3Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .img-bg(data-aos="zoom-in-up").mb-5
      .bg-black.opacity-1.p-5.d-flex.justify-content-center
        h3.text-white.col-7.text-center La teoría del color también dicta algunos parámetros referentes, que explican por qué ciertos matices, sombras y tonos se llevan mejor y transmiten armonía, logrando resaltar un logotipo o un gráfico que acompaña un texto.
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-3: img(src="@/assets/curso/103.jpg" )
      .col-lg-5
        p Aún sin conocer las bases de la teoría del color, es mucha la influencia que se tiene por la manera en que los diseñadores crean una pieza o ambientan un espacio: <b>se toman decisiones gracias  a los tonos y la forma en que armonizan juntos</b>. Si está todo bien hecho, se obtendrá el efecto deseado por sus creadores, ya sea para hacer más atractivo un artículo o atraer a un cliente a un anuncio en especial.
    p.mb-5 Existen diferentes tipos de colores en teoría del color, por ejemplo:
    SlyderB.mb-5(:datos="datosSlyder")
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-center.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/109.svg" alt="Adornos flotantes" style="width: 170px ; left: 5% ; top: -90% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-8
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 <b>¿Quiere conocer más acerca del uso de la teoría del color?</b> Si su respuesta es positiva, atienda la siguiente recomendación: explore el video <b>Teoría del color</b>, que explica algunos conceptos sobre la teoría del color y su uso, y lo encuentra disponible en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-contenido.tb(href='https://www.youtube.com/watch?v=cGglJKvpCEs' target='_blank')
                    span Enlace
                    i.fas.fa-link
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Definición y fundamentos
    .row.mb-5.justify-content-center.align-items-center
      .col-lg-8(data-aos="fade-right")
        p El concepto de color, como se conoce hoy en día, se empieza a gestar con diversos experimentos que llevó a cabo <b>Isaac Newton (1642-1726)</b> para entender y comprender los fenómenos relativos a la luz y el color, es el primer científico en entender el arco iris. <b>Para ello, crea un hoyo en la pared de un cuarto oscuro; seguidamente, refracta la luz blanca con un prisma en la pared, que resalta la proyección de sus colores componentes al fondo del cuarto: magenta, rojo, naranja, amarillo, verde, azul y violeta</b>; además, para probar que el prisma no estaba coloreando la luz, volvió a unir la luz, realizando el experimento a la inversa. Son tan importantes los experimentos que realizó Newton que se dice que fue quien dio paso a la ciencia moderna; <b>sus estudios, experimentos y descubrimientos cambiaron y revolucionaron la vida</b> hasta el mundo actual. 
      .col-lg-4(data-aos="fade-left")
        img(src="@/assets/curso/110.jpg" alt="Adornos flotantes")
    .bg--2-claro.p-4.mb-5
      .row.align-items-center.justify-content-center.mb-5
        .col-lg-4.mt-lg-0.mt-3(data-aos="fade-left")
          .imagen-adornos-flotantes
            img(src="@/assets/curso/148.jpg" alt="Adornos flotantes" style="width: 315px; margin: 0 auto")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
            .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
        .col-lg-8(data-aos="fade-right")
          p.mb-3 La percepción que se tiene del color depende de una fuente lumínica que se refleja en el objeto; dentro de la retina, el ojo cuenta con una cantidad ilimitada de células especializadas en identificar diferentes tipos longitud de onda, que son transformadas en impulsos eléctricos, los cuales asignan un color a cada longitud en particular; <b>por esta razón, en ausencia de luz, el ojo humano no tiene la capacidad de generar ningún tipo de color.</b> El ojo es un órgano complejo, formado por un conjunto de órganos que reciben la luz del medio ambiente (fotorreceptores) y que, al trabajar unificadamente, permiten reconocer la reflexión de la luz sobre los objetos. Los objetos atraen ciertos  tipos de ondas y reflejan otros en contraposición, esto depende de muchos factores, como la distancia de la fuente lumínica, el tamaño del objeto, hasta su composición.
    p.mb-5 El color tiene diversas características, entre las que se encuentran las siguientes:
    BotonesD.mb-5
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 Teoría aditiva y sustractiva
    p.mb-5 La representación del color, por fuera del ámbito artístico, para su reproducción en medios gráficos visuales se enmarca en las teorías aditiva y sustractiva. Cada modo tiene características específicas y un ámbito de uso ideal. Hace un tiempo, equivocarse en el modo de color suponía una pérdida millonaria; hoy es más una mala práctica, que debe corregirse por profesionalismo. Para ampliar esta información, revise lo que se expone a continuación:
    .tabla-a.color-acento-contenido.mb-5.align-items-start
      table
        thead
          tr
            th Modo RGB
            th Modo CMYK
        tbody
          tr
            td.p-0
              .imagenes(style="width: 614px; height: 316px ").mb-3
                figure 
                  img(src="@/assets/curso/121.jpg" style="width: 100%").mb-3
              .px-4.mb-5 Se denominan colores luz. Dentro de la teoría aditiva, la combinación de los colores primarios rojo (<i>red</i>), verde (<i>green</i>) y azul (<i>blue</i>) da como resultado la luz blanca. Esto resulta fácilmente demostrable con un cuarto oscuro, tres linternas y filtros de colores. Sobre una pared blanca, las linternas iluminan separadamente según el color del filtro, pero al enfocar un punto común, el color resultante tiende a ser blanco.
                br
                br
                |La aplicación por excelencia del modo RGB es en las publicaciones digitales, multimedia y sitios <i>web</i>.
                br
                br
                |Un dato curioso: al mezclar las luces en parejas, se obtienen los valores: amarillo, cian y magenta, propios del modo CMYK (el negro es la ausencia de luz). 
              .d-flex.align-items-end
                img(src="@/assets/curso/123.svg" style="width: 163px")
                p <b>RGB:</b> sigla en inglés de <i>Red</i>, <i>Green</i>, <i>Blue</i>, en español rojo, verde y azul. 
            td.p-0
              .imagenes(style="width: 614px; height: 316px ").mb-3
                figure
                  img(src="@/assets/curso/122.jpg" style=" ").mb-3
              .px-4.mb-5 El modelo de cuatricromía o de colores pigmento. Un ejemplo evocativo puede remitir al juego con plastilina. Al mezclar masas de todos los colores se obtenía algo poco atractivo que variaba del café al púrpura. En el modo CMYK, los pigmentos cian, magenta, amarillo y negro se unen para conformar otros colores y la combinación de los tres primeros tiene como resultado un negro de baja pureza.
                br
                br
                |Dos datos curiosos sobre el modo CMYK: el color magenta no existe como tal, se crea al mezclar las frecuencias de onda de ambos extremos del espectro visible; si se mezclan las parejas de color, se obtienen los valores tonales del) modelo aditivo. 
              .d-flex.align-items-end
                img(src="@/assets/curso/124.svg" style="width: 163px")
                p <b>CMYK:</b> sigla en inglés de <i>Cyan</i>, <i>Magenta</i>, <i>Yellow</i> y <i>Key</i>, en español cián, magenta, amarillo y negro.
    .tarjeta.bg--2-claro.p-4.mb-5.rounded-0.mt-5
          .row.justify-content-center.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/125.svg" alt="Adornos flotantes" style="width: 150px ; left: 5% ; top: -90% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-8
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 Continuando con este aprendizaje, tenga en cuenta explorar el video <b>Teoría de Color: aditivo, sustractivo y la ley de los complementarios</b>, que explica con mayor profundidad ambas teorías, se encuentra disponible en el material complementario.
                .col-sm-auto

                  a.boton.color-acento-contenido.tb(href='https://www.youtube.com/watch?v=UwTicavr21s' target='_blank')
                    span Enlace
                    i.fas.fa-link
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3 Psicología y armonías de color
    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/UWSe5bCGNhs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    .row.mb-5.justify-content-center
      .col-lg-10
        .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/126.jpg')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 <b>La psicología del color:</b> se refiere a las sensaciones, percepciones y emociones que produce el color en las personas, además de estéticamente confortable, siendo posible asociarlo con recuerdos de sentimientos, facilitar la atención, interés y deseo, provocar repulsión, entre otros. 
    .row.mb-5.justify-content-center.align-items-top
      .col-lg-4
        .animacion-imagenes
          
      .col-lg-8.mt-lg-5
        p.mb-3 Goethe evocó varios principios en teoría del color, sin embargo, uno de sus mayores aportes fue el de plantear que el color es capaz de influir en las emociones y sensaciones que percibe el individuo, lo que se conoce hoy en día como psicología del color. Dividió los colores en grupos, donde el rojo, el naranja y el amarillo eran colores “positivos”, que aumentaban la energía y la vitalidad, mientras colores como el azul, el violeta y el verde eran colores “negativos”, que estimulaban la ansiedad e inquietud.
        .bg--4-claro.p-4
          p También creó el triángulo de color, que, por medio de una subdivisión en otros triángulos, asignaba diferentes tipos de emociones relacionadas al mismo. Fue el primer paso a diversos fundamentos que están presentes hasta el día de hoy.
    .tarjeta.bg--2-claro.p-4.rounded-0.mb-5(style="margin-top: 50px !important")
          .row.justify-content-center.align-items-center.position-relative
            img.position-absolute.d-none.d-lg-block(src="@/assets/curso/133.svg" alt="Adornos flotantes" style="width: 170px ; left: 5% ; top: -90% ")
            .col-4.col-sm-2.col-lg-1
            .col-lg-8
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p.text-small.mb-0 Conozca más acerca de lo que transmiten o comunican los colores explorando el video <b>Psicología del color ¿Qué transmiten los colores?</b>, disponible en el material complementario.
                .col-sm-auto
                  a.boton.color-acento-contenido.tb(href='https://www.youtube.com/watch?v=X8kbrAzV6BM' target='_blank')
                    span Enlace
                    i.fas.fa-link
    .tarjeta.bg-gray.p-4.p-md-5.mb-5
      .row.justify-content-around.align-items-center
        .col-8.col-sm-6.col-md-4.mb-4.mb-md-0
          img(src="@/assets/curso/134.svg")

        .col-md.col-lg-6
          .titulo-segundo.color-acento-contenido
            h2 Características psicológicas del color
          p.mb-4 Para conocer más sobre estas características, descargue y revise muy atentamente el siguiente documento.
          
          a.boton.color-acento-botones(:href="obtenerLink('/downloads/psicologia.pdf')" target="_blank" type="application/pdf")
            span Descargar
            i.fas.fa-file-download
    h3(data-aos="fade-right") Armonía de color 
    figure.mb-5
      img(src='@/assets/curso/135.svg')
    p.px-5 Está dividida por secciones, para evidenciar los aspectos del color y sus combinaciones que explican, de manera visual, el efecto que tienen los colores en todos los aspectos de la vida de las personas. Cada variación tonal refleja aspectos y cualidades que fueron identificados en los colores y las combinaciones, las cuales se usan para describir sus propiedades, cómo combinarlos y contrastarlos. Al armonizar, es posible que el conjunto o combinación armónica se asocie más a un concepto antiguo que a la belleza dinámica y moderna; para ello es útil el uso del círculo cromático (Whelan, 1994). 






</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
import BotonesD from '../components/BotonesD.vue'

export default {
  name: 'Tema2',
  components: {
    BannerInterno,
    BotonesD,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Colores primarios: ',
        texto:
          'Son denominados de esta manera ya que no se pueden obtener a partir de la mezcla de otros colores, como los secundarios o terciarios; son colores absolutos, que representan la base de los otros colores; se trata de los colores rojo, amarillo y azul. ',
        imagen: require('@/assets/curso/104.svg'),
      },
      {
        titulo: 'Colores secundarios: ',
        texto:
          'Se obtienen a partir de mezclar, en partes desiguales, dos colores primarios. ',
        imagen: require('@/assets/curso/105.svg'),
      },
      {
        titulo: 'Colores terciarios: ',
        texto:
          'Se obtienen a partir de mezclar un color primario más un color secundario. ',
        imagen: require('@/assets/curso/106.svg'),
      },
      {
        titulo: 'Colores complementarios: ',
        texto:
          'Se obtienen a partir de mezclar un color primario más un color secundario. ',
        imagen: require('@/assets/curso/107.svg'),
      },
      {
        titulo: 'Colores análogos: ',
        texto:
          'Son colores situados de forma continua en el círculo cromático, generalmente, conforman grupos de 3 colores que comparten matices.',
        imagen: require('@/assets/curso/108.svg'),
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
.img-bg
  background-image: url(../assets/curso/102.jpg)
  background-position: center
  background-size: cover
  background-repeat: no-repeat
.bg-black
  background-color: rgba(0, 0, 0, 0.25)
.tabla-a.color-acento-contenido.mb-5.align-items-start
  td
    vertical-align: top
.animacion-imagenes
    width: 100%
    height: 400px
    background-size: cover
    background-position: center
    background-repeat: no-repeat
    transition: background-image 1s ease-in-out
    animation-name: fader
    animation-timing-function: linear
    animation-iteration-count: infinite
    animation-duration: 15s
@keyframes fader
  0%
    background-image: url(../assets/curso/127.svg)
  16.67%
    background-image: url(../assets/curso/128.svg)
  33.34%
    background-image: url(../assets/curso/129.svg)
  50.01%
    background-image: url(../assets/curso/130.svg)
  66.68%
    background-image: url(../assets/curso/131.svg)
  83.35%
    background-image: url(../assets/curso/132.svg)
  100%
    background-image: url(../assets/curso/127.svg)
.bg-gray
  background-color: #E8F0F8
</style>
