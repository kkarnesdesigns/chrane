document.addEventListener("DOMContentLoaded", function() {
    if (typeof Survey !== 'undefined') {
      console.log("SurveyJS is loaded");

        const storageItemKey = "step-4-form";

        function saveSurveyData (survey) {
            const data = survey.data;
            data.pageNo = survey.currentPageNo;
            window.localStorage.setItem(storageItemKey, JSON.stringify(data));
        }

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
          "--sjs-base-unit": "6px",
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
      "name": "Facility Construction & Decor Details",
      "elements": [
        {
          "type": "radiogroup",
          "name": "CJRResourcesRequired",
          "title": "Will CJR Resources be Required:",
          "choices": [
            {
              "value": "Yes",
              "text": "Yes, CJR Resources Required"
            },
            {
              "value": "No",
              "text": "No, Construction and/or Décor by Others"
            }
          ]
        },
        {
          "type": "panel",
          "name": "ScopeOfCJRResources",
          "visibleIf": "{CJRResourcesRequired} = 'Yes'",
          "requiredIf": "{CJRResourcesRequired} = 'Yes'",
          "title": "Scope of CJR Resources provided by Mod-U-Serve:",
          "elements": [
            {
              "type": "checkbox",
              "name": "Demolition",
              "state": "expanded",
              "title": "Demolition:",
              "choices": [
                "Serving Line Curb",
                "Wall(s)",
                "Ceiling Grid & Ceiling Tile",
                "Flooring",
                "Cap & Cover Existing Utilities",
                "FRP Wall Covering (Fiberglass Reinforced Plastic)",
                "Building Man Doors",
                "Building Roll Doors",
                "Soffits / Furdowns",
                "Lighting",
                "Existing Décor"
              ]
            },
            {
              "type": "panel",
              "name": "DemoAdditionalInfo",
              "title": "Additional Demolition Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "text",
                  "name": "DescribeWall",
                  "visibleIf": "{Demolition} allof ['Wall(s)']",
                  "title": "Describe Walls:",
                  "requiredIf": "{Demolition} allof ['Wall(s)']"
                },
                {
                  "type": "radiogroup",
                  "name": "LoadBearingOrFireWall",
                  "visibleIf": "{Demolition} allof ['Wall(s)']",
                  "title": "Is it known to be Load Bearing Wall or Fire Wall:",
                  "requiredIf": "{Demolition} allof ['Wall(s)']",
                  "choices": [
                    "Yes",
                    "No",
                    "Unknown"
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "AsBuiltBluePrints",
                  "visibleIf": "{Demolition} allof ['Wall(s)']",
                  "title": "Can As-Built Blue Prints of the Building be Provided:",
                  "requiredIf": "{Demolition} allof ['Wall(s)']",
                  "choices": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "checkbox",
                  "name": "Flooring",
                  "visibleIf": "{Demolition} allof ['Flooring']",
                  "title": "Flooring:",
                  "requiredIf": "{Demolition} allof ['Flooring']",
                  "choices": [
                    "Quarry Tile",
                    "Poured Epoxy Floor",
                    "Terrazzo",
                    "Vinyl Composite Tile (VCT)"
                  ]
                },
                {
                  "type": "checkbox",
                  "name": "CapAndCoverUtilities",
                  "visibleIf": "{Demolition} allof ['Cap & Cover Existing Utilities']",
                  "title": "Cap & Cover Existing Utilities:",
                  "requiredIf": "{Demolition} allof ['Cap & Cover Existing Utilities']",
                  "choices": [
                    "Floor Drains",
                    "Floor Electrical"
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "ElectricalDetails",
              "title": "Electrical Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "text",
                  "name": "ElectricalRoughIns",
                  "title": "Electrical Rough-Ins: Approximate Linear Feet Distance (include vertical, horizontal and drop distances)"
                },
                {
                  "type": "radiogroup",
                  "name": "FinalElectricalConnections",
                  "title": "Final Electrical Connections:",
                  "choices": [
                    "Yes",
                    "No"
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "PlumbingDetails",
              "title": "Plumbing Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "checkbox",
                  "name": "PlumbingRoughIns",
                  "title": "Plumbing Rough-Ins:",
                  "choices": [
                    "Cold Water Stub-Up",
                    "Hot Water Stub-Up",
                    "Floor Drain",
                    "Floor Sink",
                    "Floor Trough"
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "PlumbingPreference",
                  "title": "Plumbing Preference:",
                  "choices": [
                    "Copper Pipe",
                    "Pex Pipe"
                  ]
                },
                {
                  "type": "checkbox",
                  "name": "FinalPlumbingConnections",
                  "title": "Final Plumbing Connections:",
                  "choices": [
                    "Cold Water Stub-Up",
                    "Hot Water Stub-Up",
                    "Floor Drain",
                    "Floor Sink",
                    "Floor Trough"
                  ]
                },
                {
                  "type": "comment",
                  "name": "FiltrationRequired",
                  "title": "Filtration Required (Type, Location, Quantity)?"
                }
              ]
            },
            {
              "type": "panel",
              "name": "DataDetails",
              "title": "Data Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "text",
                  "name": "DataConduitInitiationPoint",
                  "title": "Conduit for Data (Data needs to be run by End-User's Technology Department): Initiation Point"
                },
                {
                  "type": "text",
                  "name": "DataConduitTerminationPoint",
                  "title": "Termination Point"
                },
                {
                  "type": "text",
                  "name": "DataConduitApproxLinearFeet",
                  "title": "Approximate Linear Feet Distance (include vertical, horizontal and drop distances)"
                }
              ]
            },
            {
              "type": "panel",
              "name": "PaintDetails",
              "title": "Paint Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "checkbox",
                  "name": "PaintOptions",
                  "title": "Paint:",
                  "choices": [
                    "Will the End-User Provide the Paint?",
                    {
                      "value": "CJRProvidePaint",
                      "text": "Will CJR Provide Paint?"
                    }
                  ]
                },
                {
                  "type": "checkbox",
                  "name": "PaintColor",
                  "visibleIf": "{PaintOptions} allof ['CJRProvidePaint']",
                  "title": "Paint Color",
                  "choices": [
                    "Will it be a new color?",
                    "Will it be matching an existing color?"
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "DecorativeLightingDetail",
              "title": "Decorative Lighting Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "OverheadSoffitsLighting",
                  "title": "Overhead Soffits and/or Decorative Lighting:",
                  "choices": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "text",
                  "name": "OverheadSoffitsLightingDescription",
                  "visibleIf": "{OverheadSoffitsLighting} = 'Yes'",
                  "title": "Text Field Describing"
                }
              ]
            },
            {
              "type": "panel",
              "name": "CeilingGridCeilingTileDetails",
              "title": "Ceiling Grid & Ceiling Tile Details",
              "state": "expanded",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "CeilingGridAndTileDetails",
                  "title": "Ceiling Grid & Ceiling Tile:",
                  "choices": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "text",
                  "name": "CeilingHeightDesired",
                  "title": "Ceiling Height Desired"
                },
                {
                  "type": "radiogroup",
                  "name": "CeilingTileSize",
                  "visibleIf": "{CeilingGridAndTileDetails} = 'Yes'",
                  "title": "2' x 2' or 2' x 4'",
                  "choices": [
                    "2' x 2'",
                    "2' x 4'"
                  ]
                },
                {
                  "type": "radiogroup",
                  "name": "CeilingTileManufacturer",
                  "visibleIf": "{CeilingGridAndTileDetails} = 'Yes'",
                  "title": "Does the End-User have a Specific Ceiling Tile Manufacturer / Model",
                  "choices": [
                    "End-User Provided",
                    "CJR Provided"
                  ]
                },
                {
                  "type": "text",
                  "name": "CeilingTileDescription",
                  "visibleIf": "{CeilingTileManufacturer} = 'End-User Provided'",
                  "title": "Text Field Describing"
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel1",
              "title": "Lighting",
              "state": "expanded",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "LightingDetails",
                  "title": "Lighting required?",
                  "choices": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "panel",
                  "name": "panel2",
                  "visibleIf": "{LightingDetails} = 'Yes'",
                  "requiredIf": "{LightingDetails} = 'Yes'",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "LightingSize",
                      "title": "Size:",
                      "choices": [
                        "2' x 2'",
                        "2' x 4'",
                        "Can",
                        "Other"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "LightingManufacturer",
                      "title": "Does the End-User have a Specific Lighting Manufacturer / Model",
                      "choices": [
                        "End-User Provided",
                        "CJR Provided"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "LightingDescription",
                      "title": "Text Field Describing"
                    }
                  ]
                }
              ]
            },
            {
              "type": "checkbox",
              "name": "FloorScope",
              "state": "expanded",
              "title": "Floor Scope:",
              "choices": [
                "Patch Existing",
                "New 6\" x 6\" Quarry Tile",
                "Vinyl Poured / Welded Floor",
                "New Terrazzo",
                "Terrazzo Rework",
                "Other"
              ],
              "showNoneItem": true
            },
            {
              "type": "panel",
              "name": "panel3",
              "title": "Construction",
              "state": "expanded",
              "elements": [
                {
                  "type": "checkbox",
                  "name": "Construction",
                  "title": " Construction Needed",
                  "choices": [
                    "Walls",
                    "Doors",
                    "Roll-Down Doors",
                    "Glass Storefronts",
                    "HVAC Rework",
                    "Overhead Soffits / Furdowns",
                    "Other"
                  ],
                  "showNoneItem": true
                },
                {
                  "type": "checkbox",
                  "name": "Doors",
                  "visibleIf": "{Construction} allof ['Doors']",
                  "title": "Doors:",
                  "requiredIf": "{Construction} allof ['Doors']",
                  "choices": [
                    "Solid Wood Core",
                    "Glass Man Door"
                  ]
                },
                {
                  "type": "checkbox",
                  "name": "RollDownDoors",
                  "visibleIf": "{Construction} allof ['Roll-Down Doors']",
                  "title": "Roll-Down Door Type:",
                  "choices": [
                    {
                      "value": "ManualLift",
                      "text": "Manual Lift"
                    },
                    {
                      "value": "ElectronicLift",
                      "text": "Electronic Lift"
                    }
                  ]
                },
                {
                  "type": "checkbox",
                  "name": "GarageDoorFinish",
                  "visibleIf": "{Construction} allof ['Roll-Down Doors']",
                  "title": "Roll-Down Door Finish:",
                  "choices": [
                    "Galvanized Aluminum",
                    "Painted",
                    "Glass"
                  ],
                  "showNoneItem": true
                },
                {
                  "type": "text",
                  "name": "OtherConstruction",
                  "visibleIf": "{Construction} allof ['Other']",
                  "title": "Other:"
                }
              ]
            },
            {
              "type": "text",
              "name": "EquipmentRemoved",
              "title": "Equipment Removed & Relocated:"
            },
            {
              "type": "text",
              "name": "EquipmentInstalled",
              "title": "Equipment Installed in addition to Mod-U-Serve:"
            }
          ]
        },
        {
          "type": "panel",
          "name": "panel4",
          "title": "Scope of Décor and/or Furniture Required as part of the Mod-U-Serve Package:",
          "state": "expanded",
          "elements": [
            {
              "type": "panel",
              "name": "panel5",
              "title": "Décor Goals",
              "state": "expanded",
              "elements": [
                {
                  "type": "comment",
                  "name": "DecorGoals",
                  "title": "Describe Décor Goals:"
                },
                {
                  "type": "file",
                  "name": "DecorPhotos",
                  "title": "Take Photos",
                  "allowMultiple": true,
                  "waitForUpload": true,
                  "sourceType": "file-camera"
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel6",
              "title": "Furniture Goals",
              "state": "expanded",
              "elements": [
                {
                  "type": "comment",
                  "name": "FurnitureGoals",
                  "title": "Describe Furniture Goals:"
                },
                {
                  "type": "file",
                  "name": "FurniturePhotos",
                  "title": "Take Photos",
                  "allowMultiple": true,
                  "waitForUpload": true,
                  "sourceType": "file-camera"
                }
              ]
            },
            {
              "type": "panel",
              "name": "panel7",
              "title": "Crowd Control",
              "state": "expanded",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "CrowdControlType",
                  "title": "Crowd Control Type",
                  "choices": [
                    "Portable",
                    "Core Drilled"
                  ]
                },
                {
                  "type": "comment",
                  "name": "CrowdControlText",
                  "title": "Crowd Control Details:"
                },
                {
                  "type": "file",
                  "name": "CrowdControlPhotos",
                  "title": "Take Photos",
                  "allowMultiple": true,
                  "waitForUpload": true,
                  "sourceType": "file-camera"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  "showQuestionNumbers": "off",
  "showProgressBar": "belowheader",
  "progressBarShowPageTitles": true
}

      const survey = new Survey.Model(surveyJSON);

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

        // Save survey results to the local storage
        survey.onValueChanged.add(saveSurveyData);
        survey.onCurrentPageChanged.add(saveSurveyData);

        // Restore survey results
        const prevData = window.localStorage.getItem(storageItemKey) || null;
        if (prevData) {
            const data = JSON.parse(prevData);
            survey.data = data;
            if (data.pageNo) {
                survey.currentPageNo = data.pageNo;
            }
        }

        // Log survey results and empty the local storage after the survey is completed
        survey.onComplete.add((sender) => {
            console.log(JSON.stringify(sender.data, null, 3));
            window.localStorage.setItem(storageItemKey, "");
        });


      survey.render("surveyContainer");
    } else {
      console.error("SurveyJS is not loaded");
    }
  });
