import { useEffect, useState } from 'react';
import { searchGithub } from '../api/API';
import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [userArray, setUserArray] = useState<Candidate[]>([]);
  const [index, setIndex] = useState<number>(0);
  const [currentCandidate, setCandidate] = useState<Candidate | null>(null); // Allow null as initial state

  const getUsers = async () => {
    try {
      const userData = await searchGithub();
      const users: Candidate[] = userData.map((i: {
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
      console.log(users);
      setUserArray(users);
    }
    catch (err) {
      console.log('Error getting users: ', err);
    }
  }

  const saveCandidate = () => {
    if (currentCandidate) {
      const storage = localStorage.getItem('potentialCandidates') ? localStorage.getItem('potentialCandidates') : '';
      const candidateArr: Candidate[] = storage ? JSON.parse(storage as string) : [];
      localStorage.setItem('potentialCandidates', JSON.stringify([...candidateArr, currentCandidate]));
      console.log('Candidate Saved: ', currentCandidate.login);
    }
    else {
      console.log('No Candidate to Save!');
    }
  }

  useEffect(() => {
    if (userArray.length === 0) {
      getUsers();
    }
  }, [userArray]);

  useEffect(() => {
    if (userArray.length > 0) {
      setCandidate(userArray[index]);
    } else {
      setCandidate(null); // Reset candidate if userArray is empty
    }
  }, [userArray, index]);

  const handleClickPlus = () => {
    if (index < userArray.length - 1) {
      saveCandidate();
      setIndex(index + 1);
    }
    else {
      saveCandidate();
      getUsers();
    }
  };

  const handleClickMinus = () => {
    if (index < userArray.length - 1) {
      setIndex(index + 1);
    }
    else {
      getUsers();
    }
  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <div className='flex-container justify-center'>
        {currentCandidate ? ( // Check if currentCandidate is not null
          <div className='card'>
            <img src={currentCandidate.avatar_url} alt="" />
            <h3>{currentCandidate.name} ({currentCandidate.login})</h3>
            <p>{currentCandidate.location}</p>
            <p>{currentCandidate.email}</p>
            <p>{currentCandidate.html_url}</p>
            <p>{currentCandidate.company}</p>
          </div>
        ) : (
          <p>Loading candidate information...</p> // Show loading message or placeholder
        )}
      </div>
      <div className="flex-container justify-center">
        <div className="btn-container space-between">
          <button type="button" onClick={handleClickMinus}>-</button>
          <button type="button" onClick={handleClickPlus}>+</button>
        </div>
      </div>
    </>
  );
};
export default CandidateSearch;