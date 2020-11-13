## Database Logic: Read Data and Write Data

### /db/users.json
#### Structure: An Array
```json
  [
    {
      "id": 1,
      "name": "frank",
      "password": "123456"
    },
    {
      "id": 2,
      "name": "jack",
      "password": "121212"
    }
  ]
```
### Read ```users``` Data
- #### 1. ```const usersData = fs.readFileSync('./db/users.json').toString()```
- #### 2. ```JSON.parse(usersData)``` This is de-serialization, we will get a real Array

### Write and Store ```users``` data
- #### 1. ```JSON.stringify(usersData)``` This is serialization, we will get a string
- #### 2. ```fs.writeFileSync('./db/users/json', usersData)```  This is write data to the database