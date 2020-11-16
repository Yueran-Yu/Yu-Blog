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

## Target 1: Implement User Registration
1. User submit username and password
2. ```users.json``` file will add a new line

#### Steps
1.  Write a From in a Front-End webpage, allow users to fill in **name** and **password**
2.  Front-End listen to the ```submit``` event
3.  Front-End send a ```post``` request, data will be stored in a request body
4.  Back-End(Node Server) will receive a ```post``` request
5.  Back-End(Node Server) retrieve the ```name``` and ```password```
6.  Back-End(Node Server) store the data

## Target 2: Implement User Login
1. In the Home Page, users who has logged in can see their username
2. Log in the ```signIn.html```, render ```username``` and ```password```
3. If the ```username``` and ```password``` entered is match with the data in database, automatically jump to the ```Home Page```

#### Steps
1.  Write a From in a Front-End webpage, allow users to fill in **name** and **password**
2.  Front-End listen to the ```submit``` event
3.  Front-End send a ```post``` request, data will be stored in a request body
4.  Back-End(Node Server) will receive a ```post``` request
5.  Back-End(Node Server) retrieve the ```name``` and ```password```
6.  Back-End(Node Server) read the data to see if there is a ```name``` and ```password``` match
7.  If Back-End(Node Server) has found any matched data, mark the user as logged in. We need to figure out how to mark the logged in user.

## Target 3: Show if the user login or not

