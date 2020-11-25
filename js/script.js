var app = new Vue({
  el: '#app',
  data: {
    indiceContattoAttivo: 0,
    items: [

    // FIRST
    {
      name: 'Pierangelo',
      img: 'img/avatar_1.jpg',
      lastview: '21/11/20 8.30am',
      chat: [
      {
        messaggio: 'Come stai oggi?',
        orario: '21/11/20 8:00am',
        stato: true
      },
      {
        messaggio: 'sto bene grazie',
        orario: '21/11/20 8:10am',
        stato: false
      }
      ]
    },

    // SECOND
    {
      name: 'Giuseppe',
      img: 'img/avatar_2.jpg',
      lastview: '21/11/20 8.00am',
      chat: [
      {
        messaggio: 'Come stai oggi?',
        orario: '21/11/20 8:30am',
        stato: false
      },
      {
        messaggio: 'cosi cosi',
        orario: '21/11/20 8:40am',
        stato: true
      }
      ]
    }

  ]},

  methods: {
    attivaUser: function (indiceAttivo) {
      this.indiceContattoAttivo = indiceAttivo;
    }

  }


});
