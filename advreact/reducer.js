const initialState = {
  contacts: [{
    name: 'Vic Henry',
    age: 30
  }]
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_CONTACT":
      return Object.assign({}, state, {
        contacts: [...state.contacts, action.payload]
      });
    default:
      return state;
  }
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.name = React.createRef();
    this.age = React.createRef();

    this.state = initialState;
  }

  handleSubmit = e => {
    e.preventDefault();
    const action = {
      type: "NEW_CONTACT",
      payload: {
        name: this.name.current.value,
        age: this.age.current.value
      }
    };
    const newState = contactReducer(this.state, action);
    this.setState(newState);
  };

  render() {
    const { contacts } = this.state;
    return (
      <div className="box">
        <div className="content">
          <pre>{JSON.stringify(this.state, null, 2)}</pre> 
        </div>
        
        <div className="field">
          <form onSubmit={this.handleSubmit}>
            <div className="control">
              <input className="input" placeholder="Full Name" type="text" ref={this.name} />
            </div>
            <div className="control">
              <input className="input" placeholder="Age" type="number" ref={this.age} />
            </div>
            <div>
              <button type="submit" className="button">Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
