import React from 'react';

const Cryptocoin = ({cryptocoin}) => {

    const { FullName, Name } = cryptocoin;

    return <option value={Name}>{FullName}</option>;
}
 
export default Cryptocoin;