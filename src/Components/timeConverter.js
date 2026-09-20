export function convertToIndiaTime(userDate, userTime) {
  try {
    // Combine date & time into ISO string (assumes user's local time)
    const localDateTime = new Date(`${userDate}T${userTime}:00`);

    // Convert to India time using UTC offset method
    const indiaTimeString = localDateTime.toLocaleString("en-US", {
      timeZone: "Asia/Kolkata",
    });

    // Create Date object for India time
    const [datePart, timePart] = indiaTimeString.split(", ");
    const [month, day, year] = datePart.split("/");
    const indiaDateTime = new Date(`${year}-${month}-${day}T${timePart}`);

    return {
      userDateTime: localDateTime,
      indiaDateTime,
    };
  } catch (error) {
    console.error("Time conversion error:", error);
    return null;
  }
}
