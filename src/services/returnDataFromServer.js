const fetchData = () => {
  let usersTemp = [
    {
      firstname: 'Matilda',
      id: 1,
      img: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
      massages: [
        {
          id: 1,
          massage: 'some text 2',
          time: '12.12.2012',
          wasSeen: false,
          owner: false,
        },
        {
          id: 2,
          massage: 'some text 3',
          time: '12.12.2013',
          wasSeen: false,
          owner: false,
        },
        {
          id: 3,
          massage: 'some text 7',
          time: '12.12.2015',
          wasSeen: false,
          owner: false,
        },
        {
          id: 4,
          massage: 'what ??',
          time: '12.12.2017',
          wasSeen: true,
          owner: true,
        },
        {
          id: 5,
          massage: 'some text 99',
          time: '12.12.2019',
          wasSeen: false,
          owner: false,
        },
        
      ],
    },
    {
      firstname: 'Ryan',
      id: 2,
      img: 'https://randomuser.me/api/portraits/thumb/men/49.jpg',
      massages: [],
    },
    {
      firstname: 'Vicki',
      id: 3,
      img: 'https://randomuser.me/api/portraits/thumb/women/67.jpg',
      massages: [
        {
          id: 1,
          massage: 'some text 2',
          time: '22.12.2013',
          wasSeen: false,
          owner: false,
        },
      ],
    },
    {
      firstname: 'Katie',
      id: 4,
      img: 'https://randomuser.me/api/portraits/thumb/women/75.jpg',
      massages: [],
    },
    {
      firstname: 'Allan',
      id: 5,
      img: 'https://randomuser.me/api/portraits/thumb/men/64.jpg',
      massages: [],
    },
    {
      firstname: 'Montserrat',
      id: 6,
      img: 'https://randomuser.me/api/portraits/thumb/women/94.jpg',
      massages: [
        {
          id: 1,
          massage: 'some text 99',
          time: '22.12.2011',
          wasSeen: true,   
          owner: false,
        }
      ],
    }
  ];

  

  return usersTemp;
};

const returnDataFromServer = new fetchData();

export default {returnDataFromServer};
