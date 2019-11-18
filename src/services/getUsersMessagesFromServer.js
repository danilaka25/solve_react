const fetchUsersMessages = () => {
  let data = {
    usersTemp: [
      {
        firstname: 'Matilda',
        id: 1,
        img: 'https://randomuser.me/api/portraits/thumb/women/6.jpg',
        messages: [
          {
            id: 1,
            message: 'some text 1',
            time: '12.12.2012',
            wasSeen: false,
            owner: false,
          },
          {
            id: 2,
            message: 'some text 2',
            time: '12.12.2013',
            wasSeen: false,
            owner: false,
          },
          {
            id: 3,
            message: 'some text 3',
            time: '12.12.2015',
            wasSeen: false,
            owner: false,
          },
          {
            id: 4,
            message: 'what ?? some text 4',
            time: '12.12.2017',
            wasSeen: true,
            owner: true,
          },
          {
            id: 5,
            message: 'some text 5',
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
        messages: [],
      },
      {
        firstname: 'Vicki',
        id: 3,
        img: 'https://randomuser.me/api/portraits/thumb/women/67.jpg',
        messages: [
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
        messages: [],
      },
      {
        firstname: 'Allan',
        id: 5,
        img: 'https://randomuser.me/api/portraits/thumb/men/64.jpg',
        messages: [],
      },
      {
        firstname: 'Montserrat',
        id: 6,
        img: 'https://randomuser.me/api/portraits/thumb/women/94.jpg',
        messages: [
          {
            id: 1,
            message: 'some text 99',
            time: '22.12.2011',
            wasSeen: true,
            owner: false,
          },
        ],
      },
    ],
  };

  return data;
};

const getUsersMessagesFromServer = new fetchUsersMessages();

export default {getUsersMessagesFromServer};
