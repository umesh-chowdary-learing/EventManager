import { SdfBox, SdfFocusPane } from "@synerg/react-components"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import listPlugin from '@fullcalendar/list';
import { useState } from "react";
import TypeOfEvent from "../components/TypeOfEvent";
import BirthdayApplierPage from "./BirthdayApplierPage";
const EventManagerPage=()=>{

    const [events,setEvents]=useState([]);
    const [isDateClicked,setIsDateClicked]=useState(false);
    const [currDate,setCurrDate]=useState('');
    const [eventType,setEventType]=useState({
        label:'select the event',value:0
    });
    const [birthInfo,setBirthInfo]=useState(
        {
            'name':'',
            'brithDate':'',
            'birthYear':'',
            'gender':''
        }
    );
    const handleDateClicked=(event)=>{
        console.log('date event:',event)
        setCurrDate(event.dateStr);
        setIsDateClicked(!isDateClicked);
    }
    const renderEventContent=()=>{

    }
    const handleEventClicked=()=>{
        
    }

    const onEventClickDismiss=()=>{
        setIsDateClicked(!isDateClicked);
    }
return(
    <>
    <SdfBox>
        
        <div className="flex-row flex-col p-2 gap-5" style={{backgroundColor:'white'}}>
                    
                
                    <FullCalendar
                        height= {770}
                        //contentHeight='auto'
                        plugins={[dayGridPlugin,interactionPlugin,listPlugin]}
                        initialView="dayGridMonth"
                        headerToolbar={{left:'prev next today',center:'title',right:'dayGridMonth listMonth'} // dayGridMonth  listMonth
                        }
                        buttonText={
                            {
                                today:'Today',
                                month:'Month',
                                list:'List'
                            }
                        }
                        events={events}
                        dateClick={handleDateClicked}
                        eventContent={renderEventContent}
                        eventClick={handleEventClicked}
                        fixedWeekCount={false}
                        dayMaxEvents={3}
                        customButtons={{customMonth:{
                            text:'Month',
    
                            click:'dayGridMonth'
                        }}}
                        />
                        <SdfFocusPane
                visible={isDateClicked}
                paneType='floating' 
                onSdfDismiss={onEventClickDismiss} 
                hideAcceptButton={true}
                hideDismissButton={true}
                closeable=""
                heading="Event Selection Page"
                size="lg"
                
                >
                    <div className="grid p-3 gap-4 place-content-center">
                    <TypeOfEvent eventType={eventType} setEventType={setEventType} >
                        

                    </TypeOfEvent>
                    {eventType.value==1 && 
                    <div>
                        <BirthdayApplierPage currDate={currDate} setCurrDate={setCurrDate} birthInfo={birthInfo} setBirthInfo={setBirthInfo}/>
                    </div>
                    }
                    </div>
                </SdfFocusPane>
        </div>
    </SdfBox>
    
    </>
)
}

export default EventManagerPage