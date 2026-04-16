# Business Intelligence Platform

A self-contained, zero-dependency business intelligence dashboard built with plain HTML, CSS, and JavaScript. Opens directly in any modern browser from the file system -- no server, no build step, no framework.

The platform combines project management tools (Gantt, Kanban, RACI, Workload) with sales analytics into a single-page application with an iframe-based navigation system for sub-pages.

---

## Files

### Application

| File                   | Purpose                                                              |
|------------------------|----------------------------------------------------------------------|
| `index.html`           | Main dashboard -- SPA shell with sidebar nav and three tabbed views  |
| `html/gantt.html`      | Gantt chart viewer with five zoom levels                             |
| `html/kanban.html`     | Kanban board with drag-and-drop columns                              |
| `html/raci.html`       | RACI responsibility matrix                                           |
| `html/workload.html`   | Workload swimlane timeline                                           |
| `html/sales.html`      | Full sales analytics with seven tabs                                 |
| `html/charts.html`     | Progress charts -- bar charts, donuts, stacked breakdowns            |

### Data

| File                       | Purpose                                                          |
|----------------------------|------------------------------------------------------------------|
| `data/data.js`             | Project task data -- 163 tasks embedded as a CSV string          |
| `data/data.csv`            | Reference copy of the task data in standard CSV format           |
| `data/sales_data.js`       | Sales data bundle -- transactions, reps, accounts, contacts      |
| `data/sales_data.csv`      | 6,200 sales transactions in standard CSV format                  |
| `data/sales_reps.csv`      | 10 sales representatives with quotas                             |
| `data/sales_accounts.csv`  | 60 customer accounts with industry and region data               |
| `data/sales_contacts.csv`  | 50 contacts with titles and contact info                         |

All `.js` data files are included for demonstration purposes so the application has something to render out of the box. Replace their contents with your own data to use the platform for real work.

---

## Quick Start

1. Replace the CSV content in `data/data.js` and `data/sales_data.js` with your own data, or use the included samples as-is.
2. Open `index.html` in a browser.

No HTTP server is required. The application runs entirely from the `file://` protocol. Data is loaded via `<script>` tags, which are not subject to browser CORS restrictions.

---

## Data Format

### Project Data

`data/data.js` exports a single global variable `window.__GANTT_CSV__` containing a CSV string inside a template literal. The first row must be the header. Supported columns:

| Column         | Required | Description                                                                              |
|----------------|----------|------------------------------------------------------------------------------------------|
| `Task`         | Yes      | Task name (also accepts `Name`, `Title`)                                                 |
| `Start`        | Yes      | Start date in `YYYY-MM-DD` format                                                        |
| `End`          | Yes      | End date in `YYYY-MM-DD` format                                                          |
| `Group`        | No       | Grouping label (also accepts `Category`, `Phase`). Defaults to "Ungrouped"               |
| `Assignee`     | No       | Person assigned (also accepts `Owner`, `Resource`)                                       |
| `Progress`     | No       | Completion percentage, 0-100                                                             |
| `Dependencies` | No       | Semicolon-separated list of predecessor task names (also accepts `Deps`, `Predecessors`) |
| `Color`        | No       | Hex color for the task bar. Auto-assigned by group if omitted                            |

Example row:

```
Core Framework Build,Development,Fiona,2024-11-18,2024-12-20,100,Dev Environment Setup,#F44336
```

### Sales Data

`data/sales_data.js` exports four global variables, each a CSV string inside a template literal:

| Variable                      | Source CSV                 | Description                                    |
|-------------------------------|----------------------------|------------------------------------------------|
| `window.__SALES_DATA_CSV__`   | `data/sales_data.csv`      | Transaction log -- dates, amounts, products    |
| `window.__SALES_REPS_CSV__`   | `data/sales_reps.csv`      | Rep roster -- roles, hire dates, quotas        |
| `window.__SALES_ACCOUNTS_CSV__` | `data/sales_accounts.csv` | Customer accounts -- industry, region, segment |
| `window.__SALES_CONTACTS_CSV__` | `data/sales_contacts.csv` | Contact directory -- names, titles, emails     |

#### Transaction columns

| Column           | Description                                             |
|------------------|---------------------------------------------------------|
| `Transaction ID` | Unique identifier                                       |
| `Date`           | Transaction date in `YYYY-MM-DD` format                 |
| `Account ID`     | Foreign key to accounts                                 |
| `Account Name`   | Customer name                                           |
| `Rep ID`         | Foreign key to reps                                     |
| `Rep Name`       | Sales representative                                    |
| `Rep Role`       | Role (Manager, Team Lead, etc.)                         |
| `Product`        | Product name                                            |
| `Product Code`   | Short product identifier                                |
| `Quantity`       | Units sold                                              |
| `Unit Price`     | Price per unit                                          |
| `Amount`         | Total transaction amount                                |
| `Status`         | Completed, Returned, Confirmed, Forecasted, or Pending  |
| `Is Future`      | `Yes` for forecast pipeline, `No` for historical        |

