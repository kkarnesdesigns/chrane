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
  "title": "Serving Line Intake Form",
  "pages": [
    {
      "name": "HotService",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "Serving Line Details",
          "title": "Serving Line Details",
          "clearIfInvisible": "onComplete",
          "isRequired": true,
          "templateElements": [
            {
              "type": "text",
              "name": "NameofServingLine",
              "title": "Name of Serving Line"
            },
            {
              "type": "matrixdropdown",
              "name": "TypeofServiceLine",
              "title": "Types of Service Lines",
              "columns": [
                {
                  "name": "Hot Service",
                  "title": "Hot Service",
                  "cellType": "boolean"
                },
                {
                  "name": "Column 3",
                  "title": "Cold Service",
                  "cellType": "boolean"
                },
                {
                  "name": "Hot/Cold Service",
                  "title": "Hot/Cold Service",
                  "cellType": "boolean"
                },
                {
                  "name": "Beverage Service",
                  "title": "Beverage Service",
                  "cellType": "boolean"
                },
                {
                  "name": "Ice Service",
                  "cellType": "boolean"
                },
                {
                  "name": "Other",
                  "title": "Other",
                  "cellType": "boolean"
                }
              ],
              "choices": [
                1,
                2,
                3,
                4,
                5
              ],
              "rows": [
                {
                  "value": "Type of Service for Line",
                  "text": "Does this line have the following?"
                }
              ]
            },
            {
              "type": "panel",
              "name": "HotServicePanel",
              "visibleIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Hot Service} = true",
              "requiredIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Hot Service} = true",
              "title": "Hot Service",
              "elements": [
                {
                  "type": "panel",
                  "name": "HotServiceComponentsPanel",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "HotServiceComponentTypes",
                      "title": "Select all that Apply (Check Box):",
                      "choices": [
                        "Mod-U-Serve Individual 12\" x 20\" Hot Wells",
                        "Mod-U-Serve Bulk Bain-Marie Style Hot Well",
                        "CookTek Induction Waterless Hot Wells (provided by MUS)",
                        "Alto-Shaam Waterless Hot Wells (provided by MUS)",
                        "Hot Food Sheet Pan Units",
                        "Heated Mail Slot Merchandiser",
                        "Other Hot Component"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeIndividualHotWellsPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'Mod-U-Serve Individual 12\" x 20\" Hot Wells'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfHotWells",
                      "title": "Number of 12\" x 20\" Wells",
                      "choices": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansHotWells",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "FillFaucetHotWells",
                      "title": "Fill Faucet",
                      "choices": [
                        "Cold Water Only",
                        "Hot Water Only",
                        "Hot & Cold Water"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "WellDrainValvesHotWells",
                      "title": "Individual Well Drain Valves",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredHotWells",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthHotWells",
                      "visibleIf": "{TrayStorageFlatTopRequiredHotWells} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredHotWells",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthHotWells",
                      "visibleIf": "{TrayPassFlatTopRequiredHotWells} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfHotWells",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletHotWells",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "HeatedTroughForBoatsHotWells",
                      "title": "Heated Trough for \"boats\" in front of Hot Wells",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesHotWells",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeBulkBainMarieHotWellPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'Mod-U-Serve Bulk Bain-Marie Style Hot Well'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfPanCapacityHotWell",
                      "title": "Number of 12\" x 20\" Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansBulkHotWell",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "FillFaucetBulkHotWell",
                      "title": "Fill Faucet",
                      "choices": [
                        "Cold Water Only",
                        "Hot Water Only",
                        "Hot & Cold Water"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredBulkHotWell",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthBulkHotWell",
                      "visibleIf": "{TrayStorageFlatTopRequiredBulkHotWell} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredBulkHotWell",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthBulkHotWell",
                      "visibleIf": "{TrayPassFlatTopRequiredBulkHotWell} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfBulkHotWell",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletBulkHotWell",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "HeatedTroughForBoatsBulkHotWell",
                      "title": "Heated Trough for \"boats\" in front of Hot Wells",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesBulkHotWell",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "CookTekInductionWaterlessHotWellsPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'CookTek Induction Waterless Hot Wells (provided by MUS)'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfPanCapacityCookTek",
                      "title": "Number of 12\" x 20\" Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "PanDepthCookTek",
                      "title": "Pan Depth - MUST CLARIFY",
                      "choices": [
                        "4\"",
                        "6\""
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansCookTek",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredCookTek",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthCookTek",
                      "visibleIf": "{TrayStorageFlatTopRequiredCookTek} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredCookTek",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthCookTek",
                      "visibleIf": "{TrayPassFlatTopRequiredCookTek} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfCookTek",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletCookTek",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "HeatedTroughForBoatsCookTek",
                      "title": "Heated Trough for \"boats\" in front of Hot Wells",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesCookTek",
                      "title": "Additional Notes"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkCookTek",
                      "html": "<a href=\"https://cooktek.com/wp-content/uploads/2018/07/DOC-1802B-Rectangular-SinAqua-3-in-1-Controls-Spec-Sheet-EN.pdf\">Manufacturer Report Link</a>"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "AltoShaamWaterlessHotWellsPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'Alto-Shaam Waterless Hot Wells (provided by MUS)'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfPanCapacityAltoShaam",
                      "title": "Number of 12\" x 20\" Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "PanDepthAltoShaam",
                      "title": "Pan Depth - MUST CLARIFY",
                      "choices": [
                        "2-1/2\" & 4\"",
                        "6\""
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansAltoShaam",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredAltoShaam",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthAltoShaam",
                      "visibleIf": "{TrayStorageFlatTopRequiredAltoShaam} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredAltoShaam",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthAltoShaam",
                      "visibleIf": "{TrayPassFlatTopRequiredAltoShaam} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfAltoShaam",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletAltoShaam",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "HeatedTroughForBoatsAltoShaam",
                      "title": "Heated Trough for \"boats\" in front of Hot Wells",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesAltoShaam",
                      "title": "Additional Notes"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkAltoShaam",
                      "html": "<a href=\"https://altoshaam.widen.net/s/vqg9wsfdjk/specification-sheet_hot-wells_300-hw_hw-spc-0005-en\">Manufacturer Report Link</a>"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "HotFoodSheetPanUnitsPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'Hot Food Sheet Pan Units'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "HeightUnitsProvided",
                      "title": "Height Unit(s) Provided",
                      "choices": [
                        "Counter Height",
                        "Elevated",
                        "Both"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "DescribeLocatedAboveComponents",
                      "title": "Describe Located above what Components?"
                    },
                    {
                      "type": "radiogroup",
                      "name": "SelectOvershelfMaterial",
                      "title": "Select Overshelf Material",
                      "choices": [
                        "Stainless Steel Overshelf with built-in Stainless Steel Heated Sheet Pan Unit (Standard)",
                        "Glass Overshelf with built-in Heated Stainless Steel Sheet Pan Unit",
                        "Heated Manufactured Stone Overshelf (no Exposed Stainless Steel)",
                        "Manufactured Stone Overshelf with built-In Stainless Steel Sheet Pan Unit"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "IfElevated",
                      "visibleIf": "{HeightUnitsProvided} contains 'Elevated'",
                      "title": "If Elevated",
                      "choices": [
                        "One (1) Elevated Tier",
                        "Two (2) Elevated Tiers"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "NumberOfSheetPanCapacity",
                      "title": "Number of 18\" x 26\" Sheet Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "OrientationOfSheetPans",
                      "title": "Orientation of 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Standard (26\" Dimension Oriented in Counter Front to Back)",
                        "Slimline (26\" Dimension Oriented in Left to Right)"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredSheetPan",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthSheetPan",
                      "visibleIf": "{TrayStorageFlatTopRequiredSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredSheetPan",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthSheetPan",
                      "visibleIf": "{TrayPassFlatTopRequiredSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfSheetPan",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletSheetPan",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "HeatedTroughForBoatsSheetPan",
                      "title": "Heated Trough for \"boats\" in front of Hot Wells",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesSheetPan",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "HeatedMailSlotMerchandiserPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'Heated Mail Slot Merchandiser'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "TypeOfHeatedMailSlot",
                      "title": "Type of Heated Mail Slot",
                      "choices": [
                        "Free Standing on Casters",
                        "Drop-In built into Serving Line"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "CapacityOfHeatedMailSlotBays",
                      "visibleIf": "{TypeOfHeatedMailSlot} = 'Free Standing on Casters'",
                      "title": "Capacity of Heated Mail Slot Bays Desired",
                      "choices": [
                        "48 Mail Slot Bays at 4' 7\" wide",
                        "56 Mail Slot Bays at 5' 4\" wide"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "CapacityOfDropInHeatedMailSlotBays",
                      "visibleIf": "{TypeOfHeatedMailSlot} = 'Drop-In built into Serving Line'",
                      "title": "Capacity of Heated Mail Slot Bays Desired",
                      "choices": [
                        "36 Mail Slot Bays at 4' 7\" wide",
                        "42 Mail Slot Bays at 5' 4\" wide"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesHeatedMailSlot",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "OtherHotComponentPanel",
                  "visibleIf": "{HotServiceComponentTypes} contains 'Other Hot Component'",
                  "elements": [
                    {
                      "type": "comment",
                      "name": "OtherHotComponent",
                      "title": "Specify Other Hot Component"
                    }
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "ColdServicePanel",
              "visibleIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Column 3} = true",
              "requiredIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Column 3} = true",
              "title": "Cold Service",
              "elements": [
                {
                  "type": "radiogroup",
                  "name": "ColdServiceComponentsRequired",
                  "title": "Are Cold Service Components Required?",
                  "choices": [
                    "Yes",
                    "No"
                  ]
                },
                {
                  "type": "panel",
                  "name": "ColdServiceComponentsPanel",
                  "visibleIf": "{ColdServiceComponentsRequired} = 'Yes'",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "ColdServiceComponentTypes",
                      "title": "Select all that Apply (Check Box):",
                      "choices": [
                        "Mod-U-Serve Cold Wells",
                        "Cold Food Sheet Pan Units",
                        "Refrigerated Mail Slot Merchandiser",
                        "Other Cold Component"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeColdWellsPanel",
                  "visibleIf": "{ColdServiceComponentTypes} contains 'Mod-U-Serve Cold Wells'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "StyleOfColdWell",
                      "title": "Style of Cold Well",
                      "choices": [
                        "Bulk Bain-Marie Style Cold Wells (Mod-U-Serve Standard)",
                        "Individually wrapped Cold Wells"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "AngleOfColdWells",
                      "title": "Angle of Cold Wells",
                      "choices": [
                        "Flat at Countertop (Mod-U-Serve Standard)",
                        "Angled Towards Student"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "NumberOfColdWellPanCapacity",
                      "title": "Number of 12\" x 20\" Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredColdWell",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthColdWell",
                      "visibleIf": "{TrayStorageFlatTopRequiredColdWell} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredColdWell",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthColdWell",
                      "visibleIf": "{TrayPassFlatTopRequiredColdWell} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfColdWell",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletColdWell",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesColdWell",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ColdFoodSheetPanUnitsPanel",
                  "visibleIf": "{ColdServiceComponentTypes} contains 'Cold Food Sheet Pan Units'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "HeightUnitsProvidedColdSheetPan",
                      "title": "Height Unit(s) Provided",
                      "choices": [
                        "Counter Height",
                        "Elevated",
                        "Both"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "DescribeLocatedAboveComponentsColdSheetPan",
                      "title": "Describe Located above what Components?"
                    },
                    {
                      "type": "radiogroup",
                      "name": "SelectOvershelfMaterialColdSheetPan",
                      "title": "Select Overshelf Material",
                      "choices": [
                        "Stainless Steel Overshelf with built-in Stainless Steel Cold Food Sheet Pan Unit (Standard)",
                        "Glass Overshelf with built-in Cold Food Stainless Steel Sheet Pan Unit",
                        "Cold Food Manufactured Stone Overshelf (no Exposed Stainless Steel)",
                        "Cold Food Stone Overshelf with built-In Stainless Steel Sheet Pan Unit"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "IfElevatedColdSheetPan",
                      "visibleIf": "{HeightUnitsProvidedColdSheetPan} contains 'Elevated'",
                      "title": "If Elevated",
                      "choices": [
                        "One (1) Elevated Tier",
                        "Two (2) Elevated Tiers"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "NumberOfSheetPanCapacityColdSheetPan",
                      "title": "Number of 18\" x 26\" Sheet Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "OrientationOfSheetPansColdSheetPan",
                      "title": "Orientation of 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Standard (26\" Dimension Oriented in Counter Front to Back)",
                        "Slimline (26\" Dimension Oriented in Left to Right)"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredColdSheetPan",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthColdSheetPan",
                      "visibleIf": "{TrayStorageFlatTopRequiredColdSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredColdSheetPan",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthColdSheetPan",
                      "visibleIf": "{TrayPassFlatTopRequiredColdSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfColdSheetPan",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletColdSheetPan",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesColdSheetPan",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "RefrigeratedMailSlotMerchandiserPanel",
                  "visibleIf": "{ColdServiceComponentTypes} contains 'Refrigerated Mail Slot Merchandiser'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "TypeOfRefrigeratedMailSlot",
                      "title": "Type of Refrigerated Mail Slot",
                      "choices": [
                        "Free Standing on Casters",
                        "Drop-In built into Serving Line"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "CapacityOfRefrigeratedMailSlotBays",
                      "visibleIf": "{TypeOfRefrigeratedMailSlot} = 'Free Standing on Casters'",
                      "title": "Capacity of Refrigerated Mail Slot Bays Desired",
                      "choices": [
                        "48 Mail Slot Bays at 4' 7\" wide",
                        "56 Mail Slot Bays at 5' 4\" wide"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "CapacityOfDropInRefrigeratedMailSlotBays",
                      "visibleIf": "{TypeOfRefrigeratedMailSlot} = 'Drop-In built into Serving Line'",
                      "title": "Capacity of Refrigerated Mail Slot Bays Desired",
                      "choices": [
                        "36 Mail Slot Bays at 4' 7\" wide",
                        "42 Mail Slot Bays at 5' 4\" wide"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesRefrigeratedMailSlot",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "OtherColdComponentPanel",
                  "visibleIf": "{ColdServiceComponentTypes} contains 'Other Cold Component'",
                  "elements": [
                    {
                      "type": "comment",
                      "name": "OtherColdComponent",
                      "title": "Specify Other Cold Component"
                    }
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "CombinedHotColdServicePanel",
              "visibleIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Hot/Cold Service} = true",
              "requiredIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Hot/Cold Service} = true",
              "title": "Combined Hot/Cold Service",
              "elements": [
                {
                  "type": "panel",
                  "name": "CombinedServiceComponentsPanel",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "CombinedServiceComponentTypes",
                      "title": "Select all that Apply (Check Box):",
                      "choices": [
                        "Mod-U-Serve Individual Hot / Cold Wells",
                        "Mod-U-Serve Bulk Bain-Marie Style Hot/Cold Wells",
                        "LTI Quick Switch Individual Hot / Cold / Freeze Waterless Wells (by MUS)",
                        "Hot / Cold Food Sheet Pan Units",
                        "Other Hot/Cold Component"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeIndividualHotColdWellsPanel",
                  "visibleIf": "{CombinedServiceComponentTypes} contains 'Mod-U-Serve Individual Hot / Cold Wells'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfHotColdWells",
                      "title": "Number of 12\" x 20\" Wells",
                      "choices": [
                        1,
                        2,
                        3,
                        4,
                        5,
                        6
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansHotColdWells",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "FillFaucetHotColdWells",
                      "title": "Fill Faucet",
                      "choices": [
                        "Cold Water Only",
                        "Hot Water Only",
                        "Hot & Cold Water"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredHotColdWells",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthHotColdWells",
                      "visibleIf": "{TrayStorageFlatTopRequiredHotColdWells} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredHotColdWells",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthHotColdWells",
                      "visibleIf": "{TrayPassFlatTopRequiredHotColdWells} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfHotColdWells",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletHotColdWells",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesHotColdWells",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeBulkBainMarieHotColdWellsPanel",
                  "visibleIf": "{CombinedServiceComponentTypes} contains 'Mod-U-Serve Bulk Bain-Marie Style Hot/Cold Wells'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfPanCapacityHotColdWell",
                      "title": "Number of 12\" x 20\" Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3,
                        4
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansBulkHotColdWell",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "FillFaucetBulkHotColdWell",
                      "title": "Fill Faucet",
                      "choices": [
                        "Cold Water Only",
                        "Hot Water Only",
                        "Hot & Cold Water"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredBulkHotColdWell",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthBulkHotColdWell",
                      "visibleIf": "{TrayStorageFlatTopRequiredBulkHotColdWell} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredBulkHotColdWell",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthBulkHotColdWell",
                      "visibleIf": "{TrayPassFlatTopRequiredBulkHotColdWell} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfBulkHotColdWell",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletBulkHotColdWell",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesBulkHotColdWell",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "LTIQuickSwitchHotColdFreezeWellsPanel",
                  "visibleIf": "{CombinedServiceComponentTypes} contains 'LTI Quick Switch Individual Hot / Cold / Freeze Waterless Wells (by MUS)'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "NumberOfPanCapacityLTIQuickSwitch",
                      "title": "Number of 12\" x 20\" Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3,
                        4
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "RecessForSheetPansLTIQuickSwitch",
                      "title": "1\" Recess to accommodate 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredLTIQuickSwitch",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthLTIQuickSwitch",
                      "visibleIf": "{TrayStorageFlatTopRequiredLTIQuickSwitch} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredLTIQuickSwitch",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthLTIQuickSwitch",
                      "visibleIf": "{TrayPassFlatTopRequiredLTIQuickSwitch} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfLTIQuickSwitch",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletLTIQuickSwitch",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesLTIQuickSwitch",
                      "title": "Additional Notes"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkLTIQuickSwitch",
                      "html": "<a href=\"https://lowtempind.com/wp-content/uploads/2018/04/lti-quickswitch-hot-cold-freeze-drop-ins.pdf\">Manufacturer Report Link</a>"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "HotColdFoodSheetPanUnitsPanel",
                  "visibleIf": "{CombinedServiceComponentTypes} contains 'Hot / Cold Food Sheet Pan Units'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "HeightUnitsProvidedHotColdSheetPan",
                      "title": "Height Unit(s) Provided",
                      "choices": [
                        "Counter Height",
                        "Elevated",
                        "Both"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "DescribeLocatedAboveComponentsHotColdSheetPan",
                      "title": "Describe Located above what Components?"
                    },
                    {
                      "type": "radiogroup",
                      "name": "SelectOvershelfMaterialHotColdSheetPan",
                      "title": "Select Overshelf Material",
                      "choices": [
                        "Stainless Steel Overshelf with built-in Stainless Steel Hot/Cold Sheet Pan Unit (Standard)",
                        "Glass Overshelf with built-in Hot/Cold Stainless Steel Sheet Pan Unit",
                        "Hot/Cold Manufactured Stone Overshelf (no Exposed Stainless Steel)",
                        "Mot/Cold Stone Overshelf with built-In Stainless Steel Sheet Pan Unit"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "IfElevatedHotColdSheetPan",
                      "visibleIf": "{HeightUnitsProvidedHotColdSheetPan} contains 'Elevated'",
                      "title": "If Elevated",
                      "choices": [
                        "One (1) Elevated Tier",
                        "Two (2) Elevated Tiers"
                      ]
                    },
                    {
                      "type": "dropdown",
                      "name": "NumberOfSheetPanCapacityHotColdSheetPan",
                      "title": "Number of 18\" x 26\" Sheet Pan Capacity",
                      "choices": [
                        1,
                        2,
                        3
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "OrientationOfSheetPansHotColdSheetPan",
                      "title": "Orientation of 18\" x 26\" Sheet Pans",
                      "choices": [
                        "Standard (26\" Dimension Oriented in Counter Front to Back)",
                        "Slimline (26\" Dimension Oriented in Left to Right)"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayStorageFlatTopRequiredHotColdSheetPan",
                      "title": "Tray Storage Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayStorageFlatTopWidthHotColdSheetPan",
                      "visibleIf": "{TrayStorageFlatTopRequiredHotColdSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayPassFlatTopRequiredHotColdSheetPan",
                      "title": "Tray Pass Flat Top Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayPassFlatTopWidthHotColdSheetPan",
                      "visibleIf": "{TrayPassFlatTopRequiredHotColdSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfHotColdSheetPan",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletHotColdSheetPan",
                      "title": "120 Volt Convenience Outlet (Check all that apply)",
                      "choices": [
                        "None",
                        "Side Mount for adjacent Milk Cooler or Other Equipment",
                        "Rear Apron or Control Panel"
                      ]
                    },
                    {
                      "type": "comment",
                      "name": "AdditionalNotesHotColdSheetPan",
                      "title": "Additional Notes"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "OtherHotColdComponentPanel",
                  "visibleIf": "{CombinedServiceComponentTypes} contains 'Other Hot/Cold Component'",
                  "elements": [
                    {
                      "type": "comment",
                      "name": "OtherHotColdComponent",
                      "title": "Specify Other Hot/Cold Component"
                    }
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "BeverageServicePanel",
              "visibleIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Beverage Service} = true",
              "requiredIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Beverage Service} = true",
              "title": "Beverage Service",
              "elements": [
                {
                  "type": "panel",
                  "name": "BeverageServiceComponentsPanel",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "BeverageServiceComponentTypes",
                      "title": "Select all that Apply (Check Box):",
                      "choices": [
                        "Mod-U-Serve Drop-In Beverage Unit",
                        "Mod-U-Serve Milk Cooler (Milk Crate)",
                        "Milk Cooler(s) by Other Manufacturer or Existing Milk Cooler(s)",
                        "Silver King Bulk Milk Dispenser (Provided by Mod-U-Serve)",
                        "Other Beverage Needs"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeDropInBeverageUnitPanel",
                  "visibleIf": "{BeverageServiceComponentTypes} contains 'Mod-U-Serve Drop-In Beverage Unit'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "SizeDropInBeverageUnit",
                      "title": "Size",
                      "choices": [
                        "10\" x 20\" by Mod-U-Serve",
                        "20\" x 20\" by Mod-U-Serve"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "LidTypeDropInBeverageUnit",
                      "title": "Lid Type",
                      "choices": [
                        "Stainless Steel Lid (Standard)",
                        "Clear Lid"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "AngleOfServiceDropInBeverageUnit",
                      "title": "Angle of Service",
                      "choices": [
                        "Flat",
                        "Slanted Towards Student"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeMilkCoolerPanel",
                  "visibleIf": "{BeverageServiceComponentTypes} contains 'Mod-U-Serve Milk Cooler (Milk Crate)'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "TypeOfMilkCooler",
                      "title": "Type of Milk Cooler",
                      "choices": [
                        "Free Standing",
                        "Inline Built into Serving Line"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "FreeStandingMilkCoolerPanel",
                      "visibleIf": "{TypeOfMilkCooler} = 'Free Standing'",
                      "elements": [
                        {
                          "type": "dropdown",
                          "name": "NumberOfCrates",
                          "title": "Number of Crates Desired",
                          "choices": [
                            8,
                            12,
                            16
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "SingleOrDoubleSidedAccess",
                          "title": "Single or Double-Sided Access",
                          "choices": [
                            "Single Sided",
                            "Double Sided"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "FinishOptions",
                          "title": "Finish Options",
                          "choices": [
                            "Stainless Steel (Mod-U-Serve Standard)",
                            "Plastic Laminate",
                            "Custom Plastic Laminate"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "AreStripCurtainsRequired",
                          "title": "Are Strip Curtains Required",
                          "choices": [
                            "Yes",
                            "No"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "Casters",
                          "title": "Casters",
                          "choices": [
                            "Standard",
                            "Pneumatic for Transportation"
                          ]
                        },
                        {
                          "type": "comment",
                          "name": "AdditionalNotesFreeStandingMilkCooler",
                          "title": "Additional Notes"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "InlineBuiltInMilkCoolerPanel",
                      "visibleIf": "{TypeOfMilkCooler} = 'Inline Built into Serving Line'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "NumberOfCratesInline",
                          "title": "Number of Crates Desired",
                          "choices": [
                            "1 Crate",
                            "2 Crates Slimline (2 Crates Left to Right)",
                            "3 Crates Slimline (3 Crates Left to Right)",
                            "2 Crates (2 Crates Front to Back)",
                            "4 Crates (2 Crates Front to Back x 2 Crates Left to Right)",
                            "6 Crates (2 Crates Front to Back x 3 Crates Left to Right)"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "AngleOfMilkCrates",
                          "title": "Angle of Milk Crates",
                          "choices": [
                            "Flat at Countertop (Mod-U-Serve Standard)",
                            "Angled Towards Student"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "FinishOptionsInline",
                          "title": "Finish Options",
                          "choices": [
                            "Same as Serving Line Front Finish"
                          ]
                        },
                        {
                          "type": "comment",
                          "name": "AdditionalNotesInlineBuiltInMilkCooler",
                          "title": "Additional Notes"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "MilkCoolerByOtherManufacturerPanel",
                  "visibleIf": "{BeverageServiceComponentTypes} contains 'Milk Cooler(s) by Other Manufacturer or Existing Milk Cooler(s)'",
                  "elements": [
                    {
                      "type": "text",
                      "name": "OtherManufacturer",
                      "title": "Manufacturer"
                    },
                    {
                      "type": "text",
                      "name": "OtherModelNumber",
                      "title": "Model Number"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "SilverKingBulkMilkDispenserPanel",
                  "visibleIf": "{BeverageServiceComponentTypes} contains 'Silver King Bulk Milk Dispenser (Provided by Mod-U-Serve)'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "NumberOfValvesPerDispenser",
                      "title": "Number of Valves Per Dispenser (Number of Flavors/Types)",
                      "choices": [
                        1,
                        2,
                        3
                      ]
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLink1Valve",
                      "html": "<a href=\"file:///C:/Users/ceast/Downloads/Milk-Dispenser-SKMAJ1_ESUS4-Spec-Sheet%20(2).pdf\">Manufacturer Report Link 1 Valve</a>"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLink2Valves",
                      "html": "<a href=\"file:///C:/Users/ceast/Downloads/Milk-Dispenser-2-Valve-SKMAJ2_ESUS4-Spec-Sheet.pdf\">Manufacturer Report Link 2 Valves</a>"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLink3Valves",
                      "html": "<a href=\"file:///C:/Users/ceast/Downloads/Milk-Dispenser-3-Valve-SKMAJ3_ESUS4-Spec-Sheet%20(1).pdf\">Manufacturer Report Link 3 Valves</a>"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "OtherBeverageNeedsPanel",
                  "visibleIf": "{BeverageServiceComponentTypes} contains 'Other Beverage Needs'",
                  "elements": [
                    {
                      "type": "text",
                      "name": "OtherBeverageNeeds",
                      "title": "Specify Other Beverage Needs"
                    }
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "IceServicePanel",
              "visibleIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Ice Service} = true",
              "requiredIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Ice Service} = true",
              "title": "Ice Service Components",
              "elements": [
                {
                  "type": "panel",
                  "name": "IceServiceComponentsPanel",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "IceServiceComponentTypes",
                      "title": "Select all that Apply (Check Box):",
                      "choices": [
                        "Ice Caddy",
                        "Ice Machine",
                        "Ice & Water Dispenser"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "IceCaddyPanel",
                  "visibleIf": "{IceServiceComponentTypes} contains 'Ice Caddy'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "IceCaddyModel",
                      "title": "Ice Caddy Model",
                      "choices": [
                        "Cambro Model ICS100L4S, 100 lb. Capacity",
                        "Cambro Model ICS125LB, 125 lb. Capacity",
                        "Cambro Model ICS175LB, 175 lb. Capacity"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherIceCaddyModel",
                      "visibleIf": "{IceCaddyModel} = 'Other Ice Caddy'",
                      "title": "Specify Manufacturer, Model & Quantity"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkICS100L4S",
                      "html": "<a href=\"https://www.cambro.com/Products/beverage-bars/slidinglid-ice-caddies/\">Cambro ICS100L4S Manufacturer Report Link</a>"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkICS125LB",
                      "html": "<a href=\"https://www.cambro.com/Products/beverage-bars/slidinglid-ice-caddies/\">Cambro ICS125LB Manufacturer Report Link</a>"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkICS175LB",
                      "html": "<a href=\"https://www.cambro.com/Products/beverage-bars/slidinglid-ice-caddies/\">Cambro ICS175LB Manufacturer Report Link</a>"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "IceMachinePanel",
                  "visibleIf": "{IceServiceComponentTypes} contains 'Ice Machine'",
                  "elements": [
                    {
                      "type": "dropdown",
                      "name": "IceMachineModel",
                      "title": "Ice Machine Model",
                      "choices": [
                        "Follett Model UMD414A80 Undercounter Ice Machine",
                        "Other Ice Machine"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherIceMachineModel",
                      "visibleIf": "{IceMachineModel} = 'Other Ice Machine'",
                      "title": "Specify Manufacturer, Model & Quantity"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLinkUMD414A80",
                      "html": "<a href=\"https://www.follettice.com/maestro-plus-ice-machine-bin-foodservice-1\">Follett UMD414A80 Manufacturer Report Link</a>"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "IceAndWaterDispenserPanel",
                  "visibleIf": "{IceServiceComponentTypes} contains 'Ice & Water Dispenser'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "IceAndWaterDispenserModel",
                      "title": "Ice & Water Dispenser Model",
                      "choices": [
                        "Follett Model 50CI425A-S Ice & Water Dispenser",
                        "Other Ice & Water Dispenser"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherIceAndWaterDispenserModel",
                      "visibleIf": "{IceAndWaterDispenserModel} = 'Other Ice & Water Dispenser'",
                      "title": "Specify Manufacturer, Model & Quantity"
                    },
                    {
                      "type": "html",
                      "name": "ManufacturerReportLink50CI425AS",
                      "html": "<a href=\"https://www.follettice.com/symphony-plus-ice-and-water-dispenser-chewblet-ice-machine-25-and-50-ci-series-countertop\">Follett 50CI425A-S Manufacturer Report Link</a>"
                    }
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "OtherServicesPanel",
              "visibleIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Other} = true",
              "requiredIf": "{Serving Line Details[0].Serving Line Types[0].TypeofServiceLine.Type of Service for Line.Other} = true",
              "title": "Other Services",
              "elements": [
                {
                  "type": "panel",
                  "name": "OtherServicesComponentsPanel",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "OtherServicesComponentTypes",
                      "title": "Select all that Apply (Check Box):",
                      "choices": [
                        "Stainless Steel Snacks Racks",
                        "Ice Cream Service",
                        "Flat Top Merchandising",
                        "Built-In Handwashing",
                        "Cashier Stand",
                        "Condiments Station",
                        "Tray Carts",
                        "Student Sharing Station",
                        "Decorative Accent Pieces",
                        "Other"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "StainlessSteelSnacksRacksPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Stainless Steel Snacks Racks'",
                  "elements": [
                    {
                      "type": "text",
                      "name": "SnackRackLocation",
                      "title": "Location"
                    },
                    {
                      "type": "dropdown",
                      "name": "SnackRackTiers",
                      "title": "Tiers",
                      "choices": [
                        "Single",
                        "Double",
                        "Triple"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TypeOfSnackRack",
                      "title": "Type of Snack Rack",
                      "choices": [
                        "Adjustable Racks (height & pitch) with NO LED Lights",
                        "Fixed Racks with LED Lights"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "IceCreamServicePanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Ice Cream Service'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "IceCreamServiceRequired",
                      "title": "Ice Cream Service",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "ModUServeDropInIceCreamUnitPanel",
                      "visibleIf": "{IceCreamServiceRequired} = 'Yes'",
                      "elements": [
                        {
                          "type": "dropdown",
                          "name": "SizeDropInIceCreamUnit",
                          "title": "Size",
                          "choices": [
                            "10\" x 20\" by Mod-U-Serve",
                            "20\" x 20\" by Mod-U-Serve"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "LidTypeDropInIceCreamUnit",
                          "title": "Lid Type",
                          "choices": [
                            "Stainless Steel Lid (Standard)",
                            "Clear Lid"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "AngleOfServiceDropInIceCreamUnit",
                          "title": "Angle of Service",
                          "choices": [
                            "Flat",
                            "Slanted Towards Student"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "SilverKingDropInIceCreamMerchandiserPanel",
                      "visibleIf": "{IceCreamServiceRequired} = 'Yes'",
                      "elements": [
                        {
                          "type": "html",
                          "name": "ManufacturerReportLinkSilverKing",
                          "html": "<a href=\"file:///C:/Users/ceast/Downloads/Drop-In-Freezer-23-SKFDI23-ELUS1-Spec-Sheet-1.pdf\">Silver King SKFDI23-ELUS1 Manufacturer Report Link</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "IceCreamMerchandiserByVendorPanel",
                      "visibleIf": "{IceCreamServiceRequired} = 'Yes'",
                      "elements": [
                        {
                          "type": "text",
                          "name": "SpecifyOtherIceCreamMerchandiser",
                          "title": "Specify Manufacturer, Model & Quantity"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "FlatTopMerchandisingPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Flat Top Merchandising'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "Is120VoltServiceRequired",
                      "title": "Is 120 volt service required?",
                      "choices": [
                        "Countertop with Grommetted Hole",
                        "Rear Apron"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "BSIClearviewMerchandisingPanel",
                      "elements": [
                        {
                          "type": "text",
                          "name": "ApproximateSizeBSIClearview",
                          "title": "Approximate Size (width)"
                        },
                        {
                          "type": "radiogroup",
                          "name": "TiersOfServiceBSIClearview",
                          "title": "Tiers of Service",
                          "choices": [
                            "BSI CV100-3 Top Shelf Only",
                            "BSI CV100-4 Top Shelf & Intermediate Shelf",
                            "BSI DV100-5 Top Shelf & 2 Intermediate Shelves"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "ManufacturerReportLinkBSICV1003",
                          "html": "<a href=\"file:///C:/Users/ceast/Downloads/bsi-clearview-cv100-3-spec-sheet.pdf\">BSI CV100-3 Manufacturer Report Link</a>"
                        },
                        {
                          "type": "html",
                          "name": "ManufacturerReportLinkBSICV1004",
                          "html": "<a href=\"file:///C:/Users/ceast/Downloads/bsi-clearview-cv100-4-spec-sheet.pdf\">BSI CV100-4 Manufacturer Report Link</a>"
                        },
                        {
                          "type": "html",
                          "name": "ManufacturerReportLinkBSICV1005",
                          "html": "<a href=\"file:///C:/Users/ceast/Downloads/bsi-clearview-cv100-5-spec-sheet.pdf\">BSI CV100-5 Manufacturer Report Link</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "BuiltInHandwashingPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Built-In Handwashing'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "BuiltInHandwashingRequired",
                      "title": "Built-In Handwashing",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "BuiltInHandwashingOptionsPanel",
                      "visibleIf": "{BuiltInHandwashingRequired} = 'Yes'",
                      "elements": [
                        {
                          "type": "text",
                          "name": "HandwashingLocation",
                          "title": "Location"
                        },
                        {
                          "type": "text",
                          "name": "HandwashingDescription",
                          "title": "Description"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "CashierStandPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Cashier Stand'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "CashierStandRequired",
                      "title": "Cashier Stand",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "CashierStandOptionsPanel",
                      "visibleIf": "{CashierStandRequired} = 'Yes'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "SingleOrDoubleCashier",
                          "title": "Single or Double Cashier",
                          "choices": [
                            "Single",
                            "Double"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "CashDrawerRequired",
                          "title": "Cash Drawer Required",
                          "choices": [
                            "Yes",
                            "No"
                          ]
                        },
                        {
                          "type": "checkbox",
                          "name": "CashierStandAccessories",
                          "title": "Accessories",
                          "choices": [
                            "S/S Hinged Access Door",
                            "Hinged Access Door with Same Material as Counter Front",
                            "Stainless Steel Liner",
                            "Liner with Same Material as Counter Front",
                            "LED Light in Liner?"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "CondimentsStationPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Condiments Station'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "CondimentsLocation",
                      "title": "Location",
                      "choices": [
                        "Free Standing",
                        "Built Into Serving Line"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "CondimentsFreeStandingPanel",
                      "visibleIf": "{CondimentsLocation} = 'Free Standing'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "CondimentsServiceSide",
                          "title": "Service Side",
                          "choices": [
                            "Single Side Service",
                            "Double Side Service"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "CondimentsApproximateSize",
                      "title": "Approximate Size (L x W x H)"
                    },
                    {
                      "type": "checkbox",
                      "name": "CondimentDispensingNeeds",
                      "title": "Describe Condiment Dispensing Needs",
                      "choices": [
                        "#10 Cans",
                        "Bag In Box",
                        "Portion Control Packets"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "CondimentsCansPanel",
                      "visibleIf": "{CondimentDispensingNeeds} contains '#10 Cans'",
                      "elements": [
                        {
                          "type": "text",
                          "name": "NumberOfCansDispensed",
                          "title": "Number of Cans Dispensed"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "CondimentsBagInBoxPanel",
                      "visibleIf": "{CondimentDispensingNeeds} contains 'Bag In Box'",
                      "elements": [
                        {
                          "type": "text",
                          "name": "NumberOfBagInBoxDispensers",
                          "title": "Number of Bag in Box Dispensers"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "CondimentsPortionControlPacketsPanel",
                      "visibleIf": "{CondimentDispensingNeeds} contains 'Portion Control Packets'",
                      "elements": [
                        {
                          "type": "text",
                          "name": "NumberOfPortionControlFlavors",
                          "title": "Number of Portion Control Flavors"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherCondimentDispensingNeeds",
                      "title": "Other Condiment Dispensing Needs"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "TrayCartsPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Tray Carts'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "TrayCartsLocation",
                      "title": "Location",
                      "choices": [
                        "Free Standing",
                        "Built Into Serving Line"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "TrayCartsFreeStandingPanel",
                      "visibleIf": "{TrayCartsLocation} = 'Free Standing'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "TrayCartsServiceSide",
                          "title": "Service Side",
                          "choices": [
                            "Single Side Service",
                            "Double Side Service"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "TrayCartsApproximateSize",
                      "title": "Approximate Size (L x W x H)"
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayTypeAndSize",
                      "title": "Tray Type & Size",
                      "choices": [
                        "Disposable Tray: 8-1/4\" x 10-1/2\" Compartment Tray",
                        "Hard Plastic: 9\" x 15\" Compartment Tray",
                        "Hard Plastic: 10-3/4\" x 14-1/2\" Compartment Tray",
                        "Hard Plastic: 9\" x 15\" Flat Tray",
                        "Hard Plastic: 10\" x 14\" Flat Tray",
                        "Hard Plastic: 14\" x 18\" Flat Tray",
                        "Hard Plastic: 15\" x 20\" Flat Tray"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "TrayCartsMaterialFinishes",
                      "title": "Material Finishes",
                      "choices": [
                        "Same as Serving Line",
                        "Other"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherTrayCartsMaterialFinishes",
                      "visibleIf": "{TrayCartsMaterialFinishes} = 'Other'",
                      "title": "Specify Other Materials"
                    },
                    {
                      "type": "checkbox",
                      "name": "TrayCartsOptionsAndAccessories",
                      "title": "Options & Accessories",
                      "choices": [
                        "Hinged Locking Access Doors & Undershelves",
                        "Side Splash(es) Required",
                        "Back Splash Required"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "StudentSharingStationPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Student Sharing Station'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "StudentSharingStationLocation",
                      "title": "Location",
                      "choices": [
                        "Free Standing",
                        "Built Into Serving Line"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "StudentSharingStationFreeStandingPanel",
                      "visibleIf": "{StudentSharingStationLocation} = 'Free Standing'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "StudentSharingStationServiceSide",
                          "title": "Service Side",
                          "choices": [
                            "Single Side Service",
                            "Double Side Service"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "StudentSharingStationApproximateSize",
                      "title": "Approximate Size (L x W x H)"
                    },
                    {
                      "type": "comment",
                      "name": "StudentSharingStationAdditionalNeeds",
                      "title": "Additional Needs Described"
                    },
                    {
                      "type": "radiogroup",
                      "name": "StudentSharingStationMaterialFinishes",
                      "title": "Material Finishes",
                      "choices": [
                        "Same as Serving Line",
                        "Other"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherStudentSharingStationMaterialFinishes",
                      "visibleIf": "{StudentSharingStationMaterialFinishes} = 'Other'",
                      "title": "Specify Other Materials"
                    },
                    {
                      "type": "checkbox",
                      "name": "StudentSharingStationOptionsAndAccessories",
                      "title": "Options & Accessories",
                      "choices": [
                        "Hinged Locking Access Doors & Undershelves",
                        "Side Splash(es) Required",
                        "Back Splash Required"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "DecorativeAccentPiecesPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Decorative Accent Pieces'",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "BelowCounterRecessedPlateShelves",
                      "title": "Below Counter Recessed Plate Shelves",
                      "choices": [
                        {
                          "value": "ShelfMaterialFinish",
                          "text": "Shelf: Same Material Finish as Counter Top"
                        },
                        "Other"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherPlateShelfMaterialFinish",
                      "title": "Specify Other"
                    },
                    {
                      "type": "radiogroup",
                      "name": "ThreeSidedRecess",
                      "title": "3-Sided Recess",
                      "choices": [
                        "Black Plastic Laminate",
                        "Other"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "OtherThreeSidedRecess",
                      "title": "Specify Other"
                    },
                    {
                      "type": "radiogroup",
                      "name": "LEDLightingPlateShelves",
                      "title": "LED Lighting",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "BelowCounterRecessedSnackShelves",
                      "title": "Below Counter Recessed Snack Shelves",
                      "choices": [
                        "LED Lighting: Yes",
                        "LED Lighting: No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "DecorativePedestalsPanel",
                      "elements": [
                        {
                          "type": "text",
                          "name": "DecorativePedestalsLocation",
                          "title": "Location"
                        },
                        {
                          "type": "radiogroup",
                          "name": "DecorativePedestalsShape",
                          "title": "Shape",
                          "choices": [
                            "Round",
                            "Square/Rectangle",
                            "Angled"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "DecorativePedestalsFinish",
                          "title": "Finish",
                          "choices": [
                            "Same as Counter Front Finish",
                            "Same Material, but Different Selection as Counter Finish",
                            "Other"
                          ]
                        },
                        {
                          "type": "text",
                          "name": "OtherDecorativePedestalsFinish",
                          "visibleIf": "{DecorativePedestalsFinish} = 'Other'",
                          "title": "Specify Other"
                        },
                        {
                          "type": "radiogroup",
                          "name": "DecorativePedestalsCapMaterialFinish",
                          "title": "Cap Material Finish",
                          "choices": [
                            "Same as Counter Top",
                            "Other"
                          ]
                        },
                        {
                          "type": "text",
                          "name": "OtherCapMaterialFinish",
                          "visibleIf": "{DecorativePedestalsCapMaterialFinish} = 'Other'",
                          "title": "Specify Other"
                        },
                        {
                          "type": "radiogroup",
                          "name": "DecorativePedestalsLEDLightingUnderCap",
                          "title": "LED Lighting Under Cap",
                          "choices": [
                            "Yes",
                            "No"
                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "OtherNeedsPanel",
                  "visibleIf": "{OtherServicesComponentTypes} contains 'Other'",
                  "elements": [
                    {
                      "type": "comment",
                      "name": "OtherNeeds",
                      "title": "Other Needs"
                    }
                  ]
                }
              ]
            }
          ],
          "templateTabTitle": "{panelIndex}. {panel.NameofServingLine}",
          "newPanelPosition": "next",
          "panelCount": 1,
          "minPanelCount": 1,
          "defaultValueFromLastPanel": true,
          "confirmDelete": true,
          "panelAddText": "Add Service Line",
          "panelRemoveText": "Remove Service Line",
          "renderMode": "tab",
          "tabAlign": "left"
        }
      ]
    }
  ],
  "sendResultOnPageNext": true,
  "showNavigationButtons": "both",
  "showTOC": true,
  "clearInvisibleValues": "onHiddenContainer",
  "showPreviewBeforeComplete": "showAllQuestions"
}

      const survey = new Survey.Model(surveyJSON);

      // Apply the custom theme to the survey instance
      survey.applyTheme(themeJson);
      console.log("Theme applied");

  survey.onAfterRenderQuestion.add(function (survey, options) {
            var questionElement = options.htmlElement;

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
