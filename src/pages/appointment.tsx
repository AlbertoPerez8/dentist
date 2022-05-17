import 'react-modern-calendar-datepicker/lib/DatePicker.css'
import { Calendar, DayValue, utils } from 'react-modern-calendar-datepicker'
import { useState } from 'react'
import { clickHandler } from './sideMenu'

const wide_blue_bttn =
  'bg-blue text-white text-lg py-2 px-4 w-2/3 h-12 rounded-xl'

const disabled = [
  {
    year: 2022,
    month: 5,
    day: 20,
  },
  {
    year: 2022,
    month: 5,
    day: 23,
  },
  {
    year: 2022,
    month: 5,
    day: 26,
  },
  {
    year: 2022,
    month: 5,
    day: 30,
  },
  {
    year: 2022,
    month: 6,
    day: 14,
  },
  {
    year: 2022,
    month: 6,
    day: 15,
  },
  {
    year: 2022,
    month: 6,
    day: 23,
  },
  {
    year: 2022,
    month: 6,
    day: 24,
  },
]

export default function Booking() {
  const today = utils('en').getToday()
  const [selectedDay, setSelectedDay] = useState<DayValue>(today)
  const [display, displaySet] = useState(false)

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="py-10 text-3xl font-bold">Set Appointment Date</div>

        <div className="flex flex-col items-center py-6">
          <Calendar
            value={selectedDay}
            onChange={setSelectedDay}
            colorPrimary={'#2B4DE2'}
            shouldHighlightWeekends
            disabledDays={disabled}
          />
        </div>

        <div className="p-3" />

        {display && 
          <>
            <div>Appointment made for: </div>
            <div>{`${selectedDay?.day} / ${selectedDay?.month} / ${selectedDay?.year}`}</div>
            <div className="p-4" />

          </>
        }

        <button
          className={wide_blue_bttn}
          onClick={ () => {
            console.log(selectedDay)
            displaySet(true)
            // console.log(JSON.parse(localStorage.getItem('Id') || '{}'));

            // let appoint
            // const entry = {
            //   details: selectedDay,
            //   userId: JSON.parse(localStorage.getItem('Id') || '{}'),
            // }

            // const object = {
            //   method: 'POST',
            //   body: JSON.stringify(entry),
            // }

            // await fetch('/api/_makeAppointment', object)
            //   .then((response) => response.json())
            //   .then((data) => {
            //     appoint = data.appoint
            //   })
          }}
        >
          Make Appointment
        </button>

        <div className="py-4" />

        <button
          className={wide_blue_bttn}
          onClick={() => {
            clickHandler('/')
          }}
        >
          Go Home
        </button>

        <div className='pt-3'>(dd/mm/yyyy)</div>
      </div>
    </>
  )
}
