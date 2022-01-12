import React from "react";

class Searchbar extends React.Component {

  render() {
    return (
      <div className="input-group mb-3">
        <input
          className="form-control"
          placeholder="Search movie"
          onChange={this.props.changeQuery}
        />
      </div>
    );
  }
}

export default Searchbar;
