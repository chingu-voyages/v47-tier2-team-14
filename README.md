# Voyage Project - Tier 2 Team 14 - Daily Tasks Productivity Tool

## Table of Contents

- [Overview](#overview)
- [Initial Setup](#initial-setup-wrench)
- [Project Workflow](#project-workflow)
- [Technology Stack](#technology-stack)
- [General Instructions](#general-instructions)
- [Requirements & Specifications](#requirements-specifications)
- [Acknowledgements](#acknowledgements)
- [About Chingu](#about-chingu)

## Overview

A daily task productivity tool is a system designed to help individuals organize and manage their tasks effectively on a day-to-day basis.

It typically includes features such as task creation, scheduling, prioritization, and tracking. Users can input tasks, assign deadlines, set priorities, categorize tasks based on projects or urgency, and monitor progress.

These tools often come with user-friendly interfaces, allowing users to easily navigate, add, edit, and delete tasks. They may include features like reminders, notifications, and integrations with calendars or emails to keep users informed about upcoming tasks or deadlines.

Overall, a daily task productivity tool aims to streamline task management, enhance organization, and improve efficiency in completing daily tasks and achieving goals.

![Example daily task productivity tool](./assets/daily_productivity_sample_ui.png)

Your Chingu Voyage team is harnessing this dataset to craft a web application dedicated to assisting individuals in efficiently organizing their daily tasks. The application will encapsulate various features enabling users to explore and schedule their tasks effectively. Through a concise summary, users will be empowered to select specific segments for a more detailed, step-by-step breakdown.

This project will offer a valuable opportunity for you to gain hands-on experience in web development while handling multi-dimensional datasets. It's an ideal chance to hone your skills by working on a practical application, allowing you to delve into the complexities of data manipulation within a web-based environment.
___
## Initial Setup

1. Clone the repository in the local folder you wish to work on this project with the command  
   `git clone https://github.com/chingu-voyages/v47-tier2-team-14.git`

2. Execute npm install  
   `npm install`

3. Run the project locally  
   `npm run dev`

## Project Workflow

1. Always create a new branch for your work. Use one of the four basic types of branches (bug, feature, refactor, and style), or another relevant keyword,  to start with your branch's name. For example: `git checkout -b 'feature/welcome-page'`

- Ensure your branch is up to date before pushing any changes
  `git pull origin <branch name>` (branch name should be "development" depending on your situation)

2. `git init` (only required once, at the beginning of project)

3. `git add <filename>` or `git add .`(all of the files in your branch)

4. Commit to your branch using keywords: "feat, fix, style, refactor, docs" before your comment in the following format `git commit -m "keywords: <comment>"`. For example: `git commit -m "feat: Create calendar component"`

5. `git remote add origin https://github.com/chingu-voyages/v47-tier2-team-14.git` (only required once, at the beginning of project)

6. `git push origin <your branch name>`

7. Create a pull request and wait for review from a team member.

8. Once your changes have been reviewed by others, you can merge your branch with the development branch. Be sure to execute the following command to retrieve the most recent changes from the development branch: "git pull." Should conflicts arise, be sure to address them promptly and do not hesitate to ask for assistance when necessary.

## Technology Stack

The core technologies used in this project:

 - React
 - ViteJS

## General Instructions

This project is designed to be worked on by a team rather than an individual
Chingu. This means you and your team will need to thoroughly read and
understand the requirements and specifications below, **_and_** define and
manage your project following the _Agile Methodology_ defined in the
[Voyage Handbook](https://github.com/chingu-voyages/Handbook/blob/main/docs/guides/voyage/voyage.md).

As you create this project make sure it meets all of the requirements, but once
it reaches MVP, start implementing the optional features or get creative and
extend it in ways we haven't envisioned. In other words, use the power of
teamwork to make it distinctive and unique.

Take note that we haven't given specific direction on what your UI/UX should
look like. This is another area where you and your team can put your creativity
to work!

## Requirements & Specifications

### What You Need to Do

The following define the minimum requirements and ideas for features you may
implement to enhance this app, if time permits.

#### Structure

- [ ] This is a purely frontend application. No backend is required.
- [ ] You may use any languages, tools, or libraries you prefer when designing and building this app.
- [ ] We've included a JSON file containing the raw data in the `/assets` directory in this repo.
- [ ] The JSON file is for the development purposes, and to help you get a better idea about the checklist structure. Feel free to adjust, change, or even not to use it.
- [ ] The system should parse the provided JSON file to categorize and structure tasks according to categories, activity types, and individual tasks.
  - Category of Work Array:
    - The system must process the JSON data to identify different categories of work, each represented as an array.
    - Activity Type Array:
      - Within each category, the system should categorize tasks further into activity types, forming an array of these types.
      - Task Array:
        - Tasks within each activity type should be listed in an array, including:
        - Task Name: The name/title of the task.
        - Task Detailed Description: A comprehensive description or details about the task.
        - Due Date:
          - For monthly tasks: The day number of the month the task is due on.
          - For weekly tasks: Allowance for the day name (e.g., 'Sunday') or the day number.
          - Flexibility to accept multiple day numbers or day names for a task.
- [ ] Automatically generate a daily checklist for tasks based on a matrix of categories and tasks listed against days of the month.
- [ ] You may **_NOT_** use AI-base solution generators like GitHub CoPilot.
- [ ] Useful links and resources:
  - [Learn about LocalStorage in JavaScript](https://jagathishsaravanan.medium.com/learn-about-localstorage-in-javascript-228b3290275)

#### Styling

- [ ] Surprise us!!! Use your teams creativity to make this app distinctive.
- [ ] Add a footer containing a link to your teams GitHub repo
- [ ] In general, you will find these [UI design principles](https://www.justinmind.com/ui-design/principles) helpful.
- [ ] Recommend using this resource for [clean CSS](https://www.devbridge.com/articles/implementing-clean-css-bem-method/)

#### Functionality

- Initial Checklist Generation:
  - [ ] Utilize the provided JSON data to generate the initial matrix that lists categories and tasks on the left side and days of the month along the top (triggered by user).
  - [ ] Display checkboxes at the intersections of categories/tasks and days.
  - [ ] Generate the matrix only for the current month.
  - [ ] Determine the current month dynamically based on the system's date.
- Categories & Tasks
  - [ ] Display all available categories and their associated tasks on the left side of the matrix.
  - [ ] Populate the matrix with tasks listed under their respective categories.
- Days of the Month
  - [ ] Populate the top row of the matrix with the days of the current month.
  - [ ] Ensure correct alignment of dates based on the current month's calendar.
- Checkbox Intersections
  - [ ] Display checkboxes at the intersections of each task/category and the corresponding day of the month.
  - [ ] Populate checkboxes only for the specific date(s) tasks are to be completed, as mentioned in the JSON data.
  - [ ] Reflect completion status by dynamically checking/unchecking these checkboxes based on the completion status data.
- Additional Notes:
  - [ ] Upon completing a task (checking the corresponding checkbox), enable a feature to input additional notes related to that specific task.
  - [ ] Direct users to a dedicated page or modal window where they can type, edit, and save notes related to the completed task.
  - [ ] Implement a user-friendly text input field or area, enabling users to add comprehensive details or comments.
  - [ ] Include a "Save" or "Submit" button to store these notes and associate them with the completed taskfor future reference or review.
- Local Storage Implementation
  - [ ] Implement local storage functionality post-initial checklist generation.
  - [ ] Store the generated checklist in the local storage to persist user data beyond the initial session.
  - [ ] Update the checklist in the local storage whenever changes are made.
  - [ ] Introduce a "Save" button specifically for updating local storage.
  - [ ] On clicking "Save," capture the current state of the task list, including modifications and progress.
  - [ ] Store this updated data in the local storage to maintain the latest user changes.
- Dynamic Data Handling
  - [ ] Fetch and display only relevant tasks and days for the current month.
  - [ ] Handle cases where tasks may have different due dates within the month.
  - [ ] If the user clicks on a task that has been completed, remove the check mark. In other words, clicking toggles the
        checkmark
  - [ ] Click on task name to show additional detailed description in a popup

### Extras (Not Required)

- [ ] Add a filter to allow the user to list tasks scheduled for a particular day or week. Alternatively, allow the filter to scroll and/or highlight tasks that match the filter criteria
- [ ] Reset button to refresh from last saved copy in local storage
- [ ] Provide visual cues such as color changes or labels to indicate completed tasks for improved user experience.

### Aceptance Criteria

- [ ] The checklist initially loads data from the provided JSON structure.
- [ ] After the initial load, all checklist modifications and updates are stored in the local storage.
- [ ] Checkboxes are populated only for the specific date(s) indicated in the JSON data for each task's completion.
- [ ] Users experience uninterrupted functionality during and after the transition.
- [ ] Tasks marked as completed persist in the local storage.
- [ ] Clicking the "Save" button successfully updates the local storage with the latest task list state and progress.
- [ ] The "Save" button is positioned intuitively and visibly for easy access.

## About Chingu

If you aren’t yet a member of Chingu we invite you to join us. We help our
members transform what they’ve learned in courses & tutorials into the
practical experience employers need and want.
___

## Team Documents

You may find these helpful as you work together to organize your project.

- [Team Project Ideas](./docs/team_project_ideas.md)
- [Team Decision Log](./docs/team_decision_log.md)

Meeting Agenda templates (located in the `/docs` directory in this repo):

- Meeting - Voyage Kickoff --> ./docs/meeting-voyage_kickoff.docx
- Meeting - App Vision & Feature Planning --> ./docs/meeting-vision_and_feature_planning.docx
- Meeting - Sprint Retrospective, Review, and Planning --> ./docs/meeting-sprint_retrospective_review_and_planning.docx
- Meeting - Sprint Open Topic Session --> ./docs/meeting-sprint_open_topic_session.docx