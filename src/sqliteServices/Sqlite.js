import {openDatabase} from 'react-native-sqlite-storage';
var db = openDatabase({name: 'UserDatabase.db'});
export const createTable = () => {
  db.transaction(txn => {
    txn.executeSql(
      "SELECT name FROM sqlite_master WHERE type='table' AND name='table_user'",
      [],
      (tx, res) => {
        console.log('item: ', res.rows.length);
        if (res.rows.length == 0) {
          txn.executeSql('DROP TABLE IF EXISTS table_user', []);
          txn.executeSql(
            'CREATE TABLE IF NOT EXISTS table_user(user_id INTEGER PRIMARY KEY AUTOINCREMENT, user_name VARCHAR(20), user_email VARCHAR(50), user_address VARCHAR(255))',
            [],
          );
        } else {
          console.log('table already created');
        }
      },
    );
  });
};

export const saveData = (name, email, address, navigation) => {
  if (name === '' || email === '' || address === '') {
    console.log("can't add empty values");
  } else {
    db.transaction(txn => [
      txn.executeSql(
        'INSERT INTO table_user(user_name, user_email, user_address) VALUES (?,?,?)',
        [name, email, address],
        (tex, res) => {
          console.log('values added successfully', name, email, address, res);
          if (res.rowsAffected == 1) {
            console.log('abc');
            try {
              navigation.navigate('UserScreen');
            } catch (error) {
              console.log(error);
            }
          }
        },
      ),
    ]);
  }
};

export const readData = () => {
  return new Promise((resolve, reject) =>
    db.transaction(txn => {
      txn.executeSql(
        'SELECT * FROM table_user',
        [],
        (tx, res) => {
          var temp = [];
          for (let i = 0; i < res.rows.length; i++) {
            temp.push(res.rows.item(i));
          }
          resolve(temp);
        },
        error => {
          reject(error);
        },
      );
    }),
  );
};

export const updateData = (name, email, address, id, navigation) => {
  db.transaction(txn => {
    txn.executeSql(
      'UPDATE table_user set user_name = ?, user_email = ?, user_address = ?  WHERE user_id = ?',
      [name, email, address, id],
      (tex, res) => {
        console.log('res: ', res);
      },
    );
    try {
      navigation.navigate('UserScreen');
    } catch (error) {
      console.log(error);
    }
  });
};

export const deleteUser = (id) =>{
  db.transaction(txn=>{
    txn.executeSql('DELETE FROM table_user where user_id = ?',[id],(text,res)=>{
      readData()
    })
  })
}
