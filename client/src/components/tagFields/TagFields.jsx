import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { v4 as uuidv4 } from 'uuid';
import "./tagFields.css";

function TagFields(props) {
  const [tagFields, setTagFields] = useState([]);

  const handleChangeTag = (id, event) => {
    const newTagFields = tagFields.map(i => {
      if(id === i.id) {
        i[event.target.name] = event.target.value
      }
      return i;
    })
    setTagFields(newTagFields);
    const tags = tagFields.filter(i => i.tag !== "");
    props.handleTagFieldsChange(tags);
  }

  const handleAddFields = () => {
    setTagFields([...tagFields, { id: uuidv4(),  tag: '' }])
  }

  const handleRemoveFields = id => {
    const values  = [...tagFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setTagFields(values);
  }

  useEffect(() => {
    props.handleTagFieldsChange(tagFields);
  }, [tagFields]);

  return (
    <Container>
      <FormLabel>Tags</FormLabel>
        <IconButton onClick={handleAddFields}>
            <AddIcon />
        </IconButton>
        { tagFields.map(tagField => (
          <div key={tagField.id}>
            <Input
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