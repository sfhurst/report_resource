const dataDate = "03/21/2025"; // Date iTAMS data was output
document.querySelector(
  "#asset-updated"
).textContent = `These are populated when an asset number is searched. The asset data was last updated on ${dataDate}.`;
document.querySelector(
  "#user-local-storage"
).textContent = `User information is saved in the browser's local storage by completing the fields. Clear the browser cache to remove.`;

// Table of Contents
// :::: (HTML Injection)

// :::::: (Field Population)
// :::: (Populate Defect Glossary)
// :::: (Populate SNBI Glossary)
// :::: (Populate Culvert Glossary)
// :::: (Populate Wall Glossary)
// :::: (Populate Compound Word Glossary)
// :::: (Populate Full Glossary)
// :::: (Populate County Glossary)
// :::: (Populate Bridge Tab Glossaries)
// :::: (Populate Example Comments)
// :::: (Populate Review Textarea Comments)

// :::::: (Copy To Clipboard)
// :::: (Example Comment to Clipboard)
// :::: (Dbl-Clicked Textarea to Clipboard)

// :::: (Textarea Expansion)
// :::: (Automatically Type in Textareas)

// :::::: (Page Button Clicks)
// :::: (Display Pages on Button Click)
// :::: (Button Click Array of Classes)
// :::: (Button Classes Add Event Listeners)
// :::: (Active Button Clicked)

// :::: (Rating Table Clicks)
// :::: (Maintenance/Element Clicks)
// :::: (Summary Update)
// :::: (Local Storage)
// :::: (Glossary Search)
// :::: (Scroll To Top)
// :::: (Review Navigate)
// :::: (Review DblClick)
// :::: (Clipboard History)
// :::: (Tab Order)
// :::: (Arrow Buttons)
// :::: (Enter & Row Down)
// :::: (Type Rating)
// :::: (Rating Page Navigation)
// :::: (Rating Page Index)
// :::: (Arrow Message)
// :::: (0-9 Example Comments)
// :::: (Auto Correct)
// :::: (Quick TL#)
// :::: (Reset Tabs)
// :::: (Resize for Mobile)
// :::: (SPMS Link)
// :::: (Glossary Shortcut Ctrl + Shift + G)
// :::: (Settings Shortcut Ctrl + Shift + S)
// :::: (Bridge Shortcut Ctrl + Shift + B)
// :::: (Culvert Shortcut Ctrl + Shift + C)
// :::: (Retaining Wall Shortcut Ctrl + Shift + R)
// :::: (Backspace History)

// :::: (Console Logs)
// :::: (Error Log)
// :::: (Error Log Popups)
// :::: (Dev Component Mapping)
// :::: (Google Analytics)

// :::: (Not Sorted || Working)

// :::: (Theme Button) = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("theme-toggle");
  const logoImg = document.querySelector(".iterate-img");

  slider.addEventListener("click", () => {
    const html = document.documentElement;
    const current = html.getAttribute("data-theme");

    if (current === "blue") {
      html.setAttribute("data-theme", "white");
      logoImg.src = "./media/logo-rings-only-orange.png";
    } else {
      html.setAttribute("data-theme", "blue");
      logoImg.src = "./media/logo-rings-only-purple.png";
    }
  });
});

// :::: (Paint Year Link) = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", () => {
  const paintMain = document.getElementById("paint-main");
  const paintReview = document.getElementById("paint-review");

  if (paintMain && paintReview) {
    function syncPaintInputs(source, target) {
      target.value = source.value;
    }

    paintMain.addEventListener("input", () => syncPaintInputs(paintMain, paintReview));
    paintReview.addEventListener("input", () => syncPaintInputs(paintReview, paintMain));
  }
});

// = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// :::: (HTML Injection) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Helper function to safely insert HTML into a container
function setSafeHTML(container, unsafeHTML) {
  if (container) {
    // Sanitize the HTML to avoid XSS attacks
    const safeHTML = DOMPurify.sanitize(unsafeHTML);
    container.innerHTML = safeHTML;
    console.log("Sanitization complete and inserted.");
  } else {
    console.log("Container not found.");
  }
}

// :::::: (Field Population) //////////////////////////////////////////////////////////////////////////

