import {SdfSelectSimple} from '@synerg/react-components';
import { useEffect, useState } from 'react';
const TypeOfEvent=({eventType,setEventType})=>{
    const [items,setItems]=useState([
        {label: 'Birthday', value: 1}
        ,{label:'Aniversary',value:2},
        {label:'event2',value:3}
]);

const onChangeEventHandler=(event)=>{
    const value = event.target.value;
    setEventType({...eventType,
        'label':value.label,
        'value':value.value
    })
}
    return (
       
        <div className='justify-self-center'>
        <SdfSelectSimple  portalEnabled label='Event Type' style={{width:200}} requiredState="required" value={eventType} items={items} onSdfChange={onChangeEventHandler}/>
        </div>
    
);
}

export default TypeOfEvent;