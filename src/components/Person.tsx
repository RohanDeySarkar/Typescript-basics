import React, {FC, ChangeEvent, useState} from 'react';

interface Props {
    name?: string;
    age?: number;
    // getName: (name: string) => string;
}

const Person: FC<Props> = ({name, age}) => {
    const [country, setCountry] = useState<string | null>("IND");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    };

    return (
        <div>
            <p>{age}</p>
            <p>{name}</p>
            <input 
                placeholder="country name goes here.."
                onChange={handleChange}
            />
            <p>{country}</p>
        </div>
    )
}

export default Person
