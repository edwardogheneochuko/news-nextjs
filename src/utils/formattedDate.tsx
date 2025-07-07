

export const getFormattedDate = (): string => {
    const date = new Date()
    const dayOfWeek = date.toLocaleString('default', {weekday:'long'})
    const month = date.toLocaleString('default', {month: 'long'})
    const dayOfMonth = date.getDate()
    const year = date.getFullYear()

    return `${dayOfWeek}, ${month} ${dayOfMonth}, ${year}`
}
