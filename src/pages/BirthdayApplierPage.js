import { SdfButton, SdfDatePicker, SdfInput, SdfSelect, SdfSelectSimple } from "@synerg/react-components";
import { useState } from "react";

const BirthdayApplierPage=({currDate,setCurrDate,birthInfo,setBirthInfo})=>{
   
    const [items,setItems]=useState([
        {label: 'Male', value: 1}
        ,{label:'Female',value:2},
        {label:'Others',value:3}
        ]);
    const onNameChanged=(event)=>{
        console.log(event);
        setBirthInfo({...birthInfo,
        'name':event.detail})
    }
    const onBirthYearChanged=(event)=>{
        
        if(event.detail>1000 && event.detail<9999){
        setBirthInfo({
            ...birthInfo,
            'birthYear':event.detail,
            'brithDate':`${event.detail}${currDate.slice(4,10)}`
        });
        setCurrDate(`${event.detail}${currDate.slice(4,10)}`);
    }
    else{
        alert('invalid year input');
    }
    }
    const onGenderTypeChanged=(event)=>{
        console.log(event);
        setBirthInfo({
            ...birthInfo,
            'gender':event.detail,
        })
    }
    return(
    <>
    <div>
    <div className="grid grid-cols-3 gap-3">
        <SdfInput label="Name" type="Text" required={true} value={birthInfo.name} onSdfChange={onNameChanged} requiredState="required"/>
        <SdfInput label="Born in Year" type="Number" value={birthInfo.birthYear} placeholder="YYYY" onSdfChange={onBirthYearChanged}/>
        <SdfSelectSimple  label='Gender' style={{width:200}} value={birthInfo.gender} requiredState="required" items={items} onSdfChange={onGenderTypeChanged}/>
       
    </div>
    <br/>
    <div  style={{paddingLeft:612,backgroundColor:"button-primary"}}>
                <SdfButton emphasis="primary" action="standard" style={{paddingRight:10}} onClick={{}}>Add Event</SdfButton>
                <SdfButton emphasis="primary" action="destructive" onClick={{}}>Cancel</SdfButton>
            </div>
            </div>
    </>
    );
}

export default BirthdayApplierPage;