import React, { useState } from 'react';
import { TextField } from '../TextField';
import { Movie } from '../../types/Movie';

type Props = {
  onAdd: (movie: Movie) => void;
  countForm: number;
};

export const NewMovie: React.FC<Props> = ({ onAdd, countForm }) => {
  // Increase the count after successful form submission
  // to reset touched status of all the `Field`s

  const [valueTitle, setValueTitle] = useState('');
  const [valueDescription, setvalueDescription] = useState('');
  const [valueImageURL, setvalueImageURL] = useState('');
  const [valueImdbURL, setvalueImdbURL] = useState('');
  const [valueImdbID, setvalueImdbID] = useState('');

  const theButtonDisabled = () => {
    if (
      valueTitle.trim() !== '' &&
      valueImageURL.trim() !== '' &&
      valueImdbURL.trim() !== '' &&
      valueImdbID.trim() !== ''
    ) {
      return false;
    } else {
      return true;
    }
  };

  const onReset = () => {
    setValueTitle('');
    setvalueDescription('');
    setvalueImageURL('');
    setvalueImdbID('');
    setvalueImdbURL('');
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      valueTitle.trim() === '' ||
      valueImageURL.trim() === '' ||
      valueImdbURL.trim() === '' ||
      valueImdbID.trim() === ''
    ) {
      return;
    } else {
      const newMovie: Movie = {
        title: valueTitle,
        description: valueDescription,
        imgUrl: valueImageURL,
        imdbUrl: valueImdbURL,
        imdbId: valueImdbID,
      };

      onAdd(newMovie);
      onReset();
    }
  };

  return (
    <form
      className="NewMovie"
      key={countForm}
      onSubmit={e => {
        onSubmit(e);
      }}
    >
      <h2 className="title">Add a movie</h2>

      <TextField
        name="title"
        label="Title"
        value={valueTitle}
        required
        onChange={newValue => {
          setValueTitle(newValue);
        }}
      />

      <TextField
        name="description"
        label="Description"
        value={valueDescription}
        onChange={newValue => {
          setvalueDescription(newValue);
        }}
      />

      <TextField
        name="imgUrl"
        label="Image URL"
        value={valueImageURL}
        required
        onChange={newValue => {
          setvalueImageURL(newValue);
        }}
      />

      <TextField
        name="imdbUrl"
        label="Imdb URL"
        value={valueImdbURL}
        required
        onChange={newValue => {
          setvalueImdbURL(newValue);
        }}
      />

      <TextField
        name="imdbId"
        label="Imdb ID"
        value={valueImdbID}
        required
        onChange={newValue => {
          setvalueImdbID(newValue);
        }}
      />

      <div className="field is-grouped">
        <div className="control">
          <button
            type="submit"
            data-cy="submit-button"
            className="button is-link"
            disabled={theButtonDisabled()}
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
};
