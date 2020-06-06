Examples of how to convert `React Class Components` to` Functional Components` with React Hooks
-
> 1. Change `class NameOfComponent extends Component` to `function NameOfComponent(props){`
> 2. remove the `constructor`
> 3. remove the `render()` method, keep the `return`
> 4. add initial state (with state and function) `const` before all methods
> 5. remove `this.state` throughout the component
> 6. remove all references to `this` throughout the component

## Example 1. Class Without State or Lifecycle Methods.

#before 
```javascript
import React, { Component } from 'react';

class App extends Component {

  alertName = () => {
    alert('John Doe');
  };

  render() {
    return (
      <div>
        <h3> This is a Class Component </h3>
        <button onClick={this.alertName}> Alert </button>
      </div>
    );
  }
}

export default App;
```
====================-after==========================

```javascript
import React from 'react';

function App() {
  const alertName = () => {
    alert(' John Doe ');
  };

  return (
    <div>
      <h3> This is a Functional Component </h3>
      <button onClick={alertName}> Alert </button>
    </div>
  );
};

export default App;
```

## Example 2. Adding Hooks to Classes with State.
#before
```javascript
import React, { Component } from 'react';

class App extends Component {
state = {
      name: ''
  }

  alertName = () => {
    alert(this.state.name);
  };

  handleNameInput = e => {
    this.setState({ name: e.target.value });
  };

  render() {
    return (
      <div>
        <h3> This is a Class Component </h3>
        <input
          type="text"
          onChange={this.handleNameInput}
          value={this.state.name}
          placeholder="Your name"
        />
        <button onClick={this.alertName}> Alert </button>
      </div>
    );
  }
}

export default App;
```
=======================-after-========================================
```javascript
import React, { useState } from 'react';

function App() {

  const [name, setName] = useState('John Doe');

  const alertName = () => {
    alert(name);
  };

  const handleNameInput = e => {
    setName(e.target.value);
  };

  return (
    <div>
      <h3> This is a Functional Component </h3>
      <input
        type="text"
        onChange={handleNameInput}
        value={name}
        placeholder="Your name"
      />
      <button onClick={alertName}> Alert </button>
    </div>
  );
};

export default App;
```