// :::: (Populate Defect Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with defect definitions
function populateGlossaryDefects() {
  const container = document.querySelector("#glossary-defects-tab .glossary-numeric-ratings-container");

  // Loop through each defect definition and create a glossary card for each
  defectDefinitions.forEach((defect) => {
    // Create a container for each glossary card
    const card = document.createElement("div");
    card.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header = document.createElement("div");
    header.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link = document.createElement("a");
    let search = defect.search || `What is "${defect.term}" in ${defect.discipline}?`; // Search query
    link.classList.add("glossary-term-link");
    link.textContent = defect.term;
    // If defect.link exists, use it; otherwise, fall back to Google search
    link.href = defect.link || `https://www.google.com/search?q=${encodeURIComponent(search)}`;
    link.target = "_blank";

    // Append the link inside the header div
    header.appendChild(link);

    // Create a paragraph for the card with the defect definition
    const paragraph = document.createElement("p");
    paragraph.classList.add("glossary-card-paragraph");
    paragraph.textContent = defect.definition;

    // Append the header and paragraph to the card container
    card.appendChild(header);
    card.appendChild(paragraph);

    // Append the card to the glossary container
    container.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryDefects);

// :::: (Populate SNBI Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with bridge definitions
function populateGlossaryBridge() {
  const container2 = document.querySelector("#glossary-bridge-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  glossaryTerms.forEach((defect2) => {
    // Create the card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link2 = document.createElement("a");
    let search2 = defect2.search || `What is "${defect2.term}" in ${defect2.discipline}?`; // Search query
    link2.classList.add("glossary-term-link");
    link2.textContent = defect2.term;
    // If defect2.link exists, use it; otherwise, fall back to Google search
    link2.href = defect2.link || `https://www.google.com/search?q=${encodeURIComponent(search2)}`;
    link2.target = "_blank";

    // Append the link inside the header div
    header2.appendChild(link2);

    // Create the paragraph for the card with the defect definition
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("glossary-card-paragraph");
    paragraph2.textContent = defect2.definition;

    // Assemble the card elements
    card2.appendChild(header2);
    card2.appendChild(paragraph2);
    container2.appendChild(card2);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryBridge);

// :::: (Populate Culvert Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with culvert definitions
function populateGlossaryCulvert() {
  const container2 = document.querySelector("#glossary-culvert-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  culvertTerms.forEach((defect2) => {
    // Create the card container
    const card2 = document.createElement("div");
    card2.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header2 = document.createElement("div");
    header2.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link2 = document.createElement("a");
    let search2 = defect2.search || `What is "${defect2.term}" in ${defect2.discipline}?`; // Search query
    link2.classList.add("glossary-term-link");
    link2.textContent = defect2.term;
    // If defect2.link exists, use it; otherwise, fall back to Google search
    link2.href = defect2.link || `https://www.google.com/search?q=${encodeURIComponent(search2)}`;
    link2.target = "_blank";

    // Append the link inside the header div
    header2.appendChild(link2);

    // Create the paragraph for the card with the defect definition
    const paragraph2 = document.createElement("p");
    paragraph2.classList.add("glossary-card-paragraph");
    paragraph2.textContent = defect2.definition;

    // Assemble the card elements
    card2.appendChild(header2);
    card2.appendChild(paragraph2);
    container2.appendChild(card2);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryCulvert);

// :::: (Populate Wall Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with wall definitions
function populateGlossaryWall() {
  const container3 = document.querySelector("#glossary-wall-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  wallTerms.forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link3 = document.createElement("a");
    let search3 = defect3.search || `What is "${defect3.term}" in ${defect3.discipline}?`; // Search query
    link3.classList.add("glossary-term-link");
    link3.textContent = defect3.term;
    // If defect3.link exists, use it; otherwise, fall back to Google search
    link3.href = defect3.link || `https://www.google.com/search?q=${encodeURIComponent(search3)}`;
    link3.target = "_blank";

    // Append the link inside the header div
    header3.appendChild(link3);

    // Create the paragraph for the card with the defect definition
    const paragraph3 = document.createElement("p");
    paragraph3.classList.add("glossary-card-paragraph");
    paragraph3.textContent = defect3.definition;

    // Assemble the card elements
    card3.appendChild(header3);
    card3.appendChild(paragraph3);
    container3.appendChild(card3);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryWall);

// :::: (Populate Compound Word Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with compound word definitions
function populateGlossaryCompound() {
  const container3 = document.querySelector("#glossary-compounds-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  compoundTerms.forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link3 = document.createElement("a");
    let search3 = defect3.search || `What is "${defect3.term}" in ${defect3.discipline}?`; // Search query
    link3.classList.add("glossary-term-link");
    link3.textContent = defect3.term;
    // If defect3.link exists, use it; otherwise, fall back to Google search
    link3.href = defect3.link || `https://www.google.com/search?q=${encodeURIComponent(search3)}`;
    link3.target = "_blank";

    // Append the link inside the header div
    header3.appendChild(link3);

    // Create the paragraph for the card with the defect definition
    const paragraph3 = document.createElement("p");
    paragraph3.classList.add("glossary-card-paragraph");
    paragraph3.textContent = defect3.definition;

    // Assemble the card elements
    card3.appendChild(header3);
    card3.appendChild(paragraph3);
    container3.appendChild(card3);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryCompound);

// :::: (Populate Full Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with all definitions (Text Content Insertion)
function populateGlossaryAll() {
  const container3 = document.querySelector("#glossary-all-tab .glossary-numeric-ratings-container");

  // Loop through each glossary term and create a glossary card for each
  glossaryAllTerms.forEach((defect3) => {
    // Create the card container
    const card3 = document.createElement("div");
    card3.classList.add("glossary-content-cards");

    // Create the header for the card with the defect term
    const header3 = document.createElement("div");
    header3.classList.add("glossary-card-header");

    // Create the hidden link for the term
    const link3 = document.createElement("a");
    let search3 = defect3.search || `What is "${defect3.term}" in ${defect3.discipline}?`; // Search query
    link3.classList.add("glossary-term-link");

    // Special case for "iterate" to use styled HTML
    if (defect3.term.toLowerCase() === "iterate") {
      link3.innerHTML = '<span class="ite-text">ite<span class="rate-text">rate</span></span>';
    } else {
      link3.textContent = defect3.term;
    }

    // Add the data-term attribute for search purposes
    link3.setAttribute("data-term", defect3.term.toLowerCase()); // Add the data-term attribute here

    // If defect3.link exists, use it; otherwise, fall back to Google search
    link3.href = defect3.link || `https://www.google.com/search?q=${encodeURIComponent(search3)}`;
    link3.target = "_blank";

    // Append the link inside the header div
    header3.appendChild(link3);

    // Create the paragraph for the card with the defect definition
    const paragraph3 = document.createElement("p");
    paragraph3.classList.add("glossary-card-paragraph");
    paragraph3.textContent = defect3.definition;

    // Assemble the card elements
    card3.appendChild(header3);
    card3.appendChild(paragraph3);
    container3.appendChild(card3);
  });
}

document.addEventListener("DOMContentLoaded", populateGlossaryAll);

// :::: (Populate County Glossary) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary with counties
// This is still generated in the index.html and can be deleted.
// Function to populate the county glossary
function populateCountyGlossary() {
  const container = document.querySelector("#glossary-county-tab .glossary-card-paragraph");

  if (!container) {
    console.error("Glossary container not found.");
    return;
  }

  // Clear any existing content
  container.innerHTML = ""; // Not ideal, you can remove this if you prefer to create elements directly

  // Find the object with variable: "countyCode"
  const countyObject = bridgeData.find((obj) => obj.variable === "countyCode");

  // If found, populate with county data
  if (countyObject && Array.isArray(countyObject.values)) {
    countyObject.values.forEach(({ code, description }) => {
      // Create a div for each county item
      const countyItem = document.createElement("div");
      countyItem.classList.add("county-item");

      // Create a link element wrapping the county info
      const link = document.createElement("a");
      link.classList.add("glossary-term-link");
      link.href = `https://www.google.com/maps?q=${encodeURIComponent(description + " County, Indiana")}`;
      link.target = "_blank"; // Open in a new tab

      // Create a span for the code
      const codeSpan = document.createElement("span");
      codeSpan.classList.add("county-code");
      codeSpan.textContent = code;

      // Create a text node for " - "
      const dashText = document.createTextNode(" - ");

      // Create a span for the description
      const descriptionSpan = document.createElement("span");
      descriptionSpan.classList.add("county-description");
      descriptionSpan.textContent = description;

      // Append the code, dash, and description spans to the link
      link.appendChild(codeSpan);
      link.appendChild(dashText); // Append the dash text node
      link.appendChild(descriptionSpan);

      // Append the link to the county item
      countyItem.appendChild(link);

      // Append the county item to the container
      container.appendChild(countyItem);
    });
  } else {
    console.error("No matching object with 'variable: countyCode' found in bridgeData.");
  }
}

// Call the function once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", populateCountyGlossary);

// :::: (Populate Bridge Tab Glossaries) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate glossary tabs for bridge components

function buildGlossaries(bridgeComponents) {
  // Loop through each glossary_page_id in the bridgeComponents array
  bridgeComponents.forEach((component) => {
    const glossaryPageId = component.glossary_page_id;
    const glossaryItems = component.glossary || [];

    // Find the container for the corresponding page by id
    const container = document.getElementById(glossaryPageId);

    if (container) {
      // Clear the container before adding new content
      container.innerHTML = "";

      // Iterate over the glossary items and create a card for each
      glossaryItems.forEach((item) => {
        // Create the card container
        const card = document.createElement("div");
        card.classList.add("glossary-content-cards");

        // Create the header container for the card with the glossary term
        const header = document.createElement("div");
        header.classList.add("glossary-card-header");

        // Create the hidden link for the term
        const link = document.createElement("a");
        let search = item.search || `What is "${item.term}" in highway design?`;
        link.classList.add("glossary-term-link");
        link.textContent = item.term;
        link.href = `https://www.google.com/search?q=${encodeURIComponent(search)}`;
        link.target = "_blank";

        // Append the link inside the header div
        header.appendChild(link);

        // Create the paragraph for the card with the glossary definition
        const paragraph = document.createElement("p");
        paragraph.classList.add("glossary-card-paragraph");
        paragraph.textContent = item.definition;

        // Assemble the card elements
        card.appendChild(header);
        card.appendChild(paragraph);

        // Append the card to the container
        container.appendChild(card);
      });
    }
  });
}

buildGlossaries(bridgeComponents);

// :::: (Populate Example Comments) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate example comments for bridge components
function updateExampleComments() {
  bridgeComponents.forEach((component) => {
    const commentsContainer = document.getElementById(component.example_comments_page_id);

    if (commentsContainer && component.example_comments) {
      // Find or create the content container for comments
      let contentContainer = commentsContainer.querySelector(".content-container-paragraphs");
      if (!contentContainer) {
        contentContainer = document.createElement("div");
        contentContainer.classList.add("content-container-paragraphs");
        commentsContainer.appendChild(contentContainer);
      }

      // Clear existing content and add new comments
      contentContainer.innerHTML = "";

      // Iterate over each comment group
      component.example_comments.forEach((commentGroup) => {
        const randomComment = getRandomComment(commentGroup); // Get random comment from the group
        const p = document.createElement("p");
        p.classList.add("content-container-comment-lines");

        // Create the new class from the item_id with "p" prepended and periods removed
        const newClass = "p-" + component.item_id.replace(/\./g, "");

        // Add the new class to the p element
        p.classList.add(newClass);

        p.textContent = randomComment.trim();
        contentContainer.appendChild(p);
      });
    }
  });
}

// Function to get a random comment from an array of comments
function getRandomComment(commentGroup) {
  const randomIndex = Math.floor(Math.random() * commentGroup.length);
  return commentGroup[randomIndex];
}

document.addEventListener("DOMContentLoaded", updateExampleComments);

// :::: (Populate Review Textarea Comments) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Populate review div based on textarea comment
function handleTextareaChange(event) {
  const textarea = event.target; // Get the changed textarea element

  // Capture the data-category from the clicked textarea's data-category attribute
  const dataCategory = textarea.getAttribute("data-category");

  // Capture the value (contents) of the textarea
  const textareaContents = textarea.value;

  // Find the div with the matching data-category within #bridge-review-tab
  const reviewTab = document.getElementById("bridge-review-tab");
  const targetDiv = reviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

  if (targetDiv) {
    // Find the span with the class 'textarea-content-here' inside this div
    const textareaSpan = targetDiv.querySelector(".textarea-content-here");

    if (textareaSpan) {
      // Set the contents of the 'textarea-content-here' span to the value of the textarea
      textareaSpan.textContent = textareaContents;
    }
  } else {
    console.log("No matching div found for data-category:", dataCategory);
  }

  // Check if the changed textarea is from the "review" ID structure
  const isReviewTextarea = textarea.id.includes("-review");

  // Update the corresponding textarea without causing an endless loop
  if (isReviewTextarea) {
    const matchingTextareas = document.querySelectorAll(`[id^="${textarea.id.split("-")[0]}-textarea"]`);
    matchingTextareas.forEach((matchingTextarea) => {
      if (matchingTextarea !== textarea) {
        matchingTextarea.value = textareaContents;
      }
    });
  } else {
    // Update the corresponding review textarea without causing an endless loop
    const matchingReviewTextareas = document.querySelectorAll(`[id^="${textarea.id.split("-")[0]}-textarea-review"]`);
    matchingReviewTextareas.forEach((matchingReviewTextarea) => {
      if (matchingReviewTextarea !== textarea) {
        matchingReviewTextarea.value = textareaContents;
      }
    });
  }
}

// Add event listener to all textareas to detect when their value changes
document.querySelectorAll("textarea").forEach((textarea) => {
  textarea.addEventListener("input", handleTextareaChange);
});

// :::::: (Copy To Clipboard) //////////////////////////////////////////////////////////////////////////

// :::: (Example Comment to Clipboard) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Copy Example Comment Text to Clipboard
document.addEventListener("click", function (evt) {
  // Check if the clicked element is one of the comment lines to trigger the copy action
  if (evt.target.classList.contains("content-container-comment-lines")) {
    copyToClipboard(evt); // Call the copy function
  }
});

// Function to copy the inner text of the clicked element to the clipboard
function copyToClipboard(evt) {
  var textToCopy = evt.target.innerText.trim(); // Get text without HTML tags and spaces

  // Handle case where no text is found to copy
  if (!textToCopy) {
    console.error("No text found to copy!"); // Log error if no text exists
    return;
  }

  // Copy the text to clipboard with a space appended for formatting
  navigator.clipboard
    .writeText(textToCopy + " ")
    .then(() => {
      storeClipboardData(textToCopy + " "); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
    })
    .catch((err) => console.error("Error copying text:", err)); // Error handling
}

// Add Event Listener for Copying Text from Comment Lines to Clipboard
document.querySelectorAll(".content-container-comment-lines").forEach(function (element) {
  element.addEventListener("click", copyToClipboard); // Add click event listener to each comment line
});

// :::: (Dbl-Clicked Textarea to Clipboard) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Copy any dbl-clicked textarea Text to Clipboard
function copyTextarea(evt) {
  var textarea = evt.currentTarget; // Get the clicked textarea element
  var textToCopy = textarea.value; // Get the text content from the textarea

  // Use the Clipboard API to copy the content to the clipboard
  navigator.clipboard
    .writeText(textToCopy) // Copy the textarea content
    .then(() => {
      storeClipboardData(textToCopy); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
    })
    .catch(function (err) {
      console.error("Error copying text: ", err); // Log any errors that occur
    });
}

// Add event listener for double-click on all textareas with the class 'textarea-comments'
document.querySelectorAll(".textarea-comments").forEach(function (textarea) {
  textarea.addEventListener("dblclick", copyTextarea); // Trigger copyTextarea function on double-click
});

// :::: (Textarea Expansion) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Expand the textareas when pasted or typed in
function expandTextarea(event, componentName) {
  // Extract the unique part of the component name (e.g., BC01 from BC01-textarea)
  const baseId = componentName.split("-")[0];

  // Create the IDs for both textarea and review textarea
  const textareaId = `${baseId}-textarea`;
  const reviewTextareaId = `${baseId}-textarea-review`;

  // Use requestAnimationFrame to sync the update
  requestAnimationFrame(() => {
    // Get the elements for both textareas (if they exist)
    const textareaElem = document.getElementById(textareaId);
    const reviewTextareaElem = document.getElementById(reviewTextareaId);

    // Check if the textarea elements exist and update their replicated values
    if (textareaElem) {
      textareaElem.parentNode.dataset.replicatedValue = textareaElem.value;
    }
    if (reviewTextareaElem) {
      reviewTextareaElem.parentNode.dataset.replicatedValue = reviewTextareaElem.value;
    }
  });
}

// :::: (Automatically Type in Textareas) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Ignore if not a Shift + Letter keypress
  if (!event.shiftKey || event.key.length !== 1 || !/[A-Z]/.test(event.key)) {
    return;
  }

  // Step 1: Check if the unique bridge asset tab button is active
  const bridgeAssetTab = document.querySelector('button[data-target="bridge-asset-tab"]');
  if (!bridgeAssetTab || !bridgeAssetTab.classList.contains("active")) {
    // alert("Step 1: The bridge asset tab is not active.");
    return;
  }

  // Step 2: Find the active bridge component button in row 2
  const activeComponentButton = document.querySelector("button.bridge-component-buttons.active.row2");
  if (!activeComponentButton) {
    // alert("Step 2: No active bridge component button found.");
    return;
  }
  const componentTarget = activeComponentButton.dataset.target;

  // Step 3: Find the div by its ID (since data-target refers to an ID)
  const componentDiv = document.getElementById(componentTarget);
  if (!componentDiv) {
    // alert(`Step 3: No div found with id '${componentTarget}'.`);
    return;
  }

  // Find the active button inside this component div
  const activeSubButton = componentDiv.querySelector("button.active");
  if (!activeSubButton) {
    // alert("Step 3: No active button found within the component div.");
    return;
  }

  // Step 4: Determine if the active button is alt1 or alt2
  const textareas = componentDiv.querySelectorAll("textarea");
  if (textareas.length === 0) {
    // alert("Step 5: No textareas found in the component div.");
    return;
  }

  let targetTextarea;
  if (textareas.length === 1) {
    // If only one textarea, always use it
    targetTextarea = textareas[0];
  } else {
    // If two textareas, select based on alt1 or alt2 button class
    if (activeSubButton.classList.contains("alt1-buttons")) {
      targetTextarea = textareas[0];
    } else if (activeSubButton.classList.contains("alt2-buttons")) {
      targetTextarea = textareas[1];
    } else {
      // alert("Step 4: Active button is neither alt1-buttons nor alt2-buttons.");
      return;
    }
  }

  // Step 6: If no input fields are active, focus the appropriate textarea and append the letter
  if (!document.activeElement || (document.activeElement.tagName !== "TEXTAREA" && document.activeElement.tagName !== "INPUT")) {
    targetTextarea.focus();
    targetTextarea.setSelectionRange(targetTextarea.value.length, targetTextarea.value.length);
  }
});

// :::::: (Page Button Clicks) //////////////////////////////////////////////////////////////////////////

// :::: (Display Pages on Button Click) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Handles the display of content for each tab based on button clicks

// Flag to ensure the focus happens only on page startup
let isInitialLoad = true;

function openTab(evt) {
  var button = evt.currentTarget; // The clicked button
  var componentName = button.getAttribute("data-target");
  var containerClass = button.getAttribute("data-container-class");
  var buttonClass = button.getAttribute("data-button-class");

  // Scroll main element to the top on page change
  const mainSection = document.querySelector("main"); // Adjust selector if needed
  mainSection.scrollTo({ top: 0, left: 0, behavior: "auto" });

  // Hide all content containers of the same class
  var containers = document.getElementsByClassName(containerClass);
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.display = "none"; // Hide all containers
  }

  // Remove "active" class from all buttons in the same button class
  var buttons = document.getElementsByClassName(buttonClass);
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].className = buttons[i].className.replace(" active", ""); // Remove active class
  }

  // Show the selected tab's content and add "active" class to the clicked button
  document.getElementById(componentName).style.display = "block"; // Display the targeted container
  button.className += " active"; // Add active class to the clicked button

  // Update the URL hash (only for main tab)
  var hash = button.getAttribute("data-hash");
  updateURLHash(hash);

  // Focus on the active button if it's the initial page load
  if (isInitialLoad) {
    button.focus();
    isInitialLoad = false; // Set the flag to false after focusing once
  }
}

// Update the URL hash with just the main tab hash (no nested tab hash)
function updateURLHash(hash) {
  if (hash) {
    window.location.hash = hash; // Set the main tab hash
  }
}

// Event listener for the hashchange event to handle tab changes
window.addEventListener("hashchange", function () {
  var hash = window.location.hash.substring(1); // Get the current hash (without the "#")

  // Activate the correct tab based on the hash
  var button = document.querySelector(`[data-hash="${hash}"]`);
  if (button) {
    openTab({ currentTarget: button }); // Trigger the tab click based on the hash
  }
});

// On page load, open the tab corresponding to the current hash or default to the first tab
window.addEventListener("load", function () {
  var hash = window.location.hash.substring(1); // Get the current hash (without the "#")
  if (hash) {
    var button = document.querySelector(`[data-hash="${hash}"]`);
    if (button) {
      openTab({ currentTarget: button }); // Trigger the tab click based on the hash
    }
  } else {
    // If no hash in URL, trigger the first button click (default tab)
    document.querySelector(".asset-buttons.active").click();
  }
});

// Add event listeners to the header buttons (main tabs)
document.querySelectorAll(".asset-buttons").forEach(function (button) {
  button.addEventListener("click", openTab); // Add click event to trigger openTab
});

// :::: (Button Click Array of Classes) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Button Classes
var buttonClasses = [
  "asset-buttons",
  "bridge-component-buttons",
  "bridge-alignment-buttons",
  "bridge-approach-buttons",
  "bridge-joints-buttons",
  "bridge-railings-buttons",
  "bridge-deck-buttons",
  "bridge-super-buttons",
  "bridge-bearings-buttons",
  "bridge-sub-buttons",
  "bridge-culvert-buttons",
  "bridge-channel-buttons",
  "bridge-scour-buttons",
  "bridge-overtopping-buttons",
  "bridge-wildlife-buttons",
  "bridge-elements-buttons",
  "bridge-maintenance-buttons",
  "bridge-review-buttons",
  "element-item-buttons",
  "culvert-item-buttons",
  "wall-item-buttons",
  "misc-component-buttons",
  "glossary-item-buttons",
  "district-item-buttons",
  "review-item-buttons",
  "settings-item-buttons",
];

// :::: (Button Classes Add Event Listeners) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Loop Through Button Classes and Add Event Listeners
buttonClasses.forEach(function (buttonClass) {
  // For each button class, find buttons and add an event listener for tab opening
  document.querySelectorAll("." + buttonClass).forEach(function (button) {
    button.addEventListener("click", openTab); // Add click event to trigger openTab
  });
});

// :::: (Active Button Clicked) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Know the active tab
let activeTab = null;

// Function to Handle Clicks on Elements with a data-target Attribute
function handleTabClick(event) {
  // Get the data-target attribute of the clicked element
  const target = event.target.getAttribute("data-target");

  if (target) {
    // Store the data-target value when the button is clicked
    activeTab = target;

    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-ratings-tab") {
      document.getElementById("asset-updated").textContent =
        "The ratings and comments are generated by actions on the corresponding component pages.";
    }
    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-summary-tab") {
      document.getElementById(
        "asset-updated"
      ).textContent = `The summary is built automatically when an asset number is searched. The asset data was last updated on ${dataDate}.`;
    }
    // If "review-ratings-tab" is clicked, clear the asset-updated message
    if (target === "review-data-tab") {
      document.getElementById(
        "asset-updated"
      ).textContent = `These are populated when an asset number is searched. The asset data was last updated on ${dataDate}.`;
    }

    if (target === "settings-user-tab") {
      document.querySelector(
        "#user-local-storage"
      ).textContent = `User information is saved in the browser's local storage by completing the fields. Clear the browser cache to remove.`;
    }
    if (target === "settings-global-tab") {
      document.querySelector("#user-local-storage").textContent = `Global features are under development.`;
      // `Global settings are saved in the browser's local storage by completing the fields. Clear the browser cache to remove.`
    }
    if (target === "settings-guide-tab") {
      document.querySelector("#user-local-storage").textContent = `A general overview of site functionality.`;
    }

    // If two or more comment builders hold the active view on their tabs then select the correct one to be active
    const activeButtons = document.querySelectorAll(".bridge-approach-buttons.active, .bridge-deck-buttons.active");
    if (activeTab === "bridge-approach-tab") {
      currentTarget = "approach-pg6";
    }
    if (activeTab === "bridge-deck-tab") {
      if (activeButtons.length > 0) {
        activeButtons.forEach((button) => {
          if (button.dataset.target === "bridge-deck-pg9") {
            currentTarget = "deck-pg9";
          }
          if (button.dataset.target === "bridge-deck-pg10") {
            currentTarget = "deck-pg10";
          }
        });
      }
    }
  }
}

