var app = new Vue({
  el: '#app',
  data: {
    indiceContattoAttivo: 0,
    items: [

    // FIRST
    {
      name: 'Pierangelo',
      img: 'img/avatar_1.jpg',

      chat: [
      {
        messaggio: 'Come stai oggi?',
        orario: '21/11/20 8:00am',
        stato: 'inviato'
      },
      {
        messaggio: 'sto bene grazie',
        orario: '21/11/20 8:10am',
        stato: 'ricevuto'
      }
      ]
    },

    // SECOND
    {
      name: 'Giuseppe',
      img: 'img/avatar_2.jpg',
      chat: [
      {
        messaggio: 'Come stai oggi?',
        orario: '21/11/20 8:30am',
        stato: 'inviato'
      },
      {
        messaggio: 'cosi cosi',
        orario: '21/11/20 8:40am',
        stato: 'ricevuto'
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
