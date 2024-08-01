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
  "title": "Serving Line Intake Form",
  "completedHtml": "<h3>Thank you for completing the Serving Line Details</h3>",
  "loadingHtml": "<h3>Loading Serving Line Details form...</h3>",
  "pages": [
    {
      "name": "HotService",
      "elements": [
        {
          "type": "paneldynamic",
          "name": "ServingLineDetails",
          "description": "PLEASE READ:\n\n1. If you have a tab/serving line selected and press \"Add New Serving Line\", it will create a direct copy of the current tab you're in. This means all selections, all answers, etc. will be copied into the new tab/serving line.\n\n2. If you DO NOT want there to be copied information, please immediately create the number of serving lines you'll be adding, and THEN fill out the information.",
          "clearIfInvisible": "onComplete",
          "isRequired": true,
          "templateElements": [
            {
              "type": "text",
              "name": "NameofServingLine",
              "title": "Name of Serving Line"
            },
            {
              "type": "panel",
              "name": "ServiceLineTypesPanel",
              "colSpan": 4,
              "elements": [
                {
                  "type": "boolean",
                  "name": "Type of Service for Line.Hot Service",
                  "title": "Hot Service",
                  "isRequired": true
                },
                {
                  "type": "boolean",
                  "name": "Type of Service for Line.Cold Service",
                  "startWithNewLine": false,
                  "title": "Cold Service",
                  "isRequired": true
                },
                {
                  "type": "boolean",
                  "name": "Type of Service for Line.Hot/Cold Service",
                  "title": "Hot/Cold Service",
                  "isRequired": true
                },
                {
                  "type": "boolean",
                  "name": "Type of Service for Line.Beverage Service",
                  "startWithNewLine": false,
                  "title": "Beverage Service",
                  "isRequired": true
                },
                {
                  "type": "boolean",
                  "name": "Type of Service for Line.Other Service",
                  "title": "Other Service",
                  "isRequired": true
                },
                {
                  "type": "boolean",
                  "name": "Type of Service for Line.AdditionalSupport",
                  "startWithNewLine": false,
                  "title": "Additional Support Equipment Needs",
                  "description": "(ex. refrigerated merchandisers, speed ovens, panini presses, deep cook chambers, etc.)",
                  "isRequired": true
                },
                {
                  "type": "ranking",
                  "name": "LineFlow",
                  "title": "Place the service types in the correct order of flow for this service line:",
                  "choices": [],
                  "isRequired": true,
                  "selectToRankEnabled": true,
                  "selectToRankAreasLayout": "vertical"
                }
              ]
            },
            {
              "type": "panel",
              "name": "HotServicePanel",
              "visibleIf": "{ServingLineDetails[0].Type of Service for Line.Hot Service} = true",
              "requiredIf": "{ServingLineDetails[0].Type of Service for Line.Hot Service} = true",
              "title": "Hot Service",
              "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['Mod-U-Serve Individual 12\\\" x 20\\\" Hot Wells']",
                  "title": "Mod-U-Serve Individual 12\\\" x 20\\\" Hot Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredHotWells} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredHotWells} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['Mod-U-Serve Bulk Bain-Marie Style Hot Well']",
                  "title": "Mod-U-Serve Bulk Bain-Marie Style Hot Well",
                  "state": "expanded",
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
                      "visibleIf": "{panel.TrayStorageFlatTopRequiredBulkHotWell} = 'Yes'",
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
                      "visibleIf": "{panel.TrayPassFlatTopRequiredBulkHotWell} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['CookTek Induction Waterless Hot Wells (provided by MUS)']",
                  "title": "Cook Tek Induction Waterless Hot Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredCookTek} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredCookTek} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['Alto-Shaam Waterless Hot Wells (provided by MUS)']",
                  "title": "Alto Shaam Waterless Hot Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredAltoShaam} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredAltoShaam} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['Hot Food Sheet Pan Units']",
                  "title": "Hot Food Sheet Pan Units",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvided} = 'Elevated' or {ServingLineDetails[0].HeightUnitsProvided} = 'Both'",
                      "title": "Describe Located above what Components?"
                    },
                    {
                      "type": "radiogroup",
                      "name": "SelectOvershelfMaterial",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvided} = 'Elevated'",
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
                      "visibleIf": "{panel.HeightUnitsProvided} = 'Elevated'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredSheetPan} = 'Yes'",
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
                      "visibleIf": "{panel.TrayPassFlatTopRequiredSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvided} = 'Counter Height' or {ServingLineDetails[0].HeightUnitsProvided} = 'Both'",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvided} = 'Counter Height' or {ServingLineDetails[0].HeightUnitsProvided} = 'Both'",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['Heated Mail Slot Merchandiser']",
                  "title": "Heated Mail Slot Merchandiser",
                  "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].HotServiceComponentTypes} allof ['Other Hot Component']",
                  "title": "Other Hot Component",
                  "state": "expanded",
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
              "visibleIf": "{ServingLineDetails[0].Type of Service for Line.Cold Service} = true",
              "requiredIf": "{ServingLineDetails[0].Type of Service for Line.Cold Service} = true",
              "title": "Cold Service",
              "state": "expanded",
              "elements": [
                {
                  "type": "panel",
                  "name": "ColdServiceComponentsPanel",
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
                  "visibleIf": "{ServingLineDetails[0].ColdServiceComponentTypes} allof ['Mod-U-Serve Cold Wells']",
                  "title": "Mod-U-Serve Cold Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredColdWell} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredColdWell} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].ColdServiceComponentTypes} allof ['Cold Food Sheet Pan Units']",
                  "title": "Cold Food Sheet Pan Units",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Elevated' or {ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Both'",
                      "title": "Describe Located above what Components?"
                    },
                    {
                      "type": "radiogroup",
                      "name": "SelectOvershelfMaterialColdSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Elevated'",
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
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Elevated'",
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
                      "visibleIf": "{panel.TrayStorageFlatTopRequiredColdSheetPan} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredColdSheetPan} = 'Yes'",
                      "title": "Specify Approximate Width in Inches"
                    },
                    {
                      "type": "radiogroup",
                      "name": "RearDropDownWorkshelfColdSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Counter Height' or {ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Both'",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletColdSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Counter Height' or {ServingLineDetails[0].HeightUnitsProvidedColdSheetPan} = 'Both'",
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
                  "visibleIf": "{ServingLineDetails[0].ColdServiceComponentTypes} allof ['Refrigerated Mail Slot Merchandiser']",
                  "title": "Refrigerated Mail Slot Merchandiser",
                  "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].ColdServiceComponentTypes} allof ['Other Cold Component']",
                  "title": "Other Cold Component",
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
              "visibleIf": "{ServingLineDetails[0].Type of Service for Line.Hot/Cold Service} = true",
              "requiredIf": "{ServingLineDetails[0].Type of Service for Line.Hot/Cold Service} = true",
              "title": "Combined Hot/Cold Service",
              "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].CombinedServiceComponentTypes} allof ['Mod-U-Serve Individual Hot / Cold Wells']",
                  "title": "Mod-U-Serve Individual Hot / Cold Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredHotColdWells} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredHotColdWells} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].CombinedServiceComponentTypes} allof ['Mod-U-Serve Bulk Bain-Marie Style Hot/Cold Wells']",
                  "title": "Mod-U-Serve Bulk Bain-Marie Style Hot/Cold Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredBulkHotColdWell} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredBulkHotColdWell} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].CombinedServiceComponentTypes} allof ['LTI Quick Switch Individual Hot / Cold / Freeze Waterless Wells (by MUS)']",
                  "title": "LTI Quick Switch Individual Hot / Cold / Freeze Waterless Wells",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TrayStorageFlatTopRequiredLTIQuickSwitch} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].TrayPassFlatTopRequiredLTIQuickSwitch} = 'Yes'",
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
                  "visibleIf": "{ServingLineDetails[0].CombinedServiceComponentTypes} allof ['Hot / Cold Food Sheet Pan Units']",
                  "title": "Hot / Cold Food Sheet Pan Units",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Elevated' or {ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Both'",
                      "title": "Describe Located above what Components?"
                    },
                    {
                      "type": "radiogroup",
                      "name": "SelectOvershelfMaterialHotColdSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Elevated'",
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
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Elevated'",
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
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Counter Height' or {ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Both'",
                      "title": "Rear Drop-Down Workshelf",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "ConvenienceOutletHotColdSheetPan",
                      "visibleIf": "{ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Counter Height' or {ServingLineDetails[0].HeightUnitsProvidedHotColdSheetPan} = 'Both'",
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
                  "visibleIf": "{ServingLineDetails[0].CombinedServiceComponentTypes} allof ['Other Hot/Cold Component']",
                  "title": "Other Hot/Cold Component",
                  "state": "expanded",
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
              "visibleIf": "{ServingLineDetails[0].Type of Service for Line.Beverage Service} = true",
              "requiredIf": "{ServingLineDetails[0].Type of Service for Line.Beverage Service} = true",
              "title": "Beverage Service",
              "state": "expanded",
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
                        "Coffee Service",
                        "Smoothie or Other Blended Drink/Food Service",
                        "Other Beverage Needs"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "ModUServeDropInBeverageUnitPanel",
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Mod-U-Serve Drop-In Beverage Unit']",
                  "title": "Mod-U-Serve Drop-In Beverage Unit",
                  "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Mod-U-Serve Milk Cooler (Milk Crate)']",
                  "title": "Mod-U-Serve Milk Cooler",
                  "state": "expanded",
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
                      "visibleIf": "{ServingLineDetails[0].TypeOfMilkCooler} = 'Free Standing'",
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
                      "visibleIf": "{ServingLineDetails[0].TypeOfMilkCooler} = 'Inline Built into Serving Line'",
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
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Milk Cooler(s) by Other Manufacturer or Existing Milk Cooler(s)']",
                  "title": "Milk Cooler(s) by Other Manufacturer or Existing Milk Cooler(s)",
                  "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Silver King Bulk Milk Dispenser (Provided by Mod-U-Serve)']",
                  "title": "Silver King Bulk Milk Dispenser",
                  "state": "expanded",
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
                  "name": "coffeeService",
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Coffee Service']",
                  "title": "Coffee Service",
                  "state": "expanded",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "coffeeBrewerOptions",
                      "title": "Coffee Brewer Options",
                      "choices": [
                        "Concordia Xpress Touch 6 (Provided by Mod-U-Serve)",
                        {
                          "value": "other",
                          "text": "Other Brand by Mod-U-Serve (specify manufacturer & model number)"
                        }
                      ],
                      "showOtherItem": true
                    },
                    {
                      "type": "radiogroup",
                      "name": "decorativePartition",
                      "title": "Is a decorative partition required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "partitionOptions",
                      "visibleIf": "{ServingLineDetails[0].decorativePartition} = 'Yes'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "partitionType",
                          "title": "Partition Type",
                          "choices": [
                            "3-Sided Frosted Vertical Glass",
                            "3-Sided 3-Form Vertical Partition",
                            {
                              "value": "3-sided-laminate",
                              "text": "3-Sided Laminate Partition"
                            },
                            {
                              "value": "3-sided-tiled",
                              "text": "3-Sided Tiled Partition"
                            },
                            "Other",
                            "N/A"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "raisedPedestal",
                      "title": "Is a decorative Raised Wedge or Round Pedestal Required for Staging Coffee?",
                      "choices": [
                        "Raised Wedge",
                        "Round Pedestal",
                        "N/A"
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "smoothieService",
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Smoothie or Other Blended Drink/Food Service']",
                  "title": "Smoothie or Other Blended Drink/Food Service",
                  "state": "expanded",
                  "elements": [
                    {
                      "type": "radiogroup",
                      "name": "blenderRequired",
                      "title": "Blender Required?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "blenderOptions",
                      "visibleIf": "{ServingLineDetails[0].blenderRequired} = 'Yes'",
                      "title": "Blender Options",
                      "choices": [
                        "Waring MX1500XTX for Blended Smoothies or Beverages provided by Mod-U-Serve",
                        "Waring MXE2000 Ellipse for Blended Smoothies, Beverages or Acai Bowls provided by Mod-U-Serve",
                        {
                          "value": "other",
                          "text": "Other Manufacturer provided by Mod-U-Serve (specify Manufacturer, Model & Quantity)"
                        }
                      ],
                      "showOtherItem": true
                    },
                    {
                      "type": "radiogroup",
                      "name": "iceRequirements",
                      "title": "Ice Requirements?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "iceRequirementOptions",
                      "visibleIf": "{ServingLineDetails[0].iceRequirements} = 'Yes'",
                      "title": "Ice Requirement Options",
                      "choices": [
                        "Cambro Model ICS100L4S, 100 lb. Capacity Undercounter Ice Caddy provided by Mod-U-Serve",
                        "Cambro Model ICS125LB, 125 lb. Capacity Undercounter Ice Caddy provided by Mod-U-Serve",
                        "Cambro Model ICS175LB, 175 lb. Capacity Undercounter Ice Caddy provided by Mod-U-Serve",
                        {
                          "value": "other",
                          "text": "Other Ice Caddy provided by Mod-U-Serve (specify Manufacturer, Model & Quantity)"
                        },
                        "Follett Model UMD414A80 Undercounter Ice Machine provided by Mod-U-Serve",
                        {
                          "value": "other-ice-machine",
                          "text": "Other Ice Machine (specify Manufacturer, Model & Quantity)"
                        }
                      ],
                      "showOtherItem": true
                    },
                    {
                      "type": "radiogroup",
                      "name": "undercounterRefrigeration",
                      "title": "Undercounter Refrigeration Requirements?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "checkbox",
                      "name": "undercounterRefrigerationType",
                      "visibleIf": "{ServingLineDetails[0].undercounterRefrigeration} = 'Yes'",
                      "title": "Undercounter Refrigeration Type",
                      "choices": [
                        "Refrigerator",
                        "Freezer",
                        "Other"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "undercounterRefrigeratorOptions",
                      "visibleIf": "{ServingLineDetails[0].undercounterRefrigerationType} allof ['Refrigerator']",
                      "title": "Utility Refrigerator Undercounter Refrigerator provided by Mod-U-Serve",
                      "choices": [
                        "Utility Refrigerator One-Door, model CHR-30-1S-D-EM Undercounter Refrigerator",
                        "Utility Refrigerator Two-Door, model CHR-50-2S-D-EM Undercounter Refrigerator",
                        "Utility Refrigerator Two-Door, model CHR-60-2S-D-EM Undercounter Refrigerator",
                        "Utility Refrigerator Two-Door, model CHR-75-3S-D-EM Undercounter Refrigerator",
                        "Utility Refrigerator Two-Door, model CHR-90-3S-D-EM Undercounter Refrigerator"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "undercounterFreezerOptions",
                      "visibleIf": "{ServingLineDetails[0].undercounterRefrigerationType} allof ['Freezer']",
                      "title": "Utility Refrigerator Undercounter Freezer provided by Mod-U-Serve",
                      "choices": [
                        "Utility Refrigerator One-Door, model CHF-30-1S-D-EM Undercounter Freezer",
                        "Utility Refrigerator Two-Door, model CHF-50-2S-D-EM Undercounter Freezer",
                        "Utility Refrigerator Two-Door, model CHF-60-2S-D-EM Undercounter Freezer",
                        "Utility Refrigerator Two-Door, model CHF-75-3S-D-EM Undercounter Freezer",
                        "Utility Refrigerator Two-Door, model CHF-90-3S-D-EM Undercounter Freezer"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "undercounterRefrigerationTypeOther",
                      "visibleIf": "{ServingLineDetails[0].undercounterRefrigerationType} allof ['Other']",
                      "title": "Specify Manufacturer, Model & Quantity",
                      "elements": [
                        {
                          "type": "text",
                          "name": "undercounterRefrigerationTypeOther_Manufacturer",
                          "title": "Manufacturer"
                        },
                        {
                          "type": "text",
                          "name": "undercounterRefrigerationTypeOther_Model",
                          "title": "Model"
                        },
                        {
                          "type": "text",
                          "name": "undercounterRefrigerationTypeOther_Quantity",
                          "title": "Quantity"
                        }
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "partitionOptionsSmoothie",
                      "title": "Is a decorative partition required at the Smoothie / Blender Station?",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "partitionTypeSmoothie",
                      "visibleIf": "{ServingLineDetails[0].partitionOptionsSmoothie} = 'Yes'",
                      "title": "If Yes:",
                      "choices": [
                        "3-Sided Frosted Vertical Glass",
                        "3-Sided 3-Form Vertical Partition",
                        {
                          "value": "3-sided-laminate",
                          "text": "3-Sided Laminate Partition"
                        },
                        {
                          "value": "3-sided-tiled",
                          "text": "3-Sided Tiled Partition"
                        },
                        "Other",
                        "N/A"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "raisedPedestalSmoothie",
                      "title": "Is a decorative Raised Wedge or Round Pedestal Required for Staging Smoothie or other Blended Foods & Beverages?",
                      "choices": [
                        "Raised Wedge",
                        "Round Pedestal",
                        "N/A"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "iceWaterDispenser",
                      "title": "Ice & Water Dispenser:",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "iceWaterDispenserOptions",
                      "visibleIf": "{ServingLineDetails[0].iceWaterDispenser} = 'Yes'",
                      "title": "Choose an Ice & Water Dispenser Option:",
                      "choices": [
                        "Other Manufacturer Ice & Water Dispenser provided by Mod-U-Serve (specify Manufacturer, Model & Quantity)",
                        "Follett Model 50CI425A-S Ice & Water Dispenser provided by Mod-U-Serve"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "iceWaterDispenserOptionsTypeOther",
                      "visibleIf": "{ServingLineDetails[0].iceWaterDispenserOptions} = 'Other Manufacturer Ice & Water Dispenser provided by Mod-U-Serve (specify Manufacturer, Model & Quantity)'",
                      "title": "Specify Manufacturer, Model & Quantity",
                      "elements": [
                        {
                          "type": "text",
                          "name": "undercounterRefrigerationTypeOtherManufacturer",
                          "title": "Manufacturer"
                        },
                        {
                          "type": "text",
                          "name": "undercounterRefrigerationTypeOtherModel",
                          "title": "Model"
                        },
                        {
                          "type": "text",
                          "name": "undercounterRefrigerationTypeOtherQuantity",
                          "title": "Quantity"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "OtherBeverageNeedsPanel",
                  "visibleIf": "{ServingLineDetails[0].BeverageServiceComponentTypes} allof ['Other Beverage Needs']",
                  "state": "expanded",
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
              "name": "OtherServicesPanel",
              "visibleIf": "{ServingLineDetails[0].Type of Service for Line.Other Service} = true",
              "requiredIf": "{ServingLineDetails[0].Type of Service for Line.Other Service} = true",
              "title": "Other Services",
              "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Stainless Steel Snacks Racks']",
                  "title": "Stainless Steel Snacks Racks",
                  "state": "expanded",
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
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Ice Cream Service']",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "IceCreamServiceOptions",
                      "title": "Ice Cream Service",
                      "choices": [
                        "Mod-U-Serve Drop-In Ice Cream Unit",
                        "Silver King Model SKFDI23-ELUS1 Drop-In Ice Cream Merchandiser provided by Mod-U-Serve",
                        "Ice Cream Merchandiser By Vendor"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "ModUServeDropInIceCreamUnitPanel",
                      "visibleIf": "{ServingLineDetails[0].IceCreamServiceOptions} allof ['Mod-U-Serve Drop-In Ice Cream Unit']",
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
                      "visibleIf": "{IceCreamServiceOptions} = 'Yes'",
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
                      "visibleIf": "{ServingLineDetails[0].IceCreamServiceOptions} allof ['Ice Cream Merchandiser By Vendor']",
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
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Flat Top Merchandising']",
                  "title": "Flat Top Merchandising",
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
                          "title": "BSI Clearview U/V Bonded Glass Ambient Merchandising by Mod-U-Serve",
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
                    },
                    {
                      "type": "panel",
                      "name": "BuiltInHandwashingPanel",
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
                          "visibleIf": "{ServingLineDetails[0].BuiltInHandwashingRequired} = 'Yes'",
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
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "CashierStandPanel",
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Cashier Stand']",
                  "title": "Cashier Stand",
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
                },
                {
                  "type": "panel",
                  "name": "CondimentsStationPanel",
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Condiments Station']",
                  "title": "Condiments Station",
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
                      "visibleIf": "{ServingLineDetails[0].CondimentsLocation} = 'Free Standing'",
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
                        "Portion Control Packets",
                        "Other"
                      ]
                    },
                    {
                      "type": "text",
                      "name": "NumberOfCansDispensed",
                      "visibleIf": "{ServingLineDetails[0].CondimentDispensingNeeds} allof ['#10 Cans']",
                      "title": "Number of Cans Dispensed"
                    },
                    {
                      "type": "text",
                      "name": "NumberOfBagInBoxDispensers",
                      "visibleIf": "{ServingLineDetails[0].CondimentDispensingNeeds} allof ['Bag In Box']",
                      "title": "Number of Bag in Box Dispensers"
                    },
                    {
                      "type": "text",
                      "name": "NumberOfPortionControlFlavors",
                      "visibleIf": "{ServingLineDetails[0].CondimentDispensingNeeds} allof ['Portion Control Packets']",
                      "title": "Number of Portion Control Flavors"
                    },
                    {
                      "type": "text",
                      "name": "OtherCondimentDispensingNeeds",
                      "visibleIf": "{ServingLineDetails[0].CondimentDispensingNeeds} allof ['Other']",
                      "title": "Other Condiment Dispensing Needs"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "TrayCartsPanel",
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Tray Carts']",
                  "title": "Tray Carts",
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
                      "visibleIf": "{ServingLineDetails[0].TrayCartsMaterialFinishes} = 'Other'",
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
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Student Sharing Station']",
                  "title": "Student Sharing Station",
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
                      "visibleIf": "{ServingLineDetails[0].StudentSharingStationLocation} = 'Free Standing'",
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
                      "visibleIf": "{ServingLineDetails[0].StudentSharingStationMaterialFinishes} = 'Other'",
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
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Decorative Accent Pieces']",
                  "title": "Decorative Accent Pieces",
                  "elements": [
                    {
                      "type": "panel",
                      "name": "panel2",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "BelowCounterRecessedPlateShelvesFinish",
                          "title": "Below Counter Recessed Plate Shelves",
                          "choices": [
                            "Shelf: Same Material Finish as Counter Top",
                            "Shelf: Other",
                            "3-Sided Recess: Black Plastic Laminate",
                            "3-Sided Recess: Other"
                          ],
                          "showNoneItem": true
                        },
                        {
                          "type": "text",
                          "name": "OtherRecessedPlateShelfMaterialFinish",
                          "visibleIf": "{ServingLineDetails[0].BelowCounterRecessedPlateShelvesFinish} = 'Shelf: Other'",
                          "title": "Specify Other"
                        },
                        {
                          "type": "text",
                          "name": "OtherThreeSidedRecessMaterialFinish",
                          "visibleIf": "{ServingLineDetails[0].BelowCounterRecessedPlateShelvesFinish} = '3-Sided Recess: Other'",
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
                        }
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "BelowCounterRecessedSnackShelves",
                      "title": "Below Counter Recessed Snack Shelves",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "BelowCounterRecessedSnackShelvesPanel",
                      "visibleIf": "{ServingLineDetails[0].BelowCounterRecessedSnackShelves} = 'Yes'",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "BelowCounterRecessedSnackShelvesLighting",
                          "title": "Lighting",
                          "choices": [
                            "LED Lighting: Yes",
                            "LED Lighting: No"
                          ]
                        }
                      ]
                    },
                    {
                      "type": "radiogroup",
                      "name": "DecorativePedestals",
                      "title": "Decorative Pedestals",
                      "choices": [
                        "Yes",
                        "No"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "DecorativePedestalsPanel",
                      "visibleIf": "{ServingLineDetails[0].DecorativePedestals} = 'Yes'",
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
                          "visibleIf": "{ServingLineDetails[0].DecorativePedestalsFinish} = 'Other'",
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
                          "visibleIf": "{ServingLineDetails[0].DecorativePedestalsCapMaterialFinish} = 'Other'",
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
                  "visibleIf": "{ServingLineDetails[0].OtherServicesComponentTypes} allof ['Other']",
                  "elements": [
                    {
                      "type": "comment",
                      "name": "OtherNeeds",
                      "title": "Other Needs"
                    }
                  ]
                }
              ]
            },
            {
              "type": "panel",
              "name": "additionalSupportEquipmentNeeds",
              "visibleIf": "{ServingLineDetails[0].Type of Service for Line.AdditionalSupport} = true",
              "requiredIf": "{ServingLineDetails[0].Type of Service for Line.AdditionalSupport} = true",
              "title": "Additional Support Equipment Needs on the Serving Line or in the Kitchen:",
              "state": "expanded",
              "elements": [
                {
                  "type": "checkbox",
                  "name": "AdditionalSupportEquipmentCheckbox",
                  "title": "Please select the additional support equipment needed",
                  "choices": [
                    "Refrigerated Merchandisers",
                    "Speed Ovens, Panini Presses & Ventless Pizza Ovens",
                    "Countertop Heated Merchandisers"
                  ]
                },
                {
                  "type": "panel",
                  "name": "refrigeratedMerchandisers",
                  "visibleIf": "{ServingLineDetails[0].AdditionalSupportEquipmentCheckbox} allof ['Refrigerated Merchandisers']",
                  "title": "Refrigerated Merchandisers",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "RefrigeratedMerchandiserChoices",
                      "title": "Refrigerated Merchandiser Choices",
                      "choices": [
                        "BSI CP-500N Salsa Susan provided by Mod-U-Serve",
                        "Utility Refrigerator FREE-STANDING Sliding Glass Door Merchandisers provided by Mod-U-Serve",
                        "Utility Refrigerator DROP-IN Sliding Glass Door Merchandisers provided by Mod-U-Serve",
                        "Structural Concepts Oasis Rear-Loading Refrigerated Air-Screen Merchandisers provided by Mod-U-Serve",
                        "Other Refrigerated Merchandiser Needs"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "BSISalsaSusanPanel",
                      "visibleIf": "{ServingLineDetails[0].RefrigeratedMerchandiserChoices} allof ['BSI CP-500N Salsa Susan provided by Mod-U-Serve']",
                      "title": "BSI CP-500N Salsa Susan provided by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "text",
                          "name": "refrigeratedMerchandisersLocation",
                          "title": "Location:"
                        },
                        {
                          "type": "dropdown",
                          "name": "refrigeratedMerchandisersSize",
                          "title": "Size:",
                          "choices": [
                            "24\" with six (6) Bain Marie or four (4) Triangle Pans",
                            "24\" with twelve (12) Bain Marie or four (4) Triangle Pans",
                            "24\" with eighteen (18) Bain Marie or four (4) Triangle Pans"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "refrigeratedMerchandisersReportLink",
                          "html": "<a href='http://myftpupload.com/bsi-cold-pans-spec-sheets.pdf'>Manufacturer Report Link - CP-500</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "utilityRefrigeratorFreestanding",
                      "visibleIf": "{ServingLineDetails[0].RefrigeratedMerchandiserChoices} allof ['Utility Refrigerator FREE-STANDING Sliding Glass Door Merchandisers provided by Mod-U-Serve']",
                      "title": "Utility Refrigerator FREE-STANDING Sliding Glass Door Merchandisers provided by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "text",
                          "name": "freestandingLocation",
                          "title": "Location:"
                        },
                        {
                          "type": "dropdown",
                          "name": "freestandingSize",
                          "title": "Size:",
                          "choices": [
                            "36\" wide",
                            "48\" wide"
                          ]
                        },
                        {
                          "type": "dropdown",
                          "name": "freestandingStyle",
                          "title": "Style:",
                          "choices": [
                            "Sliding Glass Front Only (Reach-In)",
                            "Sliding Glass Front & Rear (Pass-Thru)"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "freestandingReportLink",
                          "html": "<a href='http://myftpupload.com/Reach-In'>Manufacturer Report Link - Reach-In</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "utilityRefrigeratorDropin",
                      "visibleIf": "{ServingLineDetails[0].RefrigeratedMerchandiserChoices} allof ['Utility Refrigerator DROP-IN Sliding Glass Door Merchandisers provided by Mod-U-Serve']",
                      "title": "Utility Refrigerator DROP-IN Sliding Glass Door Merchandisers provided by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "text",
                          "name": "dropinLocation",
                          "title": "Location:"
                        },
                        {
                          "type": "dropdown",
                          "name": "dropinSize",
                          "title": "Size:",
                          "choices": [
                            "36\" wide",
                            "48\" wide"
                          ]
                        },
                        {
                          "type": "dropdown",
                          "name": "dropinStyle",
                          "title": "Style:",
                          "choices": [
                            "Sliding Glass Front Only (Reach-In)",
                            "Sliding Glass Front & Rear (Pass-Thru)"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "dropinReportLink",
                          "html": "<a href='http://myftpupload.com/Drop-In'>Manufacturer Report Link - Drop-In</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "structuralConceptsOasis",
                      "visibleIf": "{ServingLineDetails[0].RefrigeratedMerchandiserChoices} allof ['Structural Concepts Oasis Rear-Loading Refrigerated Air-Screen Merchandisers provided by Mod-U-Serve']",
                      "title": "Structural Concepts Oasis Rear-Loading Refrigerated Air-Screen Merchandisers provided by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "oasisLocation",
                          "title": "Location:",
                          "choices": [
                            "Built-Into Serving Line with 3-Sided Skeleton Body",
                            "Free Standing"
                          ]
                        },
                        {
                          "type": "text",
                          "name": "oasisLocationDescribe",
                          "title": "Describe Where:"
                        },
                        {
                          "type": "dropdown",
                          "name": "oasisSize",
                          "title": "Size:",
                          "choices": [
                            "36\" wide",
                            "48\" wide",
                            "60\" wide"
                          ]
                        },
                        {
                          "type": "dropdown",
                          "name": "oasisHeight",
                          "title": "Height:",
                          "choices": [
                            "61-5/8\" tall"
                          ]
                        },
                        {
                          "type": "dropdown",
                          "name": "oasisFinish",
                          "title": "Finish:",
                          "choices": [
                            "Black Interior / Exterior"
                          ]
                        },
                        {
                          "type": "text",
                          "name": "oasisAlternateColor",
                          "title": "Alternate Color:"
                        },
                        {
                          "type": "checkbox",
                          "name": "oasisOptions",
                          "title": "Options/Accessories:",
                          "choices": [
                            "Rear Loading",
                            "Rolling Locking Night Cover",
                            "LED Lights on Shelves",
                            "Clean Sweep Coil Cleaner"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "oasisReportLink36",
                          "html": "<a href='https://structuralconcepts.com/products/co35r-co45r-co55r-co65r'>36\" wide x 61-5/8\" tall Manufacturer Report Link - CO35R</a>"
                        },
                        {
                          "type": "html",
                          "name": "oasisReportLink48",
                          "html": "<a href='https://structuralconcepts.com/products/co35r-co45r-co55r-co65r'>48\" wide x 61-5/8\" tall Manufacturer Report Link - CO45R</a>"
                        },
                        {
                          "type": "html",
                          "name": "oasisReportLink60",
                          "html": "<a href='https://structuralconcepts.com/products/co35r-co45r-co55r-co65r'>60\" wide x 61-5/8\" tall Manufacturer Report Link - CO55R</a>"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "otherRefrigeratedMerchandiserNeeds",
                      "visibleIf": "{ServingLineDetails[0].RefrigeratedMerchandiserChoices} allof ['Other Refrigerated Merchandiser Needs']",
                      "title": "Other Refrigerated Merchandiser Needs:"
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "countertopHeatedMerchandisers",
                  "visibleIf": "{ServingLineDetails[0].AdditionalSupportEquipmentCheckbox} allof ['Countertop Heated Merchandisers']",
                  "title": "Countertop Heated Merchandisers",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "CountertopHeatedMerchandiserOptions",
                      "title": "Choose your Countertop Heated Merchandisers",
                      "choices": [
                        "BSI Solera Heated Surfaces provided by Mod-U-Serve",
                        "Hatco HZMH FLAT Countertop Heated Merchandisers provided by Mod-U- Serve",
                        "Hatco HZMS SLANTED Countertop Heated Merchandisers provided by Mod- U-Serve"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "bsiSolera",
                      "visibleIf": "{ServingLineDetails[0].CountertopHeatedMerchandiserOptions} allof ['BSI Solera Heated Surfaces provided by Mod-U-Serve']",
                      "title": "BSI Solera Heated Surfaces provided by Mod-U-Serve:",
                      "elements": [
                        {
                          "type": "text",
                          "name": "bsiSoleraLocation",
                          "title": "Location:"
                        },
                        {
                          "type": "radiogroup",
                          "name": "bsiSoleraShape",
                          "title": "Shape:",
                          "choices": [
                            "Round Countertop Flangeless HDD-INF-NF",
                            "Rectangular Drop-In Countertop HTC-INF",
                            "Flush Countertop HTD-INF-IN"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "bsiSoleraReportLink1",
                          "html": "<a href='file:///C:/Users/ceast/Downloads/bsi-solera-hdd-inf-nf.pdf'>Manufacturer Report Link - BSI HDD-INF-NF</a>"
                        },
                        {
                          "type": "html",
                          "name": "bsiSoleraReportLink2",
                          "html": "<a href='file:///C:/Users/ceast/Downloads/bsi-solera-htc-inf.pdf'>Manufacturer Report Link - BSI HTC-INF</a>"
                        },
                        {
                          "type": "html",
                          "name": "bsiSoleraReportLink3",
                          "html": "<a href='file:///C:/Users/ceast/Downloads/bsi-solera-htd-inf-nf.pdf'>Manufacturer Report Link - BSI HTD-INF-NF</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "hatcoHzmhFlat",
                      "visibleIf": "{ServingLineDetails[0].CountertopHeatedMerchandiserOptions} allof ['Hatco HZMH FLAT Countertop Heated Merchandisers provided by Mod-U- Serve']",
                      "title": "Hatco HZMH FLAT Countertop Heated Merchandisers provided by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "hatcoHzmhFlatTiers",
                          "title": "Number of Tiers",
                          "choices": [
                            "Single Tier",
                            "Double"
                          ]
                        },
                        {
                          "type": "dropdown",
                          "name": "hatcoHzmhFlatWidth",
                          "title": "Width:",
                          "choices": [
                            "24\"",
                            "30\"",
                            "36\"",
                            "42\"",
                            "48\"",
                            "54\""
                          ]
                        },
                        {
                          "type": "html",
                          "name": "hatcoHzmhFlatReportLink",
                          "html": "<a href='https://hatcocorp.com/hzmh-flat'>Manufacturer Report Link - HZMH Flat Merchandisers</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "hatcoHzmsSlanted",
                      "visibleIf": "{ServingLineDetails[0].CountertopHeatedMerchandiserOptions} allof ['Hatco HZMS SLANTED Countertop Heated Merchandisers provided by Mod- U-Serve']",
                      "title": "Hatco HZMS SLANTED Countertop Heated Merchandisers provided by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "hatcoHzmsSlantedTiers",
                          "title": "Number of Tiers",
                          "choices": [
                            "Single Tier",
                            "Double"
                          ]
                        },
                        {
                          "type": "dropdown",
                          "name": "hatcoHzmsSlantedWidth",
                          "title": "Width:",
                          "choices": [
                            "24\"",
                            "30\"",
                            "36\"",
                            "42\"",
                            "48\"",
                            "54\""
                          ]
                        },
                        {
                          "type": "html",
                          "name": "hatcoHzmsSlantedReportLink",
                          "html": "<a href='https://hatcocorp.com/hzms-slanted'>Manufacturer Report Link - HZMS Slanted Merchandisers</a>"
                        }
                      ]
                    }
                  ]
                },
                {
                  "type": "panel",
                  "name": "speedOvensPaniniPresses",
                  "visibleIf": "{ServingLineDetails[0].AdditionalSupportEquipmentCheckbox} allof ['Speed Ovens, Panini Presses & Ventless Pizza Ovens']",
                  "title": "Speed Ovens, Panini Presses & Ventless Pizza Ovens:",
                  "elements": [
                    {
                      "type": "checkbox",
                      "name": "speedOvensPaniniPressesOptions",
                      "title": "Choose your options:",
                      "choices": [
                        "Middleby-Marshall Ventless Electric Pizza Ovens",
                        "TurboChef Ventless High Speed Ovens by Mod-U-Serve",
                        "Other Speed Oven & Panini Press Needs"
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "middlebyMarshall",
                      "visibleIf": "{ServingLineDetails[0].speedOvensPaniniPressesOptions} allof ['Middleby-Marshall Ventless Electric Pizza Ovens']",
                      "title": "Middleby-Marshall Ventless Electric Pizza Ovens",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "middlebyMarshallHeatingZone",
                          "title": "20\" Heating Zone Baking Chamber (48.4\" length x 35.8\" depth)",
                          "choices": [
                            "PS2020 Electric Conveyor Oven with Catalytic Converter for Ventless"
                          ]
                        },
                        {
                          "type": "radiogroup",
                          "name": "middlebyMarshallPartitionRequired",
                          "title": "Is a decorative partition required at the Pizza Oven?",
                          "choices": [
                            "3-Sided Frosted Vertical Glass",
                            "3-Sided 3-Form Vertical Partition",
                            "3-Sided Laminate Partition",
                            "3-Sided Tiled Partition",
                            "Other",
                            "N/A"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "middlebyMarshallReportLink",
                          "html": "<a href='https://www.middlebymarshall.com/wp-content/uploads/2022/02/DOC-1027C-Middleby-Marshall-PS2020-Electric-Ventless-Ovens.pdf'>Manufacturer Report Link - PS2020</a>"
                        }
                      ]
                    },
                    {
                      "type": "panel",
                      "name": "turboChefVentlessHighSpeedOvens",
                      "visibleIf": "{ServingLineDetails[0].speedOvensPaniniPressesOptions} allof ['TurboChef Ventless High Speed Ovens by Mod-U-Serve']",
                      "title": "TurboChef Ventless High Speed Ovens by Mod-U-Serve",
                      "elements": [
                        {
                          "type": "radiogroup",
                          "name": "turboChefElBandido",
                          "title": "7.2\" tall x 12.5\" wide x 10.5\" deep Cook Chamber PANINI PRESS El Bandido",
                          "choices": [
                            "3-Sided Frosted Vertical Glass",
                            "3-Sided 3-Form Vertical Partition",
                            "3-Sided Laminate Partition",
                            "3-Sided Tiled Partition",
                            "Other",
                            "N/A"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "turboChefElBandidoReportLink",
                          "html": "<a href='https://turbochef.com/wp-content/uploads/2020/03/TurboChef_ElBandido_PaniniPress_RapidCook_SpecSheet_1-1.pdf'>Manufacturer Report Link - El Bandido</a>"
                        },
                        {
                          "type": "radiogroup",
                          "name": "turboChefSota",
                          "title": "6\" tall x 15.5\" wide x 14.5\" deep Cook Chamber Sota(i1)",
                          "choices": [
                            "3-Sided Frosted Vertical Glass",
                            "3-Sided 3-Form Vertical Partition",
                            "3-Sided Laminate Partition",
                            "3-Sided Tiled Partition",
                            "Other",
                            "N/A"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "turboChefSotaReportLink",
                          "html": "<a href='https://turbochef.com/wp-content/uploads/2017/11/TurboChef_Sota_SpecSheet_1.pdf'>Manufacturer Report Link - Sota(i1)</a>"
                        },
                        {
                          "type": "radiogroup",
                          "name": "turboChefBullet",
                          "title": "6\" tall x 15.5\" wide x 14.5\" deep Cook Chamber Bullet",
                          "choices": [
                            "3-Sided Frosted Vertical Glass",
                            "3-Sided 3-Form Vertical Partition",
                            "3-Sided Laminate Partition",
                            "3-Sided Tiled Partition",
                            "Other",
                            "N/A"
                          ]
                        },
                        {
                          "type": "html",
                          "name": "turboChefBulletReportLink",
                          "html": "<a href='https://turbochef.com/wp-content/uploads/2023/11/TurboChef_Bullet_SpecSheet_DOC1486_M_1.pdf'>Manufacturer Report Link - Bullet</a>"
                        }
                      ]
                    },
                    {
                      "type": "text",
                      "name": "otherSpeedOvenPaniniPressNeeds",
                      "visibleIf": "{ServingLineDetails[0].speedOvensPaniniPressesOptions} allof ['Other Speed Oven & Panini Press Needs']",
                      "title": "Other Speed Oven & Panini Press Needs:"
                    }
                  ]
                }
              ]
            }
          ],
          "templateTabTitle": "{panelIndex}. {panel.NameofServingLine}",
          "tabTitlePlaceholder": "{panelIndex}. New Panel",
          "newPanelPosition": "next",
          "panelCount": 1,
          "minPanelCount": 1,
          "defaultValueFromLastPanel": true,
          "confirmDelete": true,
          "panelAddText": "Add Service Line",
          "panelRemoveText": "Remove Service Line",
          "showRangeInProgress": false,
          "renderMode": "tab",
          "tabAlign": "left"
        }
      ]
    }
  ],
  "sendResultOnPageNext": true,
  "showNavigationButtons": "both",
  "showTitle": false,
  "clearInvisibleValues": "onHiddenContainer",
  "previewText": "Review Before Submission",
  "showPreviewBeforeComplete": "showAllQuestions"
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

        survey.onValueChanged.add(function (sender, options) {
      var dynamicPanel = sender.getPanelByQuestion(options.question);
      if (!dynamicPanel) return;

      var serviceLineTypesPanel = dynamicPanel.getElementByName("ServiceLineTypesPanel");
      if (!serviceLineTypesPanel) return;

      var choices = [];
      var fieldNames = [
        "Type of Service for Line.Hot Service",
        "Type of Service for Line.Cold Service",
        "Type of Service for Line.Hot/Cold Service",
        "Type of Service for Line.Beverage Service",
        "Type of Service for Line.Other Service",
        "Type of Service for Line.AdditionalSupport"
      ];

      fieldNames.forEach(function (fieldName) {
        var question = serviceLineTypesPanel.getQuestionByName(fieldName);
        if (question && question.value === true) {
          choices.push(question.title);
        }
      });

      var rankingQuestion = dynamicPanel.getQuestionByName("LineFlow");
      rankingQuestion.choices = choices;
    });


      survey.render("surveyContainer");
    } else {
      console.error("SurveyJS is not loaded");
    }
  });
