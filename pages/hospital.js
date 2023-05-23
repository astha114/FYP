import styled from 'styled-components';
import { useState } from 'react';
import { Grid, Dropdown, Radio } from "@nextui-org/react";
import { css, Button } from '@nextui-org/react';
import { color } from '@mui/system';


const hospital = () => {
  return (
    <div>
        <div className="cardWrapper">
        <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d28014.78078379529!2d77.42342542671172!3d28.634329393655616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitals%20near%20me!5e0!3m2!1sen!2sin!4v1684220999135!5m2!1sen!2sin" width="1000" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                
        </div>
    <style jsx>{`
        .iframe{
            border:0;
        }
        .row{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 10%;
        }

        .ele{
            margin:20px;
        }
        .cardWrapper{
            display: flex;
            flex-direction: row;
            align-items: center;
            margin-left: 12%;
            margin-top: 100px;
        }
        
        .card {
            width: 40%;
            height: 350px;
            background:  rgb(33,36,41);
            color: white;
            border-radius: 20px;
            margin:30px;
            box-shadow: 5px 10px 40px black;
        }

        h3 {
            margin:0px;
            background:#00b712;
            padding: 20px;
            border-radius: 20px 20px 0px 0px;
        }

        p {
          color: white;
          padding: 10px;
        }
      `}</style>
    </div>
   
);
};




        const HomeWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      `
      const FilterWrapper = styled.div`
        display: flex;
        align-items: center;
        width: 80%;
        margin-top: 15px;
      `
      const Category = styled.div`
        padding: 10px 15px;
        background-color: ${(props) => props.theme.bgDiv};
        margin: 0px 15px;
        border-radius: 8px;
        font-family: 'Poppins';
        font-weight: normal;
        cursor: pointer;
      `
      const CardsWrapper = styled.div`
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 80%;
        margin-top: 25px;
      `
      const Card = styled.div`
        width: 30%;
        margin-top: 20px;
        background-color: ${(props) => props.theme.bgDiv};
        &:hover{
          transform: translateY(-10px);
          transition: transform 0.5s;
        }
        
        &:not(:hover){
          transition: transform 0.5s;
        }
      `
      const CardImg = styled.div`
        position: relative;
        height: 250px;
        width: 100%;
      `
      const Title = styled.h2`
        font-family: 'Roboto';
        font-size: 18px;
        margin: 2px 0px;
        background-color: ${(props) => props.theme.bgSubDiv};
        padding: 5px;
        cursor: pointer;
        font-weight: Bold;
      `
      const CardData = styled.div`
        display: flex;
        justify-content: space-between;
        margin: 2px 0px;
        background-color: ${(props) => props.theme.bgSubDiv};
        padding: 5px;
        cursor: pointer;
        `
      const Text = styled.p`
        display: flex;
        align-items: center;
        margin: 0;
        padding: 0;
        font-family: 'Roboto';
        font-size: 18px;
        font-weight: bold;
      `
 


export default hospital;