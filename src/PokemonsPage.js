import React, { Component } from "react";
import { connect } from "react-redux";
import { actionCreators } from "./store";
import { Pane, Table, Heading } from "evergreen-ui";
const { fetchPokemons } = actionCreators;

// --------------------------------------------

class PokemonsPage extends Component {
  componentDidMount() {
    this.props.fetchPokemons();
  }

  render() {
    return (
      <Pane>
        <Heading size={700} marginBottom={20}>
          Pokemons
        </Heading>

        <Table>
          <Table.Head>
            <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          </Table.Head>

          <Table.Body height={240}>
            {this.props.data.map((pokemon, index) => (
              <Table.Row key={index} isSelectable>
                <Table.TextCell>{pokemon.name}</Table.TextCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Pane>
    );
  }
}

// --------------------------------------------

const mapStateToProps = state => {
  return {
    data: state.data
  };
};

const mapDispatchToProps = { fetchPokemons };

export default connect(mapStateToProps, mapDispatchToProps)(PokemonsPage);
