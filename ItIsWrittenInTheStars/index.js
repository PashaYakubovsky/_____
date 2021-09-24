function starSign(date) {
  let month = date.getMonth();
  let day = date.getDate();
  let resoult;

  switch (month) {
    case 0:
      resoult = day <= 19 ? "Capricorn" : "Aquarius";
      break;

    case 1:
      resoult = day <= 20 ? "Aquarius" : "Pisces";
      break;

    case 2:
      resoult = day <= 20 ? "Pisces" : "Aries";
      break;

    case 3:
      resoult = day <= 21 ? "Aries" : "Taurus";
      break;

    case 4:
      resoult = day <= 21 ? "Taurus" : "Gemini";
      break;

    case 5:
      resoult = day <= 21 ? "Gemini" : "Cancer";
      break;

    case 6:
      resoult = day <= 22 ? "Cancer" : "Leo";
      break;

    case 7:
      resoult = day <= 23 ? "Leo" : "Virgo";
      break;

    case 8:
      resoult = day <= 23 ? "Virgo" : "Libra";
      break;

    case 9:
      resoult = day <= 22 ? "Libra" : "Scorpio";
      break;

    case 10:
      resoult = day <= 21 ? "Scorpio" : "Sagittarius";
      break;

    case 11:
      resoult = day <= 20 ? "Sagittarius" : "Capricorn";
      break;
  }

  return resoult;
}

// Were you ever interested in the phenomena of astrology, star signs, tarot, voodoo ? (ok not voodoo that's too spooky)...
// Task:
// Your job for today is to finish the star_sign function by finding the astrological sign, given the birth details as a Date object.
// Start and end dates for zodiac signs vary on different resources so we will use this table to get consistent results:

// Aquarius ------ 21 January - 19 February
// Pisces --------- 20 February - 20 March
// Aries ---------- 21 March - 20 April
// Taurus -------- 21 April - 21 May
// Gemini -------- 22 May - 21 June
// Cancer -------- 22 June - 22 July
// Leo ------------- 23 July - 23 August
// Virgo ----------- 24 August - 23 September
// Libra ----------- 24 September - 23 October
// Scorpio -------- 24 October - 22 November
// Sagittarius ---- 23 November - 21 December
// Capricorn ----- 22 December - 20 January

// Test info: 100 random tests (dates range from January 1st 1940 until now)

// (https://www.codewars.com/kata/5888a57cbf87c25c840000c6)
