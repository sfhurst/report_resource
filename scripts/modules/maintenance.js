// 1. Define Maintenance Task Categories
// Each array contains objects with a task number and name, categorized by bridge components.
const alignmentMaintenanceTasks = [
  { number: 2, name: "Attenuator Repair" },
  { number: 14, name: "Signage Install / Signage Repair" },
];

const approachMaintenanceTasks = [{ number: 1, name: "Approach Repair" }];

const jointsMaintenanceTasks = [{ number: 13, name: "Joint Repair" }];

const railingsMaintenanceTasks = [
  { number: 2, name: "Attenuator Repair" },
  { number: 11, name: "Graffiti Removal" },
  { number: 12, name: "Guardrail / Barrier Wall Repair" },
];

const deckMaintenanceTasks = [
  { number: 6, name: "Concrete Crack Seal" },
  { number: 7, name: "Deck Cleaning and Flushing" },
  { number: 8, name: "Deck Patch" },
  { number: 9, name: "Drain Repair" },
];

const superMaintenanceTasks = [
  { number: 11, name: "Graffiti Removal" },
  { number: 14, name: "Signage Install / Signage Repair" },
  { number: 17, name: "Superstructure Cleaning and Flushing" },
  { number: 18, name: "Superstructure Repair" },
];

const bearingsMaintenanceTasks = [{ number: 3, name: "Bearing Repair" }];

const subMaintenanceTasks = [
  { number: 2, name: "Attenuator Repair" },
  { number: 11, name: "Graffiti Removal" },
  { number: 14, name: "Signage Install / Signage Repair" },
  { number: 15, name: "Substructure Cleaning and Flushing" },
  { number: 16, name: "Substructure Repair" },
];

const culvertMaintenanceTasks = [
  { number: 6, name: "Concrete Crack Seal" },
  { number: 18, name: "Superstructure Repair" },
  { number: 16, name: "Substructure Repair" },
];

const channelMaintenanceTasks = [
  { number: 4, name: "Brush Cutting / Herbicide Spray" },
  { number: 5, name: "Channel Debris Removal" },
  { number: 10, name: "Erosion Control / Riprap" },
];

// 2. Group Tasks with Associated Containers
// Each category is mapped to a container ID where the tasks will be displayed in the HTML.
const maintenanceTasks = [
  { tasks: alignmentMaintenanceTasks, containerID: "alignment-maintenance-container" },
  { tasks: approachMaintenanceTasks, containerID: "approach-maintenance-container" },
  { tasks: jointsMaintenanceTasks, containerID: "joints-maintenance-container" },
  { tasks: railingsMaintenanceTasks, containerID: "railings-maintenance-container" },
  { tasks: deckMaintenanceTasks, containerID: "deck-maintenance-container" },
  { tasks: superMaintenanceTasks, containerID: "super-maintenance-container" },
  { tasks: bearingsMaintenanceTasks, containerID: "bearings-maintenance-container" },
  { tasks: subMaintenanceTasks, containerID: "sub-maintenance-container" },
  { tasks: culvertMaintenanceTasks, containerID: "culvert-maintenance-container" },
  { tasks: channelMaintenanceTasks, containerID: "channel-maintenance-container" },
];

// 3. Generate Task Elements in the DOM
// Loops through each maintenance category and adds corresponding elements to the DOM.
maintenanceTasks.forEach(component => {
  const maintenancePageContainer = document.getElementById(component.containerID);

  component.tasks.forEach(task => {
    const taskPage = document.createElement("div"); // Component pages
    taskPage.className = "component-maintenance-container";

    // Add deficiency level buttons to each container
    for (let i = 1; i <= 4; i++) {
      // Create separate buttons for each container
      const buttonPage = document.createElement("button");
      buttonPage.className = `component-maintenance-button${i}`;
      buttonPage.textContent = "+";
      buttonPage.setAttribute("onclick", `addDeficiencyButtons(event)`);
      buttonPage.setAttribute("data-button-number", `Maintenance Item ${task.number}`);
      if (i == 1) {
        colorsuffix = "Grey";
      } else if (i == 2) {
        colorsuffix = "Green";
      } else if (i == 3) {
        colorsuffix = "Yellow";
      } else {
        colorsuffix = "Red"; // Default color is red if none of the above
      }
      buttonPage.setAttribute("data-button-category", `${colorsuffix}`);
      buttonPage.setAttribute("data-button-name", `${task.name}`);

      taskPage.appendChild(buttonPage); // Append to taskPage
    }

    // Add the element name to each container
    const itemPage = document.createElement("div");
    itemPage.className = "component-maintenance-item";
    itemPage.textContent = `${task.name}`;

    taskPage.appendChild(itemPage); // Append to taskPage

    // Append containers to their respective parents
    maintenancePageContainer.appendChild(taskPage);
  });
});

// 4. Define Repair Task List
// Creates a standardized list of repair task names with dynamically assigned numbers.
const repairTaskNames = [
  "Approach Repair",
  "Attenuator Repair",
  "Bearing Repair",
  "Brush Cutting / Herbicide Spray",
  "Channel Debris Removal",
  "Concrete Crack Seal",
  "Deck Cleaning and Flushing",
  "Deck Patch",
  "Drain Repair",
  "Erosion Control / Riprap",
  "Graffiti Removal",
  "Guardrail / Barrier Wall Repair",
  "Joint Repair",
  "Signage Install / Signage Repair",
  "Substructure Cleaning and Flushing",
  "Substructure Repair",
  "Superstructure Cleaning and Flushing",
  "Superstructure Repair",
];

// Assign numbers to repair tasks dynamically
const repairTasks = repairTaskNames.map((name, index) => ({
  number: index + 1, // Dynamically assign the number starting from 1
  name: name,
}));

// console.log(repairTasks);

// console.log(bridgeElements[9].elements[5].name)

// 5. Generate Repair Tasks in the DOM
const maintenanceContainter = document.getElementById("maintenance-container");

// Clear existing content
maintenanceContainter.innerHTML = "";

// Create and append header
const header = document.createElement("div");
header.className = "elements-segment-header";
header.textContent = "Maintenance Items (Grey = 13 months; Green = 6 months; Yellow = 3 months; Red = 1 month):";
maintenanceContainter.appendChild(header);

// Loop through each repair task and generate UI elements
repairTasks.forEach(repairItem => {
  const repairContainer = document.createElement("div");
  repairContainer.className = "component-maintenance-container";

  // Create deficiency buttons
  for (let i = 1; i <= 4; i++) {
    const button = document.createElement("button");
    button.id = `bridge-maintenance-bt${repairItem.number}-${i}`;
    button.className = `component-maintenance-button${i}`;
    button.textContent = "+";
    button.setAttribute("onclick", `addDeficiencyButtons(event, 'bridge-maintenance-bt${repairItem.number}-${i}')`);
    button.setAttribute("data-button-number", `Maintenance Item ${repairItem.number}`);
    if (i == 1) {
      colorsuffix = "Grey";
    } else if (i == 2) {
      colorsuffix = "Green";
    } else if (i == 3) {
      colorsuffix = "Yellow";
    } else {
      colorsuffix = "Red"; // Default color is red if none of the above
    }
    button.setAttribute("data-button-category", `${colorsuffix}`);
    button.setAttribute("data-button-name", `${repairItem.name}`);
    repairContainer.appendChild(button);
  }

  // Add repair task name
  const item = document.createElement("div");
  item.className = "component-maintenance-item";
  item.textContent = `${repairItem.name}`;
  repairContainer.appendChild(item);

  // Append to main container
  maintenanceContainter.appendChild(repairContainer);
});
