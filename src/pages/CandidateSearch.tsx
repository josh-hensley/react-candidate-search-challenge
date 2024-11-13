// import { useState } from 'react';
import { searchGithub } from '../api/API';
// import Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const getUsers = async ()=>{
    return await searchGithub() as string[];
  }
  const users = getUsers();
  console.log(users);
  // let index: number = 0;
  // const [ currentCandidate, setCandidate ] = useState<Candidate>({
  //   name: "",
  //   username: "", 
  //   location: "",
  //   avatar: "", 
  //   email: "", 
  //   html_url: "",
  //   company: ""
  // });
  
  // const handleClickMinus = async () => {
  //   index--;
  //   const { name, username, location, avatar, email, html_url, company } = await searchGithubUser();
  //   setCandidate({
  //     name,
  //     username,
  //     location,
  //     avatar,
  //     email,
  //     html_url,
  //     company
  //   })
  // }

  // const handleClickPlus = async () => {
  //   index++;
  //   const { name, username, location, avatar, email, html_url, company } = await searchGithubUser(users[index]);
  //   setCandidate({
  //     name,
  //     username,
  //     location,
  //     avatar,
  //     email,
  //     html_url,
  //     company
  //   })
  // }

  return (
    <>
      <h1>CandidateSearch</h1>
      {/* <h3>{ currentCandidate.name }</h3>
      <img src={ currentCandidate.avatar } alt="" />
      <p>{ currentCandidate.username }</p>
      <p>{ currentCandidate.location }</p>
      <p>{ currentCandidate.email }</p>
      <p>{ currentCandidate.html_url }</p>
      <p>{ currentCandidate.company }</p>
      <button type="button" onClick={handleClickMinus}>-</button>
      <button type="button" onClick={handleClickPlus}>+</button> */}
    </>
  );
};


export default CandidateSearch;
