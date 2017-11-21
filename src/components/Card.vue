<template>
  <div>
    <div class="card" :style="{backgroundImage: 'url(' + background + ')'}">
      <div class="card__filter">
        <div class="card__infos">
          <h4>{{title}}</h4>
          <p>{{description}}</p>
          <router-link :to="{ name: linkName, params: { id: id }}">Voir le chapiteau</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Plop',
    props: ['title', 'description', 'linkName', 'id', 'background'],
    data () {
      return {}
    }
  }
</script>
