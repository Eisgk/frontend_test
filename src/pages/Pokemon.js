import axios from 'axios';
import { useState, useEffect } from 'react';
import { Card, Placeholder } from 'react-bootstrap';

export default function Pokemon() {
  const [arrayPokemon, setArrayPokemon] = useState([]);
  const [loading, setLoading] = useState(false);
  async function fetchData() {
    const arr = [];
    for (var i = 1; i <= 104; i++) {
      const res = await axios.get('https://pokeapi.co/api/v2/pokemon/' + i);
      arr.push(await res.data);
    }
    setArrayPokemon(arr);
    setLoading(true);
  }
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="pokemon">
      {loading ? (
        <div>
          <h1 className="titlePokemon">Test fetch API</h1>
          <div className="pokemonData">
            {arrayPokemon.map((val, i) => {
              return (
                <div key={i}>
                  <img src={val.sprites.front_default} />
                  <p>{val.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <h1 className="titlePokemon">Test fetch API</h1>
          <div className="pokemonData">
            {Array(104)
              .fill()
              .map((_, i) => {
                return (
                  <Card key={i} style={{ border: 'none' }} >
                    <Card
                      variant="top"
                      style={{
                        width: '150px',
                        height: '150px',
                        backgroundColor: '#a5b7ca',
                      }}
                    />
                    <Card.Body style={{ backgroundColor: '#cbd5e0' }}>
                      <Placeholder as={Card.Title} animation="glow">
                        <Placeholder xs={12} />
                      </Placeholder>
                    </Card.Body>
                  </Card>
                );
              })}
          </div>
        </div>
      )}
    </div>
  );
}
