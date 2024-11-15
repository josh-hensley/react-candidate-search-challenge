import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const getUsers = async () => {
    try {
      const users = await searchGithub();
      setCandidate(users[0]);
    }
    catch(err) {
      console.log(err);
    }
  }
  const [currentCandidate, setCandidate] = useState<Candidate>({
    name: 'string',
    login: 'string',
    location: 'string',
    avatar_url: 'string',
    email: 'string',
    html_url: 'string',
    company: 'string'
  });
  useEffect(()=>{
    getUsers();
  }, [])
 
  const handleClickPlus = () => {

  };
  const handleClickMinus = () => {

  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <h3>{currentCandidate.name}</h3>
      <img src={currentCandidate.avatar_url} alt="" />
      <p>{currentCandidate.login}</p>
      <p>{currentCandidate.location}</p>
      <p>{currentCandidate.email}</p>
      <p>{currentCandidate.html_url}</p>
      <p>{currentCandidate.company}</p>
      <button type="button" onClick={handleClickMinus}>-</button>
      <button type="button" onClick={handleClickPlus}>+</button>
    </>
  );
};


export default CandidateSearch;
