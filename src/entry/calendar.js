import index from '../pages/calendar/index.vue';

var app = new Vue({
  template: '<index/>',
  components: {
    'index': index,
  },
  mounted: function () {
    console.log('page mounted');
  }
})
app.$mount()
