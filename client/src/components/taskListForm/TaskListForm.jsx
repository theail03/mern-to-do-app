import { useContext, useEffect, useState } from "react";
import { TaskListContext } from "../../context/taskListContext/TaskListContext";
import { getTaskList } from "../../context/taskListContext/taskListApiCalls";
import TagFields from "../tagFields/TagFields";
import CustomFields from "../customFields/CustomFields";
import { useHistory } from "react-router-dom";
import { 
  TagsAndCustomFields, 
  TaskListFormStyled, 
  TaskListFormLeft, 
  TaskListFormRight, 
  TaskListFormSection, 
  TaskListTitleAndCreate, 
  TaskListTitleInput 
} from "./TaskListForm.styled";
import { AuthContext } from "../../context/authContext/AuthContext";
import { getTaskListDummy } from "../../context/taskListContext/taskListDummyCalls";
import { colors } from "../../constants/Theme";
import { SimpleButton } from "../../styles/SimpleButton.styled";
import { FormLabelStyled } from "../../styles/FormLabel.styled";

export default function TaskListForm(props) {
  const [taskList, setTaskList] = useState({ title: "", tags: [], customFields: [] });
  const history = useHistory();

  const { taskList: taskListFromContext, dispatch } = useContext(TaskListContext);
  const { user } = useContext(AuthContext);

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

  useEffect(async () => {
    if (props.taskListId) {
      user ? await getTaskList(dispatch, props.taskListId) : getTaskListDummy(dispatch, props.taskListId);
    }
  }, []);

  useEffect(() => {
    // set only title, tags and customFields
    if (taskListFromContext && props.taskListId === taskListFromContext._id) {
      setTaskList(taskListFromContext);
    }
  }, [taskListFromContext]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const tags = taskList.tags.map(i => i.tag);
    const customFields = taskList.customFields.map(i => i.name);
    const customFieldNameRestrictions = [
      "title", 
      "tags", 
      "createdAt", 
      "updatedAt"
    ];
    // check if title is empty
    if (taskList.title === "") {
      alert("Please enter a title for your task list");
    } 
    // see if taskList.tags has any repeated tags
    else if (tags.length !== new Set(tags).size) {
      alert("Please make sure there are no repeated tags");
    }
    // validate there are no empty tags
    else if (tags.some(i => i === "")) {
      alert("Please make sure all tags have a name");
    }
    // validate tags have no "," in them
    else if (tags.some(i => i.includes(","))) {
      alert("Please make sure all tags do not have a comma (,) in them");
    }
    // see if taskList.customFields has any repeated custom fields 
    else if (customFields.length !== new Set(customFields).size) {
      alert("Please make sure there are no custom fields with the same name");
    }
    // validate there are no empty custom field names
    else if (customFields.some(i => i === "")) {
      alert("Please make sure all custom fields have a name");
    }
    // see if taskList.customFields has any restricted custom fields
    else if (customFields.some(i => customFieldNameRestrictions.includes(i))) {
      alert("The following custom field names are not allowed: title, tags, createdAt, updatedAt");
    }
    // don't allow title to be longer than 31 characters to prevent sheetjs error
    else if (taskList.title.length > 31) {
      alert("Please make sure the title is less than 32 characters");
    }
    else {
      props.save(taskList, dispatch);
      history.push("/");
    }
  };

  return (
      <TaskListFormStyled>
        <TaskListFormSection>
          <FormLabelStyled>Title</FormLabelStyled>
          <TaskListTitleAndCreate>
            <TaskListTitleInput
              name="title"
              type="text"
              value={taskList.title}
              onChange={handleTitleChange}
            />
            <SimpleButton backgroundColor={colors.color2} onClick={handleSubmit}>
              Save
            </SimpleButton>
          </TaskListTitleAndCreate>
        </TaskListFormSection>
        <TagsAndCustomFields>
          <TaskListFormLeft>
            <TagFields taskListId={props.taskListId} handleTagFieldsChange={handleTagFieldsChange} />
          </TaskListFormLeft>
          <TaskListFormRight>
            <CustomFields taskListId={props.taskListId} handleCustomFieldsChange={handleCustomFieldsChange} />
          </TaskListFormRight>
        </TagsAndCustomFields>
      </TaskListFormStyled>
  );
}