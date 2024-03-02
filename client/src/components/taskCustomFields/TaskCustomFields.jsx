import React from 'react';
import {
  TaskCustomField,
  TaskCustomFieldsStyled,
  TaskCustomFieldInput,
  TaskCustomFieldsLabel
} from './TaskCustomFields.styled';

function TaskCustomFields(props) {
  return (
    <>
      <TaskCustomFieldsLabel>Custom Fields</TaskCustomFieldsLabel>
      <TaskCustomFieldsStyled>
        { props.customFields.map(customField => (
          <TaskCustomField key={customField.id}>
              <label>{customField.name}</label>
              <TaskCustomFieldInput
                  name="value"
                  type={customField.type === 'integer' ? 'number' : 'text'} 
                  value={props.task.customFields.find(i => i.id === customField.id)?.value}
                  onChange={event => props.handleCustomFieldsChange(customField.id, event)}
                  disabled={props.viewOnly}
              />
          </TaskCustomField>
        )) }
      </TaskCustomFieldsStyled>
    </>
  );
}

export default TaskCustomFields;