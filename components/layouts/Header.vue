<template lang="pug">
  header
    .top-bar
        span г. Красноярск, ул. Телевизорная 1 стр. 10, оф. 204
        span +7 (391) 207-57-57
        span +7 (391) 276-54-33
        span los-bio@mail.ru
        span Заказать звонок
    hr
    IconLogo.logo(:fontControlled="false")
    nav
      ul
        li
          nuxt-link(to="/") О компании
        li
          nuxt-link(to="/projects/1") Проекты
        li
          nuxt-link(to="/") Каталог
        li
          nuxt-link(to="/") Контакты
        AppButton(text="Получить КП")
</template>

<script setup lang="ts">
import AppButton from '../common/AppButton.vue';
import IconLogo from '~/assets/icons/logo.svg';

</script>

<style scoped lang="scss">
@use 'assets/scss/utils/_variables';

.logo {
  width: 240px;
  color: variables.$blue;
}

.top-bar {
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  margin: 12px 0px;
}

ul {
  display: flex;
  list-style: none;

  li {
    margin-right: 1rem;
  }
}

a {
  text-decoration: none;
  color: inherit;
}
</style>