<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Bocetación
    .row.mb-5
      .col-lg-7(data-aos="fade-right")
        p.mb-3 Pese a todo lo antes mencionado, el ejercicio creativo no está sujeto a prerrequisitos y, salvo que exista una solicitud muy específica en la documentación inicial de un proyecto, no se concibe la figura literaria o el discurso detrás de una obra con anterioridad a su creación. Los recursos existen y, al conocerlos y entenderlos, se pueden acercar al estilo del diseñador gráfico, y crear algo que comunique y cuya intención eventualmente sea objeto de análisis. Pero, finalmente, para crear, hay que hacer y practicar. La bocetación es un ejercicio creativo clave e impostergable, de los primeros y más importantes pasos previos al diseño.
      .col-lg-5.mt-lg-0.mt-3(data-aos="fade-left")
        .imagen-adornos-flotantes
          img(src="@/assets/curso/136.jpg" alt="Adornos flotantes")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: ; right: 10% ; top: ; bottom: 10% ; width: 90px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float5.png" style="left: 10% ; right: ; top:0 ; bottom: ; width: 60px ")
          .imagen-adornos-flotantes__img: img(src="@/assets/curso/float3.png" style="left: 15% ; right: ; top: ; bottom: 5% ; width: 60px ")
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.1 Definición y tipos
    p.mb-5 El boceto es una práctica gráfica para bosquejar ideas y plasmarlas visualmente como parte del proceso creativo. Es una ilustración rápida, sin detalles ni acabados. El boceto es una herramienta práctica empleada en muchos medios creativos, incluyendo, obviamente, el diseño, pero también en la arquitectura, el diseño industrial y de modas, la animación y, naturalmente, el arte y la ilustración.
      br
      br
      |Algunas características que el boceto tiene y con las que debe cumplir para que su labor sea exitosa, incluyen: 
    figure().mb-5
      img(src="@/assets/curso/137.svg" )
    br
    p.my-5 En cuanto a los tipos, estos pueden ser:
    br
    SlyderD.mb-5(:datos="datosSlyder")
    p.mb-5 Finalmente, existen algunos niveles en el desarrollo de los bocetos para una misma idea, un boceto burdo, el semicompleto y el dummy (Hurtado, 2019).
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 3.2 Técnicas, la bitácora y recursos gráficos
    p.mb-5 Los principios que rigen la creación de bocetos son los mismos que rigen el dibujo, con la ventaja de que no es indispensable prestar tanta atención al detalle. A continuación, encuentre más información sobre las técnicas:
    .row.mb-5
      .col-lg-4
        .tarjeta.tarjetas-text2
          img(src="@/assets/curso/143.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text2__contenido.px-5.pb-5.pt-3.text-center.mb-3
            h3 Líneas y trazos 
            p Pueden ser rectas o curvas, continuas o discontinuas, y de diferente calibre o grosor, según la herramienta empleada o la presión ejercida.

      .col-lg-4
        .tarjeta.tarjetas-text2
          img(src="@/assets/curso/144.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text2__contenido.px-5.pb-xl-5.pt-3.text-center
            h3 Construcción espacial 
            p El uso de líneas horizontales, verticales y diagonales da lugar a la construcción de formas, y la relación de dichas formas da como resultado la generación de relaciones espaciales.
      .col-lg-4
        .tarjeta.tarjetas-text2
          img(src="@/assets/curso/145.jpg" alt="Adornos flotantes" style="width: 100% ").mb-3
          .tarjetas-text2__contenido.px-5.pb-xl-5.pt-3.text-center
            h3 Planos, luz y contorno 
            p La bocetación permite, mediante el uso de sombras, simular el efecto de la luz sobre las superficies de las formas dibujadas. La práctica permite influir en la percepción y transmitir la sensación de contorno volumétrico.
    .row.mb-5
      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(@mouseover="indicadorTarjetaSlide = false" style='height: 456px ')
          .indicador--hover(v-if="indicadorTarjetaSlide")
          .tarjeta-slide__contenedor
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 La bitácora: 
              p Tanto quien está en proceso de formación como el más experto profesional lleva o debería llevar una bitácora o libro de apuntes dedicado a la elaboración de bocetos. Estos apuntes y dibujos rápidos son la diferencia entre un proyecto con bases firmes y la improvisación.
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/146.jpg')})`}")

      .col-sm-6.col-xl-6.mb-4.mb-xl-0
        .tarjeta.tarjeta-slide.arriba.color-primario(style='height: 456px ')
          .tarjeta-slide__contenedor
            .tarjeta-slide__img(:style="{'background-image': `url(${require('@/assets/curso/147.jpg')})`}")
            .tarjeta-slide__contenido.p-4.p-xl-5
              h4 Recursos gráficos:
              p Lo mejor de la bocetación es que es un recurso creativo de bajo costo. Cualquier superficie es válida para rayar, si bien es más recomendable una libreta o cuaderno que permita la conservación y protección del material. Es más importante y valiosa la capacidad de observación, un entorno tranquilo y consumir material gráfico. La creatividad necesita nutrirse para poder crecer y sobresalir.
    figure
      img(src="@/assets/curso/147.svg")













</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'

export default {
  name: 'Tema3',
  components: {
    BannerInterno,
  },
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Dibujo espontáneo:',
        texto:
          'Se raya aleatoriamente, sin tener nada específico en mente; luego, se “busca” entre las líneas la posible figura a trabajar.',
        imagen: require('@/assets/curso/138.jpg'),
      },
      {
        titulo: 'Boceto mini:',
        texto:
          'Anteriormente, se ha dicho que un boceto debe estar a escala; sin embargo, este tipo de boceto se hace más pequeño, para disminuir los detalles.',
        imagen: require('@/assets/curso/139.jpg'),
      },
      {
        titulo: 'Boceto quemado: ',
        texto:
          'Se rellena la forma para evaluar la contraforma; esto permite evaluar la legibilidad y el uso del espacio.',
        imagen: require('@/assets/curso/140.jpg'),
      },
      {
        titulo: 'Boceto de contorno: ',
        texto:
          'El nombre lo explica: solo se dibujan los contornos, con mínimos detalles; es ideal para la construcción de escenas grandes.',
        imagen: require('@/assets/curso/141.jpg'),
      },
      {
        titulo: 'Experimentación de mancha: ',
        texto:
          'Similar al dibujo espontáneo, pero se utilizan áreas de tinta o alguna aguada, y de allí se extraen las ideas.',
        imagen: require('@/assets/curso/142.jpg'),
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
.tarjetas-text2
  position: relative
  overflow: hidden
  &__contenido
    width: 100%
    transition: bottom 0.3s ease-in-out
    border-radius: 10px
    position: absolute
    background-color: #F6F6F6 !important
    bottom: -10%
    p
      display: none
      transition: opacity 0.3s ease-in-out
      opacity: 0
  &:hover
    .tarjetas-text2__contenido
      bottom: 0
      p
        display: block
        opacity: 1
</style>
