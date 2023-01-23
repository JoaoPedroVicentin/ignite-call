import dayjs from 'dayjs'
import { Calendar } from "@/components/Calendar";
import { useState } from "react";
import { Container, TimePicker, TimePickerHeader, TimePickerItem, TimePickerList } from "./styles";

export function CalendarStep() {

    const [selectedDate, setSelectedState] = useState<Date | null>(null)

    const isDateSelected = !!selectedDate

    const weekDay = selectedDate ? dayjs(selectedDate).format('dddd') : null
    const describedDate = selectedDate
        ? dayjs(selectedDate).format('DD[ de ]MMMM')
        : null


    return (
        <Container isTimePickerOpen={isDateSelected}>
            <Calendar selectedDate={selectedDate} onDateSelected={setSelectedState} />

            {isDateSelected && (
                <TimePicker>
                    <TimePickerHeader>
                        {weekDay} <span>{describedDate}</span>
                    </TimePickerHeader>

                    <TimePickerList>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                        <TimePickerItem>08:00</TimePickerItem>
                    </TimePickerList>
                </TimePicker>
            )}
        </Container>
    )
}