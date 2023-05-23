import { useEffect, useState } from "react";
import styles from '../styles/Home.module.css'

import { Card, Grid, Text, Link } from "@nextui-org/react";
import { ForkRight } from "@mui/icons-material";
import styled from 'styled-components';
import { borderRadius } from "@mui/system";


export default function Home() {
  const [dataResponse, setdataResponse] = useState([]);
  const [records, setRecords] = useState([])
  useEffect(() => {
    async function getPageData() {
      const apiUrlEndpoint = `http://localhost:3000/api/getdata`;
      const response = await fetch(apiUrlEndpoint);
      const res = await response.json();
      setdataResponse(res.product);
      setRecords(res.product);
    }
    getPageData();
  }, []);

  const Filter = (event) => {
    setRecords(dataResponse.filter(f => f.name.toLowerCase().includes(event.target.value)))
  }
  return (
    <div style={{marginLeft:'80px'}} className={styles.container}>
      <input type="text" id="myInput" onChange={Filter} placeholder="Search Alternate" style={{width:'1100px', padding:'6px', borderRadius:'8px',marginBottom:'30px'}}></input>
      <table style={{borderRadius:'8px',borderCollapse: 'collapse'}} id="mytable">
      <tr>
        <th style={{padding:'5px'}}>Name</th>
        <th style={{padding:'5px'}}>manufacturer</th>
        <th style={{padding:'5px'}}>packaging</th>
        <th style={{padding:'5px'}}>mrp</th>
        <th style={{padding:'5px'}}>alternate</th>
      </tr>
      {records.map((product) => {
        const myArray = product.alternate.split("|")
        return (
          // <HeaderNavWrapper>
             <tr>
              <td style={{padding:'5px'}}>{product.name}</td>
              <td style={{padding:'5px'}}>{product.manufacturer}</td>
              <td style={{padding:'5px'}}>{product.packaging}</td>
              <td style={{padding:'5px'}}>{product.mrp}</td>
              <td style={{padding:'5px'}}>{myArray}</td>
            </tr>
          // </HeaderNavWrapper>
        
        );
      })}
      </table> 
    </div>
  )};

  const Button = styled.button`
  padding: 8px;
  text-align: center;
  width: 10%;
  background-color:#00b712 ;
  background-image:
      linear-gradient(180deg, #00b712 0%, #5aff15 80%); 
  border: none;
  cursor: pointer;
  font-family: 'Roboto';
  text-transform: uppercase;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
`

const Tr = styled.tr`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.bgDiv};
  padding: 6px;
  height: 50%;
  border-radius: 10px;
  margin-bottom:4px;
  `