// Attach the event listener to the entire document to catch clicks on any data-target element
document.addEventListener("click", function (event) {
  // Check if the clicked element has a data-target attribute
  if (event.target.hasAttribute("data-target")) {
    handleTabClick(event);
  }
});

// :::: (Rating Table Clicks) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Rating table clicks
function handleHighlight(event) {
  // Find the parent container (section) of the clicked item
  const container = event.target.closest('[class*="containers"]');

  // Get all items within this container
  const items = container.querySelectorAll(".content-container-rating-lines");

  // Check if the clicked item is already highlighted
  const clickedItem = event.target.closest(".content-container-rating-lines");
  const isHighlighted = clickedItem.classList.contains("highlight");

  if (isHighlighted) {
    // If already highlighted, remove the highlight
    clickedItem.classList.remove("highlight");

    // Reset the numerical value in #bridge-review-tab to an empty string
    const dataCategory = clickedItem.getAttribute("data-category");
    const bridgeReviewTab = document.getElementById("bridge-review-tab");
    const matchingItem = bridgeReviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

    if (matchingItem) {
      const span = matchingItem.querySelector(".content-container-rating-numerical");
      if (span) {
        span.textContent = ""; // Reset the numerical value to an empty string
      }
    }

    // Reset the numerical value on the corresponding review button
    const reviewButton = document.getElementById(`${dataCategory}-button-review`);
    if (reviewButton) {
      reviewButton.textContent = "N"; // Reset button text or whatever default text you prefer
    }
  } else {
    // Remove the highlight from all items in this container
    items.forEach((item) => {
      item.classList.remove("highlight");
    });

    // Add highlight to the clicked item
    clickedItem.classList.add("highlight");

    // Capture the numerical value from the clicked item's .content-container-rating-numerical
    const numericalValue = clickedItem.querySelector(".content-container-rating-numerical").textContent.trim();

    // Capture the data-category from the clicked item's data-category attribute
    const dataCategory = clickedItem.getAttribute("data-category");

    updateObjectRatings(`${numericalValue}`, dataCategory);

    // Now, find the matching element inside #bridge-review-tab
    const bridgeReviewTab = document.getElementById("bridge-review-tab");

    // Search for the div with matching data-category under the bridge-review-tab
    const matchingItem = bridgeReviewTab.querySelector(`.content-container-rating-lines[data-category="${dataCategory}"]`);

    // If a match is found, update the span with the new numerical value
    if (matchingItem) {
      const span = matchingItem.querySelector(".content-container-rating-numerical");
      if (span) {
        span.textContent = numericalValue; // Update the numerical value
      } else {
        console.log("No span found for the matching data-category.");
      }
    } else {
      console.log("No matching data-category found in #bridge-review-tab.");
    }

    // Update the corresponding review button with the numerical value
    let newStr = dataCategory.replace(/\./g, ""); // Replaces all periods with an empty string
    const reviewButton = document.getElementById(`${newStr}-button-review`);
    if (reviewButton) {
      reviewButton.textContent = numericalValue; // Update button text with the numerical value

      const colorVar = `--rating-${numericalValue}`;
      const color = getComputedStyle(document.documentElement).getPropertyValue(colorVar);
      reviewButton.style.backgroundColor = color.trim();
    }
  }
}

// Add event listeners for each content line in all relevant containers
document.querySelectorAll(".content-container-rating-lines").forEach((item) => {
  item.addEventListener("click", handleHighlight);
});

// :::: (Maintenance/Element Clicks) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Determine what maintenance or element button is clicked
let maintenanceArray = []; // Global array to track active maintenance items

function addDeficiencyButtons(event) {
  const button = event.target;

  // Get shared attributes
  const buttonName = button.getAttribute("data-button-name");
  const buttonCategory = button.getAttribute("data-button-category");

  // Find all buttons that match the same task name and category
  const allMatchingButtons = document.querySelectorAll(`button[data-button-name="${buttonName}"][data-button-category="${buttonCategory}"]`);

  // Determine if we are activating or deactivating based on the clicked button
  const isActive = button.classList.contains("active-maintenance");

  // Toggle class for all matching buttons
  allMatchingButtons.forEach((btn) => {
    if (isActive) {
      btn.classList.remove("active-maintenance");
    } else {
      btn.classList.add("active-maintenance");
    }
  });

  // Action for maintenance tasks
  if (button.getAttribute("data-button-number").includes("Maintenance")) {
    // Add or remove task from global array
    if (isActive) {
      // If it's active, remove it from the array
      maintenanceArray = maintenanceArray.filter((task) => task.name !== buttonName || task.category !== buttonCategory);
    } else {
      // If it's not active, add it to the array
      maintenanceArray.push({ name: buttonName, category: buttonCategory });
    }

    const categoryOrder = ["Red", "Yellow", "Green", "Grey"];

    maintenanceArray.sort((a, b) => {
      return categoryOrder.indexOf(a.category) - categoryOrder.indexOf(b.category);
    });

    if (searchValue !== "") {
      const asset = assetData.find((item) => item["Asset Number"].toLowerCase() === searchValue.toLowerCase());
      if (asset) {
        displaySummary(asset); // Pass the whole asset object to the function
      } else {
        console.log("Asset not found.");
      }
    }
  }
}

// :::: (Summary Update) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Update summary when changing ratings
function updateObjectRatings(numericalValue, dataCategory) {
  if (searchValue !== "") {
    if (dataCategory === "B.C.01") {
      if (assetObject) {
        assetObject["(B.C.01) Deck Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.02") {
      if (assetObject) {
        assetObject["(B.C.02) Superstructure Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.03") {
      if (assetObject) {
        assetObject["(B.C.03) Substructure Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.04") {
      if (assetObject) {
        assetObject["(B.C.04) Culvert Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
    if (dataCategory === "B.C.01a") {
      if (assetObject) {
        assetObject["(B.C.01a) Wearing Surface Condition Rating"] = numericalValue;
        hideAllErrors();
        displaySummary(assetObject);
      }
    }
  }
  // add scour change
  // add freq change
}

// :::: (Local Storage)  // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to store user textareas to browser (Save on change)
function saveOnChange(event) {
  localStorage.setItem(event.target.id, event.target.value);
}

// Function to load saved values from localStorage
function loadSavedValues() {
  document.querySelectorAll("[id^='user-textarea']").forEach((textarea) => {
    let savedValue = localStorage.getItem(textarea.id);
    if (savedValue !== null) {
      textarea.value = savedValue;
    }
    textarea.addEventListener("input", saveOnChange); // Listen for any changes
  });
}

// Object to store predefined data based on the input
const data = {
  sh: {
    name: "Stephen Hurst",
    number: "317-509-6407",
    email: "shurst1@indot.in.gov",
    teamleader: "IN000422-2027",
  },
  mf: {
    name: "Matthew Ference",
    number: "317-452-5067",
    email: "mference@indot.in.gov",
    teamleader: "IN000237-2027",
  },
  jw: {
    name: "Jessica Waggoner",
    number: "812-530-6727",
    email: "jwaggoner1@indot.in.gov",
    teamleader: "IN000402-2029",
  },
  ce: {
    name: "Chris Everman",
    number: "812-345-8240",
    email: "ceverman@indot.in.gov",
    teamleader: "IN000114-2029",
  },
  // Add more key-value pairs as needed
};

// Load saved values on page load
window.addEventListener("load", loadSavedValues);

// Event listener for populating predefined data on Enter press
document.getElementById("user-textarea-name").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Prevent newline

    const inputValue = this.value.toLowerCase().trim();

    // Only populate and save if matching data is found
    if (data[inputValue]) {
      document.getElementById("user-textarea-name").value = data[inputValue].name;
      document.getElementById("user-textarea-number").value = data[inputValue].number;
      document.getElementById("user-textarea-email").value = data[inputValue].email;
      document.getElementById("user-textarea-teamleader").value = data[inputValue].teamleader;

      // Manually trigger save for the updated values in localStorage
      localStorage.setItem("user-textarea-name", data[inputValue].name);
      localStorage.setItem("user-textarea-number", data[inputValue].number);
      localStorage.setItem("user-textarea-email", data[inputValue].email);
      localStorage.setItem("user-textarea-teamleader", data[inputValue].teamleader);
    }
  }
});

// Handle double-click to copy text from textareas to clipboard
document.querySelectorAll("[id^='user-textarea']").forEach((textarea) => {
  textarea.addEventListener("dblclick", function () {
    navigator.clipboard.writeText(this.value).then(() => {
      storeClipboardData(this.value); // Store the copied text into clipboard history
      showCopiedMessage(); // Show the "Copied" message
    });
  });
});

// :::: (Glossary Search) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", function () {
  let searchTerm = "";
  let searchTimeout;
  let specialKeyTimeout;
  let specialKeyActive = false;

  document.addEventListener("keydown", function (event) {
    const glossaryTab = document.getElementById("glossary-tab");
    if (!glossaryTab || glossaryTab.style.display !== "block") {
      return;
    }

    // If Ctrl key is pressed, activate delay
    if (event.ctrlKey) {
      specialKeyActive = true;
      clearTimeout(specialKeyTimeout);
      specialKeyTimeout = setTimeout(() => {
        specialKeyActive = false;
      }, 1000); // 1-second delay after releasing Ctrl
      return;
    }

    // Prevent search while special key delay is active
    if (specialKeyActive) {
      return;
    }

    // Ignore non-character keys
    if (event.key.length > 1) {
      return;
    }

    // Append the typed character to the search term
    searchTerm += event.key.toLowerCase();

    // Reset search term if no keys are pressed within 1 second
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      searchTerm = "";
    }, 1000);

    // Filter the glossary terms based on the search term
    const matchedTerms = glossaryAllTerms.filter((termObj) => {
      return termObj.term.toLowerCase().startsWith(searchTerm);
    });

    // Scroll to the first matched term's parent div
    if (matchedTerms.length > 0) {
      const firstMatch = matchedTerms[0];
      const termElement = document.querySelector(`.glossary-term-link[data-term="${firstMatch.term.toLowerCase()}"]`);

      if (termElement) {
        const parentElement = termElement.closest(".glossary-card-header");
        if (parentElement) {
          parentElement.scrollIntoView({ behavior: "smooth", block: "start" });

          const link = parentElement.querySelector(".glossary-term-link");
          if (link) {
            link.focus({ preventScroll: true });
          }
        }
      }
    }
  });
});

// :::: (Scroll To Top) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", function () {
  document.addEventListener("keydown", function (event) {
    const mainSection = document.querySelector("main"); // Adjust selector if needed

    // Handle Home and End key scrolling
    if (event.key === "Home") {
      mainSection.scrollTo({ top: 0, left: 0, behavior: "auto" });
      const activeButton = document.querySelector(".asset-buttons.active");

      if (activeButton) {
        activeButton.focus(); // Focus on the active button
      }
    } else if (event.key === "End") {
      mainSection.scrollTo({ top: mainSection.scrollHeight, left: 0, behavior: "auto" });
    }
  });
});

