const Date = ({date}:{date: Date}) => {
    return (
        <time dateTime={date.toISOString()}>
            {date.toLocaleDateString("fr-FR", {
                weekday: "short",
                year: "2-digit",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
            })}
        </time>
    )
}
export default Date