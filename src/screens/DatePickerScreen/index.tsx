import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import { Image, Text, TextStyle, TouchableOpacity, View } from 'react-native';
import { CalendarList, DateData } from 'react-native-calendars';
import { SafeAreaView } from 'react-native-safe-area-context';
import { globalStyles } from '../../constants/themes';
import { NavigationProp } from '../../types/RouteTypes';
import styles from './styles';


interface Props {
    horizontalView?: boolean;
}

const RANGE = 8;
const INITIAL_DATE = new Date().toDateString();
const INITIAL_END_DATE = new Date().toDateString();

const getFormattedMonth = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('default', { month: 'long', year: 'numeric' });
};

const DatePickerScreen = (props: Props) => {
    const { horizontalView } = props;
    const [startDate, setStartDate] = useState(INITIAL_DATE);
    const [endDate, setEndDate] = useState(INITIAL_END_DATE)
    const [counter, setCounter] = useState(0);

    const [currentMonth, setCurrentMonth] = useState(getFormattedMonth(INITIAL_DATE));

    const onDayPress = useCallback((day: DateData) => {
        console.log(day.timestamp < new Date(startDate).getTime());
        if (counter === 1) {
            if (day.timestamp < new Date(startDate).getTime()) {
                setStartDate(day.dateString);
                setCounter(1);
            } else {
                setEndDate(day.dateString);
                setCounter(0);
            }
        }
        else {
            setStartDate(day.dateString);
            setEndDate('');
            setCounter(counter + 1)
        }
    }, [startDate, endDate]);

    const generateMarkedDates = (startDate: any, endDate: any) => {
        let marked: any = {};
        let currentDate = new Date(startDate);

        while (currentDate <= new Date(endDate)) {
            const formattedDate = currentDate.toISOString().split('T')[0];
            marked[formattedDate] = { color: '#DBE7FD', textColor: 'black' };

            currentDate.setDate(currentDate.getDate() + 1);
        }

        marked[startDate] = {
            startingDay: true, color: endDate === '' ? 'transparent' : "#DBE7FD", textColor: 'white', customContainerStyle: {
                borderRadius: 20,
                backgroundColor: "#488AF8"
            }
        };
        marked[endDate] = {
            endingDay: true, color: endDate === startDate ? 'transparent' : "#DBE7FD", textColor: 'white', customContainerStyle: {
                borderRadius: 20,
                backgroundColor: "#488AF8"
            }
        };
        return marked;
    };

    const onVisibleMonthsChange = (months: { year: number; month: number }[]) => {
        if (months.length > 0) {
            const { month, year } = months[0];
            setCurrentMonth(getFormattedMonth(`${year}-${month.toString().padStart(2, '0')}-01`));
        }
    };

    const topStartDate = new Date(startDate).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit'
    });

    const topEndDate = endDate === '' ? topStartDate : new Date(endDate).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: '2-digit'
    }); const navigation = useNavigation<NavigationProp>();

    return (
        <SafeAreaView style={{ backgroundColor: 'white' }}>
            <SafeAreaView edges={['top']} style={{ position: 'absolute', width: '100%', zIndex: 998, backgroundColor: 'white' }}>
                <View style={{ ...globalStyles.bottomShadow, borderRadius: 0, paddingHorizontal: 30 }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', width: '100%', top: 14, left: 20, zIndex: 999 }}>
                        <Image source={require('../../assets/icons/x.png')} style={{ height: 20, width: 20 }} />
                    </TouchableOpacity>
                    <Text style={{ alignSelf: 'center', fontWeight: '500', fontSize: 20 }}>Edit</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: 20, gap: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text>{'Check-in'}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>{topStartDate}</Text>
                        </View>
                        <Image style={{ height: 15, width: 25 }} source={require('../../assets/icons/right_arrow.png')} />
                        <View style={{ flex: 1 }}>
                            <Text>{'Check-Out'}</Text>
                            <Text style={{ fontSize: 16, fontWeight: '600' }}>{topEndDate}</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop: 20 }}>
                        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                            <Text key={day}>{day}</Text>
                        ))}
                    </View>
                </View>
                <View style={styles.header}>
                    <Text style={[styles.month, { fontWeight: '800', fontSize: 18, marginTop: 20 }]}>{`${currentMonth}`}</Text>
                </View>
            </SafeAreaView>
            <View style={{ marginTop: 160, marginBottom: 50 }}>
                <CalendarList
                    hideDayNames={true}
                    current={INITIAL_DATE}
                    pastScrollRange={RANGE}
                    futureScrollRange={RANGE}
                    onVisibleMonthsChange={onVisibleMonthsChange}
                    onDayPress={onDayPress}
                    markingType={'period'}
                    markedDates={generateMarkedDates(startDate, endDate)}
                    renderHeader={!horizontalView ? renderCustomHeader : undefined}
                    calendarHeight={!horizontalView ? 320 : undefined}
                    theme={!horizontalView ? theme : undefined}
                    horizontal={horizontalView}
                    pagingEnabled={horizontalView}
                />
            </View>
            <View style={{ position: 'absolute', bottom: 0, width: '100%' }}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: '#2067DA', borderRadius: 25, height: 50, margin: 20,marginBottom:30 }}>
                    <Text style={{ color: 'white', fontWeight: '500', fontSize: 16 }}>{`OK (${Object.keys(generateMarkedDates(startDate, endDate)).length - 1} nights)`}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>

    );
};

const theme = {
    stylesheet: {
        calendar: {
            header: {
                dayHeader: {
                    fontWeight: '600',
                    color: '#48BFE3',
                    ...globalStyles.shadow
                }
            }
        }
    },
    'stylesheet.day.basic': {
        today: {
            borderColor: '#48BFE3',
            borderWidth: 0.8
        },
        todayText: {
            color: '#5390D9',
            fontWeight: '800'
        }
    }
};

function renderCustomHeader(date: any) {
    const header = date.toString('MMMM yyyy');
    const [month, year] = header.split(' ');
    const textStyle: TextStyle = {
        fontSize: 18,
        fontWeight: 'bold',
        paddingTop: 10,
        paddingBottom: 10,
        color: 'black',
        paddingRight: 5
    };

    return (
        <View style={styles.header}>
            <Text style={[styles.month, textStyle]}>{`${month}`}</Text>
            <Text style={[styles.year, textStyle]}>{year}</Text>
        </View>
    );
}

export default DatePickerScreen;
