<template>
  <div>
    <div class="card" style='background: url("static/LeVintage.jpg")'>
      <div class="card__filter">
        <div class="card__infos">
          <h4>{{title}}</h4>
          <p>{{description}}</p>
          <router-link :to="{ name: linkName, params: { id: linkParams }}">Voir le chapiteau</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Plop',
    props: ['title', 'description', 'linkName', 'linkParams', 'background'],
    data () {
      return {}
    }
  }
</script>