---

## Demo Datasets

### Project Data

163 tasks across 11 groups (Initiation, Requirements, Architecture, Design, Development, Testing, Data Migration, Training, Deployment, Post-Launch, Documentation), 8 assignees (Alice, Bob, Charlie, Diana, Edward, Fiona, George, Hannah), and a timeline spanning 2024 through 2026. Task dates are automatically shifted at load time so the project always appears partially complete relative to the current date.

### Sales Data

6,200 transactions spanning 2019 through 2026 across 10 sales reps, 60 accounts, 15 industrial product categories, and 50 contacts. Sales dates are also shifted at load time so the data always appears current. Includes both historical completed/returned transactions and future forecast/pending pipeline deals.

---

## Main Dashboard (index.html)

The main dashboard is a single-page application with a sidebar navigation and three content tabs.

### Sidebar Navigation

Clicking a nav item loads the corresponding sub-page in an iframe overlay with slide-in/slide-out transitions:

- **Home** -- Returns to the dashboard tabs.
- **Gantt Chart** -- `html/gantt.html`
- **Kanban Board** -- `html/kanban.html`
- **RACI Matrix** -- `html/raci.html`
- **Workload Swimlane** -- `html/workload.html`
- **Sales Analytics** -- `html/sales.html`

### Tab: Team Performance

- **Team KPI strip** -- Member count, team average progress ring, top performer ring, tasks done, overdue count.
- **Team Overview panel** -- Operations/Sales toggle switch. Operations view shows the top 8 team members as cards with progress rings, on-time rate, backlog percentage, next deadline, and group tags. Sales view shows the top 8 sales reps as cards with revenue, deal stats, rev share ring, YoY trend ring, and pipeline ring.
- **Sales KPI strip** -- Total revenue, YTD, last 30 days, average deal size, forecast pipeline, return rate, and top product.

### Tab: Sales Overview

- **KPI cards** -- Total revenue, YTD with YoY delta, average deal size, forecast revenue, return rate.
- **Monthly revenue trend** -- Bar chart showing revenue by month with year labels.
- **Deep link** -- Button to open the full Sales Analytics page.

### Tab: Schedule

- **Work week grid** -- 5-day calendar grid (Monday--Friday) with hourly time slots and task cards placed by schedule.
- **This Week's Tasks** -- List of active tasks for the current week sorted by end date, with progress bars and overdue indicators.

---

## Gantt Chart (html/gantt.html)

### Views

Five zoom levels, selectable from the toolbar:

- **Day** -- One column per day. Shows day-of-month numbers.
- **Week** -- One column per day at reduced width. Labels every Monday.
- **Month** -- One column per week. Header shows month and week-start dates.
- **Quarter** -- One column per month. Header shows quarters and month abbreviations.
- **Year** -- One column per quarter. Header shows years and quarter labels.

The timeline is trimmed to the bounds of the actual project data in every view.

### Filtering

The filter panel supports three dimensions:

- **Groups** -- Show or hide task groups.
- **Assignees** -- Show or hide tasks by assignee.
- **Dependencies** -- Show or hide tasks by dependency name.

Each section has All/None bulk toggles. A badge on the filter button indicates how many items are currently filtered out.

### Features

- **Search** -- Filters tasks in real time by name, group, or assignee.
- **Today line** -- A vertical red line marks the current date on the chart.
- **Today button** -- Scrolls the chart to center on the current date.
- **Collapse/Expand** -- Toggle button collapses or expands all task groups at once.
- **Drag and drop** -- Drop a `.csv` file onto the page to load different data at runtime.
- **Resizable panels** -- Drag the handle between the task list and chart to resize.
- **Weekend highlighting** -- In Day and Week views, weekend columns have a subtle background tint.
- **Grouped rows** -- Tasks are grouped by their `Group` field with collapsible section headers.
- **Color-coded bars** -- Each group gets a distinct bar color from a built-in palette, or uses the `Color` column if provided.
- **Scroll sync** -- The task list and chart body scroll vertically in lockstep.
- **Task detail panel** -- Click any task bar or row to view name, group, assignee, dates, duration, progress, and dependencies.

---

## Kanban Board (html/kanban.html)

Displays tasks as draggable cards organized into status columns: Not Started, In Progress, and Completed.

