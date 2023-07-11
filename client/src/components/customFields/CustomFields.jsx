import React, { useContext, useEffect, useState } from 'react';
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import MenuItem from '@material-ui/core/MenuItem';
import FormLabel from '@material-ui/core/FormLabel';
import { v4 as uuidv4 } from 'uuid';
import { 
  CustomField,
  CustomFieldAttributes,
  CustomFieldAttribute,
  CustomFieldButtons,
  CustomFieldInput,
  CustomFieldSelect
} from './CustomFields.styled';

function CustomFields(props) {
  const [customFields, setCustomFields] = useState([]);

  const { taskList: taskListFromContext, dispatch } = useContext(TaskListContext);

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
    if (taskListFromContext && props.taskListId === taskListFromContext._id) {
      const customFieldsFromDb = taskListFromContext.customFields;
      setCustomFields(customFieldsFromDb);
    }
  }, [taskListFromContext]);

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
          <CustomField key={customField.id}>
            <CustomFieldAttributes>
                <CustomFieldAttribute>
                    <label>Type</label>
                    <CustomFieldSelect 
                        name="type"
                        value={customField.type}
                        onChange={event => handleChangeCustomField(customField.id, event)}
                    >
                        <MenuItem value={'string'}>String</MenuItem>
                        <MenuItem value={'integer'}>Integer</MenuItem>
                    </CustomFieldSelect>
                </CustomFieldAttribute>
                <CustomFieldAttribute>
                    <label>Name</label>
                    <CustomFieldInput
                        name="name"
                        type="text"
                        value={customField.name}
                        onChange={event => handleChangeCustomField(customField.id, event)}
                    />
                </CustomFieldAttribute>
                {/* if type is number add min and max attributes */}
                {customField.type === 'integer' && ( <>
                    <CustomFieldAttribute>
                        <label>Min</label>
                        <CustomFieldInput
                            name="min"
                            type="number"
                            value={customField.min}
                            onChange={event => handleChangeCustomField(customField.id, event)}
                        />
                    </CustomFieldAttribute>
                    <CustomFieldAttribute>
                        <label>Max</label>
                        <CustomFieldInput
                            name="max"
                            type="number"
                            value={customField.max}
                            onChange={event => handleChangeCustomField(customField.id, event)}
                        />
                    </CustomFieldAttribute>    
                </> )}
            </CustomFieldAttributes>
            <CustomFieldButtons>
                <IconButton onClick={() => handleRemoveFields(customField.id)}>
                    <RemoveIcon />
                </IconButton>
                <IconButton onClick={handleAddFields}>
                    <AddIcon />
                </IconButton>
            </CustomFieldButtons>
          </CustomField>
        )) }
    </Container>
  );
}

export default CustomFields;