import React from "react";
const URL = "https://corona.lmao.ninja/countries";

class App3 extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      error: "",
      data: []
    };
  }

  componentDidMount() {
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        this.setState({ data: data.sort((a, b) => b.cases - a.cases) });
      })
      .catch(err => {
        this.setState({ error: err });
      })
      .finally(() => {
        this.setState({ loading: false });
      });
  }

  remove = index => {
    this.setState({
      data: this.state.data.filter((item, i) => i !== index)
    });
  };

  render() {
    const { loading, error, data } = this.state;

    if (loading) {
      return <h1>Loading</h1>;
    }

    if (error) {
      return <h1>Error</h1>;
    }

    return (
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Ops</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.country}>
              <td>
                <img
                  src={row.countryInfo.flag}
                  alt="flag"
                  style={{ height: "16px" }}
                />
                {row.country}
              </td>
              <td>{row.cases}</td>
              <td>
                <button onClick={() => this.remove(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App3;
