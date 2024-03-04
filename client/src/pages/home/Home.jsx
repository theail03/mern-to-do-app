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
            <BoxTitle>Tags and Filtering</BoxTitle>
            <BoxContent>Tags help you categorize your tasks for streamlined management. Assign tags by topic, urgency, or project, and then filter to view only what you need. It's an effective way to keep your tasks organized and prioritized.
            </BoxContent>
          </Box>
          <Box>
            <BoxTitle>Custom Fields</BoxTitle>
            <BoxContent>With custom fields, you can capture all the details important to your tasks. Whether it's a 'Due Date', a 'Priority Level', or 'Progress', these fields can be added to each task list, giving you the power to track and manage according to your personal or professional metrics.
            </BoxContent>
          </Box>
        </ResponsiveRow>
        <ResponsiveRow>
          <Box>
            <BoxTitle>Full Experience with Sign-In</BoxTitle>
            <BoxContent>When you're ready for the full ToDoApp experience, simply sign in with your Google account. All the tasks you add, the tags you create, and the custom fields you set up will be saved and synchronized across your devices. Signing in means your to-dos stay up-to-date and accessible wherever you are.
            </BoxContent>
          </Box>
          <Box>
            <BoxTitle>More Than Just Tasks</BoxTitle>
            <BoxContent>ToDoApp is more than a task manager — it's a productivity booster designed to adapt to your workflow. With a focus on customization and user-friendly design, you'll find managing your daily to-dos not just easy, but enjoyable.
            </BoxContent>
          </Box>
        </ResponsiveRow>
      </Column>
    </Page>
  );
}