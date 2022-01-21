import React, { useState } from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import "./tagFields.css";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
  }
}))

function TagFields() {
  const classes = useStyles()
  const [tagFields, setTagFields] = useState([]);

  const handleChangeTag = (id, event) => {
    const newTagField = tagFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    
    setTagFields(newTagField);
  }

  const handleAddFields = () => {
    setTagFields([...tagFields, { id: uuidv4(),  tag: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...tagFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setTagFields(values);
  }

  return (
    <Container>
      <label>Tags</label>
        <IconButton onClick={handleAddFields}>
            <AddIcon />
        </IconButton>
        { tagFields.map(tagField => (
          <div key={tagField.id}>
            <input
              name="tag"
              type="text"
              value={tagField.tag}
              onChange={event => handleChangeTag(tagField.id, event)}
            />
            <IconButton onClick={() => handleRemoveFields(tagField.id)}>
              <RemoveIcon />
            </IconButton>
            <IconButton onClick={handleAddFields}>
              <AddIcon />
            </IconButton>
          </div>
        )) }
    </Container>
  );
}

export default TagFields;