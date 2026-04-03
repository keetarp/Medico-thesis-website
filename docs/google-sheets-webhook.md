# Google Sheets webhook setup

This project can save consultation form submissions to Google Sheets by posting to a Google Apps Script web app.

## 1. Create the spreadsheet

1. Create a new Google Sheet.
2. Rename the first sheet tab to `Consultations` or keep your preferred name and update the script below.

## 2. Add the Apps Script

1. In the spreadsheet, open `Extensions -> Apps Script`.
2. Replace the default script with this:

```javascript
const SHEET_NAME = "Consultations";
const WEBHOOK_SECRET = "replace-this-with-a-long-random-string";

function doPost(e) {
  try {
    const payload = JSON.parse(e.postData.contents || "{}");

    if (WEBHOOK_SECRET && payload.secret !== WEBHOOK_SECRET) {
      return jsonResponse({ ok: false, error: "Unauthorized" }, 401);
    }

    const submission = payload.submission || {};
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    const sheet =
      spreadsheet.getSheetByName(SHEET_NAME) || spreadsheet.insertSheet(SHEET_NAME);

    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Submitted At",
        "Full Name",
        "Email",
        "WhatsApp",
        "Institute",
        "Department",
        "Thesis Title",
        "Year of Enrollment",
        "Current Thesis Stage",
        "Message",
      ]);
    }

    sheet.appendRow([
      submission.submittedAt || "",
      submission.fullName || "",
      submission.email || "",
      submission.whatsapp || "",
      submission.institute || "",
      submission.department || "",
      submission.thesisTitle || "",
      submission.yearOfEnrollment || "",
      submission.currentThesisStage || "",
      submission.message || "",
    ]);

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse(
      { ok: false, error: error && error.message ? error.message : "Unknown error" },
      500
    );
  }
}

function jsonResponse(payload, statusCode) {
  const output = ContentService.createTextOutput(JSON.stringify(payload));
  output.setMimeType(ContentService.MimeType.JSON);
  return output;
}
```

## 3. Deploy it as a web app

1. Click `Deploy -> New deployment`.
2. Choose `Web app`.
3. Set execution to your Google account.
4. Set access to `Anyone`.
5. Deploy and copy the web app URL.

## 4. Add env values in this project

Put these into `.env.local`:

```env
CONSULTATION_GOOGLE_SHEETS_WEBHOOK_URL=https://script.google.com/macros/s/your-web-app-id/exec
CONSULTATION_WEBHOOK_SECRET=replace-this-with-the-same-secret
```

## 5. Restart the app

Restart `npm run dev` after updating env values.

## Notes

- The consultation route can deliver to both Google Sheets and email at the same time.
- If you also configure Resend email, submissions will be saved in the sheet and emailed to your inbox.
- If neither Google Sheets nor email is configured, the API route returns a clear error instead of silently discarding form data.
