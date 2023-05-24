import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Select from '@material-ui/core/Select';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import { v4 as uuidv4 } from 'uuid';
import "./customFields.css";

function CustomFields(props) {
  const [customFields, setCustomFields] = useState([]);

  const { taskLists, dispatch } = useContext(TaskListContext);

  const handleChangeCustomField = (id, event) => {
    const newCustomFields = customFields.map(i => {
      if(id === i.id) {
        let value = event.target.value;
        if(event.target.name === "min" || event.target.name === "max") {
          value = parseInt(value);
        }
        i[event.target.name] = value;
      }
      return i;
    })
    setCustomFields(newCustomFields);
    const fields = customFields.filter(i => i.name !== "");
    props.handleCustomFieldsChange(fields);
  }

  const handleAddFields = () => {
    setCustomFields([...customFields, { id: uuidv4(),  name: '', type: 'string', min: NaN, max: NaN }])
  }

  const handleRemoveFields = id => {
    const values  = [...customFields];
    values.splice(values.findIndex(value => value.id === id), 1);
    setCustomFields(values);
  }

  useEffect(() => {
    if (taskLists[0] && props.taskListId === taskLists[0]._id) {
      const customFieldsFromDb = taskLists[0].customFields;
      setCustomFields(customFieldsFromDb);
    }
  }, [taskLists]);

  useEffect(() => {
    props.handleCustomFieldsChange(customFields);
  }, [customFields]);

  return (
    <Container>
      <FormLabel>Custom Fields</FormLabel>
        <IconButton onClick={handleAddFields}>
            <AddIcon />
        </IconButton>
        { customFields.map(customField => (
          <div className="customField" key={customField.id}>
            <div className="customFieldAttributes">
                <div className="customFieldAttribute">
                    <label>Type</label>
                    <Select 
                        className="customFieldInput"
                        name="type"
                        value={customField.type}
                        onChange={event => handleChangeCustomField(customField.id, event)}
                    >
                        <MenuItem value={'string'}>String</MenuItem>
                        <MenuItem value={'integer'}>Integer</MenuItem>
                    </Select>
                </div>
                <div className="customFieldAttribute">
                    <label>Name</label>
                    <Input
                        className="customFieldInput"
                        name="name"
                        type="text"
                        value={customField.name}
                        onChange={event => handleChangeCustomField(customField.id, event)}
                    />
                </div>
                {/* if type is number add min and max attributes */}
                {customField.type === 'integer' && ( <>
                    <div className="customFieldAttribute">
                        <label>Min</label>
                        <Input
                            className="customFieldInput"
                            name="min"
                            type="number"
                            value={customField.min}
                            onChange={event => handleChangeCustomField(customField.id, event)}
                        />
                    </div>
                    <div className="customFieldAttribute">
                        <label>Max</label>
                        <Input
                            className="customFieldInput"
                            name="max"
                            type="number"
                            value={customField.max}
                            onChange={event => handleChangeCustomField(customField.id, event)}
                        />
                    </div>    
                </> )}
            </div>
            <div className="customFieldButtons">
                <IconButton onClick={() => handleRemoveFields(customField.id)}>
                    <RemoveIcon />
                </IconButton>
                <IconButton onClick={handleAddFields}>
                    <AddIcon />
                </IconButton>
            </div>
          </div>
        )) }
    </Container>
  );
}

export default CustomFields;