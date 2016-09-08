var myData = [
  {
    userName: 'Jesus',
    passWord: 'pwd',
    name: 'Jesus',
    image: './img/headshots/jesus.jpg',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 2,
    losses: 2,
  },
  {
    userName: 'Michael',
    passWord: 'pwd',
    name: 'Michael Molinari',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 14,
    losses: 2,
    image: './img/headshots/michael2.jpg'
  },
  {
    userName: 'Brian',
    passWord: 'pwd',
    name: 'Brian Nations',
    image: './img/headshots/brian.png',
    name: 'Riley Rose',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 2,
    losses: 1,
  },
  {
    userName: 'Craig',
    passWord: 'pwd',
    name: 'Craig Campbell',
    image: './img/headshots/craig.jpg',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 2,
    losses: 0,
  },
  {
    userName: 'Brook',
    passWord: 'pwd',
    name: 'Brook Riggio',
    image: './img/headshots/brook.png',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 10,
    losses: 3,
  },
  {
    userName: 'Munir',
    passWord: 'pwd',
    name: 'Munir Ibrahim',
    image: './img/headshots/munir.png',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 12,
    losses: 30,
  },
  {
    userName: 'Will',
    passWord: 'pwd',
    name: 'Will Weatherford',
    image: './img/headshots/will.png',
    score: function() {
      return this.wins * 100 / this.wins + this.losses;
    },
    wins: 1,
    losses: 3,
  }
];
