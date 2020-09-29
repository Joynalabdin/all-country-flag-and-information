import React from 'react';

const Country = (props) => {
    const {name,population,region,flag} = props.country;
    const countryStyle = {border: '1px solid green', margin: '10px', padding: '9px'}
    const handleAddCountry = props.handleAddCountry;
    return (
        <div style={countryStyle}>
            <h1>This is a {name}</h1>
            <img style={{height:"50px"}} src={flag} alt=""/>
            <p>Propolation:{population} </p>
            <p>Region:{region}</p>
            <button onClick={() =>handleAddCountry(props.country)} >Add country</button>
        </div>
    );
};

export default Country;