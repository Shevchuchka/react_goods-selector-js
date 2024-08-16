import 'bulma/css/bulma.css';
import { useState } from 'react';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  const [selectedGood, setGood] = useState('Jam');

  return (
    <main className="section container">
      {selectedGood ? (
        <h1 className="title is-flex is-align-items-center">
          {selectedGood} is selected
          <button
            data-cy="ClearButton"
            type="button"
            className="delete ml-3"
            onClick={() => setGood('')}
          />
        </h1>
      ) : (
        <h1 className="title is-flex is-align-items-center">
          No goods selected
        </h1>
      )}

      <table className="table">
        <tbody>
          {goods.map(g => (
            <tr
              key={g}
              data-cy="Good"
              className={`${selectedGood === g && 'has-background-success-light'}`}
            >
              <td>
                <button
                  onClick={
                    g === selectedGood ? () => setGood('') : () => setGood(g)
                  }
                  data-cy={`${g === selectedGood ? 'RemoveButton' : 'AddButton'}`}
                  type="button"
                  className={`button ${g === selectedGood && 'is-info'}`}
                >
                  {`${g === selectedGood ? '-' : '+'}`}
                </button>
              </td>

              <td data-cy="GoodTitle" className="is-vcentered">
                {g}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
};
