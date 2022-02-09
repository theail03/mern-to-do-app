import { useContext, useEffect, useState } from "react";
import "./taskListForm.css";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { getTaskList } from "../../context/taskListContext/apiCalls";
import TagFields from "../tagFields/TagFields";
import CustomFields from "../customFields/customFields";
import Input from '@material-ui/core/Input';
import FormLabel from '@material-ui/core/FormLabel';
import { useHistory } from "react-router-dom";

export default function TaskListForm(props) {
  const [taskList, setTaskList] = useState({ title: "", tags: [], customFields: [] });
  const history = useHistory()

  const { taskLists, dispatch } = useContext(TaskListContext);

  const handleTitleChange = (e) => {
    const value = e.target.value;
    setTaskList({ ...taskList, [e.target.name]: value });
  };

  const handleTagFieldsChange = (tagFields) => {
    setTaskList({ ...taskList, tags: tagFields});
  };

  const handleCustomFieldsChange = (customFields) => {
    setTaskList({ ...taskList, customFields: customFields});
  };

  useEffect(() => {
    if (props.taskListId) {
      getTaskList(dispatch, props.taskListId);
    }
  }, []);

  useEffect(() => {
    // set only title, tags and customFields
    if (taskLists[0] && props.taskListId) {
      const taskListFromDb = taskLists[0];
      setTaskList(taskListFromDb);
    }
  }, [taskLists]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = taskList.tags.map(i => i.tag);
    const customFields = taskList.customFields.map(i => i.name);
    // check if title is empty
    if (taskList.title === "") {
      alert("Please enter a title for your task list");
    } 
    // see if taskList.tags has any repeated tags
    else if (tags.length !== new Set(tags).size) {
      alert("Please remove repeated tags");
    }
    // see if taskList.customFields has any repeated custom fields 
    else if (customFields.length !== new Set(customFields).size) {
      alert("Please remove repeated custom fields");
    }
    else {
      props.save(taskList, dispatch);
      history.push("/");
    }
  };

  return (
      <form className="taskListForm">
        <div className="taskListFormSection">
          <FormLabel>Title</FormLabel>
          <div className="taskListTitleAndCreate">
            <Input
              className="taskListTitleInput"
              name="title"
              type="text"
              value={taskList.title}
              onChange={handleTitleChange}
            />
            <button className="taskListSaveButton" onClick={handleSubmit}>
              Save
            </button>
          </div>
        </div>
        <div className="tagsAndCustomFields">
          <div className="taskListFormLeft">
            <TagFields handleTagFieldsChange={handleTagFieldsChange} />
          </div>
          <div className="taskListFormRight">
            <CustomFields handleCustomFieldsChange={handleCustomFieldsChange} />
          </div>
        </div>
      </form>
  );
}