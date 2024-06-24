//todo ─────  ─────
// Напишите функцию, которая принимает время начала и конца рабочего дня, а также время старта и продолжительность встречи в минутах и возвращает true, если встреча не выходит за рамки рабочего дня, и false, если выходит.

// Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны по-разному: 08:05, 8:5, 08:5 или 8:05.

// Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются в одни календарные сутки.

/*
'8:00' - начало рабочего дня
'17:30' - конец рабочего дня
'14:00' - начало встречи
90 - продолжительность встречи в минутах
*/
// имяФункции('08:00', '17:30', '14:00', 90); // true
// имяФункции('8:0', '10:0', '8:0', 120);     // true
// имяФункции('08:00', '14:30', '14:00', 90); // false
// имяФункции('14:00', '17:30', '08:0', 90);  // false
// имяФункции('8:00', '17:30', '08:00', 900); // false

//! ─────  ─────

function getDurationFromTime(time) {
  let timeArr = time.split(":");

  return +timeArr[0] * 60 + +timeArr[1];
}

function getMeetingCheck(startDay, endDay, startMeeting, durationMeeting) {
  startDay = getDurationFromTime(startDay);
  // console.log("test  startDay: ", startDay);
  endDay = getDurationFromTime(endDay);
  // console.log("test  endDay: ", endDay);
  startMeeting = getDurationFromTime(startMeeting);
  // console.log("test  startMeeting: ", startMeeting);
  // console.log(
  // "test  startMeeting + durationMeeting: ",
  // startMeeting + durationMeeting
  // );

  if (startMeeting + durationMeeting > endDay || startMeeting < startDay) {
    return console.log(false);
    return false;
  }

  return console.log(true);
  return true;
}

getMeetingCheck("08:00", "17:30", "14:00", 90); // true
getMeetingCheck("8:0", "10:0", "8:0", 120); // true
getMeetingCheck("08:00", "14:30", "14:00", 90); // false
getMeetingCheck("14:00", "17:30", "08:0", 90); // false
getMeetingCheck("8:00", "17:30", "08:00", 900); // false
