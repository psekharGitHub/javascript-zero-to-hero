const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const weekdays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const giveway = document.querySelector('.giveaway')
  const deadline = document.querySelector('.deadline')
  const items = document.querySelectorAll('.deadline-format h4')
  console.log(items);

  let tempDate = new Date()
  let tempYear = tempDate.getFullYear()
  let tempMonth = tempDate.getMonth()
  let tempDay = tempDate.getDate()

  //let futureDate = new Date(2021, 10, 20, 23, 59, 59)        //year,month,day,hour,min,sec note:indexing from 0
  let futureDate = new Date(tempYear, tempMonth, tempDay + 10, 23, 59, 59)      //check the current date and add 10 days to it
  const year = futureDate.getFullYear()
  const hours = futureDate.getHours()
  const mins = futureDate.getMinutes()
  const secs = futureDate.getSeconds();

  let date = futureDate.getDate();

  let month = futureDate.getMonth()
  month = months[month] //return 11 as indexing starts from 0-January

  const weekday = weekdays[futureDate.getDay()]     //returns day number in int

  giveway.textContent = `giveaway ends on ${weekday} ${date} ${month} ${year} ${hours}:${mins}:${secs}`


  //future time in millisecond
  const futureTime = futureDate.getTime()

  function getRemainingTime() {
      const today = new Date().getTime()
      const t = futureTime - today
      //1s = 1000 ms
      //1m = 60s
      //1hr = 60 min
      //1day = 24hr

      //value in ms
      const oneDay = 24 * 60 * 60 * 1000        //1day in ms
      const oneHour = 60 * 60 * 1000            //1hr in ms
      const oneMinute = 60 * 1000                  //1min in ms
      
      //calculate all values
      let days = t / oneDay
      days = Math.floor(days)

      let hours = Math.floor(((t % oneDay) / oneHour))        //t%oneDay returns the remaining time to display in hours

      let mins = Math.floor((t % oneHour) / oneMinute)        //t%oneHour return remaining time to display in minutes

      let secs = Math.floor((t % oneMinute) / 1000)           //t%oneMinute return remaining time to display in seconds

      //set values array
      const values = [days, hours, mins, secs]

      //handle cases when days are less than 10, append a 0 at front
      function format(item) {
        if (item < 10) {
          return (item = `0${item}`);
        }
        return item;
      }

      //update days,hour,min,sec by iterating through each item one by one as they have same indexes as values array
      items.forEach((item, index) => {
          item.innerHTML = format(values[index])
      });

      //case handles when giveaway is over
      if (t < 0) {
          clearInterval(countdown)
          deadline.innerHTML = `<h4 class="expired">Sorry, This giveaway has expired</h4>`
      }
  }

  //countdown
  let countdown = setInterval(getRemainingTime, 1000)
  getRemainingTime()