## Example 3. Adding Hooks to Classes with Multiple State Properties.
#before
```javascript
import React, { Component } from 'react';

class App extends Component {

    state = {
      userName: '',
      firstName: '',
      lastName: ''
    };

  logName = () => {
    // do whatever with the names ... let's just log them here
    console.log(this.state.userName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
  };

  handleUserNameInput = e => {
    this.setState({ userName: e.target.value });
  };
  handleFirstNameInput = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameInput = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <div>
        <h3> This is a Class Component </h3>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={this.state.userName}
          placeholder="Your username"
        />
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          placeholder="Your firstname"
        />
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          placeholder="Your lastname"
        />
        <button className="btn btn-large right" onClick={this.logName}>
          {' '}
          Log Names{' '}
        </button>
      </div>
    );
  }
}

export default App;
```
=======================-after-==========================================
```javascript
import React, { useState } from 'react';

function App() {

  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const logName = () => {
    // do whatever with the names... let's just log them here
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  const handleUserNameInput = e => {
    setUserName(e.target.value);
  };
  const handleFirstNameInput = e => {
    setFirstName(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <h3> This is a functional Component </h3>

      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="username..."
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="firstname..."
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="lastname..."
      />
      <button className="btn btn-large right" onClick={logName}>
        {' '}
        Log Names{' '}
      </button>
    </div>
  );
};

export default App;
```
## Example 4. Adding Hooks to a Class with State and componentDidMount.
#before
```javascript
import React, { Component, useEffect } from 'react';

class App extends Component {
  state = {
      // initial state
      userName: 'JD',
      firstName: 'John',
      lastName: 'Doe'
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        // update state
        userName: 'MJ',
        firstName: 'Mary',
        lastName: 'jane'
      });
    }, 5000);
  }

  logName = () => {
    // do whatever with the names ... let's just log them here
    console.log(this.state.userName);
    console.log(this.state.firstName);
    console.log(this.state.lastName);
  };

  handleUserNameInput = e => {
    this.setState({ userName: e.target.value });
  };
  handleFirstNameInput = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameInput = e => {
    this.setState({ lastName: e.target.value });
  };

  render() {
    return (
      <div>
        <h3> The text fields will update in 5 seconds </h3>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={this.state.userName}
          placeholder="Your username"
        />
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          placeholder="Your firstname"
        />
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          placeholder="Your lastname"
        />
        <button className="btn btn-large right" onClick={this.logName}>
          {' '}
          Log Names{' '}
        </button>
      </div>
    );
  }
}

export default App;
```
=====================-after-==============================================
```javascript
import React, { useState, useEffect } from 'react';

function App() {

  const [userName, setUserName] = useState('JD');
  const [firstName, setFirstName] = useState('John');
  const [lastName, setLastName] = useState('Doe');

  useEffect(() => {
    setInterval(() => {
      setUserName('MJ');
      setFirstName('Mary');
      setLastName('Jane');
    }, 5000);
  });

  const logName = () => {
    // do whatever with the names ...
    console.log(userName);
    console.log(firstName);
    console.log(lastName);
  };

  const handleUserNameInput = e => {
    setUserName(e.target.value);
  };
  const handleFirstNameInput = e => {
    setFirstName(e.target.value );
  };
  const handleLastNameInput = e => {
    setLastName(e.target.value );
  };

  return (
    <div>
      <h3> The text fields will update in 5 seconds </h3>
      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="Your username"
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="Your firstname"
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="Your lastname"
      />
      <button className="btn btn-large right" onClick={logName}>
        {' '}
        Log Names{' '}
      </button>
    </div>
  );
};

export default App;
```
## Example 5. Adding Hooks to a Class with State, componentDidMount, and componentDidUpdate
#before
```javascript
import React, { Component } from 'react';

class App extends Component {
  state = {
      // initial state
      userName: 'JD',
      firstName: 'John',
      lastName: 'Doe'
      header: 'Welcome to React Hooks'
  }

  componentDidMount() {
    const header = document.querySelectorAll('#header')[0];
    setTimeout(() => {
      header.innerHTML = this.state.header;
    }, 3000);
  }

  componentDidUpdate() {
    const node = document.querySelectorAll('#header')[0];
    node.innerHTML = this.state.header;
  }

  logName = () => {
    // do whatever with the names ... let's just log them here
    console.log(this.state.username);
  };

  handleUserNameInput = e => {
    this.setState({ userName: e.target.value });
  };
  handleFirstNameInput = e => {
    this.setState({ firstName: e.target.value });
  };
  handleLastNameInput = e => {
    this.setState({ lastName: e.target.value });
  };
  handleHeaderInput = e => {
    this.setState({ header: e.target.value });
  };

  render() {
    return (
      <div>
        <h3 id="header"> This is a Class Component </h3>
        <input
          type="text"
          onChange={this.handleUserNameInput}
          value={this.state.userName}
          placeholder="Your username"
        />
        <input
          type="text"
          onChange={this.handleFirstNameInput}
          value={this.state.firstName}
          placeholder="Your firstname"
        />
        <input
          type="text"
          onChange={this.handleLastNameInput}
          value={this.state.lastName}
          placeholder="Your lastname"
        />
        <button className="btn btn-large right" onClick={this.logName}>
          {' '}
          Log Names{' '}
        </button>
        <input
          type="text"
          onChange={this.handleHeaderInput}
          value={this.state.header}
        />{' '}
      </div>
    );
  }
}

export default App;
```
=====================-after-=========================================
```javascript
import React, { useState, useEffect } from 'react';

function App() {

  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [header, setHeader] = useState('Welcome to React Hooks');

  const logName = () => {
    // do whatever with the names...
    console.log(userName);
  };

  useEffect(() => {
    const newHeader = document.querySelectorAll('#header')[0];
    setTimeout(() => {
      newHeader.innerHTML = header;
    }, 3000);
  });

  const handleUserNameInput = e => {
    setUserName(e.target.value);
  };
  const handleFirstNameInput = e => {
    setFirstName(e.target.value);
  };
  const handleLastNameInput = e => {
    setLastName(e.target.value);
  };
  const handleHeaderInput = e => {
    setHeader(e.target.value);
  };

  return (
    <div>
      <h3 id="header"> This is a functional Component </h3>

      <input
        type="text"
        onChange={handleUserNameInput}
        value={userName}
        placeholder="username..."
      />
      <input
        type="text"
        onChange={handleFirstNameInput}
        value={firstName}
        placeholder="firstname..."
      />
      <input
        type="text"
        onChange={handleLastNameInput}
        value={lastName}
        placeholder="lastname..."
      />
      <button className="btn btn-large right" onClick={logName}>
        {' '}
        Log Names{' '}
      </button>
      <input type="text" onChange={handleHeaderInput} value={header} />
    </div>
  );
};

export default App;
```