- **Drag and drop** -- Drag cards between columns to update task status.
- **Search** -- Filter cards in real time by name, group, or assignee.
- **Stats bar** -- Total tasks, completed, in progress, not started, overdue, and average progress.
- **Status indicators** -- Overdue cards get a red left border; due-soon cards get an orange left border.
- **Sub-grouping** -- Cards within each status column are sub-grouped by project group with headers.
- **Task detail panel** -- Click any card to view full task details.

---

## RACI Matrix (html/raci.html)

Displays a responsibility assignment matrix derived from the project task data. RACI roles are computed deterministically from task assignments and dependency chains:

- **R (Responsible)** -- The assigned person.
- **A (Accountable)** -- Assignee of the first dependency task.
- **C (Consulted)** -- Assignees of tasks in the same group.
- **I (Informed)** -- Assignees of other dependency tasks.

### Features

- **Grouped rows** -- Tasks are grouped by project group with collapsible section headers.
- **Search** -- Filter by task name.
- **Filtering** -- Filter by group or assignee.
- **Stats bar** -- Total tasks, team members, groups, responsibility coverage, and accountability coverage.
- **Legend** -- Color-coded R/A/C/I indicators.
- **Task detail panel** -- Click any row to view the full RACI breakdown for that task.

---

## Workload Swimlane (html/workload.html)

A horizontal timeline with one swimlane per team member showing task bars color-coded by group.

- **Month headers** -- Gridlines and month labels across the timeline.
- **Today line** -- Vertical red line marking the current date.
- **Stats bar** -- Total tasks, assignees, average progress, and date range.
- **Tooltips** -- Hover over any task bar to see name, dates, progress, and group.
- **Auto-scroll** -- Timeline scrolls to center on the current date on load.
- **Scroll sync** -- The name column and timeline scroll vertically in lockstep.

---

## Sales Analytics (html/sales.html)

A full sales analytics dashboard with seven tabs:

### Tab: Overview

- **KPI cards** -- Total revenue, YTD with YoY comparison, average deal size, forecast revenue, return rate.
- **Revenue trend chart** -- Bar chart of monthly revenue with year labels.

### Tab: Rep Performance

- **Rep cards** -- One card per sales rep showing total revenue, deal count, years active, quota attainment for the current year, and a monthly revenue sparkline.

### Tab: Products

- **Product breakdown** -- Revenue and deal count by product category.

### Tab: Accounts

- **Account table** -- Sortable table of accounts with revenue, deal count, and industry.

### Tab: Transactions

- **Transaction table** -- Full transaction log with search, sorting, and pagination.

### Tab: Team Board

- **10-week review** -- Top reps with weekly performance breakdown.

### Tab: Product Perf

- **52-week view** -- Monthly revenue by product with year-over-year comparison chart (current year area + prior year line).
- **KPI stats** -- Revenue YTD, top product, product count.

---

## Progress Charts (html/charts.html)

A grid of charts computed from the project task data, grouped by the selected dimension (Group or Assignee):

- **Summary KPIs** -- Total tasks, completed, in progress, not started, overdue, and average progress.
- **Average progress bars** -- Horizontal bar chart per group/assignee.
- **Status distribution donut** -- Donut chart showing completed vs. in progress vs. not started.
- **Task count bars** -- Bar chart of task count per group/assignee.
- **Overdue donut** -- Donut chart of overdue tasks by group/assignee (shown only when overdue tasks exist).
- **Completion breakdown** -- Stacked bar chart showing complete/in-progress/not-started per group/assignee.

---

## Theme

All pages share a light/dark mode toggle. The selection is persisted to `localStorage` and synced to iframe sub-pages when toggled from the main dashboard.

- **Dark mode** -- Navy blue palette.
- **Light mode** -- White and grey palette with blue accents.

---

## Browser Support

Tested in Chromium-based browsers (Chrome, Edge). Should work in Firefox and Safari. Requires ES6 support (template literals, Sets, arrow functions).

---

## Customization

### Modifying theme colors

Edit the CSS custom properties in the `:root` / `[data-theme="dark"]` and `[data-theme="light"]` blocks at the top of the `<style>` tag in any HTML file.

### Replacing project data

Replace the CSV content in `data/data.js` (set `window.__GANTT_CSV__`). All project management pages (Gantt, Kanban, RACI, Workload, Charts) and the Team Performance tab on the dashboard consume this data.

### Replacing sales data

Replace the CSV content in `data/sales_data.js` (set `window.__SALES_DATA_CSV__`, `window.__SALES_REPS_CSV__`, `window.__SALES_ACCOUNTS_CSV__`, `window.__SALES_CONTACTS_CSV__`). The Sales Analytics page and the Sales Overview and Team Performance tabs on the dashboard consume this data.

### Date shifting

Both project and sales datasets are automatically shifted at load time so data always appears current relative to today. To disable this, remove the date-shifting blocks near the top of each page's `<script>` tag.
