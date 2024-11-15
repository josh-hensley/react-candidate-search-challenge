import { useState, useEffect } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  let index = 0;
  const [userArray, setUserArray] = useState<Candidate[]>([]);
  const [currentCandidate, setCandidate] = useState<Candidate>({
    name: 'name',
    login: 'login',
    location: 'location',
    avatar_url: 'img',
    email: 'email',
    html_url: 'url',
    company: 'company'
  });
  const getUsers = async () => {
    try {
      const userData = await searchGithub();
      const users: Candidate[] = userData.map((
        i: {
          name: string | undefined,
          login: string | undefined,
          location: string | undefined,
          avatar_url: string | undefined,
          email: string | undefined,
          html_url: string | undefined,
          company: string | undefined
        }) => {
        return {
          name: i.name ? i.name : '',
          login: i.login ? i.login : '',
          location: i.location ? i.location : '',
          avatar_url: i.avatar_url ? i.avatar_url : '',
          email: i.email ? i.email : '',
          html_url: i.html_url ? i.html_url : '',
          company: i.company ? i.company : ''
        }
      });
      setUserArray(users);
      console.log(users);
    }
    catch (err) {
      console.log('Error getting users: ', err);
    }
  }
  const updateUser = () => {
    index++;
    setCandidate(userArray[index]);
  }

  const handleClickPlus = () => {
    updateUser();
  };
  const handleClickMinus = () => {
    updateUser();
  };
  useEffect(() => {
    if (!userArray) {
      getUsers();
      updateUser();
    }
    else {
      updateUser();
    }
  });
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
