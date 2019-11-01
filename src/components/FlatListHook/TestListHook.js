import React, {useState, useEffect} from 'react';
import TestList from './TestList';

const TestListHook = () => {
  
  const [users, setUsers] = useState([]);
  const [inputValid, setInputValid] = useState(false);
  const [btnAdd, setBtnAdd] = useState(false);
  const [btnDelete, setBtnDelete] = useState(false);
  const [textInput_Holder, setTextInput_Holder] = useState('');

  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch('https://randomuser.me/api/?results=25')
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
        setUsers(usersTemp)
      })
      .catch(error => {
        console.error(error);
      });
  };

  // componentDidMount() {
  //   this.fetchData();
  // }

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

  

    setUsers(usersTemp)
    setBtnAdd(false)

    //console.log(usersTemp);
    this.textInput.clear();
  };

  const deleteChekedItems = () => {
    //console.log('deleteChekedItems');

    let usersTemp = [];
    for (let i of Object.keys(users)) {
      if (users[i].isChecked === true) {
      } else {
        usersTemp.push({
          firstname: users[i].firstname,
          id: users[i].id,
          isChecked: users[i].isChecked,
        });
      }
    }
    

    console.log(usersTemp);

    //this.setState({usersList: usersTemp, btnDelete: false});

    setUsers(usersTemp)
    setBtnDelete(false)
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
      setBtnDelete(false)
    } else {
      setBtnDelete(true)
    }
      setUsers(usersTemp)
  };

  const handleUserInput = val => {
    if (val.length >= 2) {
      setBtnAdd(true)
      setTextInput_Holder(val)
      // this.setState(
      //   {
      //     btnAdd: true,
      //     textInput_Holder: val,
      //   },
      //   () => {
      //     //console.log(this.state.btnAdd);
      //   },
      // );
    } else {
      setBtnAdd(false)
    }
    //console.log(val);
  };



  return (
    //<View/>
    <TestList
      users={users}
      btnAdd={btnAdd}
      btnDelete={btnDelete}

      addUser={addUser}
      //deleteUser={}

      deleteChekedItems={deleteChekedItems}
      chekItem={chekItem}
      handleUserInput={handleUserInput}
    />
  );
};

export default TestListHook;
