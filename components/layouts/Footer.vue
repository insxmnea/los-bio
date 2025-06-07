<template lang="pug">
  footer
    .container
      .cols
        .col
          IconLogo.logo
          p.company ООО "Торговый дом ЛОС-БИО"
          .info
            .info_raw
              .info_item
                span.info_title ИНН:
                span.info_value 2463137791
              .info_item
                span.info_title КПП:
                span.info_value 246301001
            .info_item
              span.info_title ОГРН:
              span.info_value 1232400008488
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
        .col.contacts
          h4 КОНТАКТЫ
          ul
            li 
              IconPhoneFilled.icon
              span +7 (391) 207-57-57
            li
              IconPhoneFilled.icon
              span +7 (391) 276-54-33
            li
              IconEmailFilled.icon
              span.underline los-bio@mail.ru
            li
              IconOrderCallFilled.icon
              span.underline Заказать звонок
            AppButton(text="Получить КП")
</template>

<script setup lang="ts">
import IconLogo from '~/assets/icons/logo.svg?component';
import AppButton from '../common/AppButton.vue';
import IconPhoneFilled from '~/assets/icons/phone-filled.svg?component';
import IconEmailFilled from '~/assets/icons/email-filled.svg?component';
import IconOrderCallFilled from '~/assets/icons/order-call-filled.svg?component';
</script>

<style scoped lang="scss">
@use 'assets/scss/utils/_variables';

.logo {
  width: 240px;
  margin-bottom: 30px;
}

.icon {
  width: 15px;
  height: 15px;
}

.info {
  display: flex;
  font-size: 14px;
  flex-direction: column;
  gap: 8px;

  &_raw {
    display: flex;
    gap: 8px;
  }

  &_item {
    display: flex;
    gap: 4px;
  }

  &_title {
    color: variables.$white;
    opacity: 0.5;
  }
}

footer {
  margin-top: 80px;
  padding: 89px 0;
  background: linear-gradient(180deg, #090B1A, #060B17);
}

.container {
  max-width: variables.$content-width;
  margin: 0 auto;
  color: variables.$white;
}

.company {
  margin-bottom: 12px;
  font-size: 14px;
  font-weight: 600;
}

.cols {
  display: flex;
  justify-content: space-between;
}
.col ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;

  li {
    cursor: pointer;
    transition: all 0.1s ease;
    font-size: 16px;
    font-weight: 400;
    opacity: 0.8;
    line-height: 141%;

    &:hover {
      color: variables.$blue;
      text-decoration: underline;
    }
  }
}

.contacts ul {
  gap: 25px;

  li {
    display: flex;
    align-items: center;
    gap: 8px;
    opacity: 1;
  }
}

.underline {
  text-decoration: underline;
}

h4 {
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
}
</style>