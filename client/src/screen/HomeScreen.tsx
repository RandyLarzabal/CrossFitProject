import React, {useEffect} from "react";
import Api from "../utils/Api";

export default function HomeScreen(): JSX.Element {

  useEffect(()=>{
    callApi()
  },[])

  const callApi = async () => {
    console.log(await Api.getChaussure());
  }
  return <p>home</p>;
}
