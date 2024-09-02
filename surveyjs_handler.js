<script>
  document.addEventListener("DOMContentLoaded", function() {
    const supabaseUrl = "https://eshdjwklgbouztqfahbm.supabase.co";
    const supabaseApiKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzaGRqd2tsZ2JvdXp0cWZhaGJtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI2MDY1NzcsImV4cCI6MjAzODE4MjU3N30.y_kk8qgsBvccijGU-gIIxfTgFU9Y7ggORw6mvMd07zY";
    const supabaseClient = supabase.createClient(supabaseUrl, supabaseApiKey);
    const storageItemKey = "step-1-form";
    const uploadcareFields = {};
    const table = "step-1-opportunity-intro";

async function restoreSurveyData(survey, opportunityId) {
  const ENDPOINT_URL = `${supabaseUrl}/rest/v1/${table}?opportunity_id=eq.${opportunityId}`;

  try {
    const response = await fetch(ENDPOINT_URL, {
      headers: {
        "Content-Type": "application/json",
        "apikey": supabaseApiKey,
        "Authorization": `Bearer ${supabaseApiKey}`
      }
    });

    if (!response.ok) {
      console.error("Network response was not ok", response.statusText);
      return;
    }

    const prevData = await response.json();
    if (prevData && prevData.length > 0) {
      const data = prevData[0];
      survey.data = data;

      // Dynamically load data into Uploadcare widgets
      Object.keys(data).forEach(key => {
        if (key.startsWith('photo') || key.startsWith('uploadcare')) {
          loadUploadcareWidgetData(`#uploadcare-${key}`, data[key]);
        }
      });

      if (data.pageNo) {
        survey.currentPageNo = data.pageNo;
      }
    } else {
      console.error("No matching data found for the given opportunity_id.");
    }
  } catch (error) {
    console.error("Error restoring survey data:", error);
  }
}

    function loadUploadcareWidgetData(widgetSelector, value) {
  if (value) {
    const widget = uploadcare.Widget(widgetSelector);
    widget.value(value);
    const questionName = widgetSelector.replace('#uploadcare-', '');
    uploadcareFields[questionName] = value;
  }
}

    function saveToLocalCache(survey) {
      const data = survey.data;
      data.pageNo = survey.currentPageNo;
      window.localStorage.setItem(storageItemKey, JSON.stringify(data));
      console.log("Data saved to local cache:", data);
    }

    function isOnline() {
      return navigator.onLine;
    }

    async function syncWithSupabase(survey) {
      const surveyData = survey.data;
      const opportunityId = surveyData.opportunity_id;
      const endpoint = `${supabaseUrl}/rest/v1/${table}`;

      try {
        const { data: existingRecord, error } = await supabaseClient
          .from(table)
          .select("*")
          .eq("opportunity_id", opportunityId)
          .single();

        if (error && error.code !== 'PGRST116') {
          throw error;
        }

        let response;

        if (existingRecord) {
          const updateUrl = `${endpoint}?opportunity_id=eq.${opportunityId}`;
          response = await axios.patch(updateUrl, surveyData, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "apikey": supabaseApiKey,
              "Authorization": `Bearer ${supabaseApiKey}`,
              "Prefer": "return=minimal"
            }
          });
        } else {
          response = await axios.post(endpoint, surveyData, {
            headers: {
              "Content-Type": "application/json",
              "Accept": "application/json",
              "apikey": supabaseApiKey,
              "Authorization": `Bearer ${supabaseApiKey}`,
              "Prefer": "return=minimal"
            }
          });
        }

        if (response.status === 201 || response.status === 204) {
          console.log("Successfully submitted data to Supabase");
          window.localStorage.removeItem(storageItemKey);
        } else {
          console.error("Unexpected response status:", response.status);
          alert("There was an issue submitting the survey.");
        }
      } catch (error) {
        console.error("Error submitting survey data to Supabase:", error.response ? error.response.data : error.message);
        alert("There was an error submitting the survey.");
      }
    }

    function tryToSyncIfOnline(survey) {
      if (isOnline()) {
        const localData = window.localStorage.getItem(storageItemKey);
        if (localData) {
          survey.data = JSON.parse(localData);
          syncWithSupabase(survey);
        }
      }
    }

        window.UPLOADCARE_PUBLIC_KEY = '8f98dcc6a647d769d146';

        const survey = new Survey.Model(surveyJSON);

        survey.applyTheme(themeJson);

        survey.onAfterRenderQuestion.add(function (survey, options) {
          const element = options.htmlElement.querySelector(`[id^=uploadcare-]`);
          if (element) {
            const widgetId = element.id;
            const questionName = widgetId.replace('uploadcare-', '');
            handleUploadcareField(widgetId, questionName);
          }
        });

        function handleUploadcareField(widgetId, questionName) {
          const widgetElement = document.getElementById(widgetId);

          // Check if the widget has already been initialized to prevent duplicate buttons
          if (!widgetElement.dataset.initialized) {
            const widget = uploadcare.Widget(widgetElement);

            widget.onUploadComplete(function(info) {
              uploadcareFields[questionName] = info.cdnUrl;
              survey.setValue(questionName, info.cdnUrl);

              const field = survey.getQuestionByName(questionName);
              if (field) {
                field.visible = true;
              } else {
                console.error(`Field not found for ${questionName}`);
              }
            });

            widgetElement.dataset.initialized = true; // Mark this widget as initialized
          }
        }

        survey.onCompleting.add(function(sender, options) {
          for (const fieldName in uploadcareFields) {
            sender.setValue(fieldName, uploadcareFields[fieldName]);
          }

          const opportunityId = sender.data.opportunity_id;
          if (!opportunityId) {
            alert("Opportunity ID is missing.");
            options.allowComplete = false;
          }
        });

        survey.onValueChanging.add(function(sender, options) {
          console.log("Value changing: ", options.name, options.value);
        });

        survey.onAfterRenderQuestion.add(function (survey, options) {
          var questionElement = options.htmlElement;
          var surveyRow = document.createElement("div");
          surveyRow.className = "survey-row";

          var questionTitle = document.createElement("div");
          questionTitle.className = "question-title";
          questionTitle.innerHTML = options.question.title;

          var questionInput = document.createElement("div");
          questionInput.className = "question-input";

          var children = Array.from(questionElement.childNodes);
          children.forEach(function(child) {
            if (child && child.nodeType === 1 && !child.classList.contains('sv_q_title') && !child.classList.contains('sd-question__header')) {
              questionInput.appendChild(child);
            }
          });

          surveyRow.appendChild(questionTitle);
          surveyRow.appendChild(questionInput);

          questionElement.innerHTML = "";
          questionElement.appendChild(surveyRow);
        });

        survey.onValueChanged.add(function(survey) {
          saveToLocalCache(survey);
          if (isOnline()) {
            syncWithSupabase(survey);
          }
        });

        survey.onCurrentPageChanged.add(function(survey) {
          saveToLocalCache(survey);
        });

        survey.onValueChanged.add(async function (sender) {
          const surveyData = sender.data;
          const opportunityId = surveyData.opportunity_id;
          const table = "step-1-opportunity-intro";
          const endpoint = `${supabaseUrl}/rest/v1/${table}`;

          try {
            const { data: existingRecord, error } = await supabaseClient
              .from(table)
              .select("*")
              .eq("opportunity_id", opportunityId)
              .single();

            if (error && error.code !== 'PGRST116') {
              throw error;
            }

            let response;

            if (existingRecord) {
              const updateUrl = `${endpoint}?opportunity_id=eq.${opportunityId}`;
              response = await axios.patch(updateUrl, surveyData, {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "apikey": supabaseApiKey,
                  "Authorization": `Bearer ${supabaseApiKey}`,
                  "Prefer": "return=minimal"
                }
              });
            } else {
              response = await axios.post(endpoint, surveyData, {
                headers: {
                  "Content-Type": "application/json",
                  "Accept": "application/json",
                  "apikey": supabaseApiKey,
                  "Authorization": `Bearer ${supabaseApiKey}`,
                  "Prefer": "return=minimal"
                }
              });
            }

            if (response.status === 201 || response.status === 204) {
              console.log("Successfully submitted data to Supabase");
            } else {
              console.error("Unexpected response status:", response.status);
              alert("There was an issue submitting the survey.");
            }
          } catch (error) {
            console.error("Error submitting survey data to Supabase:", error.response ? error.response.data : error.message);
            alert("There was an error submitting the survey.");
          }
        });

        survey.render("surveyContainer");

        const urlParams = new URLSearchParams(window.location.search);
        const opportunityId = urlParams.get('opportunity_id');
        if (opportunityId) {
          survey.data = { opportunity_id: opportunityId };
          await restoreSurveyData(survey, opportunityId);
        }

        tryToSyncIfOnline(survey);
        window.addEventListener('online', () => tryToSyncIfOnline(survey));
      } else {
        console.error("SurveyJS is not loaded");
      }
    }

    initializeSurvey();
  });
</script>
