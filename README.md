Convert React Class Components to Functional Components with React Hooks
-

## Example 1. Class Without State or Lifecycle Methods.

# before 
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
==============================================

# after
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

# before
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

# after
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
#after
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
#after
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
#after
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
