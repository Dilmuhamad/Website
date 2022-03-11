import React, {useState} from 'react';
import { CardList } from "../CardList";
import { Input } from "../input/input";
import '../../App.css'

export const Pagoda=()=>{
    const [citieList, setCitieList]=useState([])

    return(
        <div>
      <Input setCitieList={setCitieList}/>
      <CardList citieList={citieList} />
        </div>
    )
}