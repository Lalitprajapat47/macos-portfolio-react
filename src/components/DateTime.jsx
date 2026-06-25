import React, { useEffect, useState } from 'react'

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function formatDateTime(date) {
  const day = days[date.getDay()]
  const month = months[date.getMonth()]
  const dayOfMonth = date.getDate()

  let hours = date.getHours()
  const minutes = String(date.getMinutes()).padStart(2, '0')
  const ampm = hours >= 12 ? 'PM' : 'AM'
  hours = hours % 12 || 12

  return `${day} ${month} ${dayOfMonth} ${hours}:${minutes} ${ampm}`
}

const DateTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(id)
  }, [])

  const style = {
    color: '#fff',
  }

  return (
    <div className="date-time" style={style} aria-label="current date time">
      {formatDateTime(now)}
    </div>
  )
}

export default DateTime