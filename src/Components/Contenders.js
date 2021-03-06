import { Component } from "react";

class Contenders extends Component {
  constructor() {
    super();
    this.state = {
      editing: false,
      userInput: "",
    };
  }

  handleInput = (e) => {
    this.setState({ userInput: e });
  };

  handleToggle = () => {
    this.setState({ editing: !this.state.editing });
  };

  handleEdit = (id) => {
    this.props.editNameFn(id, this.state.userInput);
    this.handleToggle();
  };

  render() {
    const { contender, replaceFn } = this.props;
    const { editing, userInput } = this.state;
    const { handleInput, handleToggle, handleEdit } = this;
    return (
      <section className="contender fadeIn">
        <p>HP: {contender.hp}</p>
        <img src={contender.image} alt={contender.name} />
        <div>
          {editing ? (
            <div className="cont-buttons">
              <input
                value={userInput}
                onChange={(e) => handleInput(e.target.value)}
                placeholder={contender.name}
              />
              <button onClick={() => handleEdit(contender.id)}>Submit</button>
            </div>
          ) : (
            <div>
              <p>{contender.name}</p>
              <div className="cont-buttons">
                <button onClick={handleToggle}>Edit Name</button>
                <button onClick={() => replaceFn(contender.id)}>Replace</button>
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default Contenders;
