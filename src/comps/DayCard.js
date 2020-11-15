import Header from './Header';

const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const monthNames = [ "January", "February", "March", "April", "May", "June",
"July", "August", "September", "October", "November", "December" ];
const date = new Date();
const today = {
  dayNum: date.getDate(),
  dayName: dayNames[date.getDay()],
  monthName: monthNames[date.getMonth()-1]
}

function DayCard() {
  return(
    <div className="dayCard">
      <Header 
        day={today.dayName}
        num={today.dayNum}
        month={today.monthName}
      />
    </div>
  )
}

export default DayCard;