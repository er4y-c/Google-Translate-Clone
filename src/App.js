import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Translate from "./components/Translate";
import OtherContent from "./components/OtherContent";

const App = () => {

    return(
        <Box>
            <Navbar />
            <Translate />
            <OtherContent />
        </Box>
    );
}

export default App;