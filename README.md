# PROJECT

To create a CV application generator. A program where users can enter their information and outputs the information in a recume like format.

## OBJECTIVE

- Get accustomed to the React enviornment.
- Practice using usestate.

## LEARNING CURVES

- ### way of setting input fields to work with usestates

* First, setup for input tag

  ```<input
              type="text"
              name="fname"
              placeholder="First Name"
              onChange={handleInputChange}
              value={data.fname}
            />
  ```

* Second, setup usestate var

```

const [data, setData] = useState({
fname: "",
lname: "",
email: "",
phone: "",
linkdn: "",
});

```

- Third, setup handleInputChange function

```

const handleInputChange = (e) => {
const { name, value } = e.target;
setData({
...data,
[name]: value,
});
console.log();
};
```





* ### NEVER forget to put {} inside props
