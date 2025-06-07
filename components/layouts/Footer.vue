<template lang="pug">
  footer.container
    .top
      IconLogo.logo(:fontControlled="false")
      .info
        p ООО "Торговый дом ЛОС-БИО"
        p ИНН: 2463137791 КПП: 246301001 ОГРН: 1232400008488
    .cols
      .col
        h4 КОМПАНИЯ
        ul
          li О компании
          li Проекты
          li Каталог
          li Контакты
      .col
        h4 КАТАЛОГ
        ul
          li КНС
          li Ёмкости
          li Ливневые
          li Хозяйственно-бытовые
          li Комплектующие
      .col
        h4 КОНТАКТЫ
        ul
          li +7 (391) 207-57-57
          li +7 (391) 276-54-33
          li los-bio@mail.ru
          li Заказать звонок
          li button.btn Получить КП                                           
</template>

<script setup lang="ts">
import IconLogo from '~/assets/icons/logo.svg';
</script>

<style scoped lang="scss">
@use 'assets/scss/utils/_variables';

.logo {
  width: 240px;
  color: variables.$blue;
}
footer {
  margin-top: 80px;
  padding: 40px 0;
  border-top: 1px solid #444;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.cols {
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
}
.col ul {
  list-style: none;
  padding: 0;
}
</style>