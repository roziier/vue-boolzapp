var app = new Vue({
  el: '#app',
  data: {
    indiceContattoAttivo: 0,
    mymex: '',
    items: [

    // FIRST
    {
      name: 'Michael Boss',
      img: 'img/avatar_1.jpg',
      lastview: '21/11/20 8.30am',
      chat: [
      {
        messaggio: 'Hello there!',
        orario: '21/11/20 8:00am',
        stato: true
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
        messaggio: 'Usciamo a correre?',
        orario: '21/11/20 8:30am',
        stato: false
      },
      {
        messaggio: 'A pra foco',
        orario: '21/11/20 8:40am',
        stato: true
      }
      ]
    }

  ]},

  methods: {
    attivaUser: function (indiceAttivo) {
      this.indiceContattoAttivo = indiceAttivo;
    },

    addNewMex: function (){
      if (this.mymex != "") {
        this.items[this.indiceContattoAttivo].chat.push({
          messaggio: this.mymex,
          orario: '21/11/20 12:30am',
          stato: true
        });
        this.mymex = "";
      }
    },

    receiveMsg: function (){

        this.items[this.indiceContattoAttivo].chat.push({
          messaggio: 'THAT\'S WHAT SHE SAID! AHAHAHAH',
          orario: '21/11/20 12:30am',
          stato: false
        });

    },

    delayMsg: function(){
      setTimeout(this.receiveMsg, 2000);
    }


  }


});
