import { useState,useEffect } from "react";
import { Button, Card } from "@mui/material";

const LangList = ({selectedLanguage,setSelectedLanguage}) => {
    const [language,setLanguage] = useState([]);
    useEffect(() => {
        const fetchData = () => {
            const axios = require("axios");
            const options = {
            method: 'GET',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2/languages',
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            }
            };
            axios.request(options).then(function (response) {
                setLanguage(response.data.languages);
            }).catch(function (error) {
                setLanguage("en");
                console.log(error);
            });
        }
        fetchData();
    }, [selectedLanguage]);

  return (
    <Card
        key={selectedLanguage}
        sx={{
            position:'fixed',
            display:'flex',
            flexDirection:'column',
            flex:1,
            height:'100%',
            zIndex:'100',
            overflowY:'scroll',
        }}
    >
        <div>
        {
            language.map((lang)=>(
                <Button key={lang.language} onClick={()=>setSelectedLanguage(lang.language)}>{lang.name}</Button>
            ))
        }
        </div>
    </Card>
  )
}

export default LangList