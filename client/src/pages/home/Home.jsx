import { Page } from "../../styles/Page.styled";
import { Box, BoxTitle, ResponsiveRow, Column, BoxContent } from "./Home.styled";

export default function Home() {  

  return (
    <Page>
      <Column>
        <h1>Welcome to ToDoApp</h1>
        <Box>
          <BoxTitle>Visitor Mode</BoxTitle>
          <BoxContent>If you're not logged in, you are in Visitor Mode, where you can navigate and explore ToDoApp just as you would as a registered user. As a visitor, feel free to interact with the interface — create tasks, assign tags, set custom fields, and click through different features. It's a hands-on way to experience the functionality of ToDoApp without the need to log in. Remember, in Visitor Mode, your actions are simulations: no data will be saved, and no changes are permanent. It's the perfect way to get to know our app before you decide to jump in and sign up.
          </BoxContent>
        </Box>
        <ResponsiveRow>
          <Box>
            <BoxTitle>Task Lists and Customization</BoxTitle>
            <BoxContent>Start by creating a task list in ToDoApp, which acts like a container for your tasks. You can then customize this list by adding tags relevant to your activities, like 'Home', 'Work', or 'Urgent'. Next, define custom fields that are specific to your needs—perhaps a 'Due Date' for deadlines or 'Priority' to indicate urgency. This level of customization is what sets ToDoApp apart; you're not limited to predefined fields like in other apps. Once your list is set up, you're all ready to begin adding tasks.
            </BoxContent>
          </Box>
          <Box>
            <BoxTitle>Task Management and Data Portability</BoxTitle>
            <BoxContent>Managing your tasks within each list is just the beginning. ToDoApp also allows you to export your task lists to a file, making it easy to transfer your data or keep a backup. Importing tasks from a file is just as simple, ensuring you can move your task management between devices and platforms with ease. Even in Visitor Mode, you can export the sample tasks to see how data portability works in practice.
            </BoxContent>
          </Box>
        </ResponsiveRow>
        <ResponsiveRow>
          <Box>
            <BoxTitle>Unique Flexibility</BoxTitle>
            <BoxContent>ToDoApp offers a unique flexibility that you won't find in most task management apps. Here, you're not stuck with a fixed set of task attributes. Instead, you define what information is important to track for each task, making ToDoApp versatile enough to adapt to any project or lifestyle. Whether for personal use or professional projects, ToDoApp molds to fit your approach to task management.
            </BoxContent>
          </Box>
          <Box>
            <BoxTitle>Getting the Most Out of ToDoApp</BoxTitle>
            <BoxContent>While Visitor Mode offers a snapshot of ToDoApp’s capabilities, signing in unlocks the full array of features. As a signed-in user, you can save your task lists, ensure they sync across devices, and continue your productivity journey without interruption. Experience the full benefits of custom task management and see how ToDoApp can transform your daily routine.
            </BoxContent>
          </Box>
        </ResponsiveRow>
      </Column>
    </Page>
  );
}