## 6. Set initial state with useState(). e.g....
```javascript
import React, { useState } from ‘react’
```
Set a number:
```javascript
const [count, setCount] = useState(0)
```
Set a string:
```javascript
const [username, setUsername] = useState(‘’)
```
Set true/false:
```javascript
const [isOpen, setIsOpen] = useState(false)
```
Set an object:
```javascript
const [form, setValues] = useState({
 id: 0,
 first: ‘’,
 last: ‘’,
 password: ‘’,
 subscribe: false
})
```
Set an array:
```javascript
const [items, setItems] = useState([])
```
## 7. Remove constructor
```javascript
constructor(props) {  
  super(props);  
  //Set initial state  
  this.state = {  
    counter: 0,  
    name: ""  
  }  
} 
```
Use the useState hook
```javascript
function MyComponent(props) {  

  const [counter,setCounter] = useState(0);  
  const [name,setName] = useState("");  

} 
```
## 8.Remove event handler bindings
> We don't need to bind event handlers any more with function components. So if you were doing this;
>> You can simply remove these lines. (What a gross, overly verbose syntax anyway).
```javascript
constructor(props) {  
  this.onClickHandler = this.onClickHandler.bind(this);  
} 
```
## 9. Replace `this.setState`
> this.setState obviously doesn't exist any more in our function component. Instead we need to replace each of our setState calls with the relevant state variable setter.
```javascript
class MyComponent extends React.Component {  
  onClickHandler(e) {  
    this.setState({count: this.state.count+1})  
  }  
} 
```
Replace with this
```javascript
function MyComonent {  
  const [count, setCount] = useState(0)  
  const onClickHandler = e => {  
    setCount(count+1);  
  }  
}
```
## 10. useEffect for state update side effects
> Remember how this.setState could accept a callback that would run after the state was updated? Well our useState updater function does no such thing. Instead we have to use the useEffect hook. It doesn't work exactly the same though! useEffect will trigger whenever and of it's dependencies are changed.
```javascript
this.setState({counter: this.state.counter+1}, () => {  
  console.log('Counter was updated!')  
})  
```
to 
```javascript
const [counter, setCounter] = useState(0)  

useEffect(() => {  
  console.log('counter changed!')  
}, [counter])  
```

## 11. Replace lifecycle methods with hooks
**ComponentDidMount**
Instead of using the componentDidMount method, use the useEffect hook with an empty dependency array.
```javascript
useEffect(()=>{  
  console.log('component mounted!')  
},[]) //notice the empty array here  
```
**ComponentWillUnmount**
Instead of using the componentWillUnmount method to do cleanup before a component is removed from the React tree, return a function from the useEffect hook with an empty dependency array;
```javascript
useEffect(() => {  
  console.log('component mounted')  

  // return a function to execute at unmount  
  return () => {  
    console.log('component will unmount')  
  }  
}, []) // notice the empty array  
```