// :::: (Review Navigate) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Go to the component's example comments tab
document.querySelectorAll(".paragraph-navigate").forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      const targetNavigate = paragraph.dataset.navigate;
      const targetComments = paragraph.dataset.comments;

      const navigateButton = document.querySelector(`button[data-navigate="${targetNavigate}"]`);
      const commentsButton = document.querySelector(`button[data-target="${targetComments}"]`);

      if (navigateButton) {
        navigateButton.click();
        navigateButton.focus();
      }

      if (commentsButton) {
        commentsButton.click();
        commentsButton.focus();
      }
    }
  });
});

// Go to the component's rating table tab
document.querySelectorAll(".rating-button").forEach((paragraph) => {
  paragraph.addEventListener("click", () => {
    if (window.innerWidth > 768) {
      const targetNavigate = paragraph.dataset.navigate;
      const targetRating = paragraph.dataset.rating;

      const navigateButton = document.querySelector(`button[data-navigate="${targetNavigate}"]`);
      const ratingButton = document.querySelector(`button[data-target="${targetRating}"]`);

      if (navigateButton) {
        navigateButton.click();
        navigateButton.focus();
      }

      if (ratingButton) {
        ratingButton.click();
        ratingButton.focus();
      }
    }
  });
});

document.addEventListener("keydown", (event) => {
  // Check if Ctrl + Shift + E is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "E") {
    const activeTextarea = document.activeElement;

    // Step 1: Check if the active element is a textarea
    if (activeTextarea && activeTextarea.tagName === "TEXTAREA") {
      // Step 2: Retrieve the data-navigate and data-comments attributes from the active textarea
      const dataNavigate = activeTextarea.dataset.navigate;
      const dataComments = activeTextarea.dataset.comments;

      // Step 3: Trigger the same functionality as the paragraph click event
      if (window.innerWidth > 768) {
        // Step 4: Find the button with the matching data-navigate and simulate a click
        const navigateButton = document.querySelector(`button[data-navigate="${dataNavigate}"]`);
        if (navigateButton) {
          navigateButton.click(); // Simulate click on the navigate button
          navigateButton.focus(); // Set focus after click
        }

        // Step 5: Find the button with the matching data-target (matching data-comments) and simulate a click
        const commentsButton = document.querySelector(`button[data-target="${dataComments}"]`);
        if (commentsButton) {
          commentsButton.click(); // Simulate click on the comments button
          commentsButton.focus(); // Set focus on the comments button
        }
      }
    }
  }
});

// :::: (Review DblClick) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Handle double-click to copy text from textareas with id = something-textarea-review to clipboard
document.querySelectorAll("[id$='-textarea-review']").forEach((textarea) => {
  textarea.addEventListener("dblclick", function () {
    // Find the parent div with class "content-container-rating-lines"
    const parentDiv = this.closest(".main-content-containers");

    if (parentDiv) {
      // Add the 'highlighted' class to change the background color
      parentDiv.classList.add("review-textarea-highlighted");
    }

    // Copy text to clipboard
    navigator.clipboard
      .writeText(this.value)
      .then(() => {
        storeClipboardData(this.value); // Store the copied text into clipboard history
        showCopiedMessage(); // Show the "Copied" message
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  });
});

// :::: (Clipboard History) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Ctrl+Shift+Z

// Array to store clipboard history
let clipboardHistory = [];
let redoHistory = []; // To store redo actions

// Limit to how many clipboard items to keep (optional)
const maxHistory = 100;

function storeClipboardData(data) {
  if (clipboardHistory.length >= maxHistory) {
    clipboardHistory.shift();
  }
  clipboardHistory.push(data);
  redoHistory = [];

  saveClipboardHistory(); // Save to sessionStorage
}

// Function to show a custom "Copied" message
function showCopiedMessage() {
  // Remove any existing message before showing a new one
  const existingCopiedMessage = document.querySelector(".copied-message");
  if (existingCopiedMessage) {
    existingCopiedMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingClipboardMessage = document.querySelector(".clipboard-message");
  if (existingClipboardMessage) {
    existingClipboardMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingArrowMessage = document.querySelector(".arrow-message");
  if (existingArrowMessage) {
    existingArrowMessage.remove();
  }

  const copiedMessage = document.createElement("div");
  copiedMessage.classList.add("copied-message"); // Add a class to target this specific message

  // Style the message container to use flexbox
  copiedMessage.style.display = "flex"; // Use flexbox to align items horizontally
  copiedMessage.style.alignItems = "center"; // Vertically align items in the center
  copiedMessage.style.position = "fixed";
  copiedMessage.style.top = "15px";
  copiedMessage.style.left = "50%";
  copiedMessage.style.transform = "translateX(-50%)";
  copiedMessage.style.borderRadius = "8px"; // Rounded corners for the container
  copiedMessage.style.fontSize = "14px"; // Font size
  copiedMessage.style.maxWidth = "80%"; // Max width of the message block
  copiedMessage.style.wordWrap = "break-word"; // Ensure long lines of text wrap correctly
  copiedMessage.style.zIndex = "9999"; // Ensure it appears above other content

  // Create the "Copied:" part with different background
  const copiedPart = document.createElement("div");
  copiedPart.textContent = "Copied!";
  copiedPart.style.backgroundColor = "rgba(67, 84, 167, 0.9)"; // Blue background for "Copied"
  copiedPart.style.backgroundColor = "rgba(75, 84, 128, 0.9)"; // Blue background for "Copied"
  copiedPart.style.color = "#fff"; // White text color
  copiedPart.style.padding = "6px 10px"; // Reduced padding for the "Copied:" part
  // copiedPart.style.fontWeight = "bold"; // Bold text for "Copied:"
  copiedPart.style.marginRight = "8px"; // Space between "Copied:" and the next text
  copiedPart.style.borderRadius = "4px"; // Rounded corners for the "Copied:" part

  // Create the part with instructions (Ctrl+Shift+Z and Ctrl+Shift+Y)
  const instructionsPart = document.createElement("div");
  instructionsPart.textContent = "Press Ctrl+Shift+Z to undo and Ctrl+Shift+Y to redo.";
  instructionsPart.style.backgroundColor = "#333"; // Dark background for instructions
  instructionsPart.style.color = "#fff"; // White text color
  instructionsPart.style.padding = "6px 10px"; // Reduced padding for instructions
  instructionsPart.style.flexGrow = "1"; // Allow content to take remaining space if needed
  instructionsPart.style.borderRadius = "4px"; // Rounded corners for the instructions part

  // Append the "Copied:" part and the instructions to the message container
  copiedMessage.appendChild(copiedPart);
  copiedMessage.appendChild(instructionsPart);

  // Append the whole message container to the body
  document.body.appendChild(copiedMessage);

  // Remove the message after 2 seconds
  setTimeout(() => {
    copiedMessage.remove();
  }, 3000);
}

// Function to show the current clipboard value (used for Undo/Redo)
function showCurrentClipboardValue(value) {
  // Remove any existing message before showing a new one
  const existingCopiedMessage = document.querySelector(".copied-message");
  if (existingCopiedMessage) {
    existingCopiedMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingClipboardMessage = document.querySelector(".clipboard-message");
  if (existingClipboardMessage) {
    existingClipboardMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingArrowMessage = document.querySelector(".arrow-message");
  if (existingArrowMessage) {
    existingArrowMessage.remove();
  }

  // Create the message container
  const currentMessage = document.createElement("div");
  currentMessage.classList.add("clipboard-message"); // Add a class to target this specific message

  // Style the message container to use flexbox
  currentMessage.style.display = "flex"; // Use flexbox to align items horizontally
  currentMessage.style.alignItems = "center"; // Vertically align items in the center
  currentMessage.style.position = "fixed";
  currentMessage.style.top = "15px";
  currentMessage.style.left = "50%";
  currentMessage.style.transform = "translateX(-50%)";
  currentMessage.style.borderRadius = "8px"; // Rounded corners for the message container
  currentMessage.style.fontSize = "14px"; // Font size
  currentMessage.style.maxWidth = "80%"; // Max width of the message block
  currentMessage.style.wordWrap = "break-word"; // Ensure long lines of text wrap correctly
  currentMessage.style.zIndex = "9999"; // Ensure it appears above other content

  // Create a div for the "Clipboard Contents:" part with different background
  const titlePart = document.createElement("div");
  titlePart.textContent = "Clipboard Contents:";
  titlePart.style.padding = "6px 10px"; // Increased padding for better spacing
  // titlePart.style.fontWeight = "bold"; // Bold text for the title
  titlePart.style.marginRight = "8px"; // Space between the title and content
  titlePart.style.borderRadius = "4px"; // Rounded corners for the title
  titlePart.style.backgroundColor = "rgba(45, 91, 47, 0.9)"; // Green background for the title
  titlePart.style.color = "#fff"; // White text color

  // Create a div for the clipboard content itself (rest of the message)
  const contentPart = document.createElement("div");
  contentPart.textContent = value.slice(0, 100); // Show more of the text (100 characters)
  contentPart.style.padding = "6px 10px"; // Increased padding for better spacing
  contentPart.style.flexGrow = "1"; // Allow content to take remaining space if needed
  contentPart.style.borderRadius = "4px"; // Rounded corners for the content part
  contentPart.style.backgroundColor = "#333"; // Dark background for content part
  contentPart.style.color = "#fff"; // White text color

  // Append the title and content to the message container
  currentMessage.appendChild(titlePart);
  currentMessage.appendChild(contentPart);

  // Append the whole message container to the body
  document.body.appendChild(currentMessage);

  // Remove the message after 5 seconds
  setTimeout(() => {
    currentMessage.remove();
  }, 5000);
}

// Handle double-click to copy text from textareas to clipboard
document.querySelectorAll("[id$='-textarea-review']").forEach((textarea) => {
  textarea.addEventListener("dblclick", function () {
    const value = this.value;
    navigator.clipboard
      .writeText(value)
      .then(() => {
        storeClipboardData(value); // Store the copied text into clipboard history
        showCopiedMessage(); // Show the "Copied" message
      })
      .catch((err) => {
        console.error("Error copying text:", err);
      });
  });
});

// Modify undo function to never remove the last item
// Handle keyboard shortcut (Ctrl + Shift + Z) to restore previous clipboard content
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "Z") {
    event.preventDefault(); // Prevent the default browser undo/redo action

    if (clipboardHistory.length > 1) {
      // Ensure at least one item remains
      const removed = clipboardHistory.pop(); // Remove most recent copy
      redoHistory.push(removed); // Save for redo
      const previousClipboard = clipboardHistory[clipboardHistory.length - 1];
      navigator.clipboard
        .writeText(previousClipboard)
        .then(() => {
          showCurrentClipboardValue(previousClipboard); // Show current clipboard value (Undo)
        })
        .catch((err) => {
          console.error("Error restoring clipboard value:", err);
        });
    } else {
      console.log("Clipboard history cannot be emptied.");
    }
  }
});

// Handle keyboard shortcut (Ctrl + Shift + Y) to redo clipboard content
document.addEventListener("keydown", (event) => {
  if (event.ctrlKey && event.shiftKey && event.key === "Y") {
    event.preventDefault(); // Prevent the default browser redo action

    if (redoHistory.length > 0) {
      const redoValue = redoHistory.pop(); // Get the next clipboard value to redo
      clipboardHistory.push(redoValue); // Push to history again
      navigator.clipboard
        .writeText(redoValue)
        .then(() => {
          showCurrentClipboardValue(redoValue); // Show current clipboard value (Redo)
        })
        .catch((err) => {
          console.error("Error redoing clipboard value:", err);
        });
    } else {
      console.log("No redo clipboard history.");
    }
  }
});

// Capture manual copy events (Ctrl+C, right-click copy) inside the page
document.addEventListener("copy", (event) => {
  let copiedText = "";

  const activeEl = document.activeElement;
  if (activeEl && (activeEl.tagName === "TEXTAREA" || activeEl.tagName === "INPUT")) {
    copiedText = activeEl.value.substring(activeEl.selectionStart, activeEl.selectionEnd);
  } else {
    copiedText = window.getSelection().toString();
  }

  if (copiedText) {
    storeClipboardData(copiedText);
    showCopiedMessage(); // Show "Copied" message for manual copy
    console.log("Captured copy:", copiedText);
  }
});

// Function to save clipboard history to sessionStorage
function saveClipboardHistory() {
  sessionStorage.setItem("clipboardHistory", JSON.stringify(clipboardHistory));
  sessionStorage.setItem("redoHistory", JSON.stringify(redoHistory));
}

// Function to load clipboard history from sessionStorage
function loadClipboardHistory() {
  const storedClipboard = sessionStorage.getItem("clipboardHistory");
  const storedRedo = sessionStorage.getItem("redoHistory");

  if (storedClipboard) {
    clipboardHistory = JSON.parse(storedClipboard);
  }
  if (storedRedo) {
    redoHistory = JSON.parse(storedRedo);
  }
}

// Call loadClipboardHistory on page load
loadClipboardHistory();

// :::: (Tab Order) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Disable tabbing globally by setting tabindex="-1" for all elements
document.querySelectorAll("div:not(.divRow)").forEach((element) => {
  element.setAttribute("tabindex", "-1");
});

// Function to enable tabbing on specific elements
function enableTabbing(elementId, tabindexValue) {
  const element = document.getElementById(elementId);
  if (element) {
    element.setAttribute("tabindex", tabindexValue);
  }
}

// Enable tabbing for specific elements
// enableTabbing('tab2', 1);   // Enable tabbing for Tab 2
// enableTabbing('input2', 2);  // Enable tabbing for Input 2
// enableTabbing('button1', 3); // Enable tabbing for Button 1

// :::: (Arrow Buttons) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

const toggleFocusActivation = "activate"; // Set to "focus" or "activate"

// Track the number of times the Control key is pressed // :::: (Ctrl, Ctrl) //
let ctrlPresses = 0;
let lastCtrlPressTime = 0;
let toggleArrow = "navigation";

// Event listener for keydown events
window.addEventListener("keydown", function (event) {
  if (event.key !== "Control") return;

  const currentTime = Date.now();
  if (currentTime - lastCtrlPressTime > 300) ctrlPresses = 0;

  lastCtrlPressTime = currentTime;
  ctrlPresses++;

  if (ctrlPresses === 2) {
    if (toggleArrow === "navigation") {
      toggleArrow = "default";
    } else {
      toggleArrow = "navigation";
    }
    ctrlPresses = 0; // Reset counter
    showArrowMessage(toggleArrow);
  }
});

function handleElementAction(element) {
  if (element.tagName.toLowerCase() === "a") return; // Skip activation for links
  if (element.id === "button-map-link") return; // Skip activation if the ID is "button-map-link"
  if (element.id === "searchID") return; // Skip activation if the ID is "searchID"
  if ("rating" in element.dataset) return; // Skip activation if the data attribute is rating

  if (toggleFocusActivation === "focus") {
    element.focus();
    if (element.tagName.toLowerCase() === "textarea") {
      element.selectionStart = element.value.length;
      element.selectionEnd = element.value.length;
    }
  } else if (toggleFocusActivation === "activate") {
    element.click();
  }
}

function getVisibleElements(rowClass) {
  return Array.from(document.querySelectorAll(`.${rowClass}`)).filter((el) => el.offsetParent !== null);
}

function getAllRowClasses() {
  const allElements = document.querySelectorAll("[class*='row']");
  const rowClasses = new Set();

  allElements.forEach((el) => {
    if (el.offsetParent !== null) {
      el.classList.forEach((cls) => {
        if (cls.startsWith("row")) {
          rowClasses.add(cls);
        }
      });
    }
  });

  return Array.from(rowClasses).sort((a, b) => {
    const numA = parseInt(a.replace("row", ""));
    const numB = parseInt(b.replace("row", ""));
    return numA - numB;
  });
}

window.addEventListener("keydown", function (event) {
  let activeElement = document.activeElement;
  let rowClass = Array.from(activeElement.classList).find((cls) => cls.startsWith("row"));
  if (!rowClass) return;

  const elements = getVisibleElements(rowClass);
  const index = elements.indexOf(activeElement);
  const allRows = getAllRowClasses();
  const rowIndex = allRows.indexOf(rowClass);

  if (event.code === "ArrowRight") {
    let activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const textarea = activeElement;
      const cursorPosition = textarea.selectionEnd;

      // If the cursor is at the end of the textarea, proceed with normal behavior
      if (cursorPosition === textarea.value.length) {
        const nextIndex = (index + 1) % elements.length;
        elements[nextIndex].focus();
        handleElementAction(elements[nextIndex]);
        event.preventDefault();
      } else {
        // If the cursor is not at the end, allow the natural behavior (move cursor right)
        if (textarea.selectionEnd === textarea.value.length) {
          textarea.selectionStart = 0; // Set cursor to the start
        }
      }
    } else {
      // Normal behavior if not in a textarea
      const nextIndex = (index + 1) % elements.length;
      elements[nextIndex].focus();
      handleElementAction(elements[nextIndex]);
      event.preventDefault();
    }
  }

  if (event.code === "ArrowLeft") {
    let activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const textarea = activeElement;
      const cursorPosition = textarea.selectionStart;

      // If the cursor is at the beginning of the textarea, proceed with normal behavior
      if (cursorPosition === 0) {
        const nextIndex = (index - 1 + elements.length) % elements.length;
        elements[nextIndex].focus();
        handleElementAction(elements[nextIndex]);
        event.preventDefault();
      } else {
        // If the cursor is not at the beginning, allow the natural behavior (move cursor left)
        if (textarea.selectionStart === 0) {
          textarea.selectionEnd = textarea.value.length; // Set cursor to the end
        }
      }
    } else {
      // Normal behavior if not in a textarea
      const nextIndex = (index - 1 + elements.length) % elements.length;
      elements[nextIndex].focus();
      handleElementAction(elements[nextIndex]);
      event.preventDefault();
    }
  }

  if (event.code === "ArrowDown" && toggleArrow !== "default") {
    const activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const cursorPosition = activeElement.selectionStart; // Get the cursor position
      const textLength = activeElement.value.length; // Get the text length

      // If the cursor is at the end, check if it's the last row and jump to the first row
      if (cursorPosition === textLength) {
        if (rowIndex === allRows.length - 1) {
          // It's the last row, so focus the first element in Row1
          const firstRow = getVisibleElements(allRows[0]);
          if (firstRow.length) {
            firstRow[0].focus();
            handleElementAction(firstRow[0]);
          }
        } else {
          // Move focus to the first element in the next row
          const nextRowIndex = (rowIndex + 1) % allRows.length;
          const nextRow = getVisibleElements(allRows[nextRowIndex]);

          if (nextRow.length) {
            // Check if there's an active button in the next row
            const activeButton = nextRow.find((el) => el.tagName.toLowerCase() === "button" && el.classList.contains("active"));
            if (activeButton) {
              activeButton.focus(); // Focus the active button
              handleElementAction(activeButton);
            } else {
              nextRow[0].focus(); // If no active button, focus the first visible element
              handleElementAction(nextRow[0]);
            }
          }
        }
        event.preventDefault();
      }
      // If the cursor is not at the end, allow natural ArrowDown behavior
      else {
        return; // Let the browser handle the default behavior
      }
    } else {
      // Normal behavior for non-textarea elements
      const nextRowIndex = (rowIndex + 1) % allRows.length;
      const nextRow = getVisibleElements(allRows[nextRowIndex]);

      if (nextRow.length) {
        // Check if there's an active button in the next row
        const activeButton = nextRow.find((el) => el.tagName.toLowerCase() === "button" && el.classList.contains("active"));
        if (activeButton) {
          activeButton.focus(); // Focus the active button
          handleElementAction(activeButton);
        } else {
          nextRow[0].focus(); // If no active button, focus the first visible element
          handleElementAction(nextRow[0]);
        }
      }
      event.preventDefault();
    }
  }

  if (event.code === "ArrowUp" && toggleArrow !== "default") {
    let activeElement = document.activeElement;

    // Check if the active element is a textarea
    if (activeElement.tagName.toLowerCase() === "textarea") {
      const textarea = activeElement;
      const cursorPosition = textarea.selectionStart;

      // If the cursor is at the beginning of the textarea, proceed with normal behavior
      if (cursorPosition === 0) {
        const nextRowIndex = (rowIndex - 1 + allRows.length) % allRows.length;
        const nextRow = getVisibleElements(allRows[nextRowIndex]);
        if (nextRow.length) {
          nextRow[0].focus(); // Focus the first visible element in the previous row
          handleElementAction(nextRow[0]);
        }
        event.preventDefault();
      }
    } else {
      // Normal behavior if not in a textarea
      const nextRowIndex = (rowIndex - 1 + allRows.length) % allRows.length;
      const nextRow = getVisibleElements(allRows[nextRowIndex]);
      if (nextRow.length) {
        // Check if there's an active button in the previous row
        const activeButton = nextRow.find((el) => el.tagName.toLowerCase() === "button" && el.classList.contains("active"));
        if (activeButton) {
          activeButton.focus(); // Focus the active button
          handleElementAction(activeButton);
        } else {
          nextRow[0].focus(); // If no active button, focus the first visible element
          handleElementAction(nextRow[0]);
        }
      }
      event.preventDefault();
    }
  }
});

