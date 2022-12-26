import { useState, useEffect } from 'react';
import { Box, Button, InputBase, Card, Typography } from "@mui/material";
import ArrowIcon from '@mui/icons-material/KeyboardArrowDown';
import MicIcon from '@mui/icons-material/Mic';
import LangList from './LangList';

const Translate = () => {
    const [text,setText] = useState("");
    const [translatedText,setTranslatedText] = useState('');
    const [textChange,setTextChange] = useState(false);
    const [isVisibleLeftGroup, setVisibleLeftGroup] = useState(false);
    const [isVisibleRightGroup, setVisibleRightGroup] = useState(false);
    const [selectedFromLanguage,setSelectedFromLanguage] = useState("en");
    const [selectedToLanguage,setSelectedToLanguage] = useState("es");
    const [isDetect,setIsDetect] = useState(false);
    const showListLeft = () => setVisibleLeftGroup(!isVisibleLeftGroup);
    const showListRight = () => setVisibleRightGroup(!isVisibleRightGroup);

    const handleChange = (e) => {
        setTextChange(true);
        setText(e.target.value);
    }
    
    useEffect(()=>{
        const detectLang = (message) => {
            const axios = require("axios");

            const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2/detect',
            headers: {
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            data: `{"q":"${message}"`
            };

            axios.request(options).then(function (response) {
                setSelectedFromLanguage(response.data.detections.language);
            }).catch(function (error) {
                setSelectedFromLanguage("en");
            });
        }
        const fetchData = (message,source,target) => {
            const axios = require("axios");

            const options = {
            method: 'POST',
            url: 'https://deep-translate1.p.rapidapi.com/language/translate/v2',
            headers: {
                'content-type': 'application/json',
                'X-RapidAPI-Key': RAPID_API_KEY,
                'X-RapidAPI-Host': 'deep-translate1.p.rapidapi.com'
            },
            data: `{"q":"${message}","source":"${source}","target":"${target}"}`
            };

            axios.request(options).then(function (response) {
                setTranslatedText(response.data.data.translations.translatedText);
            }).catch(function (error) {
                document.getElementById('translated-text').innerHTML = "Çeviri";
            });
        }
        if(textChange) {
            if(isDetect) {
                detectLang(text);
            }
            fetchData(text,selectedFromLanguage,textChange,selectedToLanguage);
            document.getElementById('translated-text').innerHTML = translatedText;
        }
    },[textChange,isDetect,selectedFromLanguage,selectedToLanguage]);

    return (
            <Card
                className='translate-container'
                sx={{
                    display:'flex',
                    justifyContent:'space-between',
                    height:'100%',
                    ml:'80px',
                    mr:'80px',
                    mt:'100px',
                }}
            >
                <Box 
                    className='translate-area-left' 
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        flex:1,
                    }}
                >
                    <Box 
                        className='button-group-left'
                        sx={{
                            
                        }}
                    >
                        <Button sx={{p:'10px 28px',}} onClick={()=>setIsDetect(!isDetect)}>Detect Language</Button>
                        <Button sx={{p:'10px 28px',}}>{selectedFromLanguage}</Button>
                        <Button sx={{borderRadius:'20px',}} onClick={showListLeft}><ArrowIcon /></Button>
                    </Box>
                    {
                        isVisibleLeftGroup?
                            <Box className='lang-list-menu' sx={{flex:1,}}>
                                <LangList selectedLanguage={selectedFromLanguage} setSelectedLanguage={setSelectedFromLanguage}/>
                            </Box>:<div></div>
                    }
                    <Box 
                        className='translate-area-bottom-left'
                        sx={{
                            height:'100%',
                            width:'100%',
                            borderRight:'1px solid #ececec',
                        }}
                    >
                        <InputBase 
                            id='text'
                            multiline
                            sx={{
                                width:'80%',
                                p:'20px',
                                fontSize:'24px',
                            }}
                            onChange={handleChange}
                        />
                    </Box>
                    <Box className='translate-card-bottom'>
                        <Button 
                            sx={{
                                p:'10px',
                                borderRadius:'20px',
                            }}
                        >
                            <MicIcon />
                        </Button>
                    </Box>
                </Box>
                <Box 
                    className='translate-area-right'
                    sx={{
                        display:'flex',
                        flexDirection:'column',
                        flex:1,
                    }}
                >
                    <Box className='button-group-right'>
                        <Button sx={{p:'10px 28px',}}>{selectedToLanguage}</Button>
                        <Button sx={{borderRadius:'20px',}} onClick={showListRight}><ArrowIcon /></Button>
                    </Box>
                    {
                        isVisibleRightGroup?
                            <Box className='lang-list-menu' sx={{width:'100%',zIndex:'10'}}>
                                <LangList selectedLanguage={selectedToLanguage} setSelectedLanguage={setSelectedToLanguage}/>
                            </Box>:<div></div>}
                    <Box 
                        className='translate-area-bottom-right'
                        sx={{
                            width:'100%',
                            height:'100%',
                        }}
                    >
                        <Typography
                            id='translated-text' 
                            variant='h5'
                            sx={{
                                width:'80%',
                                p:'20px',
                                fontSize:'24px',
                            }}
                            >Çeviri</Typography>
                    </Box>
                </Box>
            </Card>
    );
}

export default Translate;