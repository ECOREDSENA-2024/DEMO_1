<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span.text-white
          i.fas.fa-info
      h1 Introducción
    
    p.mb-5 Apreciado aprendiz, sea bienvenido a este momento de aprendizaje orientado a la historia del diseño gráfico y sus elementos más importantes. Antes de empezar, se sugiere revisar el siguiente video para identificar el contexto de aprendizaje:
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/NajohPZvsBk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-0 Para la elaboración de este componente, se abordaron varios autores conocidos en <b>conceptos básicos e historia del diseño</b>, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos del <b>desarrollo de medios gráficos visuales</b>.


</template>

<script>
import BannerInterno from '../components/BannerInterno.vue'
export default {
  name: 'Introduccion',
  components: {
    BannerInterno,
  },
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