// :::: (Enter & Row Down) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

window.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    setTimeout(() => {
      // Get the event target (the button that was just activated)
      const targetButton = document.activeElement;

      // Check if the target button has both required classes
      if (targetButton.classList.contains("row2") && targetButton.classList.contains("bridge-component-buttons")) {
        // Trigger a simulated "ArrowDown" key event
        const arrowDownEvent = new KeyboardEvent("keydown", {
          key: "ArrowDown",
          code: "ArrowDown",
          keyCode: 40,
          which: 40,
          bubbles: true,
        });
        document.dispatchEvent(arrowDownEvent);
      }
    }, 10); // Small delay to allow default Enter action to complete
  }
});

// :::: (Type Rating) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

window.addEventListener("keydown", function (event) {
  // Ignore if typing in input or textarea
  if (["INPUT", "TEXTAREA"].includes(event.target.tagName)) return;

  const key = event.key.toUpperCase();

  // Allowed keys: 0-9 and specific letters
  if (!/^[0-9ABCDEFGNPUY]$/.test(key)) return;

  // List of possible visible container IDs
  const containerIds = [
    "bridge-alignment-pg2",
    "bridge-approach-pg2",
    "bridge-joints-pg2",
    "bridge-joints-pg5",
    "bridge-railings-pg2",
    "bridge-railings-pg5",
    "bridge-deck-pg2",
    "bridge-deck-pg5",
    "bridge-super-pg2",
    "bridge-super-pg5",
    "bridge-bearings-pg2",
    "bridge-sub-pg2",
    "bridge-sub-pg5",
    "bridge-culvert-pg2",
    "bridge-channel-pg2",
    "bridge-channel-pg5",
    "bridge-scour-pg2",
    "bridge-scour-pg5",
    "bridge-overtopping-pg2",
    "bridge-wildlife-pg2",
    "bridge-wildlife-pg4",
  ];

  // Find the currently visible container
  const activeContainer = containerIds.map((id) => document.getElementById(id)).find((el) => el && el.offsetParent !== null);

  if (!activeContainer) return; // No visible container

  // Find the rating line matching the key
  const targetLine = Array.from(activeContainer.querySelectorAll(".content-container-rating-lines")).find((line) => {
    const span = line.querySelector(".content-container-rating-numerical");
    return span && span.textContent.trim().toUpperCase() === key;
  });

  if (targetLine) {
    handleHighlight({ target: targetLine });
    event.preventDefault();
  }
});

// :::: (Rating Page Navigation) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Define the navigation sequence as an array of button data-targets
const navigationMap = [
  ["bridge-asset-tab", "bridge-alignment-tab", "bridge-alignment-pg2"], // Index 0
  ["bridge-asset-tab", "bridge-approach-tab", "bridge-approach-pg2"], // Index 1
  ["bridge-asset-tab", "bridge-joints-tab", "bridge-joints-pg2"], // Index 2
  ["bridge-asset-tab", "bridge-joints-tab", "bridge-joints-pg5"], // Index 3
  ["bridge-asset-tab", "bridge-railings-tab", "bridge-railings-pg2"], // Index 4
  ["bridge-asset-tab", "bridge-railings-tab", "bridge-railings-pg5"], // Index 5
  ["bridge-asset-tab", "bridge-deck-tab", "bridge-deck-pg2"], // Index 6
  ["bridge-asset-tab", "bridge-deck-tab", "bridge-deck-pg5"], // Index 7
  ["bridge-asset-tab", "bridge-super-tab", "bridge-super-pg2"], // Index 8
  ["bridge-asset-tab", "bridge-super-tab", "bridge-super-pg5"], // Index 9
  ["bridge-asset-tab", "bridge-bearings-tab", "bridge-bearings-pg2"], // Index 10
  ["bridge-asset-tab", "bridge-sub-tab", "bridge-sub-pg2"], // Index 11
  ["bridge-asset-tab", "bridge-sub-tab", "bridge-sub-pg5"], // Index 12
  ["bridge-asset-tab", "bridge-culvert-tab", "bridge-culvert-pg2"], // Index 13
  ["bridge-asset-tab", "bridge-channel-tab", "bridge-channel-pg2"], // Index 14
  ["bridge-asset-tab", "bridge-channel-tab", "bridge-channel-pg5"], // Index 15
  ["bridge-asset-tab", "bridge-scour-tab", "bridge-scour-pg2"], // Index 16
  ["bridge-asset-tab", "bridge-scour-tab", "bridge-scour-pg5"], // Index 17
  ["bridge-asset-tab", "bridge-overtopping-tab", "bridge-overtopping-pg2"], // Index 18
  ["bridge-asset-tab", "bridge-wildlife-tab", "bridge-wildlife-pg2"], // Index 19
  ["bridge-asset-tab", "bridge-wildlife-tab", "bridge-wildlife-pg4"], // Index 20
  ["bridge-asset-tab", "bridge-elements-tab", "element-elements-tab"], // Index 21
  ["bridge-asset-tab", "bridge-maintenance-tab", null], // Index 22
  ["bridge-asset-tab", "bridge-review-tab", "review-ratings2-tab"], // Index 23
];

// Track the current position in the navigation sequence
let currentIndex = 0;

/**
 * Simulates clicking a button based on its data-target attribute.
 * @param {string} dataTarget - The data-target of the button to trigger.
 */
function triggerButton(dataTarget) {
  const button = document.querySelector(`[data-target="${dataTarget}"]`);
  if (button) {
    button.click();
    button.focus(); // Focus the last clicked button
  }
}

/**
 * Moves the navigation forward or backward and triggers the corresponding buttons.
 * @param {string} direction - "up" moves forward, "down" moves backward.
 */
function navigate(direction) {
  foundIndex = findNavigationIndex(); // Call the function when Control is pressed twice
  if (direction === "up") {
    let roundedDown = Math.floor(foundIndex);
    // alert(roundedDown);
    // Move forward in the sequence, looping back to the first entry if at the end
    currentIndex = (roundedDown + 1) % navigationMap.length;
  } else if (direction === "down") {
    let roundedUp = Math.ceil(foundIndex);
    // alert(roundedUp);
    // Move backward in the sequence, looping back to the last entry if at the start
    currentIndex = (roundedUp - 1 + navigationMap.length) % navigationMap.length;
  }

  // Simulate button clicks for the current navigation entry
  navigationMap[currentIndex].forEach(triggerButton);
}

// Listen for PageUp and PageDown key presses
document.addEventListener("keydown", (event) => {
  if (event.key === "PageDown") {
    navigate("up"); // PageDown moves forward in the sequence
    event.preventDefault();
  } else if (event.key === "PageUp") {
    navigate("down"); // PageUp moves backward in the sequence
    event.preventDefault();
  }
});

// :::: (Rating Page Index) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to find the correct navigation index
function findNavigationIndex() {
  let foundIndex = -1; // Default to -1 if no valid index is found
  let betweenKey = 0; // A key to see if they value is between to rating tables on the same component tab

  // Get the active button outside the loop
  let buttonActive2 = null;
  let buttonActive3 = null;
  let buttonActive3Prefix = null;

  // Get all buttons whose data-target starts with "bridge-" and ends with "-tab", but exclude "bridge-asset-tab"
  const activeButton2 = document.querySelectorAll('[data-target^="bridge-"][data-target$="-tab"]:not([data-target="bridge-asset-tab"])');

  // Loop through all the buttons and check if any of them is active
  activeButton2.forEach((button) => {
    const activeTarget2 = button.getAttribute("data-target");

    // Check if the button follows the "bridge-*-tab" pattern and is active
    if (button.classList.contains("active") && activeTarget2.includes("-tab")) {
      buttonActive2 = activeTarget2; // Store the active button's data-target
      buttonActive3Prefix = buttonActive2.split("-").slice(0, 2).join("-") + "-";
      // alert(buttonActive2);
    }
  });

  // alert(buttonActive3Prefix);
  const activeButton3 = document.querySelectorAll(`[data-target^="${buttonActive3Prefix}pg"]`);
  // alert(activeButton3); // works to here!

  // Loop through all the buttons and check if any of them is active
  activeButton3.forEach((button) => {
    const activeTarget3 = button.getAttribute("data-target");

    // Check if the button follows the "bridge-*-tab" pattern and is active
    if (button.classList.contains("active") && activeTarget3.includes("-pg")) {
      buttonActive3 = activeTarget3; // Store the active button's data-target
      // alert(buttonActive3);
    }
  });

  // Now iterate over navigationMap to find the correct index
  for (let i = 0; i < navigationMap.length; i++) {
    const buttonTarget2 = navigationMap[i][1]; // Second element in the array // bridge-*-tab // Components // buttonActive2
    const buttonTarget3 = navigationMap[i][2]; // Third element in the array // bridge-something-pgN (typically)
    if (["bridge-elements-tab", "bridge-maintenance-tab", "bridge-review-tab"].includes(buttonActive2) && buttonActive2 === buttonTarget2) {
      foundIndex = i;
      break;
    }
    // If buttonActive2 is set, compare it with other elements in the navigationMap
    else if (buttonActive3 && buttonActive3.includes("-pg") && buttonTarget3 && buttonTarget3.includes("-pg")) {
      // Extract the number after the "-pg"
      const numberFromButtonActive3 = parseInt(buttonActive3.slice(buttonActive3.lastIndexOf("-pg") + 3), 10);
      const numberFromButtonTarget3 = parseInt(buttonTarget3.slice(buttonTarget3.lastIndexOf("-pg") + 3), 10);
      // Get the prefix before "-pg"
      const prefixFromButtonActive3 = buttonActive3.slice(0, buttonActive3.lastIndexOf("-pg"));
      const prefixFromButtonTarget3 = buttonTarget3.slice(0, buttonTarget3.lastIndexOf("-pg"));

      // Compare the active button's number with other elements in the navigationMap (if needed)
      // For example, if you want to compare this with `buttonTarget2` or any other values, you can add that logic here
      // alert(buttonTarget3 + ", " + buttonActive3);
      if (buttonTarget3 === buttonActive3) {
        foundIndex = i;
        // alert("This button!");
        break;
      }
      if (prefixFromButtonActive3 === prefixFromButtonTarget3) {
        // Output for debugging purposes
        // alert(numberFromButtonActive3 + ", " + numberFromButtonTarget3);
        // alert(prefixFromButtonActive3 + ", " + prefixFromButtonTarget3);

        if (numberFromButtonActive3 > numberFromButtonTarget3) {
          // alert("Greater than");
          foundIndex = i + 0.5;
        } else if (numberFromButtonActive3 < numberFromButtonTarget3) {
          // alert("Less than");
          foundIndex = i - 0.5;
        }
      }
    }
  }

  // Returns
  return foundIndex;
}

// :::: (Arrow Message) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to show the current clipboard value (used for Undo/Redo)
function showArrowMessage(value) {
  // Remove any existing message before showing a new one
  const existingCopiedMessage = document.querySelector(".copied-message");
  if (existingCopiedMessage) {
    existingCopiedMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingClipboardMessage = document.querySelector(".clipboard-message");
  if (existingClipboardMessage) {
    existingClipboardMessage.remove();
  }

  // Remove any existing message before showing a new one
  const existingArrowMessage = document.querySelector(".arrow-message");
  if (existingArrowMessage) {
    existingArrowMessage.remove();
  }

  // Create the message container
  const currentMessage = document.createElement("div"); //
  const messageValue = value === "default" ? "Set to vertical scroll." : "Set to page navigation.";

  currentMessage.classList.add("arrow-message"); // Add a class to target this specific message

  // Style the message container to use flexbox
  currentMessage.style.display = "flex"; // Use flexbox to align items horizontally
  currentMessage.style.alignItems = "center"; // Vertically align items in the center
  currentMessage.style.position = "fixed";
  currentMessage.style.top = "15px";
  currentMessage.style.left = "50%";
  currentMessage.style.transform = "translateX(-50%)";
  currentMessage.style.borderRadius = "8px"; // Rounded corners for the message container
  currentMessage.style.fontSize = "14px"; // Font size
  currentMessage.style.maxWidth = "80%"; // Max width of the message block
  currentMessage.style.wordWrap = "break-word"; // Ensure long lines of text wrap correctly
  currentMessage.style.zIndex = "9999"; // Ensure it appears above other content

  // Create a div for the "Arrow Keys:" part with different background
  const titlePart = document.createElement("div");
  titlePart.textContent = "Up & Down Arrow Keys:";
  titlePart.style.padding = "6px 10px"; // Increased padding for better spacing
  // titlePart.style.fontWeight = "bold"; // Bold text for the title
  titlePart.style.marginRight = "8px"; // Space between the title and content
  titlePart.style.borderRadius = "4px"; // Rounded corners for the title
  titlePart.style.backgroundColor = "rgba(63, 38, 63, 0.9)"; // Green background for the title
  titlePart.style.color = "#fff"; // White text color

  // Create a div for the clipboard content itself (rest of the message)
  const contentPart = document.createElement("div");
  contentPart.textContent = messageValue; // Show more of the text (100 characters)
  contentPart.style.padding = "6px 10px"; // Increased padding for better spacing
  contentPart.style.flexGrow = "1"; // Allow content to take remaining space if needed
  contentPart.style.borderRadius = "4px"; // Rounded corners for the content part
  contentPart.style.backgroundColor = "#333"; // Dark background for content part
  contentPart.style.color = "#fff"; // White text color

  // Append the title and content to the message container
  currentMessage.appendChild(titlePart);
  currentMessage.appendChild(contentPart);

  // Append the whole message container to the body
  document.body.appendChild(currentMessage);

  // Remove the message after 5 seconds
  setTimeout(() => {
    currentMessage.remove();
  }, 5000);
}

// :::: (0-9 Example Comments) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Do nothing if an input or textarea is focused
  if (document.activeElement.tagName === "INPUT" || document.activeElement.tagName === "TEXTAREA") return;

  // Check if the key is 1-9, 0 (which represents 10), or Delete
  if (!/^[1-9]$|^0$|Delete$/.test(event.key)) return;

  let index;

  // If the key is a number (1-9 or 0), determine the index
  if (/^[1-9]$|^0$/.test(event.key)) {
    index = event.key === "0" ? 9 : parseInt(event.key) - 1;
  }

  // Select all visible comment lines
  const comments = Array.from(document.querySelectorAll(".content-container-comment-lines")).filter(
    (comment) => comment.offsetParent !== null // Ensure it's visible
  );

  // Find the first comment line with a class starting with 'p-'
  const firstVisibleComment = comments.find((comment) => {
    return Array.from(comment.classList).some((cls) => cls.startsWith("p-"));
  });

  const pClass = Array.from(firstVisibleComment.classList).find((cls) => cls.startsWith("p-"));
  const textareaId = pClass.replace("p-", "") + "-textarea"; // Remove 'p' and add '-textarea'
  const textarea = document.getElementById(textareaId);

  // If the Delete key is pressed, find the corresponding index
  if (textarea) {
    if (event.key === "Delete") {
      textarea.value = "";

      // Fire the 'input' event to trigger any listeners like `oninput`
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
    }
  }

  // Ensure the selected index exists
  if (index < comments.length) {
    const textToCopy = comments[index].textContent.trim() + " ";

    // Copy to clipboard
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => console.log(`Copied: ${textToCopy}`))
      .catch((err) => console.error("Failed to copy:", err));

    if (textarea) {
      if (textarea && textarea.offsetParent !== null) {
        // Ensure the textarea is visible
        textarea.value += textToCopy; // Append the copied value to the textarea

        // Fire the 'input' event to trigger any listeners like `oninput`
        textarea.dispatchEvent(new Event("input", { bubbles: true }));
      }
    }
  }
});

// :::: (Auto Correct) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// document.querySelectorAll("[id$='-textarea']").forEach((textarea) => {
//   textarea.addEventListener("input", function (event) {
//     const commonTypos = {
//       teh: "the",
//       adn: "and",
//       recieve: "receive",
//       jsut: "just",
//       woudl: "would",
//       thsi: "this",
//       dont: "don't",
//       doesnt: "doesn't",
//       wierd: "weird",
//     };

//     const compoundWords = {
//       "rip rap": "riprap", // Add more compound fixes as needed
//     };

//     // Get current text value
//     let text = this.value;

//     // Check if the last character is a space or punctuation
//     if (/[ .,!?]/.test(text.slice(-1))) {
//       let words = text.split(/\s+/); // Split by spaces

//       // Check for common typos
//       words = words.map((word) => commonTypos[word] || word);

//       // Check for compound word fixes (e.g., "rip rap" -> "riprap")
//       for (let i = 0; i < words.length - 1; i++) {
//         let compoundCheck = words[i] + " " + words[i + 1];
//         if (compoundWords[compoundCheck]) {
//           words[i] = compoundWords[compoundCheck]; // Replace compound phrase with corrected version
//           words.splice(i + 1, 1); // Remove the next word
//         }
//       }

//       // Join words back and update the textarea value
//       this.value = words.join(" ");
//     }
//   });
// });

// :::: (Quick TL#) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.querySelectorAll('[data-target="bridge-asset-tab"]').forEach((button) => {
  button.addEventListener("dblclick", function () {
    const textarea = document.getElementById("user-textarea-teamleader");
    if (textarea) {
      navigator.clipboard
        .writeText(textarea.value)
        .then(() => console.log("Copied:", textarea.value))
        .catch((err) => console.error("Failed to copy:", err));
    }
  });
});

// :::: (Reset Tabs) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

