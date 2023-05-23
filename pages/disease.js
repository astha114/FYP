import styled from 'styled-components';
import { useState } from 'react';
import { Grid, Dropdown, Radio } from "@nextui-org/react";
import { css, Button } from '@nextui-org/react';
import { color } from '@mui/system';
import React, {useEffect} from "react";
import { valueToPercent } from '@mui/base';
import dynamic from "next/dynamic";
import { Construction, DataArray } from '@mui/icons-material';
import abc from './abc';

const l1 = ['itching','skin_rash','nodal_skin_eruptions','continuous_sneezing','shivering','chills','joint_pain',
'stomach_pain','acidity','ulcers_on_tongue','muscle_wasting','vomiting','burning_micturition','spotting_ urination','fatigue',
'weight_gain','anxiety','cold_hands_and_feets','mood_swings','weight_loss','restlessness','lethargy','patches_in_throat',
'irregular_sugar_level','cough','high_fever','sunken_eyes','breathlessness','sweating','dehydration','indigestion',
'headache','yellowish_skin','dark_urine','nausea','loss_of_appetite','pain_behind_the_eyes','back_pain','constipation',
'abdominal_pain','diarrhoea','mild_fever','yellow_urine','yellowing_of_eyes','acute_liver_failure','fluid_overload',
'swelling_of_stomach','swelled_lymph_nodes','malaise','blurred_and_distorted_vision','phlegm','throat_irritation',
'redness_of_eyes','sinus_pressure','runny_nose','congestion','chest_pain','weakness_in_limbs','fast_heart_rate',
'pain_during_bowel_movements','pain_in_anal_region','bloody_stool','irritation_in_anus','neck_pain','dizziness','cramps',
'bruising','obesity','swollen_legs','swollen_blood_vessels','puffy_face_and_eyes','enlarged_thyroid','brittle_nails',
'swollen_extremeties','excessive_hunger','extra_marital_contacts','drying_and_tingling_lips','slurred_speech','knee_pain','hip_joint_pain',
'muscle_weakness','stiff_neck','swelling_joints','movement_stiffness','spinning_movements','loss_of_balance','unsteadiness','weakness_of_one_body_side',
'loss_of_smell','bladder_discomfort','foul_smell_of urine','continuous_feel_of_urine','passage_of_gases','internal_itching','toxic_look_(typhos)',
'depression','irritability','muscle_pain','altered_sensorium','red_spots_over_body','belly_pain','abnormal_menstruation','dischromic _patches',
'watering_from_eyes','increased_appetite','polyuria','family_history','mucoid_sputum','rusty_sputum','lack_of_concentration','visual_disturbances',
'receiving_blood_transfusion','receiving_unsterile_injections','coma','stomach_bleeding','distention_of_abdomen','history_of_alcohol_consumption',
'fluid_overload','blood_in_sputum','prominent_veins_on_calf','palpitations','painful_walking','pus_filled_pimples','blackheads','scurring','skin_peeling',
'silver_like_dusting','small_dents_in_nails','inflammatory_nails','blister','red_sore_around_nose','yellow_crust_ooze']


// const symptoms = ['yellowish_skin','acute_liver_failure','yellowing_of_eyes','yellow_urine','mild_fever']
const symptoms = []
const disease = () => {
  const [symptom1, setSymptom1] = useState('');
  const [symptom2, setSymptom2] = useState('');
  const [symptom3, setSymptom3] = useState('');
  const [symptom4, setSymptom4] = useState('');
  const [symptom5, setSymptom5] = useState('');

  const demo = () =>{
    symptoms.push(symptom1)
    symptoms.push(symptom2)
    symptoms.push(symptom3)
    symptoms.push(symptom4)
    symptoms.push(symptom5)
  }
  return (
    <div>
      {/* symptom1 */}
       <select id='symptom1' value={symptom1} onChange={e => setSymptom1(e.target.value)}>
        {l1.map((elem1, i) => 
        <option key={elem1+i}>{elem1}</option>
        )}   
      </select> 
      
      {/* symptom 2 */}
      <select id='symptom2' value={symptom2} onChange={e => setSymptom2(e.target.value)}>
        {l1.map((elem2, i) => 
        <option key={elem2+i}>{elem2}</option>
        )}   
      </select> 
      {/* symptom 3 */}
      <select id='symptom3' value={symptom3} onChange={e => setSymptom3(e.target.value)}>
        {l1.map((elem3, i) => 
        <option key={elem3+i}>{elem3}</option>
        
        )}   
      </select> 
      {/* symptom 4 */}
      <select id='symptom4' value={symptom4} onChange={e => setSymptom4(e.target.value)}>
        {l1.map((elem4, i) => 
        <option key={elem4+i}>{elem4}</option>
        
        )}   
      </select> 
      {/* symptom 5 */}
      <select id='symptom5' value={symptom5} onChange={e => setSymptom5(e.target.value)}>
        {l1.map((elem5, i) => 
        <option key={elem5+i}>{elem5}</option>
        )}   
      </select> 
      <button onClick={demo}>Submit</button>
      <abc arr={symptoms}></abc>

      {/* <div>
          {
            data.map((curElem)=> {
              return <div>
                <h2>{curElem.ans}</h2>
              </div>
            })
          }
        </div> */}
    </div>
   
)
};


// export const getStaticProps = async() => {
//   const res =  await fetch("http://127.0.0.1:5000/NaiveBayes/"+symptoms[0]+"/"+symptoms[1]+"/"+symptoms[2]+"/"+symptoms[3]+"/"+symptoms[4]);
//   const data =  await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

export default disease;