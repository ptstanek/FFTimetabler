export interface TimetableItemType {
    className: string;
    lecturerName: string;
    roomNumber: string;
    startTime: string;
    classDuration: string;
    dayOfWeek: number;
};

export const DayOfWeek: string[] = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
]

// class name
// day of the week
// starts at
// room
// duration
// lecturer
