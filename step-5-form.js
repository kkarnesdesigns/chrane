document.addEventListener("DOMContentLoaded", function() {
    if (typeof Survey !== 'undefined') {
      console.log("SurveyJS is loaded");

      // Custom theme JSON
      const themeJson = {
        "themeName": "custom",
        "colorPalette": "light",
        "isPanelless": true,
        "backgroundImage": "",
        "backgroundOpacity": 1,
        "backgroundImageAttachment": "scroll",
        "backgroundImageFit": "cover",
        "cssVariables": {
          "--sjs-editorpanel-backcolor": "rgba(255, 255, 255, 1)",
          "--sjs-editorpanel-cornerRadius": "10px",
          "--sjs-corner-radius": "4px",
          "--sjs-base-unit": "8px",
          "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.15)",
          "--sjs-shadow-inner": "0px 0px 0px 1px rgba(208, 213, 221, 1)",
          "--sjs-border-default": "rgba(0, 0, 0, 0.16)",
          "--sjs-border-light": "rgba(0, 0, 0, 0.09)",
          "--sjs-general-backcolor": "rgba(255, 255, 255, 1)",
          "--sjs-general-backcolor-dark": "rgba(248, 248, 248, 1)",
          "--sjs-general-backcolor-dim-light": "rgba(249, 249, 249, 1)",
          "--sjs-general-backcolor-dim-dark": "rgba(243, 243, 243, 1)",
          "--sjs-general-forecolor": "rgba(0, 0, 0, 0.91)",
          "--sjs-general-forecolor-light": "rgba(0, 0, 0, 0.45)",
          "--sjs-general-dim-forecolor": "rgba(0, 0, 0, 0.91)",
          "--sjs-general-dim-forecolor-light": "rgba(0, 0, 0, 0.45)",
          "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
          "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
          "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
          "--sjs-secondary-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-secondary-forecolor-light": "rgba(255, 255, 255, 0.25)",
          "--sjs-shadow-small-reset": "0px 0px 0px 0px rgba(0, 0, 0, 0.15)",
          "--sjs-shadow-medium": "0px 2px 6px 0px rgba(0, 0, 0, 0.1)",
          "--sjs-shadow-large": "0px 8px 16px 0px rgba(0, 0, 0, 0.1)",
          "--sjs-shadow-inner-reset": "0px 0px 0px 0px rgba(208, 213, 221, 1)",
          "--sjs-border-inside": "rgba(0, 0, 0, 0.16)",
          "--sjs-special-red-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-special-green": "rgba(25, 179, 148, 1)",
          "--sjs-special-green-light": "rgba(25, 179, 148, 0.1)",
          "--sjs-special-green-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-special-blue": "rgba(67, 127, 217, 1)",
          "--sjs-special-blue-light": "rgba(67, 127, 217, 0.1)",
          "--sjs-special-blue-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-special-yellow": "rgba(255, 152, 20, 1)",
          "--sjs-special-yellow-light": "rgba(255, 152, 20, 0.1)",
          "--sjs-special-yellow-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-article-font-xx-large-textDecoration": "none",
          "--sjs-article-font-xx-large-fontWeight": "700",
          "--sjs-article-font-xx-large-fontStyle": "normal",
          "--sjs-article-font-xx-large-fontStretch": "normal",
          "--sjs-article-font-xx-large-letterSpacing": "0",
          "--sjs-article-font-xx-large-lineHeight": "64px",
          "--sjs-article-font-xx-large-paragraphIndent": "0px",
          "--sjs-article-font-xx-large-textCase": "none",
          "--sjs-article-font-x-large-textDecoration": "none",
          "--sjs-article-font-x-large-fontWeight": "700",
          "--sjs-article-font-x-large-fontStyle": "normal",
          "--sjs-article-font-x-large-fontStretch": "normal",
          "--sjs-article-font-x-large-letterSpacing": "0",
          "--sjs-article-font-x-large-lineHeight": "56px",
          "--sjs-article-font-x-large-paragraphIndent": "0px",
          "--sjs-article-font-x-large-textCase": "none",
          "--sjs-article-font-large-textDecoration": "none",
          "--sjs-article-font-large-fontWeight": "700",
          "--sjs-article-font-large-fontStyle": "normal",
          "--sjs-article-font-large-fontStretch": "normal",
          "--sjs-article-font-large-letterSpacing": "0",
          "--sjs-article-font-large-lineHeight": "40px",
          "--sjs-article-font-large-paragraphIndent": "0px",
          "--sjs-article-font-large-textCase": "none",
          "--sjs-article-font-medium-textDecoration": "none",
          "--sjs-article-font-medium-fontWeight": "700",
          "--sjs-article-font-medium-fontStyle": "normal",
          "--sjs-article-font-medium-fontStretch": "normal",
          "--sjs-article-font-medium-letterSpacing": "0",
          "--sjs-article-font-medium-lineHeight": "32px",
          "--sjs-article-font-medium-paragraphIndent": "0px",
          "--sjs-article-font-medium-textCase": "none",
          "--sjs-article-font-default-textDecoration": "none",
          "--sjs-article-font-default-fontWeight": "400",
          "--sjs-article-font-default-fontStyle": "normal",
          "--sjs-article-font-default-fontStretch": "normal",
          "--sjs-article-font-default-letterSpacing": "0",
          "--sjs-article-font-default-lineHeight": "28px",
          "--sjs-article-font-default-paragraphIndent": "0px",
          "--sjs-article-font-default-textCase": "none",
          "--sjs-general-backcolor-dim": "rgba(255, 255, 255, 1)",
          "--sjs-primary-backcolor": "rgba(21, 112, 239, 1)",
          "--sjs-primary-backcolor-dark": "rgba(20, 105, 224, 1)",
          "--sjs-primary-backcolor-light": "rgba(21, 112, 239, 0.1)",
          "--sjs-primary-forecolor": "rgba(255, 255, 255, 1)",
          "--sjs-primary-forecolor-light": "rgba(255, 255, 255, 0.25)",
          "--sjs-special-red": "rgba(229, 10, 62, 1)",
          "--sjs-special-red-light": "rgba(229, 10, 62, 0.1)",
          "--sjs-header-backcolor": "transparent"
        },
        "header": {
          "height": 0
        },
        "headerView": "advanced"
      };

      console.log("Applying theme:", themeJson);

      // Initialize and render a simple survey to test the theme
      const surveyJSON = {
  "pages": [
    {
      "name": "Facility Details",
      "elements": [
        {
          "type": "panel",
          "name": "electricalDetails",
          "title": "Electrical Details",
          "elements": [
            {
              "type": "text",
              "name": "numberOfElectricalPanels",
              "title": "Number of Electrical Panels:",
              "isRequired": true
            },
            {
              "type": "paneldynamic",
              "name": "electricalPanels",
              "title": "Electrical Panel",
              "templateElements": [
                {
                  "type": "text",
                  "name": "panelName",
                  "title": "Panel Name (i.e. K, K1):",
                  "isRequired": true
                },
                {
                  "type": "dropdown",
                  "name": "voltageAvailable",
                  "title": "Voltage Available in Panel:",
                  "isRequired": true,
                  "choices": [
                    "120 Volt, 1 Phase",
                    "208 Volt, 1 Phase",
                    "240 Volt, 1 Phase",
                    "120/208 Volt, 1 Phase",
                    "120/208 Volt, 3 Phase",
                    "120/240 Volt, 3 Phase",
                    "480 Volt, 3 Phase"
                  ]
                },
                {
                  "type": "text",
                  "name": "totalAmpLoadAvailable",
                  "title": "Total Amp Load Available in Panel:",
                  "isRequired": true
                },
                {
                  "type": "radiogroup",
                  "name": "newElectricalServiceLocation",
                  "title": "NEW Electrical Service to Serving Line to be located in:",
                  "isRequired": true,
                  "choices": [
                    "Load Center",
                    "Interconnect Box with Daisy Chain",
                    "Individual Module Electrical Connections"
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "newElectricalServiceSource",
                  "title": "NEW Electrical Service to Serving Line to come from: (Select One)",
                  "isRequired": true,
                  "choices": [
                    "Floor",
                    "Building Wall",
                    "Overhead via UL Riser"
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "existingElectricalUsage",
                  "title": "Is there Existing Electrical from the Existing Serving Lines to be Used for the New Serving Lines?",
                  "isRequired": true,
                  "choices": [
                    "No",
                    "Yes"
                  ]
                },
                {
                  "type": "paneldynamic",
                  "name": "existingElectricalLines",
                  "visibleIf": "{existingElectricalUsage} = 'Yes'",
                  "title": "Existing Electrical Lines",
                  "templateElements": [
                    {
                      "type": "dropdown",
                      "name": "voltagePhase",
                      "title": "Voltage/Phase",
                      "isRequired": true,
                      "choices": [
                        "120 Volt, 1 Phase",
                        "208 Volt, 1 Phase",
                        "240 Volt, 1 Phase",
                        "120/208 Volt, 1 Phase",
                        "120/208 Volt, 3 Phase",
                        "120/240 Volt, 3 Phase",
                        "480 Volt, 3 Phase"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "ampRating",
                      "title": "Amp Rating",
                      "isRequired": true
                    },
                    {
                      "type": "text",
                      "name": "breakerNumberPosition",
                      "title": "Breaker Number / Position",
                      "isRequired": true
                    },
                    {
                      "type": "text",
                      "name": "notes",
                      "title": "Notes",
                      "isRequired": true
                    },
                    {
                      "type": "file",
                      "name": "breakerPhoto",
                      "title": "Breaker Photo",
                      "isRequired": true,
                      "allowMultiple": true,
                      "waitForUpload": true,
                      "sourceType": "file-camera"
                    },
                    {
                      "type": "file",
                      "name": "receptaclePhoto",
                      "title": "Photo of Receptacle or Plug Blades",
                      "isRequired": true,
                      "allowMultiple": true,
                      "waitForUpload": true,
                      "sourceType": "file-camera"
                    }
                  ],
                  "panelCount": 1
                },
                {
                  "type": "file",
                  "name": "panelBoxPhotos",
                  "title": "Include Pictures of Panel Box",
                  "description": "Exterior, Exterior of Panel Box Name/Number, Voltage/Phase/Amps Data Plate, Clusters of Breakers",
                  "isRequired": true,
                  "allowMultiple": true,
                  "waitForUpload": true,
                  "sourceType": "file-camera"
                }
              ],
              "templateTitle": "Panel #{panelIndex}",
              "panelCount": 1,
              "confirmDelete": true,
              "panelAddText": "Add new panel",
              "panelRemoveText": "Remove panel",
              "renderMode": "tab"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "dataRequired",
          "title": "Is Data Required?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "panel",
          "name": "dataDetails",
          "visibleIf": "{dataRequired} = 'Yes'",
          "title": "Data Details",
          "elements": [
            {
              "type": "radiogroup",
              "name": "dataTerminateLocation",
              "title": "Where will Data Terminate at the Serving Line?",
              "isRequired": true,
              "choices": [
                "Floor",
                "Ceiling",
                "Wireless"
              ]
            },
            {
              "type": "checkbox",
              "name": "dataRiser",
              "visibleIf": "{dataTerminateLocation} = 'Ceiling'",
              "title": "If Ceiling, is a Data Riser Needed?",
              "isRequired": true
            },
            {
              "type": "file",
              "name": "dataPhotos",
              "title": "Include Pictures",
              "isRequired": true,
              "allowMultiple": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            }
          ]
        },
        {
          "type": "radiogroup",
          "name": "crawlSpaceAvailable",
          "title": "Crawl Space Available?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "text",
          "name": "accessLocation",
          "visibleIf": "{crawlSpaceAvailable} = 'Yes'",
          "title": "Access Location:",
          "isRequired": true
        },
        {
          "type": "file",
          "name": "crawlSpacePhotos",
          "visibleIf": "{crawlSpaceAvailable} = 'Yes'",
          "title": "Include Pictures",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "radiogroup",
          "name": "waterAndDrainsAvailable",
          "title": "Water & Floor Drains Available?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "panel",
          "name": "waterDetails",
          "visibleIf": "{waterAndDrainsAvailable} = 'Yes'",
          "title": "Water Details",
          "elements": [
            {
              "type": "checkbox",
              "name": "waterStubUps",
              "title": "Are water stub-ups available?",
              "isRequired": true,
              "choices": [
                "Hot",
                "Cold",
                "Both Hot & Cold"
              ]
            },
            {
              "type": "radiogroup",
              "name": "addWaterStubUps",
              "title": "Do they need to be added?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ]
            },
            {
              "type": "radiogroup",
              "name": "floorDrainsAvailable",
              "title": "Are floor drains or floor sinks available?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ]
            },
            {
              "type": "radiogroup",
              "name": "addFloorDrains",
              "visibleIf": "{floorDrainsAvailable} = 'No'",
              "title": "Do they need to be added?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ]
            },
            {
              "type": "radiogroup",
              "name": "waterlessProject",
              "title": "Does the project need to be waterless?",
              "isRequired": true,
              "choices": [
                "No",
                "Yes"
              ]
            },
            {
              "type": "file",
              "name": "waterPhotos",
              "title": "Include Pictures of Water Stub Ups & Drains",
              "isRequired": true,
              "allowMultiple": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            }
          ]
        },
        {
          "type": "text",
          "name": "ceilingHeight",
          "title": "Ceiling Height:",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "ceilingType",
          "title": "Ceiling Type:",
          "isRequired": true,
          "choices": [
            "Hard Plaster",
            "Drop Ceiling"
          ]
        },
        {
          "type": "radiogroup",
          "name": "overheadComponents",
          "title": "Are there any overhead components in the space to be mindful of (i.e. Lights, HVAC Register, Soffit, etc.):",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "text",
          "name": "overheadComponentsDetails",
          "visibleIf": "{overheadComponents} = 'Yes'",
          "title": "Details:",
          "isRequired": true
        },
        {
          "type": "file",
          "name": "overheadComponentsPhotos",
          "visibleIf": "{overheadComponents} = 'Yes'",
          "title": "Include Pictures, if available",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true
        },
        {
          "type": "radiogroup",
          "name": "bestAccessDoor",
          "title": "Best Access Door Location:",
          "isRequired": true,
          "choices": [
            "Rear Door to Kitchen",
            "Other Door"
          ]
        },
        {
          "type": "text",
          "name": "otherDoorDetails",
          "visibleIf": "{bestAccessDoor} = 'Other Door'",
          "title": "Other Door Details:",
          "isRequired": true
        },
        {
          "type": "file",
          "name": "accessDoorPhotos",
          "visibleIf": "{bestAccessDoor} = 'Other Door'",
          "title": "Include Pictures",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "text",
          "name": "buildingDoorNumber",
          "title": "Is there an Identified Building Door Number?",
          "isRequired": true
        },
        {
          "type": "file",
          "name": "buildingDoorPhotos",
          "title": "Include Pictures",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "panel",
          "name": "accessPoint",
          "title": "Describe Access Point:",
          "elements": [
            {
              "type": "radiogroup",
              "name": "accessPointType",
              "isRequired": true,
              "choices": [
                "Rear Loading Dock",
                "Ramp",
                "Level on Grade",
                "Other"
              ]
            },
            {
              "type": "text",
              "name": "accessPointOtherDetails",
              "visibleIf": "{accessPointType} = 'Other'",
              "title": "Other Details:",
              "isRequired": true
            },
            {
              "type": "file",
              "name": "accessPointPhotos",
              "title": "Include Pictures",
              "isRequired": true,
              "allowMultiple": true,
              "waitForUpload": true,
              "sourceType": "file-camera"
            }
          ]
        },
        {
          "type": "text",
          "name": "doorWidth",
          "title": "Door Width:",
          "isRequired": true
        },
        {
          "type": "radiogroup",
          "name": "centerMullion",
          "title": "Is there a center mullion?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "radiogroup",
          "name": "removeCenterMullion",
          "visibleIf": "{centerMullion} = 'Yes'",
          "title": "Can the center mullion be removed?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "file",
          "name": "centerMullionPhotos",
          "visibleIf": "{centerMullion} = 'Yes'",
          "title": "Include Pictures",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "radiogroup",
          "name": "elevatorRequired",
          "title": "Will the serving line need to go in an elevator?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "text",
          "name": "elevatorModuleSize",
          "visibleIf": "{elevatorRequired} = 'Yes'",
          "title": "Maximum module size to fit in elevator",
          "isRequired": true
        },
        {
          "type": "file",
          "name": "elevatorPhotos",
          "visibleIf": "{elevatorRequired} = 'Yes'",
          "title": "Include Pictures",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "radiogroup",
          "name": "shippingConcern",
          "title": "Does the Factory Need to be Concerned about Shipping the Counter with Trayslides and/or Sneezeguards Shipped LOOSE to get in the serving space (YES if access is less than 48\")?",
          "isRequired": true,
          "choices": [
            "No",
            "Yes"
          ]
        },
        {
          "type": "file",
          "name": "accessVideo",
          "title": "Ideal Access Video (Document Path of Entrance to Location of Serving Lines via video):",
          "isRequired": true,
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "checkbox",
          "name": "importRoomLayout",
          "title": "Room Layout:",
          "isRequired": true,
          "choices": [
            "Import Hand-Drawn Room Layout with Measurements?",
            {
              "value": "Use Matterport 2 to Scan Room",
              "text": "Use Matterport to Scan Room"
            }
          ]
        },
        {
          "type": "file",
          "name": "question1",
          "visibleIf": "{importRoomLayout} allof ['Import Hand-Drawn Room Layout with Measurements?']",
          "title": "Room Layout Upload",
          "isRequired": true,
          "requiredIf": "{importRoomLayout} allof ['Import Hand-Drawn Room Layout with Measurements?']",
          "allowMultiple": true,
          "waitForUpload": true,
          "sourceType": "file-camera"
        },
        {
          "type": "text",
          "name": "question2",
          "visibleIf": "{importRoomLayout} allof ['Use Matterport 2 to Scan Room']",
          "title": "Matterport Preview Link",
          "isRequired": true,
          "requiredIf": "{importRoomLayout} allof ['Use Matterport 2 to Scan Room']",
          "inputType": "url"
        }
      ]
    }
  ]
}

      const survey = new Survey.Model(surveyJSON);
const storageItemKey = "step-4-survey";


        //Added Save function above this
      // Apply the custom theme to the survey instance
      survey.applyTheme(themeJson);
      console.log("Theme applied");

  survey.onAfterRenderQuestion.add(function (survey, options) {
            var questionElement = options.htmlElement;

            // Skip applying the custom layout for questions within dynamic panels
            if (options.question.isContentElement || options.question.getType() === "paneldynamic") {
                return;
            }

            // Create a new container for the custom layout
            var surveyRow = document.createElement("div");
            surveyRow.className = "survey-row";

            // Create the title and input elements
            var questionTitle = document.createElement("div");
            questionTitle.className = "question-title";
            questionTitle.innerHTML = options.question.title;

            var questionInput = document.createElement("div");
            questionInput.className = "question-input";

            // Move the existing input element to the question input div
            var children = Array.from(questionElement.childNodes);
            children.forEach(function(child) {
                if (child && child.nodeType === 1 && !child.classList.contains('sv_q_title') && !child.classList.contains('sd-question__header')) {
                    questionInput.appendChild(child);
                }
            });

            // Append title and input to the row
            surveyRow.appendChild(questionTitle);
            surveyRow.appendChild(questionInput);

            // Clear the question element and append the custom row
            questionElement.innerHTML = "";
            questionElement.appendChild(surveyRow);
        });
        
       

      survey.render("surveyContainer");
    } else {
      console.error("SurveyJS is not loaded");
    }
  });
