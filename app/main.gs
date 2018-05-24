var spreadsheetId = "id";
var spreadsheet = SpreadsheetApp.openById(spreadsheetId);
var form = FormApp.getActiveForm();

/* Form */

function onSubmit(e) {
  console.log(e.response)
  var responses = e.response.getItemResponses();
  
  var type = responses[0].getResponse();
  
  if (type === "作成") {
    var eventTitle = responses[1].getResponse();
    var eventOrganizer = responses[2].getResponse();
    var eventDate = responses[3].getResponse();
    var eventId = registerEventToSheet(eventTitle, eventOrganizer, eventDate);
    updateForm();
  } else /* type === "参加" */ {
    var eventId = + responses[1].getResponse().split(" - ")[0];
    var name = responses[2].getResponse();
    
    if (eventId == 0) {
      return;
    }
    addParticipation(eventId, name);
  }
}


/* Dashboard */

function onGet(e) {

}