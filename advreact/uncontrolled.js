class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.input = React.createRef();     // Creating a reference to be handled by DOM.
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.input.current.value);    // to display or render the created reference by the DOM.
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.input} />         
      
      {/* actual point of reference or of use of ref method */}
        
      
      </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
