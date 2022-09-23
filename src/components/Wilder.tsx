import React from 'react';
import { IWilder } from '../interfaces';
import blank_profile from './../assets/blank_profile.png';
import Skill from './Skill';

function Wilder(props: IWilder): JSX.Element {
  return (
    <article className='card'>
      <img src={blank_profile} alt={`${props.name} Profile`} />
      <h3>{props.name}</h3>
      <p>Lorem ipsum</p>
      <h4>Wild Skills</h4>
      <ul className='skills'>
        {props.upvotes.map((upvote) => {
          return (
            <Skill
              key={upvote.id}
              name={upvote.skill.name}
              upvotes={upvote.upvotes}
            />
          );
        })}
      </ul>
    </article>
  );
}

export default Wilder;
