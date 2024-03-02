import React, { useContext, useState, useEffect } from 'react';
import { TaskListContext } from '../../context/taskListContext/TaskListContext';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { v4 as uuidv4 } from 'uuid';
import { FormLabelStyled } from '../../styles/FormLabel.styled';
import { TagInput } from './TagFields.styled';

function TagFields(props) {
  const [tagFields, setTagFields] = useState([]);

  const { taskList: taskListFromContext, dispatch } = useContext(TaskListContext);

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
    if (taskListFromContext && props.taskListId === taskListFromContext._id) {
      const tagsFromDb = taskListFromContext.tags;
      setTagFields(tagsFromDb);
    }
  }, [taskListFromContext]);

  useEffect(() => {
    props.handleTagFieldsChange(tagFields);
  }, [tagFields]);

  return (
    <>
      <FormLabelStyled>Tags</FormLabelStyled>
        <IconButton onClick={handleAddFields}>
            <AddIcon />
        </IconButton>
        { tagFields.map(tagField => (
          <div key={tagField.id}>
            <TagInput
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
    </>
  );
}

export default TagFields;