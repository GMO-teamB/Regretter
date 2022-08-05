import { trainingsIndex } from '../url/index'

export const fetchTrainings =async() => {
  try{
    const res = await fetch(trainingsIndex);
    const data = await res.json();
    console.log(data)
    return data;
  }catch(err){
    console.log(err);
  }
}
