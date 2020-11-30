import React from 'react';
import { Dropdown } from 'react-bootstrap';

const CategoryDropDownItem = () => {
    const categoryArray = [
        "Action", "Horror", "Violent", "Platformer", "Role-playing", "Action role-playing", "First-Person shooter", "Survival horror",
        "Racing", "Sports", "Stealth", "Music", "3D Platformer", "Fighting", "Action-adventure", "Creature collection",
        "Combat flight simulator", "Family", "Puzzle", "Psychological horror"
    ];

    return (
        <>
            {
                categoryArray.map( (category: string, i: number) => 
                    <Dropdown.Item key={i}  eventKey={category} >{category}</Dropdown.Item>
                )
            }
        </>
    )
    
}

export default CategoryDropDownItem;
