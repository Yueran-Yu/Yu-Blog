
### Sidebar function

1. Create a json file named ”data.json“ to store the ```keywords``` property, the data.json will stored like below:
  ```json
    // here is a example of data.json
    // here "CSS" and "HTML" is the keywords that you need to add to the sidebar
    [
      {
        "categoryName":"Front-End",
        "categoryIcon":"img/icon.png",
        "sites":[
          {
            "name":"abc",
            "img":"img.png",
            "link":"https://asc.com",
            "desc":"something here"
          },
          {
            "name":"bcd",
            "img":"img2.png",
            "link":"https://asec.com",
            "desc":"something here2"
          },
        ]
      },
       {
        "categoryName":"react",
        "categoryIcon":"img/icon.png",
        "sites":[
          {
            "name":"abc",
            "img":"img.png",
            "link":"https://asc.com",
            "desc":"something here"
          },
          {
            "name":"bcd",
            "img":"img2.png",
            "link":"https://asec.com",
            "desc":"something here2"
          },
        ]
      }
    ]
  ```
  2. loop through the json file, and get the ```keywords``` properties, and append them in the ```sidebar``` div, wrap ```<a></a>``` tag around the ```keyword```, this will be used as an anchor tag, which will point to the specific item inside the ```main-container``` div
  3. get all the array elements of each ```keywords``` property, append the array elements in the ```main-container``` div as sub-elements
  4. Use ```<a name="item1">Item 1</a>``` for each array element, so that the anchor tag in the ```sidebar``` will find the corresponding item in the ```main-container```






