<template lang="pug">
  header
    .top-bar
      .item
        IconMapMarker.icon
        span г. Красноярск, ул. Телевизорная 1 стр. 10, оф. 204
      .item
        IconPhone.icon
        span +7 (391) 207-57-57
      .item
        IconPhone.icon
        span +7 (391) 276-54-33
      .item
        IconEmail.icon
        span los-bio@mail.ru
      .item
        IconOrderCall.icon
        span Заказать звонок
    hr
    .container
      IconLogo.logo
      nav
        ul
          li
            nuxt-link(to="/") О компании
          li
            nuxt-link(to="/projects/1") Проекты
          li.catalogue
            nuxt-link(to="/") Каталог
            IconArrow.icon-arrow
          li
            nuxt-link(to="/") Контакты
      AppButton(text="Получить КП")
</template>

<script setup lang="ts">
import AppButton from '../common/AppButton.vue';
import IconLogo from '~/assets/icons/logo.svg?component';
import IconMapMarker from '~/assets/icons/map-marker.svg?component';
import IconPhone from '~/assets/icons/phone.svg?component';
import IconEmail from '~/assets/icons/email.svg?component';
import IconOrderCall from '~/assets/icons/order-call.svg?component';
import IconArrow from '~/assets/icons/arrow.svg?component';
</script>

<style scoped lang="scss">
@use 'assets/scss/utils/_variables';
@use 'assets/scss/utils/_mixins';

.icon {
  width: 24px;
  height: 24px;
}

.icon-arrow {
  width: 10px;
  height: 10px;
}

.logo {
  width: 240px;
}

.top-bar {
  max-width: variables.$content-width;
  margin: 9px auto;
  display: flex;
  justify-content: space-between;
  font-size: 13px;
  opacity: 0.5;
  flex-direction: column;
  align-items: center;

  @include mixins.for-tablet-landscape-up {
    flex-direction: row;
  }
}

.item {
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  transition: all 0.1s ease;

  &:hover {
    color: variables.$blue;
    text-decoration: underline;
  }
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: variables.$content-width;
  margin: 18px auto;
  flex-direction: column;

  
  @include mixins.for-tablet-landscape-up {
    flex-direction: row;
  }
}

ul {
  display: flex;
  list-style: none;
  gap: 26px;
  font-size: 16px;
  font-weight: 400;
  flex-direction: column;
  margin: 20px 0px;
  

  @include mixins.for-tablet-landscape-up {
    gap: 56px;
    flex-direction: row;
    margin: 0px;
  }

  li {
    cursor: pointer;
    transition: all 0.1s ease;

    &:hover {
      color: variables.$blue;
    }
  }
}

.catalogue {
  display: flex;
  align-items: center;
  gap: 6px;
}

a {
  text-decoration: none;
  color: inherit;
}
</style>