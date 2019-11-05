import React, {useState, useEffect, useRef} from 'react';

export const useTestList = () => {
  const [users, setUsers] = useState([]);
  //const [inputValid, setInputValid] = useState(false);
  const [btnAdd, setBtnAdd] = useState(false);
  const [btnDelete, setBtnDelete] = useState(false);
  const [textInput_Holder, setTextInput_Holder] = useState('');
  //const [data, setData] = useState([]);

  const inputEl = useRef(null);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=12')
      .then(response => response.json())
      .then(responseJson => {
        let usersTemp = [];
        let id = 1;
        for (let i of Object.keys(responseJson.results)) {
          usersTemp.push({
            firstname: responseJson.results[i].name.first,
            id: id,
            isChecked: false,
          });
          id++;
        }
        setUsers(usersTemp);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addUser = () => {
    let usersTemp = users;
    usersTemp.push({
      firstname: textInput_Holder,
      id: users[users.length - 1].id + 1,
      isChecked: false,
    });

    setUsers(usersTemp);
    setBtnAdd(false);
    inputEl.current.clear();
  };

  const deleteChekedItems = () => {
    //console.log('deleteChekedItems');

    let usersTemp = [];
    for (let i of Object.keys(users)) {
      if (!users[i].isChecked === true) {
        usersTemp.push({
          firstname: users[i].firstname,
          id: users[i].id,
          isChecked: users[i].isChecked,
        });
      }
    }

    //console.log(usersTemp);
    //this.setState({usersList: usersTemp, btnDelete: false});

    setUsers(usersTemp);
    setBtnDelete(false);
  };

  const chekItem = item => {
    let usersTemp = [];
    for (let i of Object.keys(users)) {
      if (users[i].id === item.id) {
        usersTemp.push({
          firstname: item.firstname,
          id: item.id,
          isChecked: item.isChecked ? false : true,
        });
      } else {
        usersTemp.push({
          firstname: users[i].firstname,
          id: users[i].id,
          isChecked: users[i].isChecked,
        });
      }
    }

    let result = usersTemp.find(obj => obj.isChecked == true);
    // console.log(result);
    if (result === undefined) {
      setBtnDelete(false);
    } else {
      setBtnDelete(true);
    }
    setUsers(usersTemp);
  };

  const handleUserInput = val => {
    if (val.length >= 2) {
      setBtnAdd(true);
      setTextInput_Holder(val);
    } else {
      setBtnAdd(false);
    }
  };

  return {
    users,
    addUser,
    deleteChekedItems,
    chekItem,
    handleUserInput,
    btnAdd,
    btnDelete,
    inputEl,
  };
};
