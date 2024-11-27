import axios from 'axios';
import config from '../../config.json';

export const getProjects = async () => {
  const { data } = await axios.get(
    `https://api.github.com/users/${config.social.github}/repos`,
  );

  return data;
};

export const getBio = async () => {
  const { data } = await axios.get(config.bioUrl);

  return data;
};

export const getWeather = async (city: string) => {
  const { data } = await axios.get(`https://wttr.in/${city}?ATm`);

  return data;
};

export const getQuote = async () => {
  const { data } = await axios.get('https://icanhazdadjoke.com/',{
    headers: {
      'Accept': 'application/json',
  },
  });
  return data;
};


//blogging function

export const getBlog = async () => {
  const apiUrl=config.blogmetaUrl+config.indexList;
   try {
     const response = await fetch(apiUrl);
     if (!response.ok) {
       throw new Error(`HTTP error! Status: ${response.status}`);
     }
     const data = await response.json();
     return data;
 
   } catch (error) {
     return "Error fetching data:"
   }
 };
 
 export const readBlog = async (filename:string) => {
   const { data } = await axios.get(config.blogUrl+filename);
 
   return data;
 };
 