function resetViaSimulatedClicks() {
  // Step 1: Scroll main content to top
  const mainSection = document.getElementById("main-content");
  if (mainSection) {
    mainSection.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }

  // Step 2: Simulate clicks on all buttons targeting bridge-SOMETHING-pg2
  const pg2Buttons = document.querySelectorAll('button[data-target^="bridge-"][data-target$="-pg2"]');
  pg2Buttons.forEach((btn) => btn.click());

  // Step 3: Simulate click on the bridge-alignment-tab button
  const alignmentButton = document.querySelector('button[data-target="bridge-alignment-tab"]');
  if (alignmentButton) alignmentButton.click();
}

// :::: (Resize for Mobile) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to simulate button click
function simulateButtonClick(dataTarget) {
  const button = document.querySelector(`[data-target="${dataTarget}"]`);
  if (button) {
    button.click();
  }
}

// Function to focus the button
function focusButton(dataTarget) {
  const button = document.querySelector(`[data-target="${dataTarget}"]`);
  if (button) {
    button.focus();
  }
}

// Function to check screen width and trigger clicks
function checkScreenWidthAndTriggerClicks() {
  // Check if the width is less than 768px
  if (window.innerWidth <= 768) {
    simulateButtonClick("bridge-asset-tab");
    simulateButtonClick("bridge-review-tab");
    simulateButtonClick("review-data-tab");
    focusButton("review-data-tab"); // Focus the "review-data-tab" button

    // Trigger expandTextarea on all matching textareas
    document.querySelectorAll("textarea[oninput^='expandTextarea']").forEach((textarea) => {
      const event = new Event("input", { bubbles: true });
      textarea.dispatchEvent(event);
    });
  }
}

// Run the function on load to check if the screen is already at the desired size
checkScreenWidthAndTriggerClicks();

// Add event listener to trigger when the window is resized
window.addEventListener("resize", checkScreenWidthAndTriggerClicks);

// :::: (SPMS Link) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.getElementById("spms-link").addEventListener("click", function (event) {
  // Get the textarea content
  const assetTextarea = document.getElementById("asset-textarea-assetNumberNBI");
  if (assetTextarea) {
    // Use the Clipboard API to copy the text to the clipboard
    navigator.clipboard
      .writeText(assetTextarea.value)
      .then(function () {})
      .catch(function (err) {
        console.error("Unable to copy text", err);
      });
  }
});

// :::: (Glossary Shortcut Ctrl + Shift + G) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Shift + G is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "G") {
    // Prevent the default action (which is opening the Find bar)
    event.preventDefault();

    // Trigger the button with data-target="misc-asset-tab"
    const targetButton1 = document.querySelector('[data-target="misc-asset-tab"]');
    const targetButton2 = document.querySelector('[data-target="glossary-tab"]');
    const targetButton3 = document.querySelector('[data-target="glossary-all-tab"]');
    if (targetButton3) {
      targetButton1.click();
      targetButton2.click();
      targetButton3.click();
      targetButton3.focus();
    }
  }
});

// :::: (Settings Shortcut Ctrl + Shift + S) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Shift + S is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "S") {
    // Prevent the default action (which is opening the Find bar)
    event.preventDefault();

    // Trigger the button with data-target="misc-asset-tab"
    const targetButton1 = document.querySelector('[data-target="misc-asset-tab"]');
    const targetButton2 = document.querySelector('[data-target="settings-tab"]');
    if (targetButton2) {
      targetButton1.click();
      targetButton2.click();
      targetButton2.focus();
    }
  }
});

// :::: (Bridge Shortcut Ctrl + Shift + B) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Shift + B is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "B") {
    // Prevent the default action (which is opening the Find bar)
    event.preventDefault();

    // Trigger the button with data-target="misc-asset-tab"
    const targetButton1 = document.querySelector('[data-target="bridge-asset-tab"]');
    if (targetButton1) {
      targetButton1.click();
      targetButton1.focus();
    }
  }
});

// :::: (Culvert Shortcut Ctrl + Shift + C) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Shift + C is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "C") {
    // Prevent the default action (which is opening the Find bar)
    event.preventDefault();

    // Trigger the button with data-target="misc-asset-tab"
    const targetButton1 = document.querySelector('[data-target="culvert-asset-tab"]');
    if (targetButton1) {
      targetButton1.click();
      targetButton1.focus();
    }
  }
});

// :::: (Retaining Wall Shortcut Ctrl + Shift + R) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("keydown", function (event) {
  // Check if Ctrl + Shift + R is pressed
  if (event.ctrlKey && event.shiftKey && event.key === "R") {
    // Prevent the default action (which is opening the Find bar)
    event.preventDefault();

    // Trigger the button with data-target="misc-asset-tab"
    const targetButton1 = document.querySelector('[data-target="wall-asset-tab"]');
    if (targetButton1) {
      targetButton1.click();
      targetButton1.focus();
    }
  }
});

// :::: (Backspace History) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Step 1: Initialize array for navigation history
const navHistory = [];
const maxHistorySize = 100;

// Helper function to check if an element is visible (including parent visibility)
function isElementVisible(el) {
  while (el) {
    const style = window.getComputedStyle(el);
    if (style.display === "none" || style.visibility === "hidden") {
      return false;
    }
    el = el.parentElement;
  }
  return true;
}

// Step 2: Save current state of visible active buttons, and track focused button
function saveActiveState() {
  // Get all active buttons that are visible
  const activeButtons = Array.from(document.querySelectorAll("button.active")).filter((btn) => isElementVisible(btn)); // Only consider visible buttons

  // Get the state of visible active buttons' data-target attributes
  const state = activeButtons.map((btn) => btn.getAttribute("data-target")).filter(Boolean);

  // Track the focused button (if any)
  const focusedButton =
    document.activeElement && document.activeElement.tagName === "BUTTON" ? document.activeElement.getAttribute("data-target") : null;

  // Store the state, along with the focused button (if any)
  const newState = { targets: state, focused: focusedButton };

  // Only push to the history if the new state is different from the last state
  const lastState = navHistory[navHistory.length - 1] || {};
  const isDifferent = JSON.stringify(newState) !== JSON.stringify(lastState);

  if (isDifferent) {
    if (navHistory.length >= maxHistorySize) {
      navHistory.shift(); // Remove the oldest state if we exceed the maximum size
    }
    navHistory.push(newState);
  }
}

// Step 3: Restore a saved state by simulating clicks on buttons with matching data-targets
function restoreState(state) {
  // We don't touch the active classes directly. Instead, simulate button clicks based on data-targets

  state.targets.forEach((target) => {
    const btn = document.querySelector(`button[data-target="${target}"]`);
    if (btn && isElementVisible(btn)) {
      btn.click(); // Simulate the click to restore the active state
    }
  });

  // Restore the focused button if there was one
  if (state.focused) {
    const focusedButton = document.querySelector(`button[data-target="${state.focused}"]`);
    if (focusedButton) {
      focusedButton.focus(); // Set focus back to the button
    }
  }
}

// Step 4: Backspace key to navigate back (remove current state and restore previous state)
document.addEventListener("keydown", (event) => {
  // Check if the backspace key was pressed
  if (event.key === "Backspace") {
    const activeElement = document.activeElement;

    // Allow the default backspace action in input/textarea or editable elements
    if (activeElement.tagName === "INPUT" || activeElement.tagName === "TEXTAREA" || activeElement.isContentEditable) {
      return; // Don't prevent default, let backspace work normally
    }

    // Otherwise, prevent default and run the backspace navigation code
    event.preventDefault();

    if (navHistory.length > 1) {
      navHistory.pop(); // Remove current state (last item)
      const prevState = navHistory[navHistory.length - 1];
      restoreState(prevState); // Restore the previous state
    }
  }
});

// Save state on load and after every button click
window.addEventListener("DOMContentLoaded", () => {
  // Give the DOM time to load and capture the initial state (including focused button)
  setTimeout(saveActiveState, 0);
});

// Capture state after every button click
document.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON" && e.target.dataset.target) {
    // Defer the snapshot to ensure DOM updates (class changes, etc.)
    setTimeout(saveActiveState, 0);
  }
});

// :::: (Console Logs) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Run Times and Counts

// Random data logs
console.log("Number of bridge assets loaded: " + Object.keys(assetData).length);
console.log("index.html last modified:", document.lastModified);
console.log("Data last updated:", dataDate);

window.addEventListener("load", function () {
  const loadTimeInMilliseconds = performance.now();
  const loadTimeInSeconds = loadTimeInMilliseconds / 1000;
  console.log(`Page loaded in ${loadTimeInSeconds.toFixed(2)} seconds`);
});

// Seymour routes
const district2Assets = assetData.filter((asset) => asset["(2) Highway Agency District:"] === 2);
const uniqueInvRoutes = new Set(district2Assets.map((asset) => asset["Inv Route #"]));
console.log(`Number of unique routes in Seymour: ${uniqueInvRoutes.size}`);

// Glossary Terms
const count = glossaryAllTerms.length;
console.log(`Number of unique glossary terms: ${count}`);

// Mapping district numbers to district names
const districtIdMap = {
  1: "crawfordsville",
  2: "fortwayne",
  3: "greenfield",
  4: "laporte",
  5: "seymour",
  6: "vincennes",
  7: "toll",
};

// Compute district counts & NSTM inspection counts
const districtCounts = {};
const nstmCounts = {};
const specialCounts = {};
const underwaterCounts = {};
const elementCounts = {};
const reducedIntervalCounts = {};
const extendedIntervalCounts = {};
const postedCounts = {};
const scourCounts = {};

// Initialize total counts
let totalRoutine = 0;
let totalNstm = 0;
let totalSpecial = 0;
let totalUnderwater = 0;
let totalElement = 0;
let totalReducedInterval = 0;
let totalExtendedInterval = 0;
let totalPosted = 0;
let totalScour = 0;

assetData.forEach((asset) => {
  const district = asset["(2) Highway Agency District:"]; // Get district value
  const nstmRequired = asset["(92AA) Critical Feature Inspection: NSTM Insp Required?"]; // Check NSTM
  const specialRequired = asset["(92CC) Critical Feature Inspection: Special Insp Required?"]; // Check special
  const underwaterRequired = asset["(92BB) Critical Feature Inspection: Underwater Insp Required?"]; // Check underwater
  const elementRequired = asset["(104) Highway System of Inventory Route:"]; // Check element
  const frequencyRequired = asset["(91) Designated Inspection Frequency:"]; // Check frequency
  const postedRequired = asset["(41) Structure Open/Posted/Closed:"]; // Check posted
  const scourRequired = asset["(B.AP.03) Scour Vulnerability"]; // Check scour critical

  if (district !== undefined) {
    districtCounts[district] = (districtCounts[district] || 0) + 1;
    totalRoutine++; // Increment total routine count

    if (nstmRequired === "Y") {
      nstmCounts[district] = (nstmCounts[district] || 0) + 1;
      totalNstm++; // Increment total NSTM count
    }

    if (specialRequired === "Y") {
      specialCounts[district] = (specialCounts[district] || 0) + 1;
      totalSpecial++; // Increment total special count
    }

    if (underwaterRequired === "Y") {
      underwaterCounts[district] = (underwaterCounts[district] || 0) + 1;
      totalUnderwater++; // Increment total underwater count
    }

    if (elementRequired === 1) {
      elementCounts[district] = (elementCounts[district] || 0) + 1;
      totalElement++; // Increment total element count
    }

    if (frequencyRequired < 24) {
      reducedIntervalCounts[district] = (reducedIntervalCounts[district] || 0) + 1;
      totalReducedInterval++; // Increment total reduced interval count
    }

    if (frequencyRequired > 24) {
      extendedIntervalCounts[district] = (extendedIntervalCounts[district] || 0) + 1;
      totalExtendedInterval++; // Increment total extended interval count
    }

    if (postedRequired !== "A") {
      postedCounts[district] = (postedCounts[district] || 0) + 1;
      totalPosted++; // Increment total posted count
    }

    if (scourRequired !== null && scourRequired !== "N" && !["A", "B", "AB-T"].includes(scourRequired)) {
      scourCounts[district] = (scourCounts[district] || 0) + 1;
      totalScour++; // Increment total scour count
    }
  }
});

// Function to update textareas dynamically
function updateTextarea(district, type, value) {
  let districtName = districtIdMap[district]; // Get district name
  if (!districtName) districtName = "all"; // If no district, send to "all"

  const textareaId = `${districtName}-textarea-${type}`; // Generate ID
  const textarea = document.getElementById(textareaId);
  if (textarea) {
    textarea.value = value; // Update the textarea value
  }
}

// Update the corresponding district textareas
Object.entries(districtCounts).forEach(([district, count]) => {
  updateTextarea(district, "routine", count);
});
Object.entries(nstmCounts).forEach(([district, count]) => {
  updateTextarea(district, "nstm", count);
});
Object.entries(specialCounts).forEach(([district, count]) => {
  updateTextarea(district, "special", count);
});
Object.entries(underwaterCounts).forEach(([district, count]) => {
  updateTextarea(district, "underwater", count);
});
Object.entries(elementCounts).forEach(([district, count]) => {
  updateTextarea(district, "element", count);
});
Object.entries(reducedIntervalCounts).forEach(([district, count]) => {
  updateTextarea(district, "reducedinterval", count);
});
Object.entries(extendedIntervalCounts).forEach(([district, count]) => {
  updateTextarea(district, "extendedinterval", count);
});
Object.entries(postedCounts).forEach(([district, count]) => {
  updateTextarea(district, "posted", count);
});
Object.entries(scourCounts).forEach(([district, count]) => {
  updateTextarea(district, "scour", count);
});

// Update the corresponding district textareas
Object.entries(districtCounts).forEach(([district, count]) => {
  updateTextarea(district, "routine", count);

  // Calculate bridge share: (routine inspections per inspector) / 2
  const inspectors = district === "3" ? 6 : 4; // Greenfield (3) has 6 inspectors, others have 4
  const bridgeShare = Math.ceil(count / inspectors / 2); // Divide by inspectors, then by 2

  updateTextarea(district, "bridgeshare", bridgeShare); // Update bridge share
});

// Update total textareas
updateTextarea("all", "routine", totalRoutine);
updateTextarea("all", "nstm", totalNstm);
updateTextarea("all", "special", totalSpecial);
updateTextarea("all", "underwater", totalUnderwater);
updateTextarea("all", "element", totalElement);
updateTextarea("all", "reducedinterval", totalReducedInterval);
updateTextarea("all", "extendedinterval", totalExtendedInterval);
updateTextarea("all", "posted", totalPosted);
updateTextarea("all", "scour", totalScour);

console.log(districtCounts);

// :::: (Error Log) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to count errors per district and update textareas
function findAndUpdateAssetErrors() {
  let errorCounts = {
    freq: {},
    super: {},
    deck: {},
    sub: {},
    wearing: {},
  };

  let errorAssets = {
    freq: {},
    super: {},
    deck: {},
    sub: {},
    wearing: {},
  };

  assetData.forEach((asset) => {
    const district = asset["(2) Highway Agency District:"];
    const status = asset["(41) Structure Open/Posted/Closed:"]; // Check status
    if (status === "K" || district === undefined) return; // Exclude if status is "K"

    let assetNumber = asset["Asset Number"]; // Store asset number

    // Extract necessary values
    let assetValues = {
      deck: parseFloat(asset["(B.C.01) Deck Condition Rating"]),
      inspectionFrequency: parseFloat(asset["(91) Designated Inspection Frequency:"]),
      superstructure: parseFloat(asset["(B.C.02) Superstructure Condition Rating"]),
      substructure: parseFloat(asset["(B.C.03) Substructure Condition Rating"]),
      scourCritical: parseFloat(asset["(113) Scour Critical Bridges:"]),
      mainDesignType: asset["(43B) Structure Type, Main: Type of Design:"],
      wearingSurfaceType: asset["(108A) Wearing Surface Protection System: Wearing Surface"],
      wearingSurface: parseFloat(asset["(B.C.01a) Wearing Surface Condition Rating"]),
      deckStructureType: asset["(107) Deck Structure Type:"],
      underfillValue: asset["(B.C.04) Culvert Condition Rating"],
      membraneValue: asset["(108B) Wearing Surface Protection System: Deck Membrane"],
    };

    let lowestValue = Math.min(assetValues.deck, assetValues.superstructure, assetValues.substructure);

    // Error Check: Frequency Error
    if (lowestValue < 4 && assetValues.inspectionFrequency > 12) {
      errorCounts.freq[district] = (errorCounts.freq[district] || 0) + 1;
      errorAssets.freq[district] = errorAssets.freq[district] || [];
      errorAssets.freq[district].push(assetNumber);
    }

    // Error Check: Deck/Slab Error
    if (assetValues.deck !== assetValues.superstructure && ["1", "01", 1].includes(assetValues.mainDesignType)) {
      errorCounts.super[district] = (errorCounts.super[district] || 0) + 1;
      errorAssets.super[district] = errorAssets.super[district] || [];
      errorAssets.super[district].push(assetNumber);
    }

    // Error Check: Monolithic Error
    if (assetValues.wearingSurfaceType === "1") {
      if (assetValues.deck <= 5 || assetValues.wearingSurface <= 5) {
        if (assetValues.deck !== assetValues.wearingSurface) {
          errorCounts.deck[district] = (errorCounts.deck[district] || 0) + 1;
          errorAssets.deck[district] = errorAssets.deck[district] || [];
          errorAssets.deck[district].push(assetNumber);
        }
      } else {
        if (assetValues.deck !== assetValues.wearingSurface && assetValues.deck !== assetValues.wearingSurface + 1) {
          errorCounts.deck[district] = (errorCounts.deck[district] || 0) + 1;
          errorAssets.deck[district] = errorAssets.deck[district] || [];
          errorAssets.deck[district].push(assetNumber);
        }
      }
    }

    // Error Check: Scour/Sub Error
    if (assetValues.scourCritical <= 2 && assetValues.substructure > assetValues.scourCritical) {
      errorCounts.sub[district] = (errorCounts.sub[district] || 0) + 1;
      errorAssets.sub[district] = errorAssets.sub[district] || [];
      errorAssets.sub[district].push(assetNumber);
    }

    // Error Check: Membrane Error
    if (
      assetValues.wearingSurface > 4 &&
      assetValues.underfillValue === "N" &&
      ["1", "2"].includes(assetValues.deckStructureType) &&
      assetValues.wearingSurfaceType === "6" &&
      ["0", "8", "N"].includes(assetValues.membraneValue)
    ) {
      errorCounts.wearing[district] = (errorCounts.wearing[district] || 0) + 1;
      errorAssets.wearing[district] = errorAssets.wearing[district] || [];
      errorAssets.wearing[district].push(assetNumber);
    }
  });

  // Update textareas for each district
  Object.entries(errorCounts.freq).forEach(([district, count]) => {
    updateTextarea(district, "error-frequency", count);
  });
  Object.entries(errorCounts.super).forEach(([district, count]) => {
    updateTextarea(district, "error-deckslab", count);
  });
  Object.entries(errorCounts.deck).forEach(([district, count]) => {
    updateTextarea(district, "error-monolithic", count);
  });
  Object.entries(errorCounts.sub).forEach(([district, count]) => {
    updateTextarea(district, "error-scoursub", count);
  });
  Object.entries(errorCounts.wearing).forEach(([district, count]) => {
    updateTextarea(district, "error-membrane", count);
  });

  // Calculate the sum for each error type and send it to the corresponding textareas
  let totalFreqErrors = Object.values(errorCounts.freq).reduce((sum, count) => sum + count, 0);
  let totalSuperErrors = Object.values(errorCounts.super).reduce((sum, count) => sum + count, 0);
  let totalDeckErrors = Object.values(errorCounts.deck).reduce((sum, count) => sum + count, 0);
  let totalSubErrors = Object.values(errorCounts.sub).reduce((sum, count) => sum + count, 0);
  let totalWearingErrors = Object.values(errorCounts.wearing).reduce((sum, count) => sum + count, 0);

  // Update the sum of errors in the respective textareas
  document.getElementById("all-textarea-error-frequency").value = totalFreqErrors;
  document.getElementById("all-textarea-error-monolithic").value = totalSuperErrors;
  document.getElementById("all-textarea-error-deckslab").value = totalDeckErrors;
  document.getElementById("all-textarea-error-scoursub").value = totalSubErrors;
  document.getElementById("all-textarea-error-membrane").value = totalWearingErrors;

  // Log error asset numbers by district and error type
  console.log("Errors by District and Type:");
  Object.entries(errorAssets).forEach(([errorType, districts]) => {
    console.log(`\n${errorType.toUpperCase()} Errors:`);
    Object.entries(districts).forEach(([district, assets]) => {
      console.log(`  District ${district}:`, assets);
    });
  });
}

// Call the function to process errors and update the UI
findAndUpdateAssetErrors();

// :::: (Error Log Popups) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Function to create and display the popup
function showErrorPopup(button, message) {
  // Create the temporary popup div
  let errorPopup = document.createElement("div");
  errorPopup.classList.add("error-popup");
  errorPopup.innerText = message;

  // Append the popup to the body
  document.body.appendChild(errorPopup);

  // Get the .textarea-group that contains the button
  let group = button.closest(".textarea-group");

  // Get the position of the .textarea-group
  let groupRect = group.getBoundingClientRect();

  // Position it below the .textarea-group and center it
  errorPopup.style.left = `${groupRect.left + window.scrollX + groupRect.width / 2 - errorPopup.offsetWidth / 2}px`;
  errorPopup.style.top = `${groupRect.bottom + window.scrollY + 10}px`; // Slightly below the group

  // Remove popup after 3 seconds
  setTimeout(() => {
    errorPopup.remove();
  }, 5000);
}

function showAssetErrorPopup(message, button) {
  if (!button) return; // Exit if no button provided

  let errorPopup = document.createElement("div");
  errorPopup.classList.add("error-popup");
  errorPopup.innerText = message;

  document.body.appendChild(errorPopup);

  let buttonRect = button.getBoundingClientRect();

  errorPopup.style.left = `${buttonRect.left + window.scrollX + buttonRect.width / 2 - errorPopup.offsetWidth / 2}px`;
  errorPopup.style.top = `${buttonRect.bottom + window.scrollY + 10}px`;

  setTimeout(() => {
    errorPopup.remove();
  }, 2000);
}

// Add event listeners for each error button
document.querySelector("#error-freq button").addEventListener("click", function () {
  showErrorPopup(this, "Inspection Frequency Error: When the lowest rating is below 4, the frequency must be 12 months or less.");
});

document.querySelector("#error-super button").addEventListener("click", function () {
  showErrorPopup(this, "Deck Slab Error: The deck and superstructure ratings must match for slab bridges.");
});

document.querySelector("#error-deck button").addEventListener("click", function () {
  showErrorPopup(
    this,
    "Monolithic Error: When the deck or wearing surface rating is below 6, they must match; otherwise, the wearing surface rating can be one less."
  );
});

document.querySelector("#error-sub button").addEventListener("click", function () {
  showErrorPopup(this, "Scour Error: When the scour rating is below 3, the substructure rating must be the same or lower.");
});

document.querySelector("#error-wearing button").addEventListener("click", function () {
  showErrorPopup(
    this,
    "Membrane Error: When there is no membrane between a concrete deck and a bituminous wearing surface, the wearing surface rating must be below 5."
  );
});

["asset-error-button1", "asset-error-button2"].forEach((id) => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", function () {
      showAssetErrorPopup(errorString, btn);
    });
  }
});

// :::: (Dev Component Mapping) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

// Global flag to control whether the extraction should run
let isExtractionEnabled = false; // Set to `true` to enable, `false` to disable

// Function to collect all unique classes, ids, and data-attributes
function collectUniqueAttributes() {
  const uniqueClasses = new Set();
  const uniqueIDs = new Set();
  const uniqueDataAttributes = new Set();
  const duplicateIDs = new Set(); // Set to track duplicate IDs

  // Select all elements in the document
  const allElements = document.querySelectorAll("*");

  // Loop through all elements and collect the unique attributes
  allElements.forEach((element) => {
    // Collect IDs only if they are unique
    if (element.id) {
      if (uniqueIDs.has(element.id)) {
        // If the ID is already in the unique set, add it to the duplicate set
        duplicateIDs.add(element.id);
      } else {
        uniqueIDs.add(element.id);
      }
    }

    // Collect Classes
    element.classList.forEach((cls) => {
      uniqueClasses.add(cls);
    });

    // Collect Data-Attributes
    Array.from(element.attributes).forEach((attr) => {
      if (attr.name.startsWith("data-")) {
        uniqueDataAttributes.add(attr.name);
      }
    });
  });

  // Alphabetize the results and get the counts
  const sortedIDs = [...uniqueIDs].sort();
  const sortedClasses = [...uniqueClasses].sort();
  const sortedDataAttributes = [...uniqueDataAttributes].sort();

  // Create the output text content
  let outputText = "";

  // If there are duplicate IDs, flag them in the output
  if (duplicateIDs.size > 0) {
    outputText += `**Duplicate IDs Found:**\n${Array.from(duplicateIDs).join("\n")}\n\n`;
  }

  // Add the unique lists to the output text
  outputText += `IDs (${sortedIDs.length}):\n` + sortedIDs.join("\n") + "\n\n";
  outputText += `Unique Classes (${sortedClasses.length}):\n` + sortedClasses.join("\n") + "\n\n";
  outputText += `Unique Data Attributes (${sortedDataAttributes.length}):\n` + sortedDataAttributes.join("\n") + "\n";

  return outputText;
}

// Function to download the content as a .txt file
function downloadTxt(content, filename = "uniqueAttributes.txt") {
  const blob = new Blob([content], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Function to handle extraction based on the flag
function handleExtraction() {
  if (isExtractionEnabled) {
    const textContent = collectUniqueAttributes();
    downloadTxt(textContent); // Trigger the download of the txt file
    console.log("Extraction Enabled: Data file generated.");
  } else {
    console.log("Extraction Disabled: No action taken.");
  }
}

// Example: Execute extraction based on the flag
handleExtraction();

// :::: (Google Analytics) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =

document.addEventListener("DOMContentLoaded", function () {
  document.body.addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      gtag("event", "click", {
        event_category: "button",
        event_label: event.target.innerText.trim() || "Unnamed Button",
      });
    }
  });
});

// :::: (Not Sorted | Working) // = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =
