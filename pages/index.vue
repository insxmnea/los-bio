<template lang="pug">
  main
  Header
  HomeSlider

  section.container.hero
    .text
      h1 Автономная канализация для частного дома
      p Производим автономные канализации, очистные сооружения, накопительные ёмкости и комплектующие
      button.btn Перейти в каталог
    //- img(src="/img/hero-tank.png" alt="Канализация" style="max-width:400px")

  section.container.benefits
    h2 Наши преимущества
    .grid
      .card(v-for="(b, i) in benefits" :key="i")
        h3 {{ b.title }}
        p {{ b.text }}

  section.container.projects
    h2 Проекты
    .grid
      .card(v-for="(p, i) in projects" :key="i")
        //- img(:src="p.image" alt="Проект")
        h3 {{ p.name }}
        p {{ p.desc }}
        small Тип работ: {{ p.type }}
        small Заказчик: {{ p.client }}

  footer.container
    .top
      //- img(src='/img/logo.png' alt='ЛОС-БИО')
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
import HomeSlider from '~/components/home/HomeSlider.vue';
import Header from '~/components/layouts/Header.vue'

const benefits = [
  { title: 'Оперативность расчётов', text: 'Рассчитаем стоимость в течение нескольких часов' },
  { title: 'Производство полного цикла', text: 'Собственное производство под ключ' },
  { title: 'Большой опыт работы', text: 'Более 10 лет на рынке автономных систем' },
  { title: 'Полное соответствие чертежам', text: 'Работаем строго по проекту клиента' },
]

const projects = [
  {
    name: 'Проект 1',
    desc: 'Строительство станции биологической очистки',
    type: 'Станция биологической очистки',
    client: 'ИП Иван Васильев',
    image: '/img/project1.jpg',
  },
  {
    name: 'Проект 2',
    desc: 'Станция биологической очистки под производство',
    type: 'Станция биологической очистки',
    client: 'ИП Иван Васильев',
    image: '/img/project2.jpg',
  },
  {
    name: 'Проект 3',
    desc: 'Очистное сооружение для промышленного объекта',
    type: 'Станция биологической очистки',
    client: 'ИП Иван Васильев',
    image: '/img/project3.jpg',
  }
]
</script>

<style lang="scss" scoped>
.top-bar {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  margin-bottom: 10px;
}
nav {
  display: flex;
  gap: 16px;
  align-items: center;
}
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-top: 20px;
}
.card {
  background: #0d1b3a;
  padding: 20px;
  border-radius: 10px;
  color: white;
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
