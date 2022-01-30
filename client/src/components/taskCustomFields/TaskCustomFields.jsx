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
import "./taskCustomFields.css";

function TaskCustomFields(props) {
  return (
    <Container className="customFieldsContainer">
      <FormLabel className="customFieldsLabel">Custom Fields</FormLabel>
      <div className="customFields">
        { props.customFields.map(customField => (
          <div className="taskCustomField" key={customField.id}>
              <label>{customField.name}</label>
              <Input
                  className="attribute"
                  name="value"
                  type={customField.type === 'integer' ? 'number' : 'text'} 
                  value={props.task.customFields.find(i => i.id === customField.id).value}
                  onChange={event => props.handleCustomFieldsChange(customField.id, event)}
              />
          </div>
        )) }
      </div>
    </Container>
  );
}

export default TaskCustomFields;