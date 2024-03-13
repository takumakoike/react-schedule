"use client";

import { useState, useEffect, } from "react";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import interactionPlugin from '@fullcalendar/interaction';
import {supabase} from "../db/supabase.js";
const { data } = await supabase.from('react-schedule').select()

const ReactCalendar = () => {
    // eventとsetEventの状態管理としてuseStateを定義
    const [events , setEvents] = useState([]);
    
    // コンポーネントマウント時の処理としてfetchData関数を呼び出す
    useEffect( () => {
        fetchData();
    }, []);

    // fetchData関数ではsupabaseからデータを引っ張ってくる
    async function fetchData(){
        const {data} = await supabase.from("react-schedule").select();
        const items = data.map((item) => ({
            title: item.title,
            start: item.start,
            end: item.end,
        }))
        setEvents(items);
        console.log(items)
    }

    return (
        <div className='bg-white w-2/3 mx-auto'>
            <FullCalendar 
                plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]} 
                initialView="timeGridWeek" 
                locales={[jaLocale]}
                locale="ja"
                headerToolbar={{
                    left: 'prev,next today',
                    center: 'title',
                    right: 'dayGridMonth,timeGridWeek',
                }}
                themeSystem='bootstrap5'
                selectable={true}
                events={events}
                // {[
                //     // {title: scheduleTitle, start: scheduleStart},
                //     {title:'開催日', start: '2024-03-06'},
                // ]}
            />
        </div>
    );
}

export default ReactCalendar